import React, { useState } from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import PaymentRequestForm from './PaymentButton'
import CreditCardForm from './CreditCardForm'
import './index.css'
import { MainSection } from '../MainSection';
import { ShoppingCard } from '../ShoppingCard';
import Drawer from "../react-bottom-drawer/dist";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51H4wHkAp105LrKrux4DQYvx5EL49Ewm98DuDWG9rftent74yxr22Dhf0BqlnaHIj0qquP7GjhNwXxFgiUHyqJdtN00XIvSGpMq');

const PaymentPage = () => {
    const [drawerIsVisible, setdrawerIsVisible] = useState(false);
    const onClose = React.useCallback(() => {
        setdrawerIsVisible(false);
    }, []);
    return (
        <div>

            <MainSection
                leftItems={[
                    <div key="2" className="payment__page__container">
                        <button className="mein__button button__width disable_on_desktop" onClick={() => setdrawerIsVisible(true)}>
                            Bestellung einsehen
                        </button>
                        <br/>
                        <Elements stripe={stripePromise}>
                            {/* <PaymentRequestForm /> */}
                            <CreditCardForm />
                        </Elements>
                    </div>
                ]}
                rightItems={[
                    <ShoppingCard shouldRenderButton={false} key="1" />
                ]}
            />
            <Drawer
                isVisible={drawerIsVisible}
                onClose={onClose}
                unmountOnExit={true}
                mountOnEnter={true}
            >
                <ShoppingCard shouldRenderButton={false} />
            </Drawer>
        </div>

    );
};



export default PaymentPage

