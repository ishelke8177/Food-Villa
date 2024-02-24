import React from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cartSlice';

const Cart = () => {
  // subscribe to cart slice of the store
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
          {cartItems.length === 0 ? (
            <h1>Cart is empty. Add Items to the cart</h1>
          ) : (
            <button
              className="p-2 m-2 bg-black text-white rounded-lg"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          )}
          <CartItem item={cartItems} />
        </div>
      </div>
    </>
  );
};

export default Cart;
