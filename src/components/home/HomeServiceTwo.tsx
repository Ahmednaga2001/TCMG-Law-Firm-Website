"use client"
import serviceTwoImg1 from "@/assets/servicefive.png"
import serviceTwoImg2 from "@/assets/servicesix.png"
import serviceTwoImg3 from "@/assets/serviceseven.jpeg"
import serviceTwoImg4 from "@/assets/serviceeight.jpeg"
import serviceTwoImg5 from "@/assets/servicenine.png"
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Image from 'next/image';


export default function HomeServiceTwo() {
    const [serviceInfo] = useState([
        {
         id : 1,
         title : 'القضايا العقارية',
         desc : 'تقدم المجموعة التجارية والبحرية خدمات قانونية رائدة حول المشكلات القانونية المتعلقة بالعقارات مثل قضايا التعويضات والحيازات العقارية وغيرها. سنقوم بدعمك بأفضل محامي عقارات بمكتبنا ليتولى قضيتك ويحقق أهدافك القانونية في القضايا العقارية وفي مجال التطوير العقاري داخل وخارج مصر.',
         img : serviceTwoImg1
        },
        {
         id : 2,
         title : 'القضايا المدنية',
         desc : 'لدى مكتبنا محامون متخصصون في القضايا المدنية مستعدون لتولي كافة أنواع القضايا الناشئة عن العقود والمعاملات المدنية مع تقديم الدعم الكافي من المرافعة والدفاع أمام المحاكم لنصرة موكلينا. فمن خلال التعاقد معنا، سيتولى أشهر محامي مدني في مكتبنا قضيتك ويحقق لك النصر من خلال خبراته ومعارفه.',
         img : serviceTwoImg2
        },
        {
         id : 3,
         title : 'القضايا الدولية',
         desc : 'نقدم الدعم الكافي من الدراسات والاستشارات لجميع عملائنا المحليين والدوليين في التقاضي عبر المحاكم الدولية. فمن خلال الخبرة في القانون الدولي، سندعمك بمحامي دولي متمرس مستعد لتولي قضاياك الدولية والعمل على تحقيق غاياتك في التحكيم التجاري الدولي.',
         img : serviceTwoImg3
        },
        {
         id : 4,
         title : 'القضايا التجارية',
         desc : 'تتطلب القضايا التجارية إلى محامين أصحاب معارف وخبرات طويلة، لذا يعد توكيل محامي تجاري من القرارات المهمة لضمان حقوق الموكل. ومع خبرة تفوق الـ 30 عامًا في القضايا التجارية، نضمن لك النصرة في هذا النوع من القضايا والذي يساعدك على تحقيق أهدافك التجارية.',
         img : serviceTwoImg4
        },
        {
         id : 5,
         title : 'القضايا الجنائية',
         desc : 'هل تبحث عن محامي جنائي يقوم بالدفاع والمرافعة أمام المحاكم الجنائية متعهدًا على نصرتك؟ مع المجموعة التجارية والبحرية سندعمك بأفضل محامي جنايات يتولى أمر القضايا الجنائية ويقوم بحضور التحقيقات أمام النيابة العامة ويركز جهده وخبرته على تحقيق النصر في قضيتك. ',
         img : serviceTwoImg5
 
        }
        
        
     ])
    return (
        <section className="service-two pt-20 bg-primary text-white font-JanatLT min-h-screen">
            <div className="container py-4 px-20 mx-auto">
                <div className="flex lg:flex-row lg:justify-between flex-col justify-center">
                    <div className="service-one-right ">
                        <h2 className=" text-[30px] w-full xl:w-1/2 lg:text-[50px] font-bold md:text-start">محامين خبراء في مجالات القانون والقضايا المختلفة</h2>
                        <p className="text-[18px] w-3/4 text-gray-300 pt-4  lg:text-start lg:text-[20px]">ما يميز مكتبنا عن مكاتب المحاماة الأخرى، هو انفرادنا بالتخصصات القانونية التي تتطلب خبرة قانونية وفكر استراتيجي من الدرجة الأولى. حيث نفخر بوجود شركائنا المتخصصين في مجالات القانون المختلفة، والمستعدون لدعم عملائنا الكرام بكل السبل الممكنة لتحقيق أهدافهم بأسرع وقت وبأعلى جودة ممكنة؛ سعياً منا لنصبح أفضل شركة محاماة في مصر في المستقبل القريب.</p>
                        <Link href="#" className="text-white py-4 flex items-center gap-4 hover:scale-110 duration-500">
                            تصفح كامل الخدمات القانونية
                            <FaArrowLeft className="" />
                        </Link>


                    </div>
                    <div className="service-one-left ">
                        <div className="scrolling-container">
                            {
                                serviceInfo.map((service) => (
                                    <div className="scrolling-content mb-6" key={service.id}>
                                        <Image src={service.img} width={400} height={200} className='h-[200px] ' alt={service.title} />
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
