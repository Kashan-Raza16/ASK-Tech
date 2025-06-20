import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaRegHeart, FaEye, FaFilter } from 'react-icons/fa'; // Added FaFilter for the main Filters button
import p1 from '../../assets/img/p1.jpg' 
import p2 from '../../assets/img/p2.jpg' 
import p3 from '../../assets/img/p3.jpg' 
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {categories,popularOptions,projects} from '../../Redux/Storage'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
// Dummy data for project cards


function Page1() {
  const [isPopularDropdownOpen, setIsPopularDropdownOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Popular'); // For the selected filter in the dropdown
  const popularDropdownRef = useRef(null);

  

  const togglePopularDropdown = () => {
    setIsPopularDropdownOpen(!isPopularDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popularDropdownRef.current && !popularDropdownRef.current.contains(event.target)) {
        setIsPopularDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handlePopularOptionClick = (option) => {
    setActiveFilter(option);
    setIsPopularDropdownOpen(false); // Close dropdown after selection
    // Here you would typically trigger data fetching or filtering based on the selected option
    console.log(`Selected: ${option}`);
  };

  return (
    <>
      <div className="page1 w-full min-h-screen bg-white">
        {/* Project Show Case Title */}
        <div className="div  h-40 bg-red-0 mt-25 flex text-[100px] gap-1  ">
    <div className="marquee-container">
        <div className="marquee-content">
            <span><img className='w-50' src={p1} alt="" /></span>
            <span><img className='w-50' src={p2} alt="" /></span>
            <span><img className='w-50' src={p3} alt="" /></span>
            <span><img className='w-50' src={p3} alt="" /></span>
            <span><img className='w-50' src={p2} alt="" /></span>
            <span><img className='w-50' src={p1} alt="" /></span>
            <span><img className='w-50' src={p2} alt="" /></span>
            <span><img className='w-50' src={p1} alt="" /></span>
            
            
           
        </div>
       
    </div>

    </div>

        {/* Filter Section */}
        <div className="filter w-full px-5 py-4 flex flex-wrap items-center justify-between border-b border-gray-200 bg-white  z-20">
          
            {/* Popular Dropdown */}
            <div className="relative max-[450px]:w-full   " ref={popularDropdownRef}>
              <button
                className="flex items-center flex justify-between max-[450px]:w-full  space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50"
                onClick={togglePopularDropdown}
              >
                <span>{activeFilter}</span>
                <FaChevronDown className={`h-4 w-4 transition-transform duration-200 ${isPopularDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isPopularDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
                  <div className="py-1">
                    {popularOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => handlePopularOptionClick(option)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
             
                {/* Other Category Filters */}
              {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg whitespace-nowrap "
              >
                {category}
              </button>
            ))}
              
            
           
         

          {/* Filters Button (on the right) */}
          <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50 ml-auto max-[450px]:hidden">
            <FaFilter className="h-4 w-4" />
            <span>Filters</span>
          </button>
        </div>

        {/* Card Box */}
        <div className="card-box grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 p-5">




       

          {projects.map((project) => (
            <div key={project.id} className="card  bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="slide w-full  ">
              <Swiper         slidesPerView={1}
                     
                      loop={true}
                      autoplay={{
                        delay: 3300,
                        disableOnInteraction: true,
                        pauseOnMouseEnter:true,
                      }}
                      pagination={{
                        clickable: true,
                        
                      }}
                     
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper w-full max-w-6xl py-8 "
                      // breakpoints={{
                      //   640: {
                      //     slidesPerView: 1,
                      //   },
                      //   768: {
                      //     slidesPerView: 1,
                      //   },
                      //   1024: {
                      //     slidesPerView: 3,
                      //   },
                      // }}
              >
              <SwiperSlide>
                       <img src={project.image} alt={`Project ${project.id}`} className="w-full h-48 object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                       <img src={project.image} alt={`Project ${project.id}`} className="w-full h-48 object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                       <img src={project.image} alt={`Project ${project.id}`} className="w-full h-48 object-cover" />
              </SwiperSlide>
              </Swiper>
              </div>
              <div className="p-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <div className="w-6 h-6 rounded-full bg-gray-200 mr-2 flex items-center justify-center text-xs font-semibold">
                    D
                  </div> {/* Placeholder for user avatar */}
                  <span>{project.team}</span>
                </div>
                <div className="mt-3 flex justify-between items-center text-gray-500 text-sm">
                  <div className="flex items-center space-x-1">
                    <FaRegHeart className="h-4 w-4" />
                    <span>{project.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaEye className="h-4 w-4" />
                    <span>{project.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </>
  );
}

export default Page1;