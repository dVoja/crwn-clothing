import React from "react";
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) =>{
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51KHvRlBqJ5YR6JKd7yeORzZvi6FtXEayANl6IWowzT2dbVbWqGBjFYymNouaZSMeKAF94fJMZmbfSalEKswxMPE1007HjLjfow';
  const onToken = token => {
    console.log(token)
    alert("Payment Successful")
  }

  return (
    <StripeCheckout 
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total Is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;