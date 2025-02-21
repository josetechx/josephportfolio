"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { Testimonials } from "./constants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ImageSlider() {
  const [testimonials] = useState(Testimonials);

  return (
    <div className="relative w-full h-full mt-4 lg:mt-0 overflow-hidden">
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={{   
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        className="w-full h-full rounded-lg p-4"
      >
        {testimonials.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center py-12">
            <div className="relative w-full max-w-3xl h-[400px] rounded-lg overflow-hidden">
              {/* Image with Overlay */}
              <div className="relative w-full h-full">
                <Image 
                  src={src.image} 
                  alt="" 
                  fill 
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
              </div>

              {/* Text on Image */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white font-montserrat">
                <p className="text-lg">{src.testimonial}</p>
                <div className="mt-4">
                  <p className="font-bold text-xl">{src.name}</p>
                  <span className="text-sm text-gray-300">{src.position}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     
    </div>
  );
}
