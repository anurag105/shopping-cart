import React from 'react'
import {FcEmptyTrash} from 'react-icons/fc'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import {toast} from 'react-hot-toast';


const CartItem = ({item,itemIndex}) => {

  const dispatch=useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error('Removed from Cart');
  }


  return (
     
    <div  className='flex items-center justify-between md:p-4  mt-2 mb-2 md:mx-4 bg-gray-200 rounded-2xl'>
        <div className='flex flex-col md:flex-row md:p-2 items-center gap-3'>
        <div className='w-[30%] '>
              <img className='object-cover' src={item.image}/>
        </div>
        <div className='md:ml-10 md:w-[70%] self-start w-full space-y-6'>
          <h1 className='text-xl font-semibold'>{item.title}</h1>
          <h1 className='text-lg font-medium'>{item.description}</h1>
          <div className='flex items- center justify-between'><p>{item.pr}</p>
              <div className='text-red-600 bg-red-300 cursor-pointer rounded-full'
               onClick={removeFromCart}> <FcEmptyTrash className='text-3xl'/>
              </div>
          </div>
        </div>



      </div>

    </div>
  )
}

export default CartItem
