import React from 'react';
import { Box, Card, CardContent, Typography, Button, Divider} from '@mui/material'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
/* Assets */
import CleaningVideo from '../assets/Cleaning_Home_Main.mp4';

import Slider from '../components/Slider';
import ReviewSlider from '../components/ReviewSlider';
import QuoteButton from '../components/QuoteButton';
const listItemVariants = {
    hidden: { opacity: 0, y: 50},
    visible: { opacity: 1, y: 0},
}

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        {/* HERO SECTION */}
        <div className='relative h-screen w-full overflow-hidden shadow-lg'>
            <video
                autoPlay
                loop
                muted
                className='absolute top-0 left-0 w-full h-full object-cover'
            >
                <source src={CleaningVideo} type='video/mp4' />
                Your browser does not support the video tag
            </video>
            <div className='absolute inset-0 flex flex-col items-center justify-center'>
                <div className='glassmorphism  text-center p-10 md:p-16 rounded w-11/12 md:w-3/4 lg:w-1/2'>
                    <h1 
                        className="text-2xl md:text-4xl font-montserrat font-semibold mb-4"
                        style={{ color: 'var(--white)'}}
                    >
                        WE'LL HANDLE THE GRIME, YOU FOCUS ON LIFE</h1>
                    <p 
                        className='font-montserrat text-lg md:text-xl mb-6'
                        style={{ color: 'var(--white)'}}
                    >
                        From dusting to disinfecting, we’ve got the details under control.
                    </p>
                    <button 
                        className=' text-white font-montserrat px-6 py-3 rounded transition duration-300 hover:bg-gray-800'
                        style={{
                            backgroundColor: 'var(--primary-color)',
                            hover: {
                                backgroundColor: 'var(--accent-color)',
                            },
                        }}
                    >
                        GET A QUOTE →
                    </button>
                </div>
            </div>
        </div>

        {/* INTRODUCTION SECTION */}
        <section className='py-12 px-4 md:px-8 lg:px-16 bg-white text-center'>
            <p className='font-montserrat text-lg md:text-xl mb-6 mx-auto max-w-4xl'>
                At Luxe Cleaning Co. we pride ourselves in providing you with a high-quality clean & professional service. Servicing all of SE MB, we offer Home, Business, or Post-Construction Cleaning to give you a hand with your cleaning needs. Our friendly crew is ready to impress.
            </p>
        </section>

        {/* Divider */}
        <hr className='border-t-2 border-gray-300 my-2 mx-auto w-1/2' />

        {/* FEATURES SECTION */}
        <section className='py-12 px-4 md:px-8 lg:px-16 bg-white'>
            <h2 className='text-2xl md:text-3xl font-montserrat font-light text-center mb-8'>Why Choose Luxe</h2>
            <div className='flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-16'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                    className='flex flex-col items-start text-left'
                >
                    <ul className='space-y-4 font-montserrat text-lg md:text-xl list-none'>
                        <motion.li variants={listItemVariants} className='flex items-center'>
                            <FaCheckCircle className='text-primary-color mr-2' />
                            <span className="pl-3 border-l-2 border-primary-color">Trained & Certified Staff</span>
                        </motion.li>
                        <motion.li variants={listItemVariants} className='flex items-center'>
                            <FaCheckCircle className='text-primary-color mr-2' />
                            <span className="pl-3 border-l-2 border-primary-color">Insured, Bonded & Licensed</span>
                        </motion.li>
                        <motion.li variants={listItemVariants} className='flex items-center'>
                            <FaCheckCircle className='text-primary-color mr-2' />
                            <span className="pl-3 border-l-2 border-primary-color">100% Satisfaction Guarantee</span>
                        </motion.li>
                    </ul>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                    className='flex flex-col items-start text-left'
                >
                    <ul className='space-y-4 font-montserrat text-lg md:text-xl list-none'>
                        <motion.li variants={listItemVariants} className='flex items-center'>
                            <FaCheckCircle className='text-primary-color mr-2' />
                            <span className="pl-3 border-l-2 border-primary-color">High Quality Clean</span>
                        </motion.li>
                        <motion.li variants={listItemVariants} className='flex items-center'>
                            <FaCheckCircle className='text-primary-color mr-2' />
                            <span className="pl-3 border-l-2 border-primary-color">We Bring Our Own Cleaning Supplies</span>
                        </motion.li>
                        <motion.li variants={listItemVariants} className='flex items-center'>
                            <FaCheckCircle className='text-primary-color mr-2' />
                            <span className="pl-3 border-l-2 border-primary-color">Responsive to Feedback</span>
                        </motion.li>
                    </ul>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                    className='flex flex-col items-start text-left'
                >
                    <ul className='space-y-4 font-montserrat text-lg md:text-xl list-none'>
                        <motion.li variants={listItemVariants} className='flex items-center'>
                            <FaCheckCircle className='text-primary-color mr-2' />
                            <span className="pl-3 border-l-2 border-primary-color">Easy Cash-Free Payment</span>
                        </motion.li>
                        <motion.li variants={listItemVariants} className='flex items-center'>
                            <FaCheckCircle className='text-primary-color mr-2' />
                            <span className="pl-3 border-l-2 border-primary-color">Daily, Weekly, Biweekly & Monthly Options</span>
                        </motion.li>
                        <motion.li variants={listItemVariants} className='flex items-center'>
                            <FaCheckCircle className='text-primary-color mr-2' />
                            <span className="pl-3 border-l-2 border-primary-color">No Travel Fees!</span>
                        </motion.li>
                    </ul>
                </motion.div>
            </div>
        </section>

        {/* SLIDER SECTION */}
        <section className='py-6 bg-white w-full px-0 mx-0'>
            <Slider />
        </section>

        {/* Booking Section */}
        <section className='py-8 px-4 md:px-6 lg:px-16 bg-white text-center'>
            <h2 className='text-2xl md:text-3xl font-montserrat font-light text-center mb-8'>
                How To Book A Clean
            </h2>
            <div className='flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16'>
                <Card className='glassmorphism w-full md:w-1/3 shadow-lg min-h-[250px] card-shadow'>
                    <CardContent className='flex flex-col h-full'>
                        <Typography variant='h6' sx={{ fontWeight: '600', fontSize: '1.25rem', fontFamily: 'Montserrat'}} className='mb-2 font-montserrat'>
                            Get a quote
                        </Typography>
                        <hr className='border-t-2 border-gray-300 my-2 py-2 mx-auto w-1/2' />
                        <Typography variant='body1' sx={{ fontFamily: 'Montserrat' }} className='mb-4 flex-grow'>
                            Simply click the get a quote button, fill out the information and we will send you a quote within 2 business days.
                        </Typography>
                        <div className='flex justify-center mt-4'>
                            <QuoteButton />
                        </div>
                    </CardContent>
                </Card>
                <Card className='glassmorphism w-full md:w-1/3 shadow-lg min-h-[250px] card-shadow'>
                    <CardContent className='flex flex-col h-full'>
                        <Typography variant='h6' sx={{ fontWeight: '600', fontSize: '1.25rem', fontFamily: 'Montserrat' }} className='mb-2 font-semibold'>
                            Schedule in your Cleaning Visit
                        </Typography>
                        <hr className='border-t-2 border-gray-300 my-2 py-2 mx-auto w-1/2' />
                        <Typography variant='body1' sx={{ fontFamily: 'Montserrat' }} className='mb-4 flex-grow'>
                            Call or email us to book in your cleaning visit. Once you’ve selected a date we will email you a booking confirmation.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className='glassmorphism w-full md:w-1/3 shadow-lg min-h-[250px]  card-shadow'>
                    <CardContent className="flex flex-col h-full"> 
                        <Typography variant='h6' sx={{ fontWeight: '600', fontSize: '1.25rem', fontFamily: 'Montserrat' }} className='mb-2 font-semibold'>
                            Enjoy your clean home!
                        </Typography>
                        <hr className='border-t-2 border-gray-300 my-2 py-2 mx-auto w-1/2' />
                        <Typography variant='body1' sx={{ fontFamily: 'Montserrat' }} className='mb-4 flex-grow'>
                            Our high quality clean will provide you with a sigh of relief after a busy day. We do the cleaning, you make the memories.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </section>

        {/* Reviews Section */}
        <ReviewSlider />
    </div>
  );
};

export default Home;