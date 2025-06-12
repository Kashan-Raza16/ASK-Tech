import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import images
import userInterfaceImage from "../../assets/img/ask logo.png"; 
import userExperienceImage from "../../assets/img/userExperienceImage.jpg"; 
import uiDesignKitImage from "../../assets/img/ask logo.png"; 

const Card = () => {
  const cardData = [
    {
      id: 1,
      image: userInterfaceImage,
      title: "User Interface",
      description:
        "We have got quite a few already made templates for better project management that you can use now.",
      buttonText: "Find out more",
      bgColor: "bg-yellow-100", 
      buttonColor: "bg-yellow-500", 
    },
    {
      id: 2,
      image: userExperienceImage,
      title: "User Experience",
      description:
        "We have got quite a few already made templates for better project management that you can use now.",
      buttonText: "Find out more",
      bgColor: "bg-indigo-100", 
      buttonColor: "bg-indigo-500", 
    },
    {
      id: 3,
      image: uiDesignKitImage,
      title: "UI Design Kit",
      description:
        "We have got quite a few already made templates for better project management that you can use now.",
      buttonText: "Find out more",
      bgColor: "bg-pink-100", // Corresponds to the image background
      buttonColor: "bg-pink-500", // Example button color, can be adjusted
    },

    {
      id: 4,
      image: userInterfaceImage,
      title: "Another Interface",
      description:
        "Another set of templates available for various project management needs. Explore now!",
      buttonText: "Learn More",
      bgColor: "bg-green-100",
      buttonColor: "bg-green-500",
    },
    {
      id: 5,
      image: userExperienceImage,
      title: "Enhanced Experience",
      description:
        "Discover tools to enhance user satisfaction and streamline your project workflows effectively.",
      buttonText: "Discover",
      bgColor: "bg-purple-100",
      buttonColor: "bg-purple-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-12">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination", 
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full max-w-6xl py-8"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="flex flex-col items-center p-8 m-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 mx-auto max-w-sm h-full">
              <div
                className={`flex items-center justify-center w-48 h-48 rounded-full ${card.bgColor} mb-8`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  {card.title}
                </h1>
                <p className="text-gray-600 text-base mb-8">
                  {card.description}
                </p>
                {card.buttonText && (
                  <button
                    className={`${card.buttonColor} text-white cursor-pointer font-medium py-3 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${card.buttonColor.replace(
                      "bg",
                      "focus:ring"
                    )} transition-all duration-300`}
                  >
                    {card.buttonText}
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation and pagination */}
      <div className="flex justify-between items-center w-full max-w-6xl mt-8 px-4 sm:px-0">
        <div className="flex items-center space-x-2 text-gray-500 font-medium">
          <span>01</span>
          <div className="h-0.5 w-8 bg-gray-300"></div>
          <span>02</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="swiper-button-prev cursor-pointer p-3 rounded-full border border-gray-300 hover:border-gray-500 transition-colors duration-200 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button className="swiper-button-next cursor-pointer p-3 rounded-full border border-gray-300 hover:border-gray-500 transition-colors duration-200 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <a href="#contact" className="text-blue-600 hover:underline">
          Contact me
        </a>
      </div>
      <div className="swiper-pagination mt-4"></div>{" "}
    </div>
  );
};

export default Card;