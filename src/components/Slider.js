import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CleaningImage1 from '../assets/images/Residential-Space-Hero.jpg'
import CleaningImage2 from '../assets/Commerical-Space.jpg'
import CleaningImage3 from '../assets/images/Moving_Cleaning.jpg'
import CleaningImage4 from '../assets/images/Other_Services_Cleaning.jpg'

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
                    <img className="w-full h-full object-cover object-center" src={CleaningImage1} alt='Residential Cleaning Services'></img>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='glassmorphism bg-white bg-opacity-80 text-center p-4 md:p-6 rounded max-w-xs sm:max-w-xs md:max-w-sm mx-4 my-8'>
                            <h2 className='text-sm sm:text-sm md:text-lg font-medium'>RESIDENTIAL CLEANING</h2>
                            <h1 className='text-lg sm:text-xl md:text-3xl font-bold mt-1 sm:mt-2 font-montserrat'>Home Cleaning</h1>
                            <p className='text-xs sm:text-sm md:text-base mt-3 sm:mt-4'>From routine cleanings to deep cleans, our residential services are designed to keep your home fresh and inviting for the ones you care about.</p>
                            <a 
                                href="/services/get-quote"
                                className="mt-6 sm:mt-8 inline-block bg-black text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-gray-900 transition-all duration-300 sm:text-sm"
                            >
                                GET A QUOTE →
                            </a>
                        </div>
                    </div>
                </div>
                {/* Slide 2 */}
                <div className='relative w-full h-64 md:h-96'>
                    <img className="w-full h-full object-cover object-center" src={CleaningImage2} alt='Commercial Cleaning Services'></img>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='glassmorphism bg-white bg-opacity-80 text-center p-4 md:p-6 rounded max-w-xs sm:max-w-xs md:max-w-sm mx-4 my-8'>
                            <h2 className='text-sm sm:text-sm md:text-lg font-medium'>COMMERCIAL CLEANING</h2>
                            <h1 className='text-lg sm:text-xl md:text-3xl font-bold mt-1 sm:mt-2 font-montserrat'>Business Cleaning</h1>
                            <p className='text-xs sm:text-sm md:text-base mt-3 sm:mt-4'>
                                Our team provides comprehensive cleaning solutions for offices, 
                                retail spaces, and more, ensuring a spotless environment for 
                                your business.
                            </p>
                            <a 
                                href="/services/get-quote"
                                className="mt-6 sm:mt-8 inline-block bg-black text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-gray-900 transition-all duration-300 sm:text-sm"
                            >
                                GET A QUOTE →
                            </a>
                        </div>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className='relative w-full h-64 md:h-96'>
                    <img className="w-full h-full object-cover object-center" src={CleaningImage3} alt='Moving Cleaning Services'></img>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='glassmorphism bg-white bg-opacity-80 text-center p-4 md:p-6 rounded max-w-xs sm:max-w-xs md:max-w-sm mx-4 my-8'>
                            <h2 className='text-sm sm:text-sm md:text-lg font-medium'>MOVING CLEAN-UP</h2>
                            <h1 className='text-lg sm:text-xl md:text-3xl font-bold mt-1 sm:mt-2 font-montserrat'>Moving Cleaning</h1>
                            <p className='text-xs sm:text-sm md:text-base mt-3 sm:mt-4'>
                                Ensure you leave your space looking its best with our moving clean up services.
                                We handle removal of debris and unwanted items leaving your place ready for move out.
                            </p>
                            <a 
                                href="/services/get-quote"
                                className="mt-6 sm:mt-8 inline-block bg-black text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-gray-900 transition-all duration-300 sm:text-sm"
                            >
                                GET A QUOTE →
                            </a>
                        </div>
                    </div>
                </div>
                {/* Slide 4 */}
                <div className='relative w-full h-64 md:h-96'>
                    <img className="w-full h-full object-cover object-center" src={CleaningImage4} alt='Other Services'></img>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='glassmorphism bg-white bg-opacity-80 text-center p-4 md:p-6 rounded max-w-xs sm:max-w-xs md:max-w-sm mx-4 my-8'>
                            <h2 className='text-sm sm:text-sm md:text-lg font-medium'>SPECIALTY CLEANING SERVICES</h2>
                            <h1 className='text-lg sm:text-xl md:text-3xl font-bold mt-1 sm:mt-2 font-montserrat'>Other Services</h1>
                            <p className='text-xs sm:text-sm md:text-base mt-3 sm:mt-4'>
                                Our specialty cleaning services are perfect for those unique jobs,
                                like carpet cleaning, window washing and more. We have the tools and
                                expertise to get it done right.
                            </p>
                            <a 
                                href="/services/get-quote"
                                className="mt-6 sm:mt-8 inline-block bg-black text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-gray-900 transition-all duration-300 sm:text-sm"
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