import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CleaningImage1 from '../assets/images/Residential-Space-Hero.jpg'
import CleaningImage2 from '../assets/Commerical-Space.jpg'

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    }

    return (
        <div className='carousel-container w-full'>
            <Slider {...settings}>
                {/* Slide 1 */}
                <div className='relative w-full h-64 md:h-96'>
                    <img className="w-full h-full object-cover object-center" src={CleaningImage1} alt='Slide 1'></img>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='glassmorphism bg-white bg-opacity-80 text-center p-6 md:p-10 rounded max-w-md'>
                            <h2 className='text-sm md:text-lg font-medium'>RESIDENTIAL CLEANING</h2>
                            <h1 className='text-xl md:text-3xl font-bold mt-2'>Home Cleaning</h1>
                            <p className='text-sm md:text-base mt-4'>From routine cleanings to deep cleans, our residential services are designed to keep your home fresh and inviting for the ones you care about.</p>
                            <a 
                                href="/services/get-quote"
                                className="mt-8 inline-block bg-black text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-900 transition-all duration-300"
                            >
                                GET A QUOTE →
                            </a>
                        </div>
                    </div>
                </div>
                {/* Slide 2 */}
                <div className='relative w-full h-64 md:h-96'>
                    <img className="w-full h-full object-cover object-center" src={CleaningImage2} alt='Slide 2'></img>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='glassmorphism bg-white bg-opacity-80 text-center p-6 md:p-10 rounded max-w-md'>
                            <h2 className='text-sm md:text-lg font-medium'>COMMERCIAL CLEANING</h2>
                            <h1 className='text-xl md:text-3xl font-bold mt-2'>Business Cleaning</h1>
                            <p className='text-sm md:text-base mt-4'>Our team provides comprehensive cleaning solutions for offices, retail spaces, and more, ensuring a spotless environment for your business.</p>
                            <a 
                                href="/services/get-quote"
                                className="mt-8 inline-block bg-black text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-900 transition-all duration-300"
                            >
                                GET A QUOTE →
                            </a>
                        </div>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className='relative w-full h-64 md:h-96'>
                    <img className="w-full h-full object-cover object-center" src={CleaningImage2} alt='Slide 3'></img>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='glassmorphism bg-white bg-opacity-80 text-center p-6 md:p-10 rounded max-w-md'>
                            <h2 className='text-sm md:text-lg font-medium'>MOVING CLEAN-UP</h2>
                            <h1 className='text-xl md:text-3xl font-bold mt-2'>Moving Cleaning</h1>
                            <p className='text-sm md:text-base mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed varius eros, eu placerat.</p>
                            <a 
                                href="/services/get-quote"
                                className="mt-8 inline-block bg-black text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-900 transition-all duration-300"
                            >
                                GET A QUOTE →
                            </a>
                        </div>
                    </div>
                </div>
                {/* Slide 4 */}
                <div className='relative w-full h-64 md:h-96'>
                    <img className="w-full h-full object-cover object-center" src={CleaningImage2} alt='Slide 4'></img>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='glassmorphism bg-white bg-opacity-80 text-center p-6 md:p-10 rounded max-w-md'>
                            <h2 className='text-sm md:text-lg font-medium'>SPECIALTY CLEANING SERVICES</h2>
                            <h1 className='text-xl md:text-3xl font-bold mt-2'>Other Services</h1>
                            <p className='text-sm md:text-base mt-4'>Whether it's carpet cleaning, window washing, or post-construction cleanup, we have the skills and tools to handle it all.</p>
                            <a 
                                href="/services/get-quote"
                                className="mt-8 inline-block bg-black text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-900 transition-all duration-300"
                            >
                                GET A QUOTE →
                            </a>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel;