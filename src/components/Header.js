import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
/* Assets */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/Minas-Logo-sm.svg'
/* Styles */
import '../assets/styles/header.css'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header className='w-full bg-white border-b border-gray-300'>
            <div className="flex justify-between items-center max-w-6xl mx-auto py-1 px-4">
                <div className="flex-1"></div>
                <figure className="flex items-center">
                    <NavLink to="/">
                        <img
                            src={logo}
                            alt='Minas Cleaning Services'
                            className='h-36 -mt-2 -mb-2'
                        />
                    </NavLink>
                </figure>
                <nav className="flex space-x-10 flex-1 justify-end">
                    <a href="https://www.facebook.com/profile.php?id=61561913789003" title='Facebook'target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                        <FontAwesomeIcon icon={faFacebook} className='text-2xl' />
                    </a>
                    <a href='https://www.instagram.com/minasservices?igsh=cTgyMmRodmp4Zmlg' title='Instagram' target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                        <FontAwesomeIcon icon={faInstagram} className='text-2xl'/>
                    </a>
                </nav>
            </div>
            <nav className='bg-white border-t border-gray-300'>
                <ul className='flex justify-center items-center text-gray-700 font-normal text-base py-2'>
                    <li className='relative nav-link'>
                        <NavLink 
                            to='/' 
                            activeClassName="text-white bg-black px-4 py-2 rounded" 
                            className="hover:text-black transition-colors duration-200 font-montserrat text-black text-base py-2 px-8"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className='relative nav-link group'>
                        <NavLink 
                            activeClassName="text-white bg-black px-4 py-2 rounded" 
                            className="hover:text-black transition-colors duration-200 font-montserrat text-black text-base py-2 px-8"
                        >
                            Services
                        </NavLink>
                        {/* Dropdown */}
                        <ul className='absolute left-0 hidden group-hover:block bg-white shadow-lg border border-gray-300 mt-2 w-40 dropdown-menu'>
                            <li>
                                <NavLink
                                    to="/services/residential"
                                    activeClassName="text-white bg-balack px-4 py-2 rounded"
                                    className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-100 text-center font-montserrat"
                                >
                                    Residential Cleaning
                                </NavLink>
                            </li>
                            <li><hr className="border-gray-300 mx-2 border-t-1" /></li>
                            <li>
                                <NavLink
                                    to="/services/business"
                                    activeClassName="text-white bg-black px-4 py-2 rounded"
                                    className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-100 text-center font-montserrat"
                                >
                                    Business Cleaning
                                </NavLink>
                            </li>
                            <li><hr className="border-gray-300 mx-2 border-t-1" /></li>
                            <li>
                                <NavLink
                                    to="/services/Moving"
                                    activeClassName="text-white bg-black px-4 py-2 rounded"
                                    className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-100 text-center font-montserrat"
                                >
                                    Moving Cleaning
                                </NavLink>
                            </li>
                            <li><hr className="border-gray-300 mx-2 border-t-1" /></li>
                            <li>
                                <NavLink
                                    to="/services/other-services"
                                    activeClassName="text-white bg-black px-4 py-2 rounded"
                                    className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-100 text-center font-montserrat"
                                >
                                    Other Services
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className='relative nav-link'>
                        <NavLink 
                            to="/about" 
                            activeClassName="text-white bg-black px-4 py-2 rounded" 
                            className="hover:text-black transition-colors duration-200 font-montserrat text-black text-base py-2 px-8"
                        >
                            About
                        </NavLink>
                    </li>
                    <li className='relative nav-link'>
                        <NavLink 
                            to="/contact" 
                            activeClassName="text-white bg-black px-4 py-2 rounded" 
                            className="hover:text-black transition-colors duration-200 font-montserrat text-black text-base py-2 px-4"
                        >
                            Contact
                        </NavLink>    
                        {/* Dropdown */}
                        <ul className='absolute left-0 hidden group-hover:block bg-white shadow-lg border border-gray-300 mt-2 w-40 dropdown-menu'>
                            <li>
                                <NavLink
                                    to="/services/get-quote"
                                    activeClassName="text-white bg-balack px-4 py-2 rounded"
                                    className="block px-1 py-2 text-gray-700 hover:text-black hover:bg-gray-100 text-center font-montserrat"
                                >
                                    Get A Quote
                                </NavLink>
                            </li>
                        </ul>   
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;