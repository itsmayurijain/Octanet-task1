import React from 'react'
import { Layout } from './Component/Layout'
import { Product } from './Component/Product'
import { Feature } from './Component/Feature'
import { Testimonial } from './Component/Testimonial'
import { Footer } from './Component/Footer'
export const Home = () => {
  return (
    <>
       <Layout/>
       <Product/>
       <Feature/>
       <Testimonial/>
       <Footer/>
    </>
  )
}
