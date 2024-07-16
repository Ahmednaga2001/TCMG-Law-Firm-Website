"use client"
import serviceOneImg1 from '@/assets/serviceOne.png';
import serviceOneImg2 from "@/assets/servicetwo.png"
import serviceOneImg3 from "@/assets/servicethree.jpeg"
import serviceOneImg4 from "@/assets/servicefour.png"
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Image from 'next/image';


export default function HomeServiceOne() {
    const [serviceInfo] = useState([
        {
            id: 1,
            title: 'تأسيس الشركات',
            desc: 'هل ترغب في تأسيس شركة في مصر؟ نعمل على تقديم الدعم لأعمال الشركات المختلفة بمستوى مميز من الأداء. حيث نقدم الدعم في تأسيس الشركات في مصر والسعودية والإمارات بمختلف أنواعها، وإعداد عقود التأسيس واللوائح الداخلة، بالإضافة إلى مساعدة العملاء على اختيار نوع الشركة، وتوفير الدعم في كافة مراحل التأسيس والإعداد.',
            img: serviceOneImg1

        },
        {
            id: 2,
            title: 'الاستشارات القانونية',
            desc: 'نفخر بتقديم الاستشارات القانونية  من مستشار قانوني مُحنك مع دعم من أكبر محامين مصر المتخصصين في مجالات القانون المختلفة والمستعدين لتقديم المشورة والرأي القانوني حول القضايا المختلفة للأفراد والشركات مع تقديم أفضل الحلول الموثوقة لمشكلاتهم القانونية وهذه الخدمة لكل من يبحث عن رقم محامي للاستشارة.',
            img: serviceOneImg2
        },
        {
            id: 3,
            title: 'استثمر في مصر',
            desc: 'الاستثمار في مصر يعد فرصة مثيرة بفضل موقعها الاستراتيجي، واقتصادها المتنامي، وجهودها في تحسين بيئة الاستثمار. تقدم الحكومة دعمًا وتسهيلات للمستثمرين، والسوق المصري يوفر فرصًا متنوعة وواسعة للعملاء المحتملين.',
            img: serviceOneImg3
        },
        {
            id: 4,
            title: 'توكيل محامي',
            desc: 'توكيل المحامي هو اتفاق قانوني يمنح شخصًا آخر صلاحية تمثيلك أو تنفيذ الإجراءات القانونية نيابة عنك. يعتمد على الثقة والثقة المتبادلة ويتضمن توثيقًا رسميًا لتحديد نطاق الصلاحيات الممنوحة.',
            img: serviceOneImg4
        }
    ])
    return (
        <section className="service-one pt-20 bg-primary text-white font-JanatLT min-h-screen">
            <div className="container py-4 px-20 mx-auto">
                <div className="flex lg:flex-row lg:justify-between flex-col justify-center">
                    <div className="service-one-right ">
                        <h2 className=" text-[30px] w-full xl:w-1/2 lg:text-[50px] font-bold md:text-start">خدمات قانونية عالمية المستوى منذ 1986</h2>
                        <p className="text-[18px] w-3/4 text-gray-300 pt-4  lg:text-start lg:text-[20px]">نختصّ بتقديم أكثر من 30 خدمة قانونية بخبرات عالمية وفهم واسع للبيئة القانونية. لتقديم أفضل مستوى من الحلول القانونية على الصعيد المحلي والدولي في مكتبنا بقلب مدينة القاهرة. فمن خلال دمج خبرات فريق العمل المكون من أكثر من 40 محامي متخصصين في مجالات القانون المختلفة، تكمن قوتنا في تقديم خدمات قانونية بمعايير أداء عالمية ومستوى فاعلية ممتاز في الجودة والوقت.</p>
                        <Link href="#" className="text-white py-4 flex items-center gap-4 hover:scale-110 duration-500">
                            توجه إلي صفحة الخدمات القانونية
                            <FaArrowLeft className="" />
                        </Link>

                    </div>
                    <div className="service-one-left ">
                        <div className="scrolling-container">
                            {
                                serviceInfo.map((service) => (
                                    <div className="scrolling-content mb-6" key={service.id}>
                                        <Image src={service.img}  width={400} height={200} className='h-[200px] ' alt={service.title} />
                                        <h4 className='pt-4 font-bold text-[25px] '>{service.title}</h4>
                                        
                                        <p className='lg:w-3/4 w-full pt-4 text-gray-300'>{service.desc}</p>

                                        <Link href="#" className='flex items-center gap-4 hover:scale-x-95 duration-500 py-4 '>الذهاب الي الصفحة<FaArrowLeft className='arrow-icon' /></Link>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}
