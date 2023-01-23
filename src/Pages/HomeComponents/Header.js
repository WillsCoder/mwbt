import React, { useState, useRef } from 'react'
import { BiMenuAltRight } from 'react-icons/bi';

export const Header = () => {

    const header = useRef();
    // const head = document.getElementById('heads')
    // console.log(header.current.offsetTop)
    const [mobile, setMobile] = useState(false)

  return (
    <div className='sticky w-full top-0' ref={header} id='heads'>
        <div className='flex w-full items-center justify-between font-semibold mx-auto lg:px-5'>
            <div className='lg:w-2/12 lg:py-6 py-3'>
                <img src={require('../../assets/Mwbe 1 png (2).png')} className='lg:w-36 w-28' />
            </div>
            <div className='w-8/12 hidden lg:block'>
                <ul className='flex items-center justify-between uppercase'>
                    <li className='text-primary w-2/12 text-center'>Home</li>
                    <li className='w-2/12 text-center'>Pages</li>
                    <li className='w-2/12 text-center'>Services</li>
                    <li className='w-2/12 text-center'>Blog</li>
                    <li className='w-2/12 text-center'>Contacts</li>
                    <li className='w-2/12 text-center border py-2'>Qoute on Lane</li>
                </ul>
            </div>
            <div className='w-2/12 hidden lg:flex justify-end'>
                <div>
                    <p>(+1) 456 980 5555</p>
                </div>
            </div>
            <div className='lg:hidden w-2/12 text-end'>
                <button onClick={() => setMobile(!mobile)}><BiMenuAltRight className='text-4xl text-primary'/></button>
            </div>
        </div>
        {
            mobile && (
                <div className='absolute bg-third track-ani w-full p-10'>
                    <ul className='uppercase text-end w-full'>
                        <li className='text-orange-600 w-full py-3 text-end border px-3'>Home</li>
                        <li className='mt-3 px-3 text-end w-full border fw-500 py-3'>Pages</li>
                        <li className='mt-3 px-3 text-end w-full border py-3'>Services</li>
                        <li className='mt-3 px-3 text-end w-full border py-3'>Blog</li>
                        <li className='mt-3 px-3 text-end w-full border py-3'>Contacts</li>
                        <li className='mt-3 px-3 text-end w-full border border-gray-100 py-3'>Quote on Lane</li>
                    </ul>
                </div>
            )
        }
    </div>
  )
}
