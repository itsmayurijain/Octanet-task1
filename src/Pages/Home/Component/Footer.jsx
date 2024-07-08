import React from 'react'
import Logo from '../../../Component/Assets/logo.svg'
export const Footer = () => {
    return (
        <div>
            <div className='container mx-auto bg-black-200 pb-12'>
                <div className='mx-8 mt-36'>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className=''>
                            <div className='flex pt-28 justify-center'>
                                <div className='w-12'>
                                    <img src={Logo} />
                                </div>
                                <div className='text-white font-bold'>
                                    <h1 className='px-4 text-3xl py-1'>Twatch</h1 >
                                </div>
                            </div>
                            <div className='text-justify pl-24 pt-3'>
                                <p className='text-white font-normal text-sm'>Experience the perfect blend of technology and fashion with our smartwatches.</p>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <div className=''>
                                <div className='text-white font-semibold flex justify-around items-center pt-28 text-xl'>
                                    <h1>Company</h1>
                                    <h1>Product</h1>
                                    <h1>Support</h1>
                                </div>
                                <div className=''>
                                    <div className='text-white font-normal flex justify-around items-center text-sm pt-8'>
                                        <h1>About us</h1>
                                        <h1>Feature</h1>
                                        <h1>Privacy</h1>
                                    </div>
                                    <div className='text-white font-normal flex justify-around items-center text-sm py-2 text-center'>
                                        <h1>Products</h1>
                                        <h1 className='pr-3'>Pricing</h1>
                                        <h1>Help</h1>
                                    </div>
                                    <div className='text-white font-normal flex justify-around items-center text-sm text-center'>
                                        <h1>Contact</h1>
                                        <h1>Credit</h1>
                                        <h1>Terms</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
