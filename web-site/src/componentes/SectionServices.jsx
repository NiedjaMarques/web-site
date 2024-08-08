// import img1 from '../../public/app/view/flaticon/clickstream.png'
// import img2 from '../../public/app/view/flaticon/cloud-computing.png'
// import img3 from '../../public/app/view/flaticon/dashboard.png'
// import { FaX, FaCircle, FaRegSquare, FaO, FaMountain  } from "react-icons/fa6";

// const SectionServices = () => {
//     return(
//         <>
//             <div className="py-10 container mx-auto px-10">

//                 <div className="flex flex-col items-center">

//                     <h6 className="text-xl px-4 py-2 my-4 text-center font-semibold text-roxo bg-roxo-transparente rounded-md">
//                         Services
//                     </h6>

//                     <h1 className="text-center font-bold text-3xl text-azul-escuro mb-5">
//                         Provide Awesome Service To You
//                     </h1>

//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-around text-center">

//                     <div className="hover:border hover:shadow-sm hover:shadow-yellow-600 items-center flex flex-col p-5 rounded-xl hover:drop-shadow-2xl">
//                         <div className="mb-5 bg-yellow-400 rounded-full p-4">
//                             <img className="w-16 h-16" src={img1} alt="" />
//                         </div>

//                         <h1 className="pb-3 text-azul-escuro font-bold text-2xl">
//                             Strategy & Research
//                         </h1>

//                         <p className="text-md text-cinza-claro font-medium mb-5">
//                             Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.
//                         </p>
//                     </div>

//                     <div className="hover:border hover:shadow-sm hover:shadow-red-600 items-center flex flex-col p-5 rounded-xl hover:drop-shadow-2xl">
//                         <div className="mb-5 bg-red-600 rounded-full p-4">
//                             <img className="w-16 h-16" src={img2} alt="" />
//                         </div>

//                         <h1 className="pb-3 text-azul-escuro font-bold text-2xl">
//                             Web Development
//                         </h1>

//                         <p className="text-md text-cinza-claro mb-5 font-medium">
//                             Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.
//                         </p>
//                     </div>
                    
//                     <div className="hover:border hover:shadow-sm hover:shadow-green-600  items-center flex flex-col p-5 rounded-xl hover:drop-shadow-2xl">
//                         <div className="mb-5 bg-green-600 rounded-full p-4">
//                             <img className="w-16 h-16" src={img3} alt="" />
//                         </div>

//                         <h1 className="pb-3 text-azul-escuro font-bold text-2xl">
//                             Web Solution
//                         </h1>

//                         <p className="text-md text-cinza-claro mb-5 font-medium">
//                             Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.
//                         </p>
//                     </div>

//                     <div className="absolute text-red-500">
//                         <FaX/>
//                     </div>

//                     <div className="absolute text-green-500">
//                         <FaCircle/>
//                     </div>

//                     <div className="absolute ">
//                         <FaRegSquare/>
//                     </div>

//                     <div className="absolute text-blue-500">
//                         <FaO/>
//                     </div>

//                     <div className="absolute text-blue-500">
//                         <FaMountain/>
//                     </div>

//                 </div>

//             </div>
//         </>
//     )
// }
// export default SectionServices

import React from 'react';
import img1 from '../../public/app/view/flaticon/clickstream.png';
import img2 from '../../public/app/view/flaticon/cloud-computing.png';
import img3 from '../../public/app/view/flaticon/dashboard.png';
import { FaX, FaCircle, FaRegSquare, FaO, FaMountain } from "react-icons/fa6";

const ServiceCard = ({ imgSrc, title, description, shadowColor }) => {

  return (
    <div className="relative hover:border items-center flex flex-col p-5 rounded-xl hover:drop-shadow-2xl transition-transform transform hover:-translate-y-2 text-center w-72 overflow-hidden group">

        <div className={`mb-5 rounded-full p-4`}>
            <img className="w-16 h-16" src={imgSrc} alt="service icon" />
        </div>

        <h1 className="pb-3 text-azul-escuro font-bold text-2xl">{title}</h1>

        <p className="text-md text-cinza-claro font-medium mb-5">{description}</p>

        {/* Ícones decorativos */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">

            <FaX className="absolute text-red-500 top-2 left-2" />
            <FaCircle className="absolute text-green-500 top-10 right-5 text-xl" />
            <FaRegSquare className="absolute text-yellow-500 bottom-8 left-8 text-xl" />
            <FaRegSquare className="absolute text-orange-500 top-20 left-8 text-xl" />
            <FaO className="absolute text-blue-500 bottom-26 right-1 text-xl" />
            <FaMountain className="absolute text-pink-500 -bottom-1 right-12 transform -translate-x-1/2 -translate-y-1/2 text-xl" />
            
        </div>

    </div>
  );
};

const SectionServices = () => {
  return (
    <>
      <div className="py-10 container mx-auto px-10">

        <div className="flex flex-col items-center">

          <h6 className="px-4 py-2 my-4 text-center font-semibold text-roxo bg-roxo-transparente rounded-md">
            Services
          </h6>

          <h1 className="text-center font-bold text-3xl text-azul-escuro mb-5">
            Provide Awesome Service To You
          </h1>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-around text-center">

          <ServiceCard
            imgSrc={img1}
            title="Strategy & Research"
            description="Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula."
          />

          <ServiceCard
            imgSrc={img2}
            title="Web Development"
            description="Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula."
          />

          <ServiceCard
            imgSrc={img3}
            title="Web Solution"
            description="Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula."
          />

        </div>

      </div>
    </>
  );
};

export default SectionServices;


