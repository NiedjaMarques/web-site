import React, {useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../index.css';
import person1 from '../../public/app/view/Teams/person1.jpg';
import person2 from '../../public/app/view/Teams/person2.jpg';
import person3 from '../../public/app/view/Teams/person3.jpg';
import person4 from '../../public/app/view/Teams/person4.jpg';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
    return(
        <div className='flex bg-roxo items-center justify-center mb-10 px-3'>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                loop={true}
                centeredSlides={true}
                autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className=""
                >
                <SwiperSlide>
                    <div className='text-start p-5 bg-white my-3 rounded-xl'>
            
                        <p className=' '>
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos repudiandae, vel nesciunt iste excepturi aperiam saepe ullam distinctio sint totam dolores voluptatem necessitatibus asperiores adipisci explicabo. Omnis, rem voluptatibus."
                        </p>
            
                        <hr className='my-5'/>
                        <div className='flex mt-5 items-center'>
                            <img className='h-16 w-16 rounded-full' src={person1} alt="..." />
                            <div className='mx-5'>
                                <h1>
                                    Cak Dikin
                                </h1>
                                <p>
                                    CEO & Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='text-start p-5 bg-white my-3 rounded-xl'>
            
                        <p className=' '>
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos repudiandae, vel nesciunt iste excepturi aperiam saepe ullam distinctio sint totam dolores voluptatem necessitatibus asperiores adipisci explicabo. Omnis, rem voluptatibus."
                        </p>
            
                        <hr className='my-5'/>
                        
                        <div className=' flex mt-5 items-center'>
                            <img className='h-16 w-16 rounded-full' src={person2} alt="..." />
                            <div className='mx-5'>
                                <h1>
                                    Cak Dikin
                                </h1>
                                <p>
                                    CEO & Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            
                <SwiperSlide>
                    <div className='text-start p-5 bg-white my-3 rounded-xl'>
            
                        <p className=' '>
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos repudiandae, vel nesciunt iste excepturi aperiam saepe ullam distinctio sint totam dolores voluptatem necessitatibus asperiores adipisci explicabo. Omnis, rem voluptatibus."
                        </p>
            
                        <hr className='my-5'/>
                        
                        <div className=' flex mt-5 items-center'>
                            <img className='h-16 w-16 rounded-full' src={person3} alt="..." />
                            <div className='mx-5'>
                                <h1>
                                    Cak Dikin
                                </h1>
                                <p>
                                    CEO & Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-start p-5 bg-white my-3 rounded-xl'>
            
                        <p className=' '>
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos repudiandae, vel nesciunt iste excepturi aperiam saepe ullam distinctio sint totam dolores voluptatem necessitatibus asperiores adipisci explicabo. Omnis, rem voluptatibus."
                        </p>
            
                        <hr className='my-5'/>
                        

                        <div className=' flex mt-5 items-center'>
                            <img className='h-16 w-16 rounded-full' src={person4} alt="..." />
                            <div className='mx-5'>
                                <h1>
                                    Cak Dikin
                                </h1>
                                <p>
                                    CEO & Founder
                                </p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='w-1/3 p-4 text-white'>
                <h1 className='text-lg font-semibold mb-4'><span className='bg-roxo-transparente rounded-md py-2 px-4'>Testmonial</span></h1>
                <p className='font-bold text-4xl mb-4'>See What Are They Say About Us</p>
                <p className='text-base font-semibold mb-5 bg-late-500'>Fusce vitae sapien eu mauris semper faucibus eget tristique lorem.</p>
            </div>
        </div>
    )
}
export default Carousel

