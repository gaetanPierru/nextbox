import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Style from "../styles/SlideAudio.module.css";

export default function SliderAudio() {
  async function fetchAllMusic() {
    const res = await fetch("http://localhost:3000/api/music");
    const data = await res.json();

    setAllMusic(data);
  }

  const [allMusic, setAllMusic] = useState([]);
  useEffect(() => {
    fetchAllMusic();
  }, []);

  console.log(allMusic);

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={Style.swiper}
    >
      {allMusic.map((music) => (
        <SwiperSlide className={Style.swiperSlide} key={music.id}>
          {music.title}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
