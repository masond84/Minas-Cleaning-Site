import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

import ContactBackground from '../assets/Contact-Background.jpg'

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [phone, setPhone] = useState("");

  const onSubmit = (data) => {
    const finalData = { ...data, phone };

    emailjs.send(
      'service_vhfzeuh', 
      'contact-form', 
      finalData, 
      'Y9pFvWvP1G9XnfRKN'
    )
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      alert('Your message has been sent successfully!');
      reset(); // Reset the form after submission
      setPhone("");
    }, (error) => {
      console.log('Failed to send email.', error.text);
      alert('Failed to send your message, please try again later.');
    });
  }

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove all non-digit characters
    if (value.length > 3 && value.length <= 6) {
        value = `${value.slice(0, 3)}-${value.slice(3)}`;
    } else if (value.length > 6) {
        value = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6, 10)}`;
    }
    setPhone(value);
  };

  return (
    <div className='flex flex-col'>
     {/* Hero Section */}
    <div
        className="relative w-full h-96 bg-cover bg-center flx items-center justify-center"
        style={{ backgroundImage: `url(${ContactBackground})`}}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-white pt-8">Contact Us</h1>
      </div>
    </div>

      {/*Contact Form Section */}
      <div className='font-montserrat relative flex justify-center -mt-64 space-x-8 px-4 md:px-8'>
        {/* Contact Information Section */}
        <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-sm'>
          <h2 className='text-xl font-bold mb-4'>Contact Information</h2>
          <p className='mb-4'>We are here to assist you with any inquiries or issues you may have. Feel free to reach out!</p>
          <p className='font-bold'>Phone:</p>
          <p className='mb-4'>+1 412-956-7583</p>
          <p className='font-bold'>Email:</p>
          <p className='mb-4'>minascleaning05@gmail.com</p>
          <p className='font-bold'>Address:</p>
          <p className='mb-4'>Pittsburgh, PA, United States, Pennsylvania</p>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-xl'>
          <h1 className='text-2xl font-bold mb-5'>LET'S KEEP IN TOUCH</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            {/* First and Last Name Row */}
            <div className='flex space-x-4'>
              <div className='flex-1'>
              <label className='font-montserrat block mb-2'>First Name</label>
                <input name="firstName" className='w-full p-2 border border-gray-300 rounded' {...register('firstName', { required: 'First name is required' })} />
                {errors.firstName && <p className='text-red-500 text-sm mt-1'>{errors.firstName.message}</p>}
              </div>
              <div className='flex-1'>
                <label className='block mb-2'>Last Name</label>
                <input name="lastName" className='w-full p-2 border border-gray-300 rounded' {...register('lastName', { required: 'Last name is required' })} />
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
              <input 
                type="tel" 
                value={phone} 
                onChange={handlePhoneChange} 
                className='w-full p-2 border border-gray-300 rounded' 
                required
              />
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

      {/* Quote Section */}
      <div className="mt-12 bg-white text-center">
          <p className="text-2xl font-bold text-center font-montserrat">
              Let our certified staff sweat the details so you don’t have to.    
          </p>

          <a 
              href="/services/get-quote"
              className="mt-8 inline-block bg-black text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-900 transition-all duration-300"
          >
              GET A QUOTE →
          </a>
      </div>
    </div>
  );
};

export default Contact;