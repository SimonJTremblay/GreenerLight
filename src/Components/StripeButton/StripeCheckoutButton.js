import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logoImg from '../Logo/logo.png';

const StripeCheckoutButton = ({ price }) => {
  // stripe wants the price in cents 
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_afP0N0oHo3f54ZOOf54iD2hu00pfzgXvF2';

  //onToken is when a successful transaction takes place, returns token
  const onToken = token => {
    console.log(token);
    alert('Payment successful.')
  }

  return (
    <StripeCheckout
      label='Donate'
      name='GreenerLight'
      billingAddress
      shippingAddress
      image={logoImg}
      description={`Your donation is $${price}`}
      amout={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}    
    />
  );
}

export default StripeCheckoutButton;