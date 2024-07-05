import React from 'react'
import Image from '../../Assets/watch.png'
export const Layout = () => {
    return (
        <div className='container mx-auto'>
            <div className='mx-5 my-4 lg:my-20'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <div className='text-white font-black mt-10 text-left'>
                            <h1 className='text-7xl'>Smartwatch <br />Fitbit Ionic</h1>
                        </div>
                        <div className='text-base text-white py-3 font-medium text-justify'>
                            <p>It was popularised in the 1960s with the release of Letraset sheets<br /> containing Lorem Ipsum
                                passages, and more recently with desktop <br />publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum.</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='py-5'>
                                <button className='bg-black-200 rounded-full px-6 py-4 text-white text-base text-center font-bold flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" className="w-[30px] h-[30px] mr-3">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                    Buy Now
                                </button>
                            </div>
                            <div className='pl-10'>
                                <button className='bg-black-200 rounded-full px-8 py-4 text-white text-base text-center font-bold'>
                                    Know more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='relative top-5 pl-24 flex justify-center items-center'>
                        <img src={Image} className='w-[60%]' />
                    </div>
                    <div className='absolute right-2.5 top-[60%] rotate-90'>
                        <h2 className='text-white text-xl ml-6 font-semibold'>Find Your Favourite</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
