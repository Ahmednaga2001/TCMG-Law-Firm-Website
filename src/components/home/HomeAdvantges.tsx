"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Img1 from "@/assets/one.png";
import Img2 from "@/assets/two.png";
import Img3 from "@/assets/three.png";
import Img4 from "@/assets/four.png";
import Image from 'next/image';


export default function HomeAdvantages() {

    return (
        <section className='advantages min-h-screen pt-20 bg-primary text-white font-JanatLT'>
            <div className='container mx-auto py-4 px-20'>
                <div className="advantages-content">
                    <h2 className='lg:text-[50px] font-bold text-[30px] text-center'>لماذا تختارنا وبكل ثقة؟</h2>
                    <p className='py-5 lg:text[20px] text-[18px] text-gray-300 text-center'>يمتاز مكتبنا عن غيره من مكاتب المحاماة المعتمدة الأخرى في الأخلاقيات التي تسيّر آلية العمل داخل مكتبنا، بالإضافة إلى مبادئ المحامين والشركاء العاملين في المكتب والمؤمنين بأهمية تطوير الذات على المستوى العملي والقانوني سعيًا منهم لتحويل مكتبنا لشركة محاماة دولية في مصر. فقد شهد عملاؤنا بقوة مكتبنا وثقة التعامل معنا، والمبادئ التالية ما ستجدها عند التعامل معنا</p>
                </div>
                <div className="swipper-container">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay with a delay of 2 seconds
                        speed={600}
                        loop={true}
                        slidesPerView={3} // Show only one slide at a time
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 3,
                        }}
                        modules={[EffectCoverflow, Autoplay]}

                    >
                        <SwiperSlide className='  swiper-slide'>
                            <div className='relative w-full h-[400px] '>
                                <Image className=' w-full  mx-auto' src={Img1} width={160} height={160} alt="" />
                            </div>
                            <p className='bg-primary py-3 text-[24px] text-center absolute  bottom-0 w-full z-30'>ss</p>
                        </SwiperSlide>



                    </Swiper>
                </div>

            </div>
        </section>
    );
}
