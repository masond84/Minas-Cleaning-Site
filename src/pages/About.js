import React, { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

/* Assets */
import imageSrc from '../assets/About-Cleaning-2.jpg'
import imageSrc2 from '../assets/About-Cleaning.jpg'

const About = () => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='flex flex-col items-center min-h-screen p-4'>

      {/* Company History Section */}
      <div className='main flex flex-wrap md:flex-nowrap max-w-screen-lg'>
        <article className='w-full md:w-1/2 p-8 md:pr-16' id='ContentZone'>
          <div id="MainContent" className="content" tabIndex="0">
              <h1 className="text-3xl font-semibold font-montserrat text-gray-00 mb-4 leading-tight">
                The History of Minas' Cleaning<sup>®</sup>
              </h1>
              <h2 className="text-1xl font-montserrat text-gray-50-600 mb-4 italic leading-relaxed">
                Our Passion To Bring You A Clean <em>and</em> Comfortable Home
              </h2>
              <p className="text-md text-gray-700 leading-relaxed">At Minas Cleaning Services, we are a proud bilingual team dedicated to delivering exceptional cleaning services to the Pittsburgh area for over 20 years. Our journey began with a simple passion: to create clean, healthy, and welcoming environments for our clients.</p>

          </div>
        </article>

        {/* Image Section */}
        <div className="w-full md:w-1/2 p-6" id="FigureZone">
          <figure id="SplitContentCollage" className="collage animate" role="presentation">
            <picture>
              <img
                src={imageSrc2}
                alt=""
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </picture>
          </figure>
        </div>
      </div>

      {/* About Us Section */}
      <div className='relative w-full max-w-full flex flex-col md:flex-row items-start my-10'>
        
        <div className="w-full md:w-1/4 p-4 flex-shrink-0" id="SplitContentWithAsideFigure">
          <figure className="single-image overflow-hidden" role="presentation">
            <img
              src={imageSrc}
              alt=""
              className="w-full h-full object-cover bg-center bg-no-repeat rounded-lg shadow-lg"
            />
          </figure>
        </div>

        {/* Main Content Section in the Middle */}
        <div className="w-full md:w-1/2 p-4" id="SplitContentWithAsideContent">
          <div id="MainContent2" className="content">
            <h3 className="text-2xl font-medium mb-8 text-gray-800 font-montserrat">How it All Began</h3>
            <p className="text-gray-600 mb-4">
              Over the years, our unwavering dedication to quality and customer satisfaction has allowed us to grow, building lasting relationships with both residential and commercial clients. We've expanded our team, ensuring that every member is trained and certified to uphold the highest standards of cleanliness and professionalism.
            </p>
            <p className="text-gray-600">
              Today, Minas Cleaning Services is known throughout Pittsburgh as a leader in the cleaning industry, offering a wide range of services that cater to the unique needs of homes, businesses, and post-construction sites. Our commitment to using eco-friendly products and our responsive, customer-focused approach have remained at the core of our business, ensuring that we continue to provide the highest level of service as we look forward to the next 20 years and beyond.            
            </p>
          </div>
        </div>

        {/* Sidebar Navigation Section on the Right */}
        <div className="w-full md:w-1/4 p-4 bg-gray-100 rounded-lg shadow-lg" id="SplitContentWithAsideSideZone">
          <header className="mb-4">
            <h4 className="text-xl font-medium text-gray-800 font-montserrat">Services We Offer</h4>
          </header>
          <ul className="space-y-2 list-disc list-inside text-gray-600">
            <li>Residential Cleaning</li>
            <li>Commercial Cleaning</li>
            <li>Airbnb Cleaning</li>
            <li>Post-Construction Cleaning</li>
            <li>Carpet Cleaning</li>
            <li>Apartment Cleaning</li>
            <li>Move-In Cleaning</li>
            <li>Move-Out Cleaning</li>
            <li>Deep Cleaning</li>
            <li>Maid Services</li>
            <li>Janitorial Services</li>
          </ul>
        </div>
      </div>
      
      {/* Accordion Section */}
      <div className='w-full max-w-5xl p-1'>
        {/* Header */}
        <h2 className='text-center text-3xl font-medium mb-8 text-gray-800 font-montserrat'>
          FAQS
        </h2>

        {/* Question 1 */}
        <Accordion 
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          className='bg-gray-100 rounded-lg shadow-lg mb-4'
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='text-blue-600'/>}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography sx={{ fontWeight: 600, fontFamily: 'Montserrat'}}>Q: Do I need to bring my own cleaning supplies?</Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-white text-gray-800 p-4 rounded-b-lg shadow-inner">
            <Typography className='text-slate-800'>
              A: No, you don’t need to worry about providing any cleaning supplies. Mina's Cleaning Services LLC brings all the necessary equipment and eco-friendly products to ensure your home is cleaned to the highest standards.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* Question 2 */}
        <Accordion 
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          className='bg-gray-100 rounded-lg shadow-lg mb-4'
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='text-blue-600'/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ fontWeight: 600, fontFamily: 'Montserrat'}}>Q: Are your services pet-friendly and eco-friendly?</Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-white text-gray-800 p-4 rounded-b-lg shadow-inner">
            <Typography className='text-slate-800'>
              A: Yes, we take pride in using pet-safe and eco-friendly cleaning products. We ensure that our cleaning methods are safe for your pets and the environment while still providing effective cleaning results.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* Question 3 */}
        <Accordion 
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
          className='bg-gray-100 rounded-lg shadow-lg mb-4'
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='text-blue-600'/>}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography sx={{ fontWeight: 600, fontFamily: 'Montserrat'}}>Q: Do I need to do anything to prepare for my cleaning visit?</Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-white text-gray-800 p-4 rounded-b-lg shadow-inner">
            <Typography className='text-slate-800'>
              A: To ensure the best results, we recommend that you tidy up personal items and any clutter before our team arrives. This allows us to focus on deep cleaning rather than organizing. If there are any specific areas you'd like us to focus on, feel free to let us know ahead of time.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* Question 4 */}
        <Accordion 
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
          className='bg-gray-100 rounded-lg shadow-lg mb-4'
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='text-blue-600'/>}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography sx={{ fontWeight: 600, fontFamily: 'Montserrat'}}>Q: How often can I schedule your cleaning services?</Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-white text-gray-800 p-4 rounded-b-lg shadow-inner">
            <Typography className='text-slate-800'>
              A: We offer flexible scheduling options to fit your needs. You can choose from weekly, bi-weekly, or monthly cleaning services. We also offer one-time deep cleaning services for special occasions or as needed.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* Question 5 */}
        <Accordion 
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
          className='bg-gray-100 rounded-lg shadow-lg mb-4'
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='text-blue-600'/>}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography sx={{ fontWeight: 600, fontFamily: 'Montserrat'}}>Q: What payment options are can I use for cleaning services</Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-white text-gray-800 p-4 rounded-b-lg shadow-inner">
            <Typography className='text-slate-800'>
              A: We offer a variety of payment options to fit varying customer needs. You can pay for our services using Cash, Venmo, PayPal, or Zelle. Simply choose the method that works best for you when arranging your quote.
            </Typography>
          </AccordionDetails>
        </Accordion>
        </div>
    </div>
  );
};

export default About;