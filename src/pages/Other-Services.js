import React from "react"

/* Assets */
import HomeCardImage from '../assets/images/Home_Cleaning_Card.png'
import CommercialCardImage from '../assets/images/Office_Cleaning_Card.png'
import ConstructionCardImage from '../assets/images/Construction_Card_Image.jpg'
import ServicesCardImage from '../assets/images/Extra_Cleaning_Card.png'

const OtherServices = () => {
    return (
        <div className="-mb-12">
            

            <section className="py-16 text-center">
                {/* Section Header */}
                <h2 className="text-3xl font-light mb-4 font-montserrat">Other Cleaning Services </h2>
                <p className="text-lg text-gray-600 mb-12">We Offer an Array of Other Services To ....</p>
            
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

            <section className="flex flex-col items-center py-8 bg-[#FCFCFC] shadow-xl shadow-blue-300 border-t-1 border-blue-900">
                {/* Hero Banner */}
                <div className="relative w-full max-w-sm md:max-w-5xl bg-gradient-to-b from-[#22C3BD] to-[#1a96ac] text-white rounded-lg p-8 mb-12 text-center">
                    <h1 className="text-2xl sm:text-xl md:text-3xl font-bold font-montserrat">BOOST PRODUCTIVITY WITH A CLEAN WORKSPACE</h1>
                    <a href="/services/get-quote" className="mt-8 inline-block bg-slate-200 text-black font-extrabold font-montserrat py-3 px-6 rounded-full hover:bg-teal-100 transition-all duration-300">
                        BOOK NOW
                    </a>
                </div>

                {/* Information Section */}
                <div className="max-w-xs md:max-w-4xl text-center">
                    <h2 className="text-2xl sm:text-xl md:text-3xl font-montserrat font-light text-center mb-4">Boost Productivity with a Clean Workspace</h2>
                    <p className="font-montserrat text-md sm:text-sm md:text-lg mb-6 mx-auto max-w-4xl leading-relaxed">
                        A clean environment is crucial for productivity and well-being. Let Mina's Cleaning Services take care of the dirty work so you can focus on what matters most.
                    </p>
                    <p className="font-montserrat text-md sm:text-sm md:text-lg mb-6 mx-auto max-w-4xl leading-relaxed">
                        Let us help you create a clean and comfortable environment with our professional office cleaning, janitorial services, and recurring facility maintenance. We proudly serve the Pittsburgh area, ensuring your space meets the highest standards of cleanliness.
                    </p>
                </div>
            </section>

            <section className="py-8 bg-white text-center">
                {/* Main Header */}
                <h2 className="text-2xl sm:text-xl md:text-3xl font-montserrat font-light text-center mb-8">Our Services</h2>

                {/* Service Cards */}
                <div className="max-w-xs md:max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-4 sm:px-4">
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

export default OtherServices;