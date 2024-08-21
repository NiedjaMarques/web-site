import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import person1 from '../../public/app/view/Teams/person1.jpg'
import person2 from '../../public/app/view/Teams/person2.jpg'
import person3 from '../../public/app/view/Teams/person3.jpg'
import person4 from '../../public/app/view/Teams/person4.jpg'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const SectionTeam = () => {
    return(
        <>
            <div className='container mx-auto px-10 my-12'>
                <div className="flex flex-col items-center">

                    <h6 className="px-4 py-2 my-4 text-center font-semibold text-roxo bg-roxo-transparente rounded-md">
                        Team
                    </h6>

                    <h1 className="text-center font-bold text-3xl text-azul-escuro mb-5">
                        Our Best Expertise
                    </h1>

                </div>

                <div className='flex items-center justify-center pb-10'>

                    <Swiper 
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        640: {
                            slidesPerView: 3, 
                            spaceBetween: 5,
                            centeredSlides: false,
                        },
                    }}
                    className='cursor-grab'>

                        <SwiperSlide>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden m-5">

                                <img src={person1} alt="img person1" className="rounded-md"/>

                                <div className="p-6">

                                    <h2 className="text-xl font-bold text-azul-escuro">Alina Jia</h2>

                                    <p className="text-azul-escuro font-semibold">Senior Designer</p>

                                    <div className="flex mt-4 space-x-2">

                                        <a href="#" className="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                            <FaFacebookF />
                                        </a>
                                        <a href="#" className="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                            <FaInstagram/>
                                        </a>
                                        <a href="#" className="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                            <FaTwitter/>
                                        </a>
                                        
                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden m-5">

                                <img src={person2} alt="img person2" className="rounded-md"/>

                                <div className="p-6">

                                    <h2 className="text-xl font-bold text-azul-escuro">Suresh Doe</h2>

                                    <p className="text-azul-escuro font-semibold">Senior Designer</p>

                                    <div className="flex mt-4 space-x-2">

                                        <a href="#" className="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                            <FaFacebookF />
                                        </a>
                                        <a href="#" className="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                            <FaInstagram/>
                                        </a>
                                        <a href="#" className="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                            <FaTwitter/>
                                        </a>

                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden m-5">

                                <img src={person3} alt="img person3" className="rounded-md"/>

                                <div className="p-6">
                            
                                    <h2 className="text-xl font-bold text-azul-escuro">Ashley Davis</h2>

                                    <p className="text-azul-escuro font-semibold">Senior Designer</p>

                                    <div className="flex mt-4 space-x-2">

                                        <a href="#" className="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                            <FaFacebookF />
                                        </a>
                                        <a href="#" className="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                            <FaInstagram/>
                                        </a>
                                        <a href="#" className="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                            <FaTwitter/>
                                        </a>

                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden m-5">

                                <img src={person4} alt="img person5" className="rounded-md"/>

                                <div className="p-6">

                                    <h2  className="text-xl font-bold text-azul-escuro">Michael Johnson</h2>

                                    <p className="text-azul-escuro font-semibold">Senior Designer</p>

                                    <div className="flex mt-4 space-x-2">

                                        <a href="#" className="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                            <FaFacebookF />
                                        </a>
                                        <a href="#" className="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                            <FaInstagram/>
                                        </a>
                                        <a href="#" className="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                            <FaTwitter/>
                                        </a>

                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden m-5">

                                <img src={person1} alt="img person1" className="rounded-md"/>

                                <div className="p-6">

                                    <h2  className="text-xl font-bold text-azul-escuro">Elizabeth Anderson</h2>
                            
                                    <p className="text-azul-escuro font-semibold">Senior Designer</p>
                            
                                    <div className="flex mt-4 space-x-2">
                                        <a href="#" className="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                            <FaFacebookF />
                                        </a>
                                        <a href="#" className="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                            <FaInstagram/>
                                        </a>
                                        <a href="#" className="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                            <FaTwitter/>
                                        </a>

                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden m-5">

                                <img src={person2} alt="img person2" className="rounded-md"/>

                                <div className="p-6">

                                    <h2  className="text-xl font-bold text-azul-escuro">Charles Taylor</h2>

                                    <p className="text-azul-escuro font-semibold">Senior Designer</p>

                                    <div className="flex mt-4 space-x-2">

                                        <a href="#" className="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                            <FaFacebookF />
                                        </a>
                                        <a href="#" className="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                            <FaInstagram/>
                                        </a>
                                        <a href="#" className="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                            <FaTwitter/>
                                        </a>

                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>
                        
                    </Swiper>

                </div>

            </div>
        </>
    )
}
export default SectionTeam