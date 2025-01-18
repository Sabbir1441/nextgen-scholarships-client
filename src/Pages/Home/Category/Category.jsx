
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import category1 from '../../../assets/category1.jpg';
import category2 from '../../../assets/category2.jpg';
import category3 from '../../../assets/category3.jpg';


import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                heading={'Scholarship Category'}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={category1} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Doctor </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category2} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Agriculture</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category3} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Engineering</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;