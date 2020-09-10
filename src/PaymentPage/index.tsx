import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentRequestForm from './PaymentButton'
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');

const PaymentPage = () => {
    return (
        <Elements stripe={stripePromise}>
            <h1>Hallo World</h1>
            <PaymentRequestForm />
        </Elements>
    );
};



export default PaymentPage

