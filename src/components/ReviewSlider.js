import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Card, CardContent, Typography, Avatar, Rating } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const reviews = [
    {
        name: "Kelsey Clark",
        date: "March 2022",
        rating: 5,
        text: "I had Luxe suggested to me 3 years ago and I've been a happy customer ever since. The individuals/teams are pleasant, thorough and always very courteous. I have recommended this business to many of my friends, and everyone has been happy with their services!!!",
        image: "http://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png"
    },
    {
        name: "Michael Clark",
        date: "March 2022",
        rating: 1,
        text: "I had Luxe suggested to me 3 years ago and I've been a happy customer ever since. The individuals/teams are pleasant, thorough and always very courteous. I have recommended this business to many of my friends, and everyone has been happy with their services!!!",
        image: "http://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png"
    },
    {
        name: "Sammy Jones",
        date: "March 2022",
        rating: 4,
        text: "I had Luxe suggested to me 3 years ago and I've been a happy customer ever since. The individuals/teams are pleasant, thorough and always very courteous. I have recommended this business to many of my friends, and everyone has been happy with their services!!!",
        image: "http://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png"
    },
    {
        name: "Joseph Greenfeild",
        date: "March 2022",
        rating: 3,
        text: "I had Luxe suggested to me 3 years ago and I've been a happy customer ever since. The individuals/teams are pleasant, thorough and always very courteous. I have recommended this business to many of my friends, and everyone has been happy with their services!!!",
        image: "http://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png"
    },
]

const PrevArrow = (props) => {
    const { className, onClick, style } = props
    return (
        <div className={className} onClick={onClick} style={{ ...style, display: 'block', left: -25, top:100, zIndex: 1 }}>
            <ArrowBackIosIcon style={{ color: 'gray', fontSize: '30px' }} />
        </div>
    )
}


const NextArrow = (props) => {
    const { className, onClick, style } = props
    return (
        <div className={className} onClick={onClick} style={{ ...style, display: 'block', right: -25, top:100, zIndex: 1 }}>
            <ArrowForwardIosIcon style={{ color: 'gray', fontSize: '30px' }} />
        </div>
    )
}

const ReviewSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    return (
        <section className='py-4 px-4 md:px-8 lg:px-16 bg-white text-center'>
            <h2 className='text-2xl md:text-3xl font-montserrat font-light text-center mb-8'>
                Customer Reviews
            </h2>
            <div className="mx-auto max-w-4xl">
                <Slider {...settings}>
                    {reviews.map((review, index) => (
                        <div key={index} className='flex justify-center'>
                            <Card className='w-full flex flex-col md:flex-row p-4 shadow-lg my-5'>
                                <div className='flex flex-col items-center md:items-start w-1/3 p-4'>
                                    <Avatar src={review.image} alt={review.name} className='w-24 h-24 mb-4' />
                                    <Typography variant='h6'>{review.name}</Typography>
                                    <Typography variant='body2' className='text-gray-500'>{review.date}</Typography>
                                    <Rating value={review.rating} readOnly />
                                </div>
                                <CardContent className='w-2/3 p-4'>
                                    <Typography variant='body1' className='text-left'>{review.text}</Typography>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default ReviewSlider