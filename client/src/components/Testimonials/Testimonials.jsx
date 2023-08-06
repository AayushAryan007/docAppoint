import React from "react";
import Carousel from "react-grid-carousel";

import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";
const Testimonials = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Carousel
        cols={3}
        rows={1}
        gap={10}
        loop:true
        pagination={{ clickable: true }}
        responsiveClass:true
        breakpoints={{
          640: {
            item: 1,
            nav: true,
            spaceBetween: 0,
          },
          768: {
            item: 2,
            nav: true,
            spaceBetween: 20,
          },
          1024: {
            item: 3,
            nav: true,
            spaceBetween: 30,
          },
        }}
      >
        <Carousel.Item>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" className="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and
              they are providing the best medical services.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" className="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and
              they are providing the best medical services.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" className="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and
              they are providing the best medical services.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center justify  gap-[13px]">
              <img src={patientAvatar} alt="" className="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and
              they are providing the best medical services.
            </p>
          </div>
        </Carousel.Item>

        {/* ... */}
      </Carousel>
    </div>
  );
};

export default Testimonials;

// import React from "react";

// import { Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";

// SwiperCore.use([Pagination]);

// import patientAvatar from "../../assets/images/patient-avatar.png";
// import { HiStar } from "react-icons/hi";

// const Testimonials = () => {
//   return (
//     <div className="mt-[30px] lg:mt-[55px]">
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//           },
//         }}
//       >
//         <SwiperSlide>
// <div className="py-[30px] px-5 rounded-[13px]">
//   <div className="flex items-center gap-[13px]">
//     <img src={patientAvatar} alt="" />
//     <div>
//       <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
//         Muhibur Rahman
//       </h4>
//       <div className="flex items-center gap-[2px]">
//         <HiStar className="text-yellowColor w-[18px] h-5" />
//         <HiStar className="text-yellowColor w-[18px] h-5" />
//         <HiStar className="text-yellowColor w-[18px] h-5" />
//         <HiStar className="text-yellowColor w-[18px] h-5" />
//         <HiStar className="text-yellowColor w-[18px] h-5" />
//       </div>
//     </div>
//   </div>
// </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Testimonials;
