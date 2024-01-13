import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";

import pic1 from "../../img/profile5.jpg";
import pic2 from "../../img/profile2.jpg";
import pic3 from "../../img/profile3.jpg";
import pic4 from "../../img/profile4.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const clients = [
    {
      img: pic1,
      review: "Good",
    },
    {
      img: pic2,
      review: "SHEI",
    },
    {
      img: pic3,
      review: "WOW SUNDOR!",
    },
    {
      img: pic4,
      review: "JOSS MAMA",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients Always Get </span>
        <span>Exceptional Work </span>
        <span>From me ...</span>

        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <img src={client.img} alt="pic" />
                <span> {client.review} </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
