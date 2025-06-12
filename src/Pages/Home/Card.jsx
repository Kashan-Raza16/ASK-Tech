import React from "react";
import "swiper/css";
import "../../../style.css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Card = () => {
  return (
    <div className="pl-28 pr-28 h-screen bg-white-900">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-screen pb-5 "
      >
<<<<<<< HEAD
        <SwiperSlide>
          <div className="slide1  text-center mt-5 p-5 ">
              <div className="image h-60 w-60 ml-auto mr-auto ">
                <img src=""  className="bg-red-500 ml-5 rounded-[50%] w-50  h-50" alt="" srcset="" />

              </div>
              <div className="description  text-gray-900">
                <h1>Heading</h1>

                <p className=" mt-5"> adipisicing elit. Eveniet, nihil? ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas.</p>
                <button className=" bg-red-300 text-white rounded-lg p-2 mt-2"> Know More</button>
              </div>
          
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide1  text-center mt-5 p-5 ">
              <div className="image h-60 w-60 ml-auto mr-auto ">
                <img src=""  className="bg-green-500 ml-5 rounded-[50%] w-50  h-50" alt="" srcset="" />

              </div>
              <div className="description  text-gray-900">
                <h1>Heading</h1>

                <p className=" mt-5"> adipisicing elit. Eveniet, nihil? ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas.</p>
                <button className=" bg-green-300 text-white rounded-lg p-2 mt-2"> Know More</button>
              </div>
          
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide1  text-center mt-5 p-5 ">
              <div className="image h-60 w-60 ml-auto mr-auto ">
                <img src=""  className="bg-blue-500 ml-5 rounded-[50%] w-50  h-50" alt="" srcset="" />

              </div>
              <div className="description  text-gray-900">
                <h1>Heading</h1>

                <p className=" mt-5"> adipisicing elit. Eveniet, nihil? ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas.</p>
                <button className=" bg-blue-300 text-white rounded-lg p-2 mt-2"> Know More</button>
              </div>
          
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide1  text-center mt-5 p-5 ">
              <div className="image h-60 w-60 ml-auto mr-auto ">
                <img src=""  className="bg-green-500 ml-5 rounded-[50%] w-50  h-50" alt="" srcset="" />

              </div>
              <div className="description  text-gray-900">
                <h1>Heading</h1>

                <p className=" mt-5"> adipisicing elit. Eveniet, nihil? ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas.</p>
                <button className=" bg-green-300 text-white rounded-lg p-2 mt-2"> Know More</button>
              </div>
          
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide1  text-center mt-5 p-5 ">
              <div className="image h-60 w-60 ml-auto mr-auto ">
                <img src=""  className="bg-blue-500 ml-5 rounded-[50%] w-50  h-50" alt="" srcset="" />

              </div>
              <div className="description  text-gray-900">
                <h1>Heading</h1>

                <p className=" mt-5"> adipisicing elit. Eveniet, nihil? ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas.</p>
                <button className=" bg-blue-300 text-white rounded-lg p-2 mt-2"> Know More</button>
              </div>
          
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide1  text-center mt-5 p-5 ">
              <div className="image h-60 w-60 ml-auto mr-auto ">
                <img src=""  className="bg-red-500 ml-5 rounded-[50%] w-50  h-50" alt="" srcset="" />

              </div>
              <div className="description  text-gray-900">
                <h1>Heading</h1>

                <p className=" mt-5"> adipisicing elit. Eveniet, nihil? ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas.</p>
                <button className=" bg-red-300 text-white rounded-lg p-2 mt-2"> Know More</button>
              </div>
          
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide1  text-center mt-5 p-5 ">
              <div className="image h-60 w-60 ml-auto mr-auto ">
                <img src=""  className="bg-orange-500 ml-5 rounded-[50%] w-50  h-50" alt="" srcset="" />

              </div>
              <div className="description  text-gray-900">
                <h1>Heading</h1>

                <p className=" mt-5"> adipisicing elit. Eveniet, nihil? ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas.</p>
                <button className=" bg-orange-300 text-white rounded-lg p-2 mt-2"> Know More</button>
              </div>
          
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide1  text-center mt-5 p-5 ">
              <div className="image h-60 w-60 ml-auto mr-auto ">
                <img src=""  className="bg-yellow-500 ml-5 rounded-[50%] w-50  h-50" alt="" srcset="" />

              </div>
              <div className="description  text-gray-900">
                <h1>Heading</h1>

                <p className=" mt-5"> adipisicing elit. Eveniet, nihil? ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas.</p>
                <button className=" bg-yellow-300 text-white rounded-lg p-2 mt-2"> Know More</button>
              </div>
          
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide1  text-center mt-5 p-5 ">
              <div className="image h-60 w-60 ml-auto mr-auto ">
                <img src=""  className="bg-pink-500 ml-5 rounded-[50%] w-50  h-50" alt="" srcset="" />

              </div>
              <div className="description  text-gray-900">
                <h1>Heading</h1>

                <p className=" mt-5"> adipisicing elit. Eveniet, nihil? ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas.</p>
                <button className=" bg-green-300 text-white rounded-lg p-2 mt-2"> Know More</button>
              </div>
          
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide1  text-center mt-5 p-5 ">
              <div className="image h-60 w-60 ml-auto mr-auto ">
                <img src=""  className="bg-red-500 ml-5 rounded-[50%] w-50  h-50" alt="" srcset="" />

              </div>
              <div className="description  text-gray-900">
                <h1>Heading</h1>

                <p className=" mt-5"> adipisicing elit. Eveniet, nihil? ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas.</p>
                <button className=" bg-blue-300 text-white rounded-lg p-2 mt-2"> Know More</button>
              </div>
          
          
          </div>
        </SwiperSlide>
       
=======
        <SwiperSlide className="text-gray-800">slide1</SwiperSlide>
        <SwiperSlide className="text-gray-800">Slide 2</SwiperSlide>
        <SwiperSlide className="text-gray-800">Slide 3</SwiperSlide>
        <SwiperSlide className="text-gray-800">Slide 4</SwiperSlide>
        <SwiperSlide className="text-gray-800">Slide 5</SwiperSlide>
        <SwiperSlide className="text-gray-800">Slide 6</SwiperSlide>
>>>>>>> b271047a6abd5814d2bc4403c1b1c055434bce66
      </Swiper>
    </div>
  );
};

export default Card;
