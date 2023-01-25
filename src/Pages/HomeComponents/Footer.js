import React from 'react'
import { FaArrowRight, FaFacebookSquare, FaGooglePlusSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='mt-36 relative bg-gray-900 w-full'>
        <div className='lg:flex items-center lg:pt-60 pt-36 pb-20 lg:pb-40 '>
            <div className='lg:w-4/12'>
                <img src={require('../../assets/Mwbe 1 png (2).png')} alt='logo' className='mx-auto' />
            </div>
            <div className='lg:w-5/12 px-5 lg:px-0 mt-12 lg:mt-0 '>
                <div>
                    <p className='fw-600 text-3xl text-white'>End-to-end transportation and custom logistics solutions</p>
                </div>
                <div className='text-white flex mt-6'>
                    <div className='w-6/12'>
                        <p className='fw-600 mb-6'>Contact us</p>
                        <p>Mwbt@support.com</p>
                        <p>(+1) 456 980 5555</p>
                    </div>
                    <div className='w-6/12'>
                        <p className='fw-600 mb-6'>Visit us</p>
                        <p>1246 street lane, city, state, country</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-3/12 px-5 lg:px-0 mt-12 lg:mt-0 text-white'>
                <div className='flex items-center w-full lg:mt-10'>
                    <p>Follow Us</p>
                    <p className='h-1 w-10 bg-gray-100 mx-6'></p>
                    <ul className='flex text-primary text-xl'>
                        <li><FaFacebookSquare/></li>
                        <li className='mx-4'><FaTwitterSquare/></li>
                        <li><FaInstagramSquare/></li>
                        <li className='ml-4'><FaGooglePlusSquare/></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='lg:w-7/12 lg:h-60 lg:p-16 p-8 bg-pri -top-28 lg:left-8 w-11/12 absolute'>
            <div className='lg:flex items-center h-full'>
                <div className='lg:w-4/12'>
                    <p className='tracking-widest uppercase'>Newsletter</p>
                    <p className='fw-600 lg:text-3xl text-3xl mt-2 lg:mt-4'>Stay informed</p>
                </div>
                <div className='lg:w-8/12 mt-4 lg:mt-0'>
                    <div className='flex items-center border-b border-gray-500 w-full'>
                        <input type='email' placeholder='Email address' className='bg-inherit text-xl p-3 text-black w-11/12 border-none outline-none placeholder-gray-500'/>
                        <FaArrowRight/>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-gray-200 text-gray-600 text-center py-8 px-8 lg:px-0'>
            <p>© 2023 MWBT Freight LLC, ALL RIGHTS RESERVED</p>
        </div>
    </div>
  )
}
