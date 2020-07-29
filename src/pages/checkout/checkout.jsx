import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// import CheckoutItem from '../../component/checkout-item/checkout-item.component'
// import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    TestWarningText
} from './checkout.styles'

const CheckoutPage = ({ cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {/* {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        } */}

        <TotalContainer>
            <span>Total: R{total}</span>
        </TotalContainer>
        <TestWarningText>
            *Please use the following test credit card details for payments*
            <br/>
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </TestWarningText>
        {/* <StripeCheckoutButton price={total} /> */}
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default  connect(mapStateToProps)(CheckoutPage)