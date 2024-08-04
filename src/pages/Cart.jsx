import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart); // Adjusted to directly access the array
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (Array.isArray(cart)) {
      setTotalAmount(cart.reduce((acc, current) => acc + current.price, 0));
    }
  }, [cart]);

  

  if (!Array.isArray(cart)) {
    console.error('Cart state is not an array:', cart);
    return null; // Or handle the error appropriately
  }

  return (
    <div >
      {
        cart.length > 0 ?
        (
          <div className='mx-auto flex flex-col md:flex-row justify-center'>
            <div className='w-full md:w-[60%] flex flex-col p-2'>
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>
            <div className='flex flex-col p-4 gap-4 my-10 h-full justify-between'>
              <div className='font-semibold text-xl text-green-700'>Your Cart</div>
              <div className='font-semibold text-3xl text-green-500 -mt-3'>Summary</div>
              <p  className='text-lg'>
                <span className='text-gray-800 font-bold text-xl'>Total Items: {cart.length}</span>
              </p>
            <div >
              <p className='text-xl font-bold text-gray-800'>Total Amount: ${totalAmount}</p>
            </div>
            <button className='bg-green-400'>Checkout</button>
            </div>
          </div>
        ) :
        (
          <div>
            <h1>Empty Cart</h1>
            <Link to={'/'}>
              <button>Shop Now</button>
            </Link>
          </div>
        )
      }
    </div>
  );
}

export default Cart;
