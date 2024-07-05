import React from 'react'
import Photo from '../../Assets/watch.png';
export const Feature = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='mx-5 mt-32'>
                    <div className='text-white font-black  text-center'>
                        <h1 className='text-4xl'>More Than Connecting</h1>
                    </div>
                    <div className='my-16'>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div className='ml-9 pt-12'>
                                <div className='text-white py-4'>
                                    <h3 className='font-bold text-lg'>Notification Alert</h3>
                                    <p className='text-sm font-medium'>The perfect blend of technology and smartwatches.</p>
                                </div>
                                <div className='py-6 text-white'>
                                    <h3 className='font-bold text-lg '>Fingerprint System</h3>
                                    <p className='text-sm font-medium'>The perfect blend of technology and smartwatches.</p>
                                </div>
                                <div className='py-4 text-white'>
                                    <h3 className='font-bold text-lg '>GPS Control</h3>
                                    <p className='text-sm font-medium'>The perfect blend of technology and smartwatches.</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-center items-center'>
                                    <img src={Photo}/>
                                </div>
                            </div>
                            <div>
                            <div className='mr-9 pt-12'>
                                <div className='text-white py-4'>
                                    <h3 className='font-bold text-lg'>Extern Sound Quality</h3>
                                    <p className='text-sm font-medium'>The perfect blend of technology and smartwatches.</p>
                                </div>
                                <div className='py-6 text-white'>
                                    <h3 className='font-bold text-lg '>Install Any App</h3>
                                    <p className='text-sm font-medium'>The perfect blend of technology and smartwatches.</p>
                                </div>
                                <div className='py-4 text-white'>
                                    <h3 className='font-bold text-lg '>Gaming Technology</h3>
                                    <p className='text-sm font-medium'>The perfect blend of technology and smartwatches.</p>
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
