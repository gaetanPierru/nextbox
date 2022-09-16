import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Style from "../styles/SlideAudio.module.css";
import AudioPlayer from "./AudioPlayer";
import Image from "next/image";

export default function SliderAudio() {
  const fetchAllMusics = async () => {
    const res = await fetch("api/music");
    const allMusics = await res.json();
    setAllMusics(allMusics);
  };

  useEffect(() => {
    fetchAllMusics();
  }, []);

  const [allMusics, setAllMusics] = useState([]);
  const [currentMusic, setCurrentMusic] = useState({});

  const selectMusic = (e) => {
    const index = Number(e.currentTarget.dataset.id);
    console.log(allMusics[index].src);
    setCurrentMusic(allMusics[index].src);
  };

  return (
    <>
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
        {allMusics.map((music, index) => (
          <SwiperSlide className={Style.swiperSlide} key={index} >
            {
              <Image 
                //   src="http://placeimg.com/640/640/any"
                src={music.img}
                alt={music.title}
                layout="fill"
              />
            }
            <div className="title">
              <h2 className="h3" data-id={index} onClick={selectMusic}>
                {music.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <AudioPlayer music={currentMusic}/>
    </>
  );
}
