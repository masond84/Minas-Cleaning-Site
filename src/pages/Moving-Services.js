import React from "react"

/* Assets */
import HomeCardImage from '../assets/images/Home_Cleaning_Card.png'
import CommercialCardImage from '../assets/images/Office_Cleaning_Card.png'
import ConstructionCardImage from '../assets/images/Construction_Card_Image.jpg'
import ServicesCardImage from '../assets/images/Extra_Cleaning_Card.png'
import MovingBackground from '../assets/images/Moving-Hero.jpg'

const MovingServices = () => {
    return (
        <div className="-mb-12">
            {/* Hero Section */}
            <div
                className="relative w-full h-96 bg-cover bg-center flx items-center justify-center"
                style={{ backgroundImage: `url(${MovingBackground})`}}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative text-center z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-white pt-8">Moving & Move-In Cleaning Services</h1>
                    <p className="text-xl md:text-2xl mt-8 text-white">Thorough Cleaning For A Quick In And Out Into Your New Spaces</p>
                </div>
            </div>

            {/* Service Quote Form Section */}
            <div className="relative flex justify-center -mt-56 px-4 md:px-8">
                {/* Service Quote Form */}
                <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl'>
                    <h2 className='text-2xl font-bold mb-5 text-center font-montserrat'>Get a Free Quote</h2>
                    <form  className='space-y-4'>
                        {/* Name Row */}
                        <div className='flex space-x-4'>
                        <div className='flex-1'>
                            <label className='font-montserrat block mb-2'>First Name</label>
                            <input 
                            className='w-full p-2 border border-gray-300 rounded' 
                            />
                        </div>
                        <div className='flex-1'>
                            <label className='block mb-2'>Last Name</label>
                            <input 
                            className='w-full p-2 border border-gray-300 rounded' 
                            />
                        </div>
                        </div>
                        {/* Email Field */}
                        <div>
                        <label className='block mb-2'>Email</label>
                        <input 
                            type='email' 
                            className='w-full p-2 border border-gray-300 rounded'
                        />
                        </div>
                        {/* Telephone Field */}
                        <div>
                        <label className='block mb-2'>Phone</label>
                        <input 
                            type="tel" 
                            className='w-full p-2 border border-gray-300 rounded' 
                        />
                        </div>
                        {/* Service Type Field */}
                        <div>
                        <label className='block mb-2'>Service Type</label>
                        <select className='w-full p-2 border border-gray-300 rounded' >
                            <option value="">Select Service Type</option>
                            <option value="residential">Residential Cleaning</option>
                            <option value="commercial">Commercial Cleaning</option>
                            <option value="moving">Moving Cleaning</option>
                            <option value="moving">Other Cleaning Services</option>
                        </select>
                        </div>
                        {/* Message Field */}
                        <div>
                        <label className='block mb-2'>Message</label>
                        <textarea 
                            className='w-full p-2 border border-gray-300 rounded' 
                        ></textarea>
                        </div>
                        <button type="submit" className="w-full py-2 px-3 text-white rounded text-sm" style={{ backgroundColor: '#22C3BD' }}>
                        Get Quote
                        </button>          
                    </form>
                </div>
            </div>

            <section className="py-16 text-center">
                {/* Section Header */}
                <h2 className="text-3xl font-light mb-4 font-montserrat">Move-In/Move-Out Cleaning Services</h2>
                <p className="text-lg text-gray-600 mb-12">Make Your Move Hassle-Free with Our Various Cleaning Solutions</p>
            
                {/* Services Areas */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid--cols-3 gap-8 text-center">
                    {/* Kitchen */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 font-montserrat">Home Preperation</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li>Clean, dust,and sanitize all rooms before moving in</li>
                            <li>Remove any remnants from previous tenants</li>
                            <li>Ensure a fresh start in your new space</li>
                        </ul>
                    </div>
                    
                    {/* Bathrooms */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 font-montserrat">Deep Surface Cleaning</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li>Thorough cleaning of walls, floors, and ceilings</li>
                            <li>Removal of dust, dirt, and grime residues</li>
                            <li>Polishing of surfaces for a pristine finish</li>
                        </ul>
                    </div>
                    
                    {/* Bedrooms */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 font-montserrat">
                            Window & Glass Cleaning
                        </h3>
                        <ul className="text-gray-700 space-y-2">
                            <li>Clean all windows, mirrors, and glass surfaces</li>
                            <li>Remove stickers, paint, and construction dust</li>
                            <li>Streak-free finish for a clear view</li>
                        </ul>
                    </div>

                    {/* Entire Home */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 font-montserrat">Fixture and Appliance Cleaning</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li>Dust and polish all installed fixtures</li>
                            <li>Sanitize sinks, toilets, and bathtubs</li>
                            <li>Clean kitchen appliances and cabinetry</li>
                        </ul>
                    </div>

                    {/* Plus Extras */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 font-montserrat">Final Inspection and Touch-Ups</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li>Conduct a final walkthrough with you</li>
                            <li>Perform any necessary touch-ups</li>
                            <li>Ensure your complete satisfaction before sign-off</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center py-16 bg-[#FCFCFC] shadow-xl shadow-blue-300 border-t-1 border-blue-900">
                {/* Hero Banner */}
                <div className="relative w-full max-w-6xl bg-[#22C3BD] text-white rounded-lg p-8 mb-12 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold font-montserrat">A CLEAN SPACE TO START YOUR NEW BEGINNING</h1>
                    <a href="#book" className="mt-6 inline-block bg-slate-200 text-black font-extrabold font-montserrat py-3 px-6 rounded-full hover:bg-teal-100 transition-all duration-300">
                        SCHEDULE A CONSULTATION
                    </a>
                </div>

                {/* Information Section */}
                <div className="max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-montserrat font-light text-center mb-8">
                        Comprehensive Cleaning Services for Every Step of Your Project
                    </h2>
                    <p className="font-montserrat text-md md:text-lg mb-6 mx-auto max-w-4xl leading-relaxed">
                        Mina's Cleaning Services LLC offers thorough moving cleaning to ensure every inch of your newly built or renovated space is immaculate. We tackle the toughest cleaning challenges, leaving your space pristine and ready for occupancy.
                    </p>
                    <p className="font-montserrat text-md md:text-lg mb-6 mx-auto max-w-4xl leading-relaxed">
                        Whether you're finishing a small home renovation or completing a large commercial project, our experienced team delivers a spotless, move-in-ready environment, so you can focus on enjoying your new space without the stress of cleanup.
                    </p>
                </div>
            </section>

            <section className="py-8 bg-white text-center">
                {/* Main Header */}
                <h2 className="text-2xl md:text-3xl font-montserrat font-light text-center mb-8">Our Services</h2>

                {/* Service Cards */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* House Cleaning */}
                    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                        <img 
                            src={HomeCardImage}
                            alt="House Cleaning" 
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 font-montserrat">Home Cleaning</h3>
                            <p className="text-gray-600">
                                We offer premium cleaning services for every space in your home to suit your personal needs and the needs of your home.
                            </p>
                        </div>
                    </div>
                    
                    {/* Apartment Cleaning */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img 
                            src={CommercialCardImage}
                            alt="Apartment Cleaning" 
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 font-montserrat">Office & Commercial Cleaning</h3>
                            <p className="text-gray-600">
                                Keep your workspace tidy with our tailored office and commercial cleaning services.
                            </p>
                        </div>
                    </div>

                    {/* Standard Cleaning */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img 
                            src={ConstructionCardImage}
                            alt="Standard Cleaning" 
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 font-montserrat">Move-In & Move-Out Cleaning</h3>
                            <p className="text-gray-600">
                                Our moving cleaning services ensure that your new or renovated space is free from dust, debris, and residues, leaving it move in ready.
                            </p>
                        </div>
                    </div>

                    {/* Deep Cleaning */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img 
                            src={ServicesCardImage}
                            alt="Deep Cleaning" 
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 font-montserrat">Extra Cleaning</h3>
                            <p className="text-gray-600">
                                Choose our deep cleaning service for a thorough cleanse of every nook and cranny in your home. Perfect for first-time clients or those needing an extra level of care.
                            </p>
                        </div>
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
            </section>
        </div>
    )
}

export default MovingServices;