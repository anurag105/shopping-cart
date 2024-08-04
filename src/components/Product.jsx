import React from 'react';
import { toast } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice';

const Product = ({ post }) => {
  const cart = useSelector((state) => state.cart); // Access the cart state directly as an array
  const dispatch = useDispatch(); 

 
  const addToCart = () => {
    dispatch(add(post));
    toast.success('Added to Cart');
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error('Removed from Cart');
  }

  if (!Array.isArray(cart)) {
    console.error('Cart state is not an array:', cart);
    return null; // Or handle the error appropriately
  }

  return (
    <div className='flex flex-col items-center justify-between max-h-[400px] 
    hover:scale-110 transition duration-200 ease-in gap-3 rounded-xl 
     shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] '>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate
         w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-500 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(' ') + "..."}</p>
      </div>
      <div className='h-[170px]'>
        <img className='h-full w-full' src={post.image} alt={post.title} />
      </div>

      <div className='flex justify-between gap-9 items-center mb-2'>
      <div>
        <p className='text-green-500 font-semibold'>${post.price}</p>
      </div>
      {
        cart.some((p) => p.id === post.id)
          ? (<button 
            className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
            hover:bg-gray-700 hover:text-white  transition duration-200 ease-in gap-3'
            onClick={removeFromCart}>Remove from Cart</button>)
          : (<button
            className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
            hover:bg-gray-700 hover:text-white transition duration-200 ease-in gap-3'
             onClick={addToCart}>Add to Cart</button>)
      }
      </div>

    </div>
  )
}

export default Product;
  