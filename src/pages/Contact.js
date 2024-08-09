import React from 'react'
import { useForm } from 'react-hook-form'

import ContactBackground from '../assets/Contact-Background.jpg'

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='flex flex-col'>
      {/* HERO SECTION */}
      <div className='relative w-full h-96 bg-cover bg-center flex items-center justify-center text-white' style={{ backgroundImage: `url('https://images.pexels.com/photos/4682111/pexels-photo-4682111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
        <div className='text-center'>
          <h1 className='text-4xl font-bold font-montserrat'>Contact Us</h1>
          <p className='text-xl mt-4'>Call Us Today For A Free Cleaning Estimate!</p>
        </div>
      </div>

      {/*Contact Form Section */}
      <div className='font-montserrat relative flex justify-center -mt-24 space-x-8 px-4 md:px-8'>
        {/* Contact Information Section */}
        <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-sm'>
          <h2 className='text-xl font-bold mb-4'>Contact Information</h2>
          <p className='mb-4'>We are here to assist you with any inquiries or issues you may have. Feel free to reach out!</p>
          <p className='font-bold'>Phone:</p>
          <p className='mb-4'>+1 123-456-7890</p>
          <p className='font-bold'>Email:</p>
          <p className='mb-4'>email@example.com</p>
          <p className='font-bold'>Address:</p>
          <p className='mb-4'>1234 Main St, Anytown, USA</p>
          <p className='font-bold'>Business Hours:</p>
          <p className='mb-4'>Mon-Fri: 9am - 5pm</p>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-xl'>
          <h1 className='text-2xl font-bold mb-5'>LET'S KEEP IN TOUCH</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            {/* First and Last Name Row */}
            <div className='flex space-x-4'>
              <div className='flex-1'>
              <label className='font-montserrat block mb-2'>First Name</label>
                <input className='w-full p-2 border border-gray-300 rounded' {...register('firstName', { required: 'First name is required' })} />
                {errors.firstName && <p className='text-red-500 text-sm mt-1'>{errors.firstName.message}</p>}
              </div>
              <div className='flex-1'>
                <label className='block mb-2'>Last Name</label>
                <input className='w-full p-2 border border-gray-300 rounded' {...register('lastName', { required: 'Last name is required' })} />
                {errors.lastName && <p className='text-red-500 text-sm mt-1'>{errors.lastName.message}</p>}
              </div>
            </div>
            {/* Email Field */}
            <div>
              <label className='block mb-2'>Email</label>
              <input type='email' className='w-full p-2 border border-gray-300 rounded'{...register('email', { required: 'Email is required' })} />
              {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
            </div>
            {/* Telephone Field */}
            <div>
              <label className='block mb-2'>Phone</label>
              <input type="tel" className='w-full p-2 border border-gray-300 rounded' {...register('phone', { required: 'Phone number is required' })} />
              {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone.message}</p>}
            </div>
            {/* Subject Field */}
            <div>
              <label className='block mb-2'>Subject</label>
              <input className='w-full p-2 border border-gray-300 rounded' {...register('subject', { required: 'Subject is required' })} />
              {errors.subject && <p className='text-red-500 text-sm mt-1'>{errors.subject.message}</p>}
            </div>
            {/* Message Field */}
            <div>
              <label className='block mb-2'>Message</label>
              <textarea className='w-full p-2 border border-gray-300 rounded' {...register('message', { required: 'Message is required' })}></textarea>
              {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message.message}</p>}
            </div>
            <button type="submit" className="w-full py-2 px-3 text-white rounded text-sm" style={{ backgroundColor: '#22C3BD' }}>
              Send
            </button>          
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;