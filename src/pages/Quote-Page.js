import React, {useRef, useState} from "react"
import emailjs from '@emailjs/browser'

const GeneralQuoteForm = () => {
    const form = useRef()
    const [phone, setPhone] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_vhfzeuh', // Your EmailJS Service ID
            'g-quote-form', // Your EmailJS Template ID
            form.current,
            'Y9pFvWvP1G9XnfRKN' // Your EmailJS Public Key
        )
        .then((result) => {
            console.log('Email successfully sent!', result.text);
            alert('Your request has been sent successfully!');
        }, (error) => {
            console.log('Failed to send email.', error.text);
            alert('Failed to send your request, please try again later.');
        });

        e.target.reset();
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
        <div 
            className="min-h-screen flex justify-center py-8"
        >
            <div className="bg-white shadow-md rounded-lg w-full max-w-xs sm:max-w-4xl p-4 sm:p-8">
                <h1 className="text-2xl sm:text-3xl font-medium mb-6 text-center font-montserrat">
                    Get a Cleaning Quote
                </h1>

                <form ref={form} onSubmit={sendEmail}>
                    {/* Contact Information Section */}
                    <div className="mb-6">
                        <h2 className="text-lg sm:text-xl font-medium font-montserrat mb-4">
                            Contact Information
                        </h2>
                        <hr className="border-gray-300 mb-4 w-3/4" />
                        <div className="grid grid-colrs-1 md:grid-cols-2 gap-4">
                            {/* Name */}
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-base font-medium mb-1 font-montserrat" htmlFor="firstName">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="border border-gray-300 rounded-lg p-2"
                                    placeholder="First"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-base font-medium mb-1 font-montserrat" htmlFor="lastName">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="border border-gray-300 rounded-lg p-2"
                                    placeholder="Last"
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-base font-medium mb-1 font-montserrat" htmlFor="phone">
                                    Phone <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="border border-gray-300 rounded-lg p-2"
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-base font-medium mb-1 font-montserrat" htmlFor="email">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="border border-gray-300 rounded-lg p-2"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Physical Address Section */}
                    <div className="mb-6">
                        <h2 className="text-lg sm:text-xl font-medium font-montserrat mb-4">
                            Physical Address
                        </h2>
                        <hr className="border-gray-300 mb-4 w-3/4" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-base font-medium mb-1 font-montserrat" htmlFor="streetAddress">
                                    Street Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="streetAddress"
                                    name="streetAddress"
                                    className="border border-gray-300 rounded-lg p-2"
                                    placeholder="Street Address"
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-xs sm:text-base font-medium mb-1 font-montserrat" htmlFor="city">
                                    City <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    className="border border-gray-300 rounded-lg p-2"
                                    placeholder="City"
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-xs sm:text-base font-medium mb-1 font-montserrat" htmlFor="apt-suite">
                                    Apt/Suite <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="apt-suite"
                                    name="apt-suite"
                                    className="border border-gray-300 rounded-lg p-2"
                                    placeholder="Apt/Suite"
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-xs sm:text-base font-medium mb-1 font-montserrat" htmlFor="province">
                                    Zip Code <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="zip"
                                    name="zip"
                                    className="border border-gray-300 rounded-lg p-2"
                                    placeholder="Zip"
                                    required
                                    pattern="^\d{5}(-\d{4})?$" // Regex for 5-digit or 9-digit zip code format
                                    title="Please enter a valid zip code."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Quote Information Section */}
                    <div className="mb-6">
                        <h2 className="text-lg sm:text-xl font-medium font-montserrat mb-4">
                            Quote Information
                        </h2>
                        <hr className="border-gray-300 mb-4 w-3/4" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             {/* Type of Cleaning Service */}
                             <div className="flex flex-col">
                                <label className="text-xs sm:text-base font-medium mb-1 font-montserrat">
                                    What type of cleaning service? <span className="text-red-500">*</span>
                                </label>
                                <div className="flex flex-wrap gap-x-4 gap-y-2">
                                    <label className="flex items-center w-1/3 mr-4 sm:mr-0 sm:w-auto">
                                        <input type="checkbox" name="cleaningService" className="mr-2" value="home" />
                                        Home
                                    </label>
                                    <label className="flex items-center w-1/3 mr-4 sm:mr-0 sm:w-auto">
                                        <input type="checkbox" name="cleaningService" className="mr-2" value="business" />
                                        Business
                                    </label>
                                    <label className="flex items-center w-1/3 mr-4 sm:mr-0 sm:w-auto">
                                        <input type="checkbox" name="cleaningService" className="mr-2" value="business" />
                                        Construction
                                    </label>
                                    <label className="flex items-center w-1/3 mr-4 sm:mr-0 sm:w-auto">
                                        <input type="checkbox" name="cleaningService" className="mr-2" value="business" />
                                        Extra
                                    </label>
                                </div>
                            </div>

                            {/* Square Footage */}
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-base font-medium mb-1 font-montserrat" htmlFor="squareFeet">
                                    How many square feet of space to be cleaned? <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="squareFeet"
                                    name="squareFeet"
                                    className="border border-gray-300 rounded-lg p-2"
                                    placeholder="Enter square footage"
                                    required
                                />
                                <span className="text-sm text-gray-500 mt-1">
                                    Not including basement - main floor & above
                                </span>
                            </div>

                            {/* Frequency of Cleaning */}
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-base font-medium mb-1 font-montserrat" htmlFor="frequency">
                                    Frequency of Cleaning <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="frequency"
                                    name="frequency"
                                    className="border border-gray-300 rounded-lg p-2"
                                    required
                                >
                                    <option value="weekly">Weekly</option>
                                    <option value="bi-weekly">Bi-Weekly</option>
                                    <option value="monthly">Monthly</option>
                                </select>
                            </div>

                            {/* Preferred Method of Entry */}
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-base font-medium mb-1 font-montserrat" htmlFor="methodOfEntry">
                                    Preferred Method of Entry <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="methodOfEntry"
                                    name="methodOfEntry"
                                    className="border border-gray-300 rounded-lg p-2"
                                    required
                                >
                                    <option value="door-code">Door Code</option>
                                    <option value="key">Key</option>
                                    <option value="lockbox">Lockbox</option>
                                </select>
                            </div>

                            {/* Preferred Cleaning Day */}
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-base font-medium mb-1 font-montserrat" htmlFor="cleaningDay">
                                    If available, which day works best for you?
                                </label>
                                <input
                                    type="date"
                                    id="cleaningDay"
                                    name="cleaningDay"
                                    className="border border-gray-300 rounded-lg p-2"
                                />
                            </div>

                            {/* Preferred Arrival Time */}
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-base font-medium mb-1 font-montserrat">
                                    What is the preferred arrival time?
                                </label>
                                <div className="flex gap-4">
                                    <label className="flex items-center">
                                        <input type="checkbox" name="cleaningTime" className="mr-2" value="anytime" />
                                        Anytime
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" name="cleaningTime" className="mr-2" value="morning" />
                                        Morning
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" name="cleaningTime" className="mr-2" value="afternoon" />
                                        Afternoon
                                    </label>
                                </div>
                                <span className="text-sm text-gray-500 mt-1">
                                    We will do our best to accommodate your request
                                </span>
                            </div>

                            {/* How Did You Hear About Us */}
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-base font-medium mb-1 font-montserrat flex items-center" htmlFor="referral">
                                    <span>How did you hear about Minas Cleaning Services?</span>
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="referral"
                                    name="referral"
                                    className="border border-gray-300 rounded-lg p-2"
                                    placeholder="Let us know"
                                    required
                                />
                            </div>

                            {/* Additional Questions */}
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-base font-medium mb-1 font-montserrat" htmlFor="questions">
                                    Any Questions?
                                </label>
                                <input
                                    type="text"
                                    id="questions"
                                    name="questions"
                                    className="border border-gray-300 rounded-lg p-2"
                                    placeholder="Your questions here"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-6">
                        <button 
                            type="submit" 
                            className="
                            bg-[#22C3BD] 
                            text-white 
                            font-semibold 
                            py-2 
                            px-6 
                            rounded-lg 
                            transition 
                            duration-300 
                            hover:bg-[#22C3BD] 
                            hover:shadow-lg 
                            focus:outline-none 
                            focus:ring-2 
                            focus:ring-offset-2 
                            focus:ring-[#22C3BD]
                            "
                        >
                            Submit
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default GeneralQuoteForm