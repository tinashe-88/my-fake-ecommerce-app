import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_fyGLQ8HcXgeZ3bu9FRXSQ0rQ00f7qob3Rm'
    
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('succesful payment')
      })
      .catch(error => {
        console.log('Payment Error: ', JSON.parse(error))
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        )
    })
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="My Clothing E-commerce"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is R${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="ZAR"
      bitcoin
    />
  )
}

export default StripeCheckoutButton