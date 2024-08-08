import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import logoblue1 from '../../public/app/view/logo/logo-blue1.png' //logo-light1
import logolight1 from '../../public/app/view/logo/logo-light1.png'
import logoblue2 from '../../public/app/view/logo/logo-blue2.png'//logo-light2
import logolight2 from '../../public/app/view/logo/logo-light2.png'//logo-light
import logoblue3 from '../../public/app/view/logo/logo-blue3.png'//logo-light3
import logolight3 from '../../public/app/view/logo/logo-light3.png'//logo-light
import logoblue4 from '../../public/app/view/logo/logo-blue4.png'//logo-light4
import logolight4 from '../../public/app/view/logo/logo-light4.png'//logo-light
import logoblue5 from '../../public/app/view/logo/logo-blue5.png'//logo-light5
import logolight5 from '../../public/app/view/logo/logo-light5.png'//logo-light
import logoblue6 from '../../public/app/view/logo/logo-blue6.png'//logo-light6
import logolight6 from '../../public/app/view/logo/logo-light6.png'//logo-light

const SectionCarrossel = () => {
    return(
        <>
            <div className="flex mt-10 container mx-auto px-10">
                <div className='flex w-full justify-around items-center '>
                    
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
                    // navigation={true}
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
                            <div className='py-5 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group'>
                                <img className='block group-hover:hidden' src={logoblue2} alt="logocarroussel" />
                                <img className='hidden group-hover:block' src={logolight2} alt="logocarroussel" />
                            </div>
                        </SwiperSlide>
    
                        <SwiperSlide>
                            <div className='py-5 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group'>
                                <img className='block group-hover:hidden' src={logoblue3} alt="logocarroussel" />
                                <img className='hidden group-hover:block' src={logolight3} alt="logocarroussel" />
                            </div>
                        </SwiperSlide>
    
                        <SwiperSlide>
                            <div className='py-5 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group'>
                                <img className='block group-hover:hidden' src={logoblue4} alt="logocarroussel" />
                                <img className='hidden group-hover:block' src={logolight4} alt="logocarroussel" />
                            </div>
                        </SwiperSlide>
    
                        <SwiperSlide>
                            <div className='py-4 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group'>
                                <img className='block group-hover:hidden' src={logoblue5} alt="logocarroussel" />
                                <img className='hidden group-hover:block' src={logolight5} alt="logocarroussel" />
                            </div>
                        </SwiperSlide>
    
                        <SwiperSlide>
                            <div className='py-6 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group'>
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


// <Swiper
// slidesPerView={6}
// spaceBetween={1}
// loop={true}
// centeredSlides={true}
// autoplay={{
// delay: 2000,
// disableOnInteraction: false,
// }}
// pagination={{
//     el: '.swiper-pagination', // Seletor para o container da paginação
//     type: 'bullets', // Tipo de indicadores (bullets, fraction, progressbar)
//     clickable: true, // Indicadores são clicáveis
// }}
// breakpoints={{
//     // 640: {
//     //   slidesPerView: 2, 
//     //   spaceBetween: 0,
//     //   centeredSlides: false,
//     // },
// }}
// modules={[Autoplay, Pagination, Navigation]}
// className='flex w-full bg-red-400'
// >
// <SwiperSlide>
//     <div className='bg-red-950 py-5 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group'>
//         <img className='block group-hover:hidden' src={logoblue1} alt="logocarroussel" />
//         <img className='hidden group-hover:block' src={logolight1} alt="logocarroussel" />
//     </div>
// </SwiperSlide>

// <SwiperSlide>
//     <div className='bg-red-950 py-5 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group'>
//         <img className='block group-hover:hidden' src={logoblue2} alt="logocarroussel" />
//         <img className='hidden group-hover:block' src={logolight2} alt="logocarroussel" />
//     </div>
// </SwiperSlide>

// <SwiperSlide>
//     <div className='bg-red-950 py-5 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group'>
//         <img className='block group-hover:hidden' src={logoblue3} alt="logocarroussel" />
//         <img className='hidden group-hover:block' src={logolight3} alt="logocarroussel" />
//     </div>
// </SwiperSlide>

// <SwiperSlide>
//     <div className='bg-red-950 py-5 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group'>
//         <img className='block group-hover:hidden' src={logoblue4} alt="logocarroussel" />
//         <img className='hidden group-hover:block' src={logolight4} alt="logocarroussel" />
//     </div>
// </SwiperSlide>

// <SwiperSlide className='bg-blue-500'>
//     <div className='bg-red-950 py-4 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group'>
//         <img className='block group-hover:hidden' src={logoblue5} alt="logocarroussel" />
//         <img className='hidden group-hover:block' src={logolight5} alt="logocarroussel" />
//     </div>
// </SwiperSlide>

// <SwiperSlide>
//     <div className='bg-red-950 py-6 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group'>
//         <img className='block group-hover:hidden' src={logoblue6} alt="logocarroussel" />
//         <img className='hidden group-hover:block' src={logolight6} alt="logocarroussel" />
//     </div>
// </SwiperSlide>

// </Swiper>