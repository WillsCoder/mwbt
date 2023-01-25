import React from 'react'
import { Header } from './HomeComponents/Header'
import {FaFacebookSquare, FaGooglePlusSquare, FaInstagramSquare, FaTruckMoving, FaTwitterSquare} from 'react-icons/fa'
import {BsTruckFlatbed} from 'react-icons/bs'
import {RiTruckLine} from 'react-icons/ri'
import {GiClothes, GiMineTruck, GiOilDrum} from 'react-icons/gi'
import {ImQuotesLeft} from 'react-icons/im'
import {BiPackage} from 'react-icons/bi'
import {IoFastFood} from 'react-icons/io5'
import {MdRecycling} from 'react-icons/md'
import { Footer } from './HomeComponents/Footer'
import Faqs from './HomeComponents/faq'
import { motion } from 'framer-motion'
import CountUp from 'react-countup';

export const Homepage = () => {
  return (
    <div className='font-primary'>
        {/* hero section */}
        <div className='bg-pick bg-cover bg-center lg:bg-left w-full lg:h-screen h-01 pt-7'>
            <div className='box text-white relative h-full'>
                <div className='lg:bg-secondary rounded-xl'>
                    <Header />
                </div>
                <div className='mt-10'>
                    <p className='tracking-widest text-gray-400'>PROFESSIONAL TRANSPORTATION SERVICE</p>
                    <p className='mt-6 uppercase text-5xl lg:text-8xl lg:w-7/12  fw-700'>MWBT <span className='text-primary '>FREIGHT</span> LLC</p>
                    <p className='mt-10 lg:w-5/12 w-8/12 text-xl text-gray-400'>At MWBT Freight LLC, we guarantee quick and efficient delivery of any cargo to any part of the world.</p>
                    <div className='flex items-center mt-10'>
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
        </div>
        {/* about us */}
        <div className='section bg-light'>
            <div className='box pb-12'>
                <div className='lg:flex items-center overflow-hidden'>
                    <div className='lg:w-6/12'>
                        <p className='uppercase tracking-widest text-gray-400 text-xl'>About Us</p>
                        <p className='mt-8 lg:text-6xl text-4xl fw-700 text-secondary'>Your Logistics<span className='hollow'> Solution</span> Provider</p>
                        <p className='mt-10'>MWBT Freight LLC specializes in providing freight shipping solutions whenever and wherever you need them. As an independent freight agency, we have access to one of the largest logistics networks in the industry, which means your business has access to this vast network too.</p>
                        <p className='mt-3'>We are committed to providing our customers with quality service. We will work closely with you to develop the best logistics plan for your supply chain.</p>
                        <div className='mt-6 flex items-center'>
                            <p className='w-24 h-24 circle shadow-lg'></p>
                            <div className='pl-4 '>
                                <p className='lg:text-xl '>Full Name</p>
                                <p className='text-gray-500 fs-500'>Founder of MWBT Freight LLC</p>
                            </div>
                        </div>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, x:300 }}
                        whileInView={{ opacity: 1, x:0} }
                        transition={{duration: 2 }}
                        className='lg:w-6/12 mt-20 lg:mt-0 flex justify-end'>
                        <div className='lg:w-9/12 bg-white shadow-lg'>
                            <div className='flex items-center justify-center h-16 w-full bg-secondary text-white fw-600 text-2xl'>
                                <p>Request a Quote</p>
                            </div>
                            <div className='w-11/12 mx-auto mt-8'>
                                <input type='text' placeholder='Origin Location' className='p-4 text-xl border-b outline-none w-full'/>
                                <input type='text' placeholder='Destination' className='p-4 text-xl border-b outline-none w-full mt-7'/>
                                <input type='text' placeholder='Weight' className='p-4 text-xl border-b outline-none w-full mt-7'/>
                                <textarea  placeholder='Description' className='p-4 text-xl h-24  border-b outline-none w-full mt-7'/>
                                <p className='my-6 py-4 w-full shadow-lg text-center rounded-lg text-xl fw-700'>Get Qoute</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
        {/* truck types */}
        <div className='lg:pt-40 bg-light relative'>
            <div className='lg:absolute top-0 lg:grid-4 grid-2f w-full'>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale:1} }
                    whileHover={{ scale: 1.10 }}
                    transition={{duration: .3, ease: "circIn" }}
                    className='bg-pri lg:h-72 h-48 hover:scale-105 duration-1000  grid place-content-center'>
                    <div className='text-center'>
                        <BsTruckFlatbed className='text-6xl mx-auto text-black'/>
                        <p className='mt-2 fw-600 uppercase'>Flat Bed Trucks</p>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale:1} }
                    whileHover={{ scale: 1.10 }}
                    transition={{duration: .3, delay:.2 }}
                    className='hover:bg-pri hover:scale-105 duration-1000 bg-white grid place-content-center shadow-lg lg:h-80 '>
                    <div className='text-center'>
                        <FaTruckMoving className='text-6xl mx-auto text-black'/>
                        <p className='mt-2 fw-600 uppercase'>Hot Shots Trucks</p>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale:1} }
                    whileHover={{ scale: 1.10 }}
                    transition={{duration: .3, delay:.3 }}
                    className='hover:bg-pri hover:scale-105 duration-1000  bg-white grid place-content-center shadow-lg lg:h-72 h-48 '>
                    <div className='text-center'>
                        <GiMineTruck className='text-6xl mx-auto text-black'/>
                        <p className='mt-2 fw-600 uppercase'>Mine Trucks</p>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale:1} }
                    whileHover={{ scale: 1.10 }}
                    transition={{duration: .3, delay:.5 }}
                    className='hover:bg-pri hover:scale-105 duration-1000  bg-white grid place-content-center shadow-lg lg:h-80 '>
                    <div className='text-center'>
                        <RiTruckLine className='text-6xl mx-auto text-black'/>
                        <p className='mt-2 fw-600 uppercase'>DRY Trucks</p>
                    </div>
                </motion.div>
            </div>
            <div className='h-screen bg-third  bg-center bg-fill grid place-content-center '>
                <div className='lg:w-7/12 w-11/12 mx-auto lg:mx-1 text-gray-300 fw-700 lg:mt-4 lg:flex lg:pl-12'>
                    <p className='text-6xl'>
                        <ImQuotesLeft/>
                    </p>
                    <p className='lg:text-6xl text-4xl lg:ml-4'>Elevate your dry truck shipping with our logistics experts, on-demand capacity and 24/7 tracking.</p>
                </div>
            </div>
        </div>
        {/* why choose us */}
        <div className='section bg-light'>
            <div className='box lg:pb-12'>
                <div>
                    <div>
                        <p className='uppercase tracking-widest text-gray-400 text-xl'>why choose us</p>
                        <p className='lg:text-6xl text-5xl text-secondary mt-6 fw-700 lg:w-6/12'>Advantages & <span className='hollow'>Feautures</span></p>
                    </div>
                    <div className='lg:grid-4 lg:mt-24 mt-16 justify-between'>
                        <div>
                            <p className='fw-600 mb-4 lg:mb-6 text-xl'>Cost Saving</p>
                            <p>Save your money with our logistics service taking advantage of quick delivery.</p>
                        </div>
                        <div className='mt-10 lg:mt-0'>
                            <p className='fw-600 mb-4 lg:mb-6 text-xl'>Secure Service</p>
                            <p>We provide security of your delivery. You can use our online tranking system to check wher your cargo is.</p>
                        </div>
                        <div className='mt-10 lg:mt-0'>
                            <p className='fw-600 mb-4 lg:mb-6 text-xl'>Cargo Express</p>
                            <p>Our educated couriers deliver your cargo in the right place at the right time.</p>
                        </div>
                        <div className='mt-10 lg:mt-0'>
                            <p className='fw-600 mb-4 lg:mb-6 text-xl'>Proven Experience</p>
                            <p>Thousands of happy clients, hundreds of permanent customers are the result of our work.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* stats */}
        <div className='lg:h-96 h-01 bg-pick'>
            <div className='box h-full flex items-center'>
                <div className='lg:grid-4 w-full justify-evenly'>
                    <div className='text-center text-white'>
                        <p className='text-6xl fw-600'>
                            <CountUp start={1000} end={15500} duration={5} enableScrollSpy={true} suffix="+"/>
                        </p>
                        <p className='pt-1 w-24 bg-primary mx-auto mt-4 mb-7'></p>
                        <p className='lg:text-lg'>Delivered Cargos</p>
                    </div>
                    <div className='text-center text-white'>
                        <p className='text-6xl fw-600'>
                            <CountUp end={20} duration={3} enableScrollSpy={true} />
                        </p>
                        <p className='pt-1 w-24 bg-primary mx-auto mt-4 mb-7'></p>
                        <p className='lg:text-lg'>Awards Won</p>
                    </div>
                    <div className='text-center text-white'>
                        <p className='text-6xl fw-600'>
                            <CountUp end={45} duration={4} enableScrollSpy={true} suffix="k+"/>
                        </p>
                        <p className='pt-1 w-24 bg-primary mx-auto mt-4 mb-7'></p>
                        <p className='lg:text-lg'>Positive Reviews</p>
                    </div>
                    <div className='text-center text-white'>
                        <p className='text-6xl fw-600'>
                            <CountUp end={99} duration={5} enableScrollSpy={true} suffix="%"/>
                        </p>
                        <p className='pt-1 w-24 bg-primary mx-auto mt-4 mb-7'></p>
                        <p className='lg:text-lg'>Satisfied Customers</p>
                    </div>
                </div>
            </div>
        </div>
        {/* testimonials */}
        <div className='section'>
            <div className='box lg:pb-36'>
                <div>
                    <div>
                        <p className='uppercase tracking-widest text-gray-400 text-xl'>Testimonials</p>
                        <p className='lg:text-6xl text-secondary mt-6 fw-700 lg:w-6/12'>What our clients says about us</p>
                    </div>
                    <div className='w-full overflow-x-scroll lg:overflow-hidden'>
                        <div className='lg:w-full lg:grid-3s flex w-04 mt-12 justify-between'>
                            <div className='h-72 lg:p-10 p-6 grid place-content-center bg-light shadow-lg'>
                                <div>
                                    <ImQuotesLeft/>
                                    <p className='mt-3 fw-500 mb-6'>Cillum sit ad eiusmod excepteur fugiat in. Elit anim eu pariatur aliqua laborum.</p>
                                    <div className='flex items-center'>
                                        <p className='w-20 h-20 circle shadow-md bg-white'></p>
                                        <p className='pl-4 fw-600'>Frank K. Crust</p>
                                    </div>
                                </div>
                            </div>
                            <div className='h-80 mx-6 lg:mt-10 lg:p-10 p-6 grid place-content-center bg-light shadow-lg'>
                                <div>
                                    <ImQuotesLeft/>
                                    <p className='mt-3 fw-500 mb-6'>Cillum sit ad eiusmod excepteur fugiat in. Elit anim eu pariatur aliqua laborum.</p>
                                    <div className='flex items-center'>
                                        <p className='w-20 h-20 circle shadow-md bg-white'></p>
                                        <p className='pl-4 fw-600'>Frank K. Crust</p>
                                    </div>
                                </div>
                            </div>
                            <div className='h-72  lg:p-10 p-6 grid place-content-center bg-light shadow-lg'>
                                <div>
                                    <ImQuotesLeft/>
                                    <p className='mt-3 fw-500 mb-6'>Cillum sit ad eiusmod excepteur fugiat in. Elit anim eu pariatur aliqua laborum.</p>
                                    <div className='flex items-center'>
                                        <p className='w-20 h-20 circle shadow-md bg-white'></p>
                                        <p className='pl-4 fw-600'>Frank K. Crust</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full hidden lg:grid lg:grid-3s mt-12 justify-between'>
                        <div className='h-72 lg:p-10 grid place-content-center bg-light shadow-lg'>
                            <div>
                                <ImQuotesLeft/>
                                <p className='mt-3 fw-500 mb-6'>Cillum sit ad eiusmod excepteur fugiat in. Elit anim eu pariatur aliqua laborum.</p>
                                <div className='flex items-center'>
                                    <p className='w-20 h-20 circle shadow-md bg-white'></p>
                                    <p className='pl-4 fw-600'>Frank K. Crust</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-80 mt-10 lg:p-10 grid place-content-center bg-light shadow-lg'>
                            <div>
                                <ImQuotesLeft/>
                                <p className='mt-3 fw-500 mb-6'>Cillum sit ad eiusmod excepteur fugiat in. Elit anim eu pariatur aliqua laborum.</p>
                                <div className='flex items-center'>
                                    <p className='w-20 h-20 circle shadow-md bg-white'></p>
                                    <p className='pl-4 fw-600'>Frank K. Crust</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-72 lg:p-10 grid place-content-center bg-light shadow-lg'>
                            <div>
                                <ImQuotesLeft/>
                                <p className='mt-3 fw-500 mb-6'>Cillum sit ad eiusmod excepteur fugiat in. Elit anim eu pariatur aliqua laborum.</p>
                                <div className='flex items-center'>
                                    <p className='w-20 h-20 circle shadow-md bg-white'></p>
                                    <p className='pl-4 fw-600'>Frank K. Crust</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* our industry */}
        <div className='section pb-0 bg-light'>
            <div className=''>
                <div className='section box'>
                    <div className='lg:w-5/12 px-3 lg:px-0'>
                        <div>
                            <p className='uppercase tracking-widest text-gray-400 text-xl'>Industry</p>
                            <p className='lg:text-6xl text-5xl text-secondary mt-6 fw-700'>Sectors <span className='hollow'>Coverage</span></p>
                        </div>
                        <p className='mt-10 lg:text-lg'>We cover different industry sectors, from food and beverage, chemical, retail, durable goods and more. Check the full list.</p>
                    </div>
                </div>
                <div className='lg:min-h-screen bg-wine bg-cover relative lg:flex'>
                    <div className='lg:w-7/12 flex items-center lg:pl-10 pl-5 py-16 lg:py-0'>
                        <div className='w-full text-gray-100'>
                            <div className='flex items-center w-full'>
                                <div className='lg:w-2/12 text-7xl  text-pri'>
                                    <BiPackage className='mx-auto'/>
                                </div>
                                <div>
                                    <p className='fw-600 text-2xl'>Consumer packaged</p>
                                </div>
                            </div>
                            <div className='flex items-center w-full mt-4'>
                                <div className='lg:w-2/12 text-7xl text-pri'>
                                    <MdRecycling  className='mx-auto'/>
                                </div>
                                <div>
                                    <p className='fw-600 text-2xl'>Chemical goods</p>
                                </div>
                            </div>
                            <div className='flex items-center w-full mt-4'>
                                <div className='lg:w-2/12 text-7xl text-pri'>
                                    <IoFastFood  className='mx-auto'/>
                                </div>
                                <div>
                                    <p className='fw-600 text-2xl'>Food and beverage</p>
                                </div>
                            </div>
                            <div className='flex items-center w-full mt-4'>
                                <div className='lg:w-2/12 text-7xl text-pri'>
                                    <GiClothes  className='mx-auto'/>
                                </div>
                                <div>
                                    <p className='fw-600 text-2xl'>Retail goods</p>
                                </div>
                            </div>
                            <div className='flex items-center w-full mt-4'>
                                <div className='lg:w-2/12 text-7xl text-pri'>
                                    <GiOilDrum className='mx-auto'/>
                                </div>
                                <div>
                                    <p className='fw-600 text-2xl'>Energy, oil and gas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-5/12 hidden lg:block relative lg:bottom-64 lg:right-0 bg-second bg-cover bg-right-bottom'>
                        <div className='w-36 h-36 absolute bottom-4 left-4 bg-pri grid place-content-center'>
                            <div>
                                <p className='font-black text-6xl text-center'>23</p>
                                <p className='font-light mt-3 uppercase text-center'>Years of experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* faq */}
        <div className='section'>
            <div className='box'>
                <div className='lg:flex'>
                    <div className='lg:w-6/12'>
                        <p className='lg:text-6xl text-5xl mt-6 fw-700 text-secondary'>Frequently Asked <span className='hollow'>Questions</span></p>
                        <div className='mt-12'>
                            <Faqs/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
