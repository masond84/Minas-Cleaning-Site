import React from 'react';
import { Box, Card, CardContent, Typography, Button, Divider} from '@mui/material'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
/* Assets */
import CleaningVideo from '../assets/Cleaning_Home_Main.mp4';

import Slider from '../components/Slider';
import ReviewSlider from '../components/ReviewSlider';
const listItemVariants = {
    hidden: { opacity: 0, y: 50},
    visible: { opacity: 1, y: 0},
}

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className='overflow-x-hidden'>
            {/* HERO SECTION */}
            <div className='relative h-[70vh] md:h-screen w-full overflow-hidden shadow-lg'>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none'
                >
                    <source src={CleaningVideo} type='video/mp4' />
                    Your browser does not support the video tag
                </video>
                <div className='absolute inset-0 flex flex-col items-center justify-center px-4 md:px-0'>
                    <div className='glassmorphism text-center p-10 md:p-12 lg:p-16 rounded w-full md:w-3/4 lg:w-1/2'>
                        <h1 
                            className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold mb-4 leading-tight"
                            style={{ color: 'var(--white)'}}
                        >
                        CLEAN SPACE, HAPPY SPACE    
                        </h1>
                        <p 
                            className='font-montserrat text-base sm:text-lg md:text-xl mb-6'
                            style={{ color: 'var(--white)'}}
                        >
                            We offer top-notch cleaning services that will leave your space sparkling clean and those in it smiling!
                        </p>
                        <button 
                                className="text-white font-montserrat px-5 py-2 sm:px-6 sm:py-3 rounded transition duration-300 hover:bg-[#1A9F96] hover:shadow-lg"
                                style={{
                                backgroundColor: 'var(--primary-color)',
                            }}
                            onClick={() => navigate('/services/get-quote')}
                        >
                            GET A QUOTE →
                        </button>
                    </div>
                </div>
            </div>

            {/* INTRODUCTION SECTION */}
            <section className='py-10 px-10 sm:px-12 md:px-18 bg-white text-center'>
                <p className='font-montserrat text-base sm:text-lg md:text-xl mb-6 mx-auto max-w-4xl'>
                Minas Cleaning Services is dedicated to making your space spotless and welcoming. Covering all your cleaning needs, from homes to businesses to moving. Our skilled team ensures every job is done right! Count on us for a thorough, and reliable service with a personal touch.
                </p>
            </section>

            {/* Divider */}
            <hr className='border-t-2 border-gray-300 mt-1 mb-2 mx-auto w-1/2' />

            {/* FEATURES SECTION */}
            <section className='py-12 px-4 md:px-8 lg:px-16 bg-white'>
                <h2 className='text-2xl md:text-3xl font-montserrat font-light text-center mb-8'>Why Choose Minas'</h2>
                <div className='flex flex-col md:flex-row justify-center items-start space-y-6 md:space-y-0 md:space-x-8'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                        className='flex flex-col items-start text-left'
                    >
                        <ul className='space-y-3 sm:space-y-4 font-montserrat text-base sm:text-lg md:text-xl list-none'>
                            <motion.li variants={listItemVariants} className='flex items-center'>
                                <FaCheckCircle className='text-primary-color mr-2 w-5 h-5' size={20}/>
                                <span className="pl-3 border-l-2 border-primary-color">Trained & Certified Bilingual Staff</span>
                            </motion.li>
                            <motion.li variants={listItemVariants} className='flex items-center'>
                                <FaCheckCircle className='text-primary-color mr-2 w-5 h-5' size={20}/>
                                <span className="pl-3 border-l-2 border-primary-color">Eco-Friendly And Pet Friendly Cleaning Products</span>
                            </motion.li>
                            <motion.li variants={listItemVariants} className='flex items-center'>
                                <FaCheckCircle className='text-primary-color mr-2 w-5 h-5' size={20}/>
                                <span className="pl-3 border-l-2 border-primary-color">Reliable And Family Friendly Services</span>
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
                        <ul className='space-y-3 font-montserrat text-base sm:text-lg md:text-xl list-none'>
                            <motion.li variants={listItemVariants} className='flex items-center'>
                                <FaCheckCircle className='text-primary-color mr-2 w-5 h-5' size={20}/>
                                <span className="pl-3 border-l-2 border-primary-color">Customer Focused Communication</span>
                            </motion.li>
                            <motion.li variants={listItemVariants} className='flex items-center'>
                                <FaCheckCircle className='text-primary-color mr-2 w-5 h-5' size={20}/>
                                <span className="pl-3 border-l-2 border-primary-color">Daily, Weekly, Biweekly & Monthly Options</span>
                            </motion.li>
                            <motion.li variants={listItemVariants} className='flex items-center'>
                                <FaCheckCircle className='text-primary-color mr-2 w-5 h-5' size={20}/>
                                <span className="pl-3 border-l-2 border-primary-color">Tailored Cleaning, Transparent Pricing</span>
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
                        <ul className='space-y-3 font-montserrat text-base sm:text-lg md:text-xl list-none'>
                            <motion.li variants={listItemVariants} className='flex items-center'>
                                <FaCheckCircle className='text-primary-color mr-2 w-5 h-5' size={20}/>
                                <span className="pl-3 border-l-2 border-primary-color">Locally Owned And Operated</span>
                            </motion.li>
                            <motion.li variants={listItemVariants} className='flex items-center'>
                                <FaCheckCircle className='text-primary-color mr-2 w-5 h-5' size={20}/>
                                <span className="pl-3 border-l-2 border-primary-color">Serving Over 60 Clients In The Pittsburgh Area</span>
                            </motion.li>
                            <motion.li variants={listItemVariants} className='flex items-center'>
                                <FaCheckCircle className='text-primary-color mr-2 w-5 h-5' size={20}/>
                                <span className="pl-3 border-l-2 border-primary-color">Submit A Quote, And Get A Free Estimate Today!</span>
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
                    <Card className='glassmorphism w-full md:w-1/3 shadow-lg min-h-[250px]'>
                        <CardContent className='flex flex-col h-full'>
                            <Typography variant='h6' sx={{ fontWeight: '600', fontSize: '1.25rem', fontFamily: 'Montserrat'}} className='mb-2 font-montserrat'>
                                Get a quote
                            </Typography>
                            <hr className='border-t-2 border-gray-300 my-2 py-2 mx-auto w-1/2' />
                            <Typography variant='body1' sx={{ fontFamily: 'Montserrat' }} className='mb-4 flex-grow'>
                                Simply click the get a quote button, fill out the information and we will send you a quote within 2 business days.
                            </Typography>
                            <div className='flex justify-center mt-4'>
                            <div 
                                className="relative w-[200px] h-[50px] bg-white text-blue-500 font-montserrat font-semibold rounded shadow-lg"
                            >
                                <button
                                    className="w-full h-full flex items-center justify-center text-white font-montserrat px-6 py-3 rounded transition duration-300 bg-[var(--primary-color)] hover:bg-[#1A9F96] hover:shadow-lg"
                                    onClick={() => navigate('/services/get-quote')}
                                >
                                    GET A QUOTE →
                                </button>
                            </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='glassmorphism w-full md:w-1/3 shadow-lg min-h-[250px]'>
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
                    <Card className='glassmorphism w-full md:w-1/3 shadow-lg min-h-[250px]'>
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