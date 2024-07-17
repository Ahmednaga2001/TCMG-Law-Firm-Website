"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import 'swiper/css/effect-coverflow';

import Img1 from "@/assets/one.png";
import Img2 from "@/assets/two.png";
import Img3 from "@/assets/three.png";
import Img4 from "@/assets/four.png";
import Img5 from "@/assets/homeadvfive.png";
import Img6 from "@/assets/homeadvsix.png";
import Img7 from "@/assets/homeadvseven.png";
import Image from 'next/image';

const images = [
    {
        img: Img1,
        title: "النزاهة والسرعة في تقديم الخدمات"
    },
    {
        img: Img2,
        title: "فعالية الحلول القانونية"
    },
    {
        img: Img3,
        title: "حفظ أسرار العملاء"
    },
    {
        img: Img4,
        title: "جمع الخبرات المختلفة"
    },
    {
        img: Img5,
        title: "إتمام المعاملات القانونية"
    },
    {
        img: Img6,
        title: "بناء علاقات  استراتيجية دائمة"
    },
    {
        img: Img7,
        title: "التخصص في كافة فروع القانون "
    }
]

export default function HomeAdvantages() {
    return (
        <section className='advantages min-h-screen pt-20 bg-primary text-white font-JanatLT'>
            <div className='container mx-auto py-4 px-20'>
                <div className="advantages-content">
                    <h2 className='lg:text-[50px] font-bold text-[30px] text-center'>لماذا تختارنا وبكل ثقة؟</h2>
                    <p className='py-5 lg:text-[20px] text-[18px] text-gray-300 text-center'>
                        يمتاز مكتبنا عن غيره من مكاتب المحاماة المعتمدة الأخرى في الأخلاقيات التي تسيّر آلية العمل داخل مكتبنا،
                        بالإضافة إلى مبادئ المحامين والشركاء العاملين في المكتب والمؤمنين بأهمية تطوير الذات على المستوى العملي
                        والقانوني سعيًا منهم لتحويل مكتبنا لشركة محاماة دولية في مصر. فقد شهد عملاؤنا بقوة مكتبنا وثقة التعامل معنا،
                        والمبادئ التالية ما ستجدها عند التعامل معنا
                    </p>
                </div>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay configuration
                    speed={600}
                    loop={true}
                    slidesPerView='auto'
                    
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                    }}
                    spaceBetween={50}
                    modules={[EffectCoverflow, Autoplay]} // Include Autoplay module here
                    className="mySwiper h-96"
                >
                    {
                        images.map((el) => (
                            <SwiperSlide className='  swiper-slide'>
                                <div className='h-full w-full relative'>
                                    <Image src={el.img} alt='' className='img h-full w-full block' />
                                    <motion.p className='absolute w-full  bottom-0 bg-primary text-center py-4 text-[24px]'  transition={{delay:3}} initial={{ y: "40px", opacity: 0 }} animate={{ y: 0, opacity: 1 }}>{el.title}</motion.p>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </section>
    );
}
