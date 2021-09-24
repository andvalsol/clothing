import React from "react";
import StripeCheckout from "react-stripe-checkout";

const PayCheckoutButton = ({price}) => {
    const priceInCents = price * 100;

    const stripePublishableKey = 'pk_test_51Jd0HTGdRavl5Eyv7oQVegHa5fiw946RKW1GSTonPmgDIL3IjZAYurufz1595tNcD3cbVCUdGU5fxCMSi2NmDDFt00cuf4W1jV';

    const onToken = (token) => {
        console.log(token); // This should be passed to the backend to make the charge
    }

    return (
        <StripeCheckout
            label='Pay now'
            name='Object to pay'
            billingAddress='Billing address example'
            shippingAddress='Shipping address example'
            description={`Your total is $${price}`}
            amount={priceInCents}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={stripePublishableKey}/>
    );
}

export default PayCheckoutButton;
