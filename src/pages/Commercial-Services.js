import React from "react"

/* Assets */
import HomeCardImage from '../assets/images/Home_Cleaning_Card.png'
import CommercialCardImage from '../assets/images/Office_Cleaning_Card.png'
import ConstructionCardImage from '../assets/images/Construction_Card_Image.jpg'
import ServicesCardImage from '../assets/images/Extra_Cleaning_Card.png'
import OfficeBackground from '../assets/images/Office-Space-Hero.jpg'
const CommercialServices = () => {
    return (
        <div className="-mb-12">
            {/* Hero Section */}
            <div
                className="relative w-full h-96 bg-cover bg-center flx items-center justify-center"
                style={{ backgroundImage: `url(${OfficeBackground})`}}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative text-center z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-white pt-8">Commercial Cleaning Services</h1>
                    <p className="text-xl md:text-2xl mt-8 text-white">Professional Cleaning for Office & Commercial Spaces</p>
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
                <h2 className="text-3xl font-light mb-4 font-montserrat">Commercial Cleaning </h2>
                <p className="text-lg text-gray-600 mb-12">Keep Your Business and Workspace Spotless and Professional</p>
            
                {/* Services Areas */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid--cols-3 gap-8 text-center">
                    {/* Kitchen */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 font-montserrat">Lobby & Reception Areas</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li>Dust & wipe down all surfaces</li>
                            <li>Vacuum and mop all flooring, including entrance mats</li>
                            <li>Empty and sanitize trash bins</li>
                            <li>Refresh reception seating area</li>
                            <li>Clean and disinfect door handles and light switches</li>
                            <li>Window and Door Cleaning</li>
                        </ul>
                    </div>
                    
                    {/* Bathrooms */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 font-montserrat">Office Spaces</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li>Dust & wipe down desks, shelves, and filing cabinets</li>
                            <li>Disinfect & clean office electronics</li>
                            <li>Vacuum office carpeting and spot clean stains</li>
                            <li>Organize and tidy up common office areas</li>
                            <li>Empty trash bins and replace liners</li>
                            <li>Dust and clean blinds/window treatments</li>
                        </ul>
                    </div>
                    
                    {/* Bedrooms */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 font-montserrat">Break Room & Kitchen Areas</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li>Disinfect countertops, tables, and sinks</li>
                            <li>Restock paper towels, napkins, and other essentials</li>
                            <li>Sweep and mop the floor, ensuring any spills are properly cleaned</li>
                            <li>Empty trash and recycling bins</li>
                            <li>Clean cabinet exteriors and handles</li>
                        </ul>
                    </div>

                    {/* Entire Home */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 font-montserrat">Bathrooms</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li>Clean and disinfect all sinks, toilets, and urinals</li>
                            <li>Refill soap, toilet paper, and paper towels</li>
                            <li>Clean mirrors and polish chrome fixtures</li>
                            <li>Sweep and mop the floors with disinfectant</li>
                            <li>Empty all garbages</li>
                            <li>Wipe down stall walls and doors</li>
                        </ul>
                    </div>

                    {/* Plus Extras */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 -mt-10 font-montserrat">Plus Extras</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li>Deep cleaning of high traffic areas</li>
                            <li>Floor Buffing and Cleaning</li>
                            <li>Extrior Window and Building Cleaning</li>
                            <li>Advanced Disinfection</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center py-16 bg-[#FCFCFC] shadow-xl shadow-blue-300 border-t-1 border-blue-900">
                {/* Hero Banner */}
                <div className="relative w-full max-w-6xl bg-[#22C3BD] text-white rounded-lg p-8 mb-12 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold font-montserrat">BOOST PRODUCTIVITY WITH A CLEAN WORKSPACE</h1>
                    <a href="#book" className="mt-6 inline-block bg-slate-200 text-black font-extrabold font-montserrat py-3 px-6 rounded-full hover:bg-yellow-500 transition-all duration-300">
                        SCHEDULE A CONSULTATION
                    </a>
                </div>

                {/* Information Section */}
                <div className="max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-montserrat font-light text-center mb-8">Professional Office Cleaning, Janitorial Services, and Recurring Facility Maintenance</h2>
                    <p className="font-montserrat text-md md:text-lg mb-6 mx-auto max-w-4xl leading-relaxed">
                        InsideOut Cleaning is committed to maintaining the highest standards of cleanliness in your home. 
                        Our housekeeping services encompass many tasks, leaving every corner sparkling and pristine. 
                        Our recurring cleaning service is perfect for those requiring regular maintenance, ensuring a consistently tidy environment.
                        Our experienced maid services offer personalized attention to detail, leaving you free to enjoy your space without worry.
                    </p>
                    <p className="font-montserrat text-md md:text-lg mb-6 mx-auto max-w-4xl leading-relaxed">
                        We proudly serve residents near Bellevue, Kirkland, and Redmond, WA, bringing unparalleled cleaning expertise to your doorstep.
                        Our services are tailored to meet the unique needs of these communities, ensuring a clean, healthy environment for every home.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white text-center">
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
                                Keep your apartment shining with our customizable apartment cleaning services.
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
                            <h3 className="text-xl font-bold mb-2 font-montserrat">Post Construction Cleaning</h3>
                            <p className="text-gray-600">
                                Our standard cleaning service is the perfect service for keeping your home consistently spotless.
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
                                Select a deep cleaning service if you have not had a professional cleaning service into your home before.
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
                        href="/get-a-quote"
                        className="mt-8 inline-block bg-black text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-900 transition-all duration-300"
                    >
                        GET A QUOTE →
                    </a>
                </div>
            </section>
        </div>
    )
}

export default CommercialServices;