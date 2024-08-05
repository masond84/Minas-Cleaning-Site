import React from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='flex flex-col'>
      {/* HERO SECTION */}
      <div className='relative w-full h-96 bg-cover bg-center flex items-center justify-center text-white' style={{ backgroundImage: `url('https://luxecleaning.ca/wp-content/uploads/2023/09/DSC_7310-1024x408.jpg')`}}>
        <div className='text-center'>
          <h1 className='text-4xl font-bold font-montserrat'>Contact Us</h1>
          <p className='text-xl mt-4'>Call Us Today For A Free Cleaning Estimate!</p>
        </div>
      </div>

      {/*Contact Form Section */}
      <div className='relative flex justify-center -mt-24'>
        <div className='bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl'>
          <h1 className='text-2xl font-bold mb-5'>LET'S KEEP IN TOUCH</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            {/* First and Last Name Row */}
            <div className='flex space-x-4'>
              <div className='flex-1'>
              <label className='block mb-2'>First Name</label>
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
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;