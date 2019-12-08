import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logoImg from '../Logo/logo.png';

const StripeCheckoutButton = ({ totalDonation, selectedCharity }) => {
  // stripe wants the price in cents 
  const priceForStripe = totalDonation * 100;
  const publishableKey = 'pk_test_afP0N0oHo3f54ZOOf54iD2hu00pfzgXvF2';

  //onToken is when a successful transaction takes place, returns token
  const onToken = token => {
    console.log(token);
    alert('Payment successful.')
  }

  return (
    <StripeCheckout
      label='Donate'
      name={selectedCharity}
      billingAddress
      shippingAddress
      image={logoImg}
      description={`Donation of $${totalDonation}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}    
    />
  );
}

export default StripeCheckoutButton;