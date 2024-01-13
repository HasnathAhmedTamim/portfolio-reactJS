import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import img1 from "../../img/sidebar.png";
// import img2 from "../../img/hoc.png";
// import img3 from "../../img/ecommerce.png";
// import img4 from "../../img/musicapp.png";
import img1 from "../../img/customBanner.png";
import img2 from "../../img/customBanner.png";
import img3 from "../../img/customBanner.png";
import img4 from "../../img/customBanner.png";
import { themeContext } from "../../Context";
function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>MY Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
