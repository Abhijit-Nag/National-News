import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { useEffect } from "react";
import axios from "axios";

export default function Headline() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_API_KEY}/articles/headlines`);
      setData(res.data.data);
    }
    fetchData();
  }, [setData]);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >

        {data.map((data) => (

          <SwiperSlide className="swiperItem">
            {console.log(`image url of the headline section ${data.urlToImage}`)}
            <img src={data.urlToImage} alt="" />
            <p className="headerTitle">{data.title} </p>
            <span className="badgeHeader">-{data.source.name} </span>
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  );
}
