import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import PaymentRequestForm from './PaymentButton'
import CheckoutForms from './CheckoutForms'
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51H4wHkAp105LrKrux4DQYvx5EL49Ewm98DuDWG9rftent74yxr22Dhf0BqlnaHIj0qquP7GjhNwXxFgiUHyqJdtN00XIvSGpMq');

const PaymentPage = () => {
    return (
        <Elements stripe={stripePromise}>
            <h1>Hallo World</h1>
            {/* <PaymentRequestForm /> */}
            <CheckoutForms />
        </Elements>
    );
};



export default PaymentPage

