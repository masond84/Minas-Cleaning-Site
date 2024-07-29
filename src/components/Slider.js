import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CleaningImage1 from '../assets/Residential-Space.jpg'
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
                            <h2 className='text-sm md:text-lg font-medium'>RESIDENTIAL</h2>
                            <h1 className='text-xl md:text-3xl font-bold mt-2'>First Impressions Count</h1>
                            <p className='text-sm md:text-base mt-4'>Let us take over your residential cleaning services and we will deliver the very best clean every time!</p>
                            <button
                                style={{
                                    backgroundColor: 'var(--primary-color)',
                                    hover: {
                                        backgroundColor: 'var(--accent-color)',
                                    },
                                }} 
                                className=' text-white font-semibold px-4 py-2 mt-4 rounded transition duration-300 hover:bg-gray-800'
                                >
                                    Learn More
                            </button>
                        </div>
                    </div>
                </div>
                {/* Slide 2 */}
                <div className='relative w-full h-64 md:h-96'>
                    <img className="w-full h-full object-cover object-center" src={CleaningImage2} alt='Slide 2'></img>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='glassmorphism bg-white bg-opacity-80 text-center p-6 md:p-10 rounded max-w-md'>
                            <h2 className='text-sm md:text-lg font-medium'>RESIDENTIAL</h2>
                            <h1 className='text-xl md:text-3xl font-bold mt-2'>First Impressions Count</h1>
                            <p className='text-sm md:text-base mt-4'>Let us take over your residential cleaning services and we will deliver the very best clean every time!</p>
                            <button
                                style={{
                                    backgroundColor: 'var(--primary-color)',
                                    hover: {
                                        backgroundColor: 'var(--accent-color)',
                                    },
                                }} 
                                className=' text-white font-semibold px-4 py-2 mt-4 rounded transition duration-300 hover:bg-gray-800'
                            >                                
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className='relative w-full h-64 md:h-96'>
                    <img className="w-full h-full object-cover object-center" src={CleaningImage2} alt='Slide 3'></img>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='glassmorphism bg-white bg-opacity-80 text-center p-6 md:p-10 rounded max-w-md'>
                            <h2 className='text-sm md:text-lg font-medium'>RESIDENTIAL</h2>
                            <h1 className='text-xl md:text-3xl font-bold mt-2'>First Impressions Count</h1>
                            <p className='text-sm md:text-base mt-4'>Let us take over your residential cleaning services and we will deliver the very best clean every time!</p>
                            <button
                                style={{
                                    backgroundColor: 'var(--primary-color)',
                                    hover: {
                                        backgroundColor: 'var(--accent-color)',
                                    },
                                }} 
                                className=' text-white font-semibold px-4 py-2 mt-4 rounded transition duration-300 hover:bg-gray-800'
                            >                                
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                {/* Slide 4 */}
                <div className='relative w-full h-64 md:h-96'>
                    <img className="w-full h-full object-cover object-center" src={CleaningImage2} alt='Slide 4'></img>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='glassmorphism bg-white bg-opacity-80 text-center p-6 md:p-10 rounded max-w-md'>
                            <h2 className='text-sm md:text-lg font-medium'>RESIDENTIAL</h2>
                            <h1 className='text-xl md:text-3xl font-bold mt-2'>First Impressions Count</h1>
                            <p className='text-sm md:text-base mt-4'>Let us take over your residential cleaning services and we will deliver the very best clean every time!</p>
                            <button
                                style={{
                                    backgroundColor: 'var(--primary-color)',
                                    hover: {
                                        backgroundColor: 'var(--accent-color)',
                                    },
                                }} 
                                className=' text-white font-semibold px-4 py-2 mt-4 rounded transition duration-300 hover:bg-gray-800'
                            >                                
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel;