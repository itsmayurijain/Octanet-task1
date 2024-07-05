import React from 'react'
import Img1 from '../../Assets/image.avif'
import Img2 from '../../Assets/image 1.avif'
import Img3 from '../../Assets/image 2.avif'
const data = [
  {
    image: Img1,
    name: 'Prolend Watch 2 Pro',
    price: '$149.00',
  },
  {
    image: Img2,
    name: 'Prolend Watch 2 Pro',
    price: '$249.00',
  },
  {
    image: Img3,
    name: 'Prolend Watch 2 Pro',
    price: '$349.00',
  },
  {
    image: Img1,
    name: 'Prolend Watch 2 Pro',
    price: '$449.00',
  },

]
export const Product = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <div className='mx-5 mt-32'>
          <div className='text-white font-black  text-center'>
            <h1 className='text-5xl'>Our Products</h1>
          </div>
          <div className='my-16'>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
              {
                data.map((item) => {
                  return (
                    <div className='bg-black-200 text-center'>
                      <div>
                        <img src={item.image} className='w-[100%]'/>
                      </div>
                      <div className='pt-4'>
                        <h2 className='text-white font-semibold text-xl'>{item.name}</h2>
                        </div>
                        <div className='pb-2'>
                          <h2 className='text-primary font-bold text-lg'>{item.price}</h2>
                          </div>
                          <div className='py-3 flex items-center justify-center'>
                                <button className='bg-black rounded-full px-6 py-4 text-white text-base text-center font-bold flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" className="w-[30px] h-[30px] mr-3">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                    Buy Now
                                </button>
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
