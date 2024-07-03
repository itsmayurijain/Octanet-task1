import React from 'react'
import Logo from '../Assets/logo.svg'
export const Navbar = () => {
    return (
        <div className='container w-full'>
            <div className='mx-5 py-4'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <div className='w-12'>
                            <img src={Logo} />
                        </div>
                        <div className='text-white font-bold'>
                            <h1 className='px-4 text-3xl py-1'>Twatch</h1 >
                        </div>
                    </div>
                    <div className="w-full flex justify-end items-center ">
                        <div className='flex justify-end items-center text-lg text-white font-medium text-blue900 '>
                            <div className='flex items-center hidden lg:flex'>
                                <h3 className='px-6'>Home</h3>
                                <h3 className='px-6'>About</h3>
                                <h3 className='px-6'>Blog</h3>
                                <h3 className='px-6'>Product</h3>
                                <h3 className='px-6'>Contact Us</h3>
                            </div>
                            <button className='bg-primary rounded-md px-8 py-3 text-white text-base'>
                                Shop Now
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

