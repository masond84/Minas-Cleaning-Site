import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

{/* Services Page Quote Form */}
const QuoteForm = ({ defaultServiceType }) => {
    const form  = useRef();
    const [phone, setPhone] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_vhfzeuh',
            'g-quote-form',
            form.current,
            'Y9pFvWvP1G9XnfRKN',
        )
        .then((result) => {
            console.log('Email successfully sent!', result.text);
            alert('Your request has been sent successfully!');
        }, (error) => {
            console.log('Failed to send email.', error.text);
            alert('Failed to send your request, please try again later.');
        });

        e.target.reset();
    };

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
        <form ref={form} onSubmit={sendEmail} className='space-y-4'>
            {/* First Name Field */}
            <div className='flex-1'>
            <label className='font-montserrat block mb-2'>First Name</label>
            <input 
                name="firstName" 
                className='w-full p-2 border border-gray-300 rounded' 
                required 
            />
            </div>
            
            {/* Last Name Field */}
            <div className='flex-1'>
            <label className='block mb-2'>Last Name</label>
            <input 
                name="lastName" 
                className='w-full p-2 border border-gray-300 rounded' 
                required 
            />
            </div>
          
            {/* Email Field */}
            <div>
            <label className='block mb-2'>Email</label>
            <input 
                type='email' 
                name="email" 
                className='w-full p-2 border border-gray-300 rounded' 
                required 
            />
            </div>
            
            {/* Phone Field */}
            <div>
            <label className='block mb-2'>Phone</label>
            <input 
                type="tel" 
                name="phone" 
                className='w-full p-2 border border-gray-300 rounded' 
                value={phone}
                onChange={handlePhoneChange}
                required 
            />
            </div>
          
            {/* Service Type Field */}
            <div>
            <label className='block mb-2'>Service Type</label>
            <select 
                name="cleaningService" 
                className='w-full p-2 border border-gray-300 rounded' 
                defaultValue={defaultServiceType}
                required
            >
                <option value="residential">Residential Cleaning</option>
                <option value="commercial">Commercial Cleaning</option>
                <option value="moving">Moving Cleaning</option>
            </select>
            </div>
          
            {/* Message Field */}
            <div>
            <label className='block mb-2'>Message</label>
            <textarea 
                name="message" 
                className='w-full p-2 border border-gray-300 rounded' 
                required
            ></textarea>
            </div>
          
            <button 
                type="submit" 
                className="w-full py-2 px-3 text-white rounded text-sm" 
                style={{ backgroundColor: '#22C3BD' }}
            >
                Get Quote
            </button>
        </form>
    );
};

export default QuoteForm;