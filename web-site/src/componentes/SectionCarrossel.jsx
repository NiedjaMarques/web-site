import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import logoblue1 from '/app/view/logo/logo-blue1.png'
import logolight1 from '/app/view/logo/logo-light1.png'
import logoblue2 from '/app/view/logo/logo-blue2.png'
import logolight2 from '/app/view/logo/logo-light2.png'
import logoblue3 from '/app/view/logo/logo-blue3.png'
import logolight3 from '/app/view/logo/logo-light3.png'
import logoblue4 from '/app/view/logo/logo-blue4.png'
import logolight4 from '/app/view/logo/logo-light4.png'
import logoblue5 from '/app/view/logo/logo-blue5.png'
import logolight5 from '/app/view/logo/logo-light5.png'
import logoblue6 from '/app/view/logo/logo-blue6.png'
import logolight6 from '/app/view/logo/logo-light6.png'

const SectionCarrossel = () => {
    return(
        <>
            <div className="flex container mx-auto px-10">
                <div className='flex w-full justify-around items-center'>
                    
                    <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    loop={true}
                    speed={3000}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3, 
                            spaceBetween: 5,
                            centeredSlides: false,
                        },
                        768:{
                            slidesPerView: 5, 
                            spaceBetween: 0,
                            centeredSlides: false,
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className='cursor-grab'
                    >
                        <SwiperSlide>
                            <div className='py-5 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group'>
                                <img className='block group-hover:hidden' src={logoblue1} alt="logocarroussel" />
                                <img className='hidden group-hover:block' src={logolight1} alt="logocarroussel" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='py-5 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group flex items-center justify-center'>
                                <img className='block group-hover:hidden' src={logoblue2} alt="logocarroussel" />
                                <img className='hidden group-hover:block' src={logolight2} alt="logocarroussel" />
                            </div>
                        </SwiperSlide>
    
                        <SwiperSlide>
                            <div className='py-5 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group flex items-center justify-center'>
                                <img className='block group-hover:hidden' src={logoblue3} alt="logocarroussel" />
                                <img className='hidden group-hover:block' src={logolight3} alt="logocarroussel" />
                            </div>
                        </SwiperSlide>
    
                        <SwiperSlide>
                            <div className='py-5 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group flex items-center justify-center'>
                                <img className='block group-hover:hidden' src={logoblue4} alt="logocarroussel" />
                                <img className='hidden group-hover:block' src={logolight4} alt="logocarroussel" />
                            </div>
                        </SwiperSlide>
    
                        <SwiperSlide>
                            <div className='py-4 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group flex items-center justify-center'>
                                <img className='block group-hover:hidden' src={logoblue5} alt="logocarroussel" />
                                <img className='hidden group-hover:block' src={logolight5} alt="logocarroussel" />
                            </div>
                        </SwiperSlide>
    
                        <SwiperSlide>
                            <div className='py-6 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group flex items-center justify-center'>
                                <img className='block group-hover:hidden' src={logoblue6} alt="logocarroussel" />
                                <img className='hidden group-hover:block' src={logolight6} alt="logocarroussel" />
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </>
    )
}
export default SectionCarrossel