import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import category1 from '../../../assets/category1.jpg';
import category2 from '../../../assets/category2.jpg';
import category3 from '../../../assets/category3.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const categories = [
  { img: category1, title: 'Doctor' },
  { img: category2, title: 'Agriculture' },
  { img: category3, title: 'Engineering' },
];

const Category = () => {
  return (
    <section className="bg-gray-100 pt-6 pb-12">
      <SectionTitle heading="Scholarship Category" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          centeredSlides={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20, centeredSlides: false },
            640: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
            1024: { slidesPerView: 3, spaceBetween: 25, centeredSlides: true },
            1280: { slidesPerView: 4, spaceBetween: 30, centeredSlides: true },
          }}
        >
          {categories.map(({ img, title }, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-500"></div>
                <h3 className="absolute bottom-6 w-full text-center text-white text-3xl sm:text-4xl font-extrabold uppercase drop-shadow-lg">
                  {title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          background: #0A92B9;
          opacity: 0.6;
          transition: opacity 0.3s;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #087a9c;
        }
      `}</style>
    </section>
  );
};

export default Category;
