import { useState } from "react"
import { FaAngleRight } from "react-icons/fa6"
import bg1 from '../../public/app/view/background/bg/bg1.png'

const SectionPricing = () => {
  const [selectedCart, setSelectedCart] = useState(1)

  const handleMouseEnter = (index) => {
    setSelectedCart(index)
  }

    return (
        <div style={{ backgroundImage: `url(${bg1})` }} className="py-10 bg-center bg-contain bg-no-repeat container mx-auto px-10">

            <div className="flex flex-col items-center">

                <h6 className="text-xl px-4 pb-4 text-center font-semibold text-roxo">
                    PRICING
                </h6>

                <h1 className="text-center font-bold text-3xl text-azul-escuro mb-5">
                    CHOOSE PLAN
                </h1>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">

                <div onMouseEnter={() => handleMouseEnter(0)} className={`${ selectedCart === 0 ? "translate-y-0 bg-gradient-to-r from-roxo to-blue-700 text-white" : "translate-y-4 bg-white"} rounded-lg shadow-lg overflow-hidden p-6 group transition-all ease duration-500 drop-shadow-xl cursor-pointer`}>

                    <h3 className={`text-3xl font-bold ${selectedCart === 0 ? "text-white" : "text-azul-escuro"} pb-2`}>
                        Basic Plan
                    </h3>

                    <h2 className={`text-3xl font-bold ${selectedCart === 0 ? "text-white" : "text-roxo"} pb-2`}>
                        $99<span className="text-2xl font-medium">/Month</span>
                    </h2>

                    <p className={`text-cinza-claro mb-3 ${selectedCart === 0 ? "text-white" : ""}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <ul className={`font-medium text-cinza-claro my-3 flex flex-col space-y-4 ${selectedCart === 0 ? "text-white" : ""}`}>
                        <li>Graphic Design</li>
                        <li>Web Design</li>
                        <li>UI/UX</li>
                        <li>HTML/CSS</li>
                        <li>SEO Marketing</li>
                        <li>Business Analysis</li>
                    </ul>

                    <button className="mt-5 bg-roxo rounded-2xl">
                        <a href="#" className="flex p-3 justify-center items-center font-bold text-white">
                        Start Now <FaAngleRight className="ml-2"/>
                        </a>
                    </button>

                </div>

                <div onMouseEnter={() => handleMouseEnter(1)} className={`${ selectedCart === 1 ? "translate-y-0 bg-gradient-to-r from-roxo to-blue-700 text-white" : "translate-y-4 bg-white" } rounded-lg shadow-lg overflow-hidden p-6 group transition-all ease duration-500 drop-shadow-xl cursor-pointer`}>

                    <h3 className={`text-3xl font-bold ${selectedCart === 1 ? "text-white" : "text-azul-escuro"} pb-2`}>
                        Standard Plan
                    </h3>

                    <h2 className={`text-3xl font-bold ${selectedCart === 1 ? "text-white" : "text-roxo"} pb-2`}>
                        $199<span className="text-2xl font-medium">/Month</span>
                    </h2>

                    <p className={`text-cinza-claro mb-3 ${selectedCart === 1 ? "text-white" : ""}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <ul className={`font-medium text-cinza-claro my-3 flex flex-col space-y-4 ${selectedCart === 1 ? "text-white" : ""}`}>
                        <li>Graphic Design</li>
                        <li>Web Design</li>
                        <li>UI/UX</li>
                        <li>HTML/CSS</li>
                        <li>SEO Marketing</li>
                        <li>Business Analysis</li>
                    </ul>

                    <button className="mt-5 bg-roxo rounded-2xl">
                        <a href="#" className="flex p-3 justify-center items-center font-bold text-white">
                        Start Now <FaAngleRight className="ml-2" />
                        </a>
                    </button>

                </div>

                <div onMouseEnter={() => handleMouseEnter(2)} className={`${ selectedCart === 2 ? "translate-y-0 bg-gradient-to-r from-roxo to-blue-700 text-white" : "translate-y-4 bg-white" } rounded-lg shadow-lg overflow-hidden p-6 group transition-all ease duration-500 drop-shadow-xl cursor-pointer`}>

                    <h3 className={`text-3xl font-bold ${selectedCart === 2 ? "text-white" : "text-azul-escuro"} pb-2`}>
                        Premium Plan
                    </h3>

                    <h2 className={`text-3xl font-bold ${selectedCart === 2 ? "text-white" : "text-roxo"} pb-2`}>
                        $149<span className="text-2xl font-medium">/Month</span>
                    </h2>

                    <p className={`text-cinza-claro mb-3 ${selectedCart === 2 ? "text-white" : ""}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <ul className={`font-medium text-cinza-claro my-3 flex flex-col space-y-4 ${selectedCart === 2 ? "text-white" : ""}`}>
                        <li>Graphic Design</li>
                        <li>Web Design</li>
                        <li>UI/UX</li>
                        <li>HTML/CSS</li>
                        <li>SEO Marketing</li>
                        <li>Business Analysis</li>
                    </ul>

                    <button className="mt-5 bg-roxo rounded-2xl">
                        <a href="#" className="flex p-3 justify-center items-center font-bold text-white">
                        Start Now <FaAngleRight className="ml-2" />
                        </a>
                    </button>

                </div>

            </div>

        </div>
    );
};
export default SectionPricing;
