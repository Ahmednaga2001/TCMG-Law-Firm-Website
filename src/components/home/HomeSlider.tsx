"use client"
import { FaArrowLeft } from "react-icons/fa";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import Link from "next/link";

export default function HomeSlider() {
    const [slideInfo] = useState([
        {
            id: 1,
            title: 'استشارات قانونية بمعايير عالمية المستوى',
            desc: 'بخبرة قانونية واسعة، نقدم استشارات قانونية لجميع العملاء من أيدي نخبة من أكفأ المحامين المتمرسين وأفضل الشركاء بمستوى جديد من الحلول القانونية المتكاملة. اطلب الآن استشارة قانونية فورية وتواصل مع أفضل مستشار قانوني واحصل على الدعم القانوني لحل قضاياك وتحقيق أهدافك.',
            shape: 'shape1'
        },
        {
            id: 2,
            title: 'مكتب محاماة دولي بمعايير أداء عالمية',
            desc: 'تعد المجموعة التجارية والبحرية أكبر مكتب محاماة دولي في مصر، وهذا يرجع لحجم القضايا الكبير التي تسلمها المكتب، والعملاء الدوليين والمحليين الذين تعاملوا معنا، بالإضافة إلى حجم وقوة العلاقات العامة وبروتوكولات التعاون المرتبطة بالمكتب. وقد اتخد المكتب مقره الرئيسي في قلب مدينة القاهرة ليكون منارة لتحقيق الأهداف القانونية لكافة عملائنا الكرام. تواصل الآن مع أفضل شركة محاماة رائدة في مصر.',
            shape: 'shape2'
        }
    ]);

    return (
        <section className="bg-main-color py-20 bg-primary text-white min-h-screen font-JanatLT">
            <div className="container mx-auto p-4">
                <Swiper
                    pagination={{
                        type: 'bullets',
                        clickable: true,
                        
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    autoplay={{ delay: 3000 }}
                    speed={800}
                    loop={true}
                    style={{ '--swiper-pagination-color': '#fff', '--swiper-pagination-bullet-size': '10px' }}
                >
                    {slideInfo.map((item) => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                            <div className="container mx-auto p-4">
                                <h2 className="font-bold lg:text-[60px] lg:text-start text=center lg:w-[35vw] text-[40px] w-full">{item.title}</h2>
                                <div className="flex items-center justify-between">
                                    <div className="pt-10 lg:h-auto h-[380px]">
                                        <p className="w-2/3 lg:text-[24px] lg:text-start text-center text-[20px]">{item.desc}</p>
                                    </div>
                                    <div className={item.shape}></div>
                                </div>
                               <div>
                               <Link href="#" className="text-white py-10 flex items-center gap-4 lg:justify-start justify-center">
                                    اطلب الان استشارة فورية
                                    <FaArrowLeft className="" />
                                </Link>
                               </div>
                                {/* <div className="pt-5">
                                </div> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
