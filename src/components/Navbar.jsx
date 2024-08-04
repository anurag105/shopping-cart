import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const {cart}=useSelector((state)=>state)
  //this one is better than
  // const cart=useSelector((state)=>state.cart)
  return (
    <div>
      <nav className='flex flex-row justify-between items-center h-20 max-w-6xl mx-auto '>
        <NavLink to='/'>
        <div className='ml-5 '>
        <img src='logo.png' className='h-14'/>
        </div>
        </NavLink>

        <div className='flex items-center font-medium text-slate-50 mr-5 space-x-6'>
            <NavLink to='/'><p>Home</p></NavLink>
            <NavLink to='/cart'>
            <div className='relative'><FaShoppingCart className='text-xl'/>
            {
              cart.length>0 &&<span className='absolute -top-3  -right-3 bg-green-500 
              text-xs w-5 h-5 flex justify-center items-center animate-bounce 
              rounded-full text-white'>{cart.length}</span>
            }
            
            </div></NavLink>
        </div>
    
      </nav>
    </div>
  )
}

export default Navbar
