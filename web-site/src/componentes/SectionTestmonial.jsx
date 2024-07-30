import React, {useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import person1 from '../../public/app/view/Teams/person1.jpg';
import person2 from '../../public/app/view/Teams/person2.jpg';
import person3 from '../../public/app/view/Teams/person3.jpg';
import person4 from '../../public/app/view/Teams/person4.jpg';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaStar } from "react-icons/fa6";

const Carousel = () => {
    return(
        <>
            <div className='bg-roxo py-10 grid grid-cols-1 md:grid-cols-3 gap-2 items-center'>

                <div className='p-4 text-white sm:col-span-1'>

                    <h1 className='text-lg font-semibold mb-4'>
                        <span className='bg-violet-500 rounded-md py-2 borde px-4'>
                            Testmonial
                        </span>
                    </h1>

                    <p className='font-bold text-3xl mb-4'>
                        See What Are They Say About Us
                    </p>

                    <p className='text-base mb-5'>
                        Fusce vitae sapien eu mauris semper faucibus eget tristique lorem.
                    </p>

                </div>

                <div className='flex items-center justify-center mb-10 px-3 cursor-grab sm:col-span-2'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                            el: '.swiper-pagination', // Seletor para o container da paginação
                            type: 'bullets', // Tipo de indicadores (bullets, fraction, progressbar)
                            clickable: true, // Indicadores são clicáveis
                        }}
                        breakpoints={{
                            640: {
                              slidesPerView: 2, 
                              spaceBetween: 0,
                              centeredSlides: false,
                            },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className=""
                        >
                        <SwiperSlide>
                            <div className='text-start p-5 bg-white m-3 rounded-xl'>
                
                                <p className=' bg-green-40 text-cinza-claro'>
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos repudiandae, vel nesciunt iste excepturi aperiam saepe ullam distinctio sint totam dolores voluptatem necessitatibus asperiores adipisci explicabo. Omnis, rem voluptatibus."
                                </p>
                
                                <hr className='my-5'/>
                                <div className='flex mt-5 items-center'>
                                    <img className='h-16 w-16 rounded-full bg-cover border-4 border-roxo' src={person1} alt="..." />
                                    <div className='mx-5 text-azul-escuro'>
                                        <h1 className='text-xl font-bold '>
                                            Cak Dikin
                                        </h1>
                                        <p className="text-base">
                                            CEO & Founder
                                        </p>

                                        <ul className='flex mt-1'>
                                            <li className='text-yellow-400'><FaStar/></li>
                                            <li className='text-yellow-400'><FaStar/></li>
                                            <li className='text-yellow-400'><FaStar/></li>
                                            <li className='text-yellow-400'><FaStar/></li>
                                            <li className='text-yellow-400'><FaStar/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='text-start p-5 bg-white m-3 rounded-xl'>
                
                                <p className=' bg-green-40 text-cinza-claro'>
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos repudiandae, vel nesciunt iste excepturi aperiam saepe ullam distinctio sint totam dolores voluptatem necessitatibus asperiores adipisci explicabo. Omnis, rem voluptatibus."
                                </p>
                
                                <hr className='my-5'/>
                
                                <div className=' flex mt-5 items-center'>
                                    <img className='h-16 w-16 rounded-full bg-cover border-4 border-roxo' src={person2} alt="..." />
                                    <div className='mx-5 text-azul-escuro'>
                                        <h1 className='text-xl font-bold '>
                                            Cak Dikin
                                        </h1>
                                        <p className="text-base">
                                            CEO & Founder
                                        </p>
                                        <ul className='flex mt-1'>
                                            <li className='text-yellow-400'><FaStar/></li>
                                            <li className='text-yellow-400'><FaStar/></li>
                                            <li className='text-yellow-400'><FaStar/></li>
                                            <li className='text-yellow-400'><FaStar/></li>
                                            <li className='text-yellow-400'><FaStar/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                
                        <SwiperSlide>
                            <div className='text-start p-5 bg-white m-3 rounded-xl'>
                
                                <p className=' bg-green-40 text-cinza-claro'>
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos repudiandae, vel nesciunt iste excepturi aperiam saepe ullam distinctio sint totam dolores voluptatem necessitatibus asperiores adipisci explicabo. Omnis, rem voluptatibus."
                                </p>
                
                                <hr className='my-5'/>
                
                                <div className=' flex mt-5 items-center'>
                                    <img className='h-16 w-16 rounded-full bg-cover border-4 border-roxo' src={person3} alt="..." />
                                    <div className='mx-5 text-azul-escuro'>
                                        <h1 className='text-xl font-bold '>
                                            Cak Dikin
                                        </h1>
                                        <p className="text-base">
                                            CEO & Founder
                                        </p>
                                        <ul className='flex mt-1'>
                                            <li className='text-yellow-400'><FaStar/></li>
                                            <li className='text-yellow-400'><FaStar/></li>
                                            <li className='text-yellow-400'><FaStar/></li>
                                            <li className='text-yellow-400'><FaStar/></li>
                                            <li className='text-yellow-400'><FaStar/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-start p-5 bg-white m-3 rounded-xl'>
                
                                <p className=' bg-green-40 text-cinza-claro'>
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos repudiandae, vel nesciunt iste excepturi aperiam saepe ullam distinctio sint totam dolores voluptatem necessitatibus asperiores adipisci explicabo. Omnis, rem voluptatibus."
                                </p>
                
                                <hr className='my-5'/>
                
                                <div className=' flex mt-5 items-center'>
                                    <img className='h-16 w-16 rounded-full bg-cover border-4 border-roxo' src={person4} alt="..." />
                                    <div className='mx-5 text-azul-escuro'>
                                        <h1 className='text-xl font-bold '>
                                            Cak Dikin
                                        </h1>
                                        <p className="text-base">
                                            CEO & Founder
                                        </p>
                                        <ul className='flex mt-1'>
                                            <li className='text-yellow-400'><FaStar/></li>
                                            <li className='text-yellow-400'><FaStar/></li>
                                            <li className='text-yellow-400'><FaStar/></li>
                                            <li className='text-yellow-400'><FaStar/></li>
                                            <li className='text-yellow-400'><FaStar/></li>
                                        </ul>
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
export default Carousel

