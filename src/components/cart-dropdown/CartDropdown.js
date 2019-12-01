import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toogleCartHidden } from '../../redux/cart/cart-actions';

import './CartDropdown.scss';

function CartDropdown({ cartItems, history, dispatch }) {
  console.log("history",history)
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message"> Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          console.log("history",history)
          {/* pathname: "/shop/checkout" */}
          history.location.pathname = "/"
          history.push('./checkout');
          dispatch(toogleCartHidden());
        }}
      >
        {' '}
        GO TO CHECKOUT{' '}
      </CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
