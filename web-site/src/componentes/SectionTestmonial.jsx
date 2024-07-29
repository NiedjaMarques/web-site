// import React from 'react';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// const SectionTestmonial = () => {
//     const items = [person1, person2, person3, person4];

//     return (
//         <div className='bg-roxo flex justify-between items-center m-5 absolute overflow-hidden'>
//             <div className='bg-yellow-500 w-2/3 flex transition-transform translate-x-6 duration-500 ease-in-out '>

//                 <div className='bg-green-400 rounded-md p-3 m-4'>
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus dolore necessitatibus non tenetur reprehenderit modi velit, dignissimos eligendi ea autem optio ex vero atque quibusdam veniam commodi earum ipsa?
//                     </p>
//                     <div className='flex items-center py-4'>
//                         <img className='h-16 w-16 rounded-full' src={person1} alt="..." />
//                         <h1>
//                             Cak Dikin
//                         </h1>
//                         <p>
//                             CEO & Founder
//                         </p>
//                     </div>
//                 </div>

//                 <div className='bg-green-400 rounded-md p-3 m-4'>
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus dolore necessitatibus non tenetur reprehenderit modi velit, dignissimos eligendi ea autem optio ex vero atque quibusdam veniam commodi earum ipsa?
//                     </p>
//                     <div className='flex items-center py-4'>
//                         <img className='h-16 w-16 rounded-full' src={person1} alt="..." />
//                         <h1>
//                             Cak Dikin
//                         </h1>
//                         <p>
//                             CEO & Founder
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             <div className='bg-red-500 w-1/3 flex flex-col items-center m-2'>
//                 <h6>
//                     Team
//                 </h6>
//                 <h1>
//                     Our Best Expertise
//                 </h1>
//             </div>            
//         </div>

//         // <div className='py-10 mx-6 bg-slate-500 '>
//         //     <div className="relative max-w-sm bg-roxo p-6">
//         //         <Swiper
//         //             spaceBetween={50}
//         //             slidesPerView={1}
//         //             loop={true}
//         //             autoplay={{
//         //                 delay: 3000,
//         //                 disableOnInteraction: false,
//         //             }}
//         //         >
//         //             {items.map((item, index) => (
//         //                 <SwiperSlide key={index}>
//         //                     <img src={item} className="block w-full" alt={`Slide ${index + 1}`} />
//         //                 </SwiperSlide>
//         //             ))}
//         //         </Swiper>
//         //     </div> 

//         //     <div className="flex flex-col max-w-sm">
//         //         <h6 className="text-xl text-center px-4 py-2 my-4 font-semibold text-roxo bg-roxo-transparente rounded-md">
//         //             Team
//         //         </h6>
//         //         <h1 className="font-bold text-3xl text-azul-escuro mb-5">
//         //             Our Best Expertise
//         //         </h1>
//         //     </div>

//         //     <div> <h1>Testando </h1></div>
//         // </div>
//     );
// };

// export default SectionTestmonial;

import person1 from '../../public/app/view/Teams/person1.jpg';
import person2 from '../../public/app/view/Teams/person2.jpg';
import person3 from '../../public/app/view/Teams/person3.jpg';
import person4 from '../../public/app/view/Teams/person4.jpg';
// import React, { useState, useEffect } from 'react';

// import React, { useState, useEffect } from 'react';

// const Carousel = ({ slides = [person1, person2, person3, person4], interval = 3000 }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     if (slides.length === 0) return;

//     const nextSlide = () => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     };

//     const slideInterval = setInterval(nextSlide, interval);

//     return () => clearInterval(slideInterval); // Limpa o intervalo quando o componente desmonta
//   }, [slides.length, interval]);

//   // Se slides for vazio, não renderiza o carrossel
//   if (slides.length === 0) {
//     return <div>Nenhum slide disponível.</div>;
//   }

//   return (
//     <div className="relative w-full max-w-lg mx-auto overflow-hidden">
//       <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//         {slides.map((slide, index) => (
//           <div key={index} className="w-full flex-shrink-0">
//             <img src={slide} alt={`Slide ${index}`} className="w-full h-auto" />
//           </div>
//         ))}
//       </div>
//       <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 space-x-2 bg-opacity-50 bg-gray-800">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;

const Carousel = () => {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        speed: 500,
        navigation: {
            nextEl: ""
        }
    })


    return(
        <>
            <div className="card my-10">

                <div class="swiper">

                    <div class="swiper-wrapper">

                        <div class="swiper-slide">
                            <img src={person1} alt="..." />
                        </div>

                        <div class="swiper-slide">
                            <img src={person2} alt="..." />
                        </div>

                        <div class="swiper-slide">
                            <img src={person3} alt="..." />
                        </div>

                        <div class="swiper-slide">
                            <img src={person4} alt="..." />
                        </div>

                    </div>

                    <div class="swiper-pagination"></div>


                    <div class="swiper-button-prev nav-btn"></div>
                    <div class="swiper-button-next nav-btn"></div>


                    <div class="swiper-scrollbar"></div>
                </div>

            </div>
        </>
    )
}
export default Carousel;



