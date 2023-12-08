import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { personalPictures } from "../assets/lib/data";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const PicturesComponent: React.FC = () => {
  return (
    <Swiper
      spaceBetween={100}
      centeredSlides={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-1/2 pt-32 relative z-2 pr-20 pb-32 pl-20 max-lg:w-full max-lg:pt-16 max-lg:pb-16 max-lg:pl-0 max-lg:pr-0"
    >
      {personalPictures.map((item, index) => (
        <SwiperSlide
          className="bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all text-left max-lg:p-10 cursor-grab"
          key={index}
        >
          <div className="picture-content">
            <img src={item.image} alt={`Picture ${index + 1}`} className="w-full" />
            <h3 className="text-[--orange] text-center max-lg:text-left break-words">{item.title}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PicturesComponent;
