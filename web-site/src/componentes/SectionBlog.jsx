import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import bg1 from '../../public/app/view/background/bg/bg1.png'
import pic1 from'../../public/app/view/blog/pic1.jpg';
import pic2 from '../../public/app/view/blog/pic2.jpg';
import pic3 from  '../../public/app/view/blog/pic3.jpg';
import { FaRegClock, FaRegComment, FaShareNodes } from "react-icons/fa6";

const SectionBlog = () => {
    return(
        <>
            <div style={{ backgroundImage: `url(${bg1})` }} className='bg-center bg-contain bg-no-repeat my-10 container mx-auto px-10'>
                <div className="flex flex-col items-center">

                    <h6 className="px-7 py-2 my-4 text-center font-semibold text-roxo bg-roxo-transparente rounded-md">
                        Blog
                    </h6>

                    <h1 className="text-center font-extrabold text-3xl text-azul-escuro mb-5">
                        Latest Blog & News
                    </h1>

                </div>

                <Swiper 
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    centeredSlides={true}
                    speed={3000}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{                         
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2, 
                            spaceBetween: 5,
                            centeredSlides: false,
                        },
                        768:{
                            slidesPerView: 3, 
                            spaceBetween: 0,
                            centeredSlides: false,
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="">

                    <SwiperSlide>
                        <div className='bg-white shadow-2xl flex flex-col rounded-xl text-center m-4'>
                            <img src={pic1} className='rounded-t-xl'  alt="..." />

                            <h5 className="text-azul-escuro font-extrabold my-5 px-5">
                                Accusantium qui laborum mollitia, aliquam aspernatur reiciendis
                            </h5>

                            <p className="text-cinza-claro px-5 text-sm border-b pb-5">
                                Adipisicing elit. Dicta facilis ipsa, distinctio praesentium reiciendis numquam, minima animi ut nobis odio.
                            </p>
            
                            <div className='flex justify-between items-center p-5 text-roxo'>

                                <div className='flex space-x-3 items-center'>
                                    <FaRegClock />
                                    <p className='text-sm text-cinza-escuro'>7 March, 2020</p> 
                                </div>                                   

                                <div className='flex items-center space-x-2'>
                                    <FaRegComment />
                                    <p className='pr-2'>
                                        15
                                    </p>
                                    <FaShareNodes />
                                </div>
                                                                    
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='bg-white shadow-2xl flex flex-col rounded-xl text-center m-4'>
                            <img src={pic2} className='rounded-t-xl'  alt="..." />

                            <h5 className="text-azul-escuro font-extrabold my-5 px-5">
                                Accusantium qui laborum mollitia, aliquam aspernatur reiciendis
                            </h5>

                            <p className="text-cinza-claro px-5 text-sm border-b pb-5">
                                Adipisicing elit. Dicta facilis ipsa, distinctio praesentium reiciendis numquam, minima animi ut nobis odio.
                            </p>
            
                            <div className='flex justify-between items-center p-5 text-roxo'>

                                <div className='flex space-x-3 items-center'>
                                    <FaRegClock />
                                    <p className='text-sm text-cinza-escuro'>7 March, 2020</p> 
                                </div>                                   

                                <div className='flex items-center space-x-2'>
                                    <FaRegComment />
                                    <p className='pr-2'>
                                        15
                                    </p>
                                    <FaShareNodes />
                                </div>
                                                                    
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='bg-white shadow-2xl flex flex-col rounded-xl text-center m-4'>
                            <img src={pic3} className='rounded-t-xl'  alt="..." />

                            <h5 className="text-azul-escuro font-extrabold my-5 px-5">
                                Accusantium qui laborum mollitia, aliquam aspernatur reiciendis
                            </h5>

                            <p className="text-cinza-claro px-5 text-sm border-b pb-5">
                                Adipisicing elit. Dicta facilis ipsa, distinctio praesentium reiciendis numquam, minima animi ut nobis odio.
                            </p>
            
                            <div className='flex justify-between items-center p-5 text-roxo'>

                                <div className='flex space-x-3 items-center'>
                                    <FaRegClock />
                                    <p className='text-sm text-cinza-escuro'>7 March, 2020</p> 
                                </div>                                   

                                <div className='flex items-center space-x-2'>
                                    <FaRegComment />
                                    <p className='pr-2'>
                                        15
                                    </p>
                                    <FaShareNodes />
                                </div>
                                                                    
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='bg-white shadow-2xl flex flex-col rounded-xl text-center m-4'>
                            <img src={pic1} className='rounded-t-xl'  alt="..." />

                            <h5 className="text-azul-escuro font-extrabold my-5 px-5">
                                Accusantium qui laborum mollitia, aliquam aspernatur reiciendis
                            </h5>

                            <p className="text-cinza-claro px-5 text-sm border-b pb-5">
                                Adipisicing elit. Dicta facilis ipsa, distinctio praesentium reiciendis numquam, minima animi ut nobis odio.
                            </p>
            
                            <div className='flex justify-between items-center p-5 text-roxo'>

                                <div className='flex space-x-3 items-center'>
                                    <FaRegClock />
                                    <p className='text-sm text-cinza-escuro'>7 March, 2020</p> 
                                </div>                                   

                                <div className='flex items-center space-x-2'>
                                    <FaRegComment />
                                    <p className='pr-2'>
                                        15
                                    </p>
                                    <FaShareNodes />
                                </div>
                                                                    
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='bg-white shadow-2xl flex flex-col rounded-xl text-center m-4'>
                            <img src={pic2} className='rounded-t-xl'  alt="..." />

                            <h5 className="text-azul-escuro font-extrabold my-5 px-5">
                                Accusantium qui laborum mollitia, aliquam aspernatur reiciendis
                            </h5>

                            <p className="text-cinza-claro px-5 text-sm border-b pb-5">
                                Adipisicing elit. Dicta facilis ipsa, distinctio praesentium reiciendis numquam, minima animi ut nobis odio.
                            </p>
            
                            <div className='flex justify-between items-center p-5 text-roxo'>

                                <div className='flex space-x-3 items-center'>
                                    <FaRegClock />
                                    <p className='text-sm text-cinza-escuro'>7 March, 2020</p> 
                                </div>                                   

                                <div className='flex items-center space-x-2'>
                                    <FaRegComment />
                                    <p className='pr-2'>
                                        15
                                    </p>
                                    <FaShareNodes />
                                </div>
                                                                    
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='bg-white shadow-2xl flex flex-col rounded-xl text-center m-4'>
                            <img src={pic3} className='rounded-t-xl'  alt="..." />

                            <h5 className="text-azul-escuro font-extrabold my-5 px-5">
                                Accusantium qui laborum mollitia, aliquam aspernatur reiciendis
                            </h5>

                            <p className="text-cinza-claro px-5 text-sm border-b pb-5">
                                Adipisicing elit. Dicta facilis ipsa, distinctio praesentium reiciendis numquam, minima animi ut nobis odio.
                            </p>
            
                            <div className='flex justify-between items-center p-5 text-roxo'>

                                <div className='flex space-x-3 items-center'>
                                    <FaRegClock />
                                    <p className='text-sm text-cinza-escuro'>7 March, 2020</p> 
                                </div>                                   

                                <div className='flex items-center space-x-2'>
                                    <FaRegComment />
                                    <p className='pr-2'>
                                        15
                                    </p>
                                    <FaShareNodes />
                                </div>
                                                                    
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>
        </>
    )
}
export default SectionBlog