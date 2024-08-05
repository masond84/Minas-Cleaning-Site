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
              <h2 className="text-1xl font-montserrat text-gray-50-600 mb-6 italic leading-relaxed">
                Delivering Home Cleaning You Can See <em>and</em> Feel
              </h2>
              <p className="text-md text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet sagittis purus, sit amet pharetra nisi tempus ut. Cras aliquet lacus ut turpis lacinia tempor. Morbi bibendum massa vel lectus facilisis, eget posuere neque efficitur. Nulla in lacus id libero interdum varius. Etiam euismod feugiat nunc, eget ultrices risus aliquet in. Fusce consectetur, nisl ac convallis dapibus, est justo viverra ipsum, at lacinia odio orci sed est.
              </p>
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
              className="w-full h-auto object-cover bg-center bg-no-repeat rounded-lg shadow-lg"
            />
          </figure>
        </div>

        {/* Main Content Section in the Middle */}
        <div className="w-full md:w-1/2 p-4" id="SplitContentWithAsideContent">
          <div id="MainContent2" className="content">
            <h3 className="text-2xl font-medium mb-8 text-gray-800 font-montserrat">How it All Began</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis nisl non elit cursus, ac interdum lectus viverra. Sed feugiat, lectus ac placerat tristique, ex est blandit lacus, nec tempor orci urna et nisi. Duis posuere dictum orci, vel tempus tortor aliquet a. Etiam tincidunt sapien id lacus cursus, ut scelerisque turpis efficitur. Integer id lacus vel dolor pretium ornare ac non eros. Phasellus tincidunt purus et diam auctor mollis. Proin tempor magna sit amet enim euismod, nec interdum magna consequat. Mauris non tortor augue. Proin id felis orci. Nulla volutpat orci id quam suscipit gravida. Fusce tempor, lorem vel pharetra lacinia, ante lectus viverra risus, ac accumsan augue felis non nunc.
            </p>
            <p className="text-gray-600">
              Nam sit amet sapien vitae libero ultricies suscipit vel non nisi. Phasellus finibus ex eget ligula consequat, id ultrices orci viverra. Vivamus volutpat nibh vitae metus convallis efficitur. Sed dignissim, nisl eu porttitor suscipit, quam lorem fermentum sapien, ut eleifend ante nulla ac erat.
            </p>
          </div>
        </div>

        {/* Sidebar Navigation Section on the Right */}
        <div className="w-full md:w-1/4 p-4 bg-gray-100 rounded-lg shadow-lg" id="SplitContentWithAsideSideZone">
          <nav className="side-nav" id="SideNav" aria-label="Navigation menu for About Us" role="menu">
            <header className="mb-4">
              <a href="/about-us/" className="block">
                <h4 className="text-xl font-medium text-gray-800 font-montserrat">About Us</h4>
              </a>
            </header>
            <ul className="space-y-2">
              <li className="level-1 active selected">
                <a href="" target="" className="text-gray-600 hover:text-red-600">Company History</a>
              </li>
              <li className="level-1 flex">
                <a href="" target="" className="text-gray-600 hover:text-red-600">Careers</a>
                <ul className="fly-list el-tab-panel hidden">
                  <li className="level-2">
                    <a href="" target="" className="text-gray-600 hover:text-red-600">Job Application</a>
                  </li>
                </ul>
              </li>
              <li className="level-1">
                <a href="" target="" className="text-gray-600 hover:text-red-600">Our Commitment</a>
              </li>
              <li className="level-1">
                <a href="" target="" className="text-gray-600 hover:text-red-600">FAQs</a>
              </li>
              <li className="level-1">
                <a href="" target="" className="text-gray-600 hover:text-red-600">Contact Us</a>
              </li>
            </ul>
          </nav>
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
            <Typography sx={{ fontWeight: 600, fontFamily: 'Montserrat'}}>Question 1</Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-white text-gray-800 p-4 rounded-b-lg shadow-inner">
            <Typography>
              Answer to Question 1
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
            <Typography sx={{ fontWeight: 600, fontFamily: 'Montserrat'}}>Question 2</Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-white text-gray-800 p-4 rounded-b-lg shadow-inner">
            <Typography>
              Answer to Question 2
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
            <Typography sx={{ fontWeight: 600, fontFamily: 'Montserrat'}}>Question 3</Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-white text-gray-800 p-4 rounded-b-lg shadow-inner">
            <Typography>
              Answer to Question 3
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
            <Typography sx={{ fontWeight: 600, fontFamily: 'Montserrat'}}>Question 4</Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-white text-gray-800 p-4 rounded-b-lg shadow-inner">
            <Typography>
              Answer to Question 4
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
            <Typography sx={{ fontWeight: 600, fontFamily: 'Montserrat'}}>Question 5</Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-white text-gray-800 p-4 rounded-b-lg shadow-inner">
            <Typography>
              Answer to Question 5
            </Typography>
          </AccordionDetails>
        </Accordion>
        </div>
    </div>
  );
};

export default About;