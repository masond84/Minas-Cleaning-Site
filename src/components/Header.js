import React from 'react'
import { NavLink } from 'react-router-dom'
/* Assets */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/Minas-Logo-sm.svg'
/* Styles */
import '../assets/styles/header.css'

const Header = () => {
    return (
        <header className='w-full bg-white border-b border-gray-300'>
            <div className="flex justify-between items-center max-w-6xl mx-auto py-1 px-4">
                <div className="flex-1"></div>
                <figure className="flex items-center">
                    <NavLink to="/">
                        <img
                            src={logo}
                            alt='Minas Cleaning Services'
                            className='h-28'
                        />
                    </NavLink>
                </figure>
                <nav className="flex space-x-10 flex-1 justify-end">
                    <a href="https://www.facebook.com/minascleaningservicesllc/" title='Facebook'target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                        <FontAwesomeIcon icon={faFacebook} className='text-2xl' />
                    </a>
                    <a href='https://www.instagram.com/minascleaningservices/?hl=en' title='Instagram' target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                        <FontAwesomeIcon icon={faInstagram} className='text-2xl'/>
                    </a>
                </nav>
            </div>
            <nav className='bg-white border-t border-gray-300'>
                <ul className='flex justify-center items-center text-gray-700 font-normal text-base py-2'>
                    <li className='relative nav-link'>
                        <NavLink 
                            to='/' 
                            exact 
                            activeClassName="text-white bg-black px-4 py-2 rounded" 
                            className="hover:text-black transition-colors duration-200 font-montserrat text-black text-base py-2 px-8"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className='relative nav-link'>
                        <NavLink 
                            to="/services" 
                            activeClassName="text-white bg-black px-4 py-2 rounded" 
                            className="hover:text-black transition-colors duration-200 font-montserrat text-black text-base py-2 px-8"
                        >
                            Services
                        </NavLink>
                    </li>
                    <li className='relative nav-link'>
                        <NavLink 
                            to="/faqs" 
                            activeClassName="text-white bg-black px-4 py-2 rounded" 
                            className="hover:text-black transition-colors duration-200 font-montserrat text-black text-base py-2 px-8"
                        >
                            FAQS
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
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;