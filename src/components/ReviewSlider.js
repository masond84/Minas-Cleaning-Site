import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Card, CardContent, Typography, Avatar, Rating } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const reviews = [
    {
        name: "Laura Hanna",
        date: "August 2023",
        rating: 5,
        text: "Maria is excellent!  I help manage apartment buildings and she is always quick to get us on her schedule and does a great job. There was a couple of times when we had to turn an apartment very quickly and she and her crew got here very quickly and saved the day!!!",
        image: "https://lh3.googleusercontent.com/a/ACg8ocJTIjcZj7gBcZFCBPqPZLeAOzgfSl1veVE5Ravy38MUamKt0A=w36-h36-p-rp-mo-br100"
    },
    {
        name: "Newton Silva",
        date: "March 2022",
        rating: 5,
        text: "Maria and her crew were excellent. She got 2 of my rentals clean and ready to show in a day. I highly recommend her services.",
        image: "https://lh3.googleusercontent.com/a/ACg8ocL_KVjo_7K6_8qjTm252X5nRumiZYBiG-41Pua-iVg5tKlR5w=w36-h36-p-rp-mo-ba3-br100"
    },
    {
        name: "Michael Danehower",
        date: "March 2022",
        rating: 4,
        text: "I have been using this service for some time and I'm very satisfied. The house is always left  sparkling clean and the hard work shows. Very respectful of your items and trustworthy.  Highly recommended for everyone.",
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVytrpq8qALi4LOauie3Yub_wrYj_-yvGSaXqZFbDOOSHaduJ50=w36-h36-p-rp-mo-ba3-br100"
    },
    {
        name: "Victor Rudkin",
        date: "March 2022",
        rating: 5,
        text: "Very attentive. Willing to do whatever is requested even if it is something extra. Very honest. Have been working for me for over 25 years",
        image: "https://lh3.googleusercontent.com/a/ACg8ocJcFFhA03AsZ6anBngIPjDwk-wvhW6tb5KTFSsHEXy02dNT2A=w36-h36-p-rp-mo-br100"
    },
    {
        name: "Silvana Souza",
        date: "Two Years Ago",
        rating: 5,
        text: "Everything was clean and fresh and smelled great!  The service is also wonderful!!",
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWg9-oceH6cUPQrhWy5PmoRFcX_ioX4lHFTgIXa7H-_G6LUGG4LAQ=w36-h36-p-rp-mo-br100"
    },
    {
        name: "Georg Kucsko",
        date: "A Year Ago",
        rating: 5,
        text: "Fantastic and always reliable service.",
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXNUMe0RyI6A3271D9uxkRvBN-6REmEQOksIxcXFWfZbZByAAmB=w36-h36-p-rp-mo-br100"
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