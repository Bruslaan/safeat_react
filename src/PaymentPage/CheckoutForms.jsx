
import React from 'react';
import {useStripe, useElements, IbanElement} from '@stripe/react-stripe-js';

import IbanForm from './IbanSection';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const response = await fetch("http://localhost:5001/safeat-9d9d5/us-central1/api/secret")
    const responseJson = await response.json();
    const CLIENT_SECRET = responseJson.client_secret
    const iban = elements.getElement(IbanElement);

    // For brevity, this example is using uncontrolled components for
    // the accountholder's name and email. In a real world app you will
    // probably want to use controlled components.
    // https://reactjs.org/docs/uncontrolled-components.html
    // https://reactjs.org/docs/forms.html#controlled-components

    // const accountholderName = event.target['accountholder-name'];
    // const email = event.target.email;

    const result = await stripe.confirmSepaDebitPayment(CLIENT_SECRET, {
      payment_method: {
        sepa_debit: iban,
        billing_details: {
          name: "Peter",
          email: "peter@zwegert.com",
        },
      }
    });

    if (result.error) {
      // Show error to your customer.
      console.log(result.error.message);
    } else {
      console.log(result.paymentIntent.status)
      console.log(result, "suka")
      // Show a confirmation message to your customer.
      // The PaymentIntent is in the 'processing' state.
      // SEPA Direct Debit payments are asynchronous,
      // so funds are not immediately available.
    }
  };

  return (
    <IbanForm onSubmit={handleSubmit} disabled={!stripe} />
  );
}
