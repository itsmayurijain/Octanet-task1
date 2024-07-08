import React from 'react'
import Logo1 from '../../Assets/logo 1.avif'
import Logo2 from '../../Assets/logo 2.avif'
import Logo3 from '../../Assets/logo 3.avif'

const data =[
    {
        image: Logo1,
        description:'Experience the perfect blend of technology and fashion with our smartwatches.',
        name:'Charlotte Hale',
        post:'Creative Manager',
    },
    {
        image: Logo2,
        description:'Experience the perfect blend of technology and fashion with our smartwatches.',
        name:'John Allenden',
        post:'Creative Manager',
    },
    {
        image: Logo3,
        description:'Experience the perfect blend of technology and fashion with our smartwatches.',
        name:'One Allenden',
        post:'Creative Manager',
    },
]
export const Testimonial = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='mx-5 mt-32'>
                    <div className='text-white font-black  text-center'>
                        <h1 className='text-4xl'>What Our Customers Say</h1>
                    </div>
                    <div className='my-12'>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                 {
                                     data.map((item) => {
                                        return (
                                            <div className='bg-black-200 rounded-2xl'>
                                            <div className='text-center py-4'>
                                                <img src={item.image} className='rounded-full m-auto w-[100px]'/>
                                            </div>
                                            <div className='text-center px-6'>
                                                <p className='text-white font-medium text-sm'>{item.description}</p>
                                            </div>
                                            <div className='text-center my-4'>
                                                <h2 className='text-primary font-semibold text-lg'> {item.name}</h2>
                                            </div>
                                            <div className='text-center my-5'>
                                                <h2 className='text-white font-normal text-xs'>{item.post}</h2>
                                            </div>
                                        </div> 
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
