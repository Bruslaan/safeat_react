import React, { useState } from "react";
import './CreditCardStyle.css'
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const stripe = useStripe();
  const elements = useElements();




  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };
  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async ev => {
    ev.preventDefault();



    setProcessing(true);

    const response = await fetch("http://localhost:5001/safeat-9d9d5/us-central1/api/secret", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      // body: JSON.stringify({items: [{ id: "xl-tshirt" }]})
    })
    const responseJson = await response.json();
    const CLIENT_SECRET = responseJson.client_secret


    const payload = await stripe.confirmCardPayment(CLIENT_SECRET, {
      receipt_email: email,
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <input
        className="email__input"
        type="text"
        value={email}
        required={true}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email address"
      />
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      <button
        className="submit__button"
        disabled={processing || disabled || succeeded}
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
              "Bezahlen"
            )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a
          href={`https://dashboard.stripe.com/test/payments`}
        >
          {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
    </form>
  );
}