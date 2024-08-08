import { FaAngleRight } from "react-icons/fa6"

const SectionPricing = () => {
    return(
        <>
            <div className="py-10 container mx-auto px-10">
                
                <div className="flex flex-col items-center">

                    <h6 className="text-xl px-4 pb-4 text-center font-semibold text-roxo">
                        PRICING
                    </h6>

                    <h1 className="text-center font-bold text-3xl text-azul-escuro mb-5">
                        CHOOSE PLAN
                    </h1>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 group hover:bg-gradient-to-r from-roxo to-blue-700 hover:text-white transition-all ease duration-500 drop-shadow-xl">
                        <h3 className="text-3xl font-bold text-azul-escuro group-hover:text-white pb-2">Basic Plan</h3>
                        <h2 className="text-3xl font-bold text-roxo group-hover:text-white pb-2">$99<span className="text-2xl font-medium">/Month</span></h2>
                        <p className="text-cinza-claro mb-3 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. It repudiandae eos sunt vero.</p>

                        <ul className="font-medium text-cinza-claro my-3 flex flex-col space-y-4 group-hover:text-white">
                            <li>Graphic Design</li>
                            <li>Web Design</li>
                            <li>UI/UX</li>
                            <li>HTML/CSS</li>
                            <li>SEO Marketing</li>
                            <li>Business Analysis</li>
                        </ul>

                        <button className="mt-5 bg-roxo rounded-2xl">
                            <a href="#" className="flex p-3 justify-center items-center font-bold text-white">Start Now <FaAngleRight className="ml-2"/></a>
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 group hover:bg-gradient-to-r from-roxo to-blue-700 hover:text-white transition-all ease duration-500 drop-shadow-xl">
                        <h3 className="text-3xl font-bold text-azul-escuro group-hover:text-white pb-2">Standart Plan</h3>
                        <h2 className="text-3xl font-bold text-roxo group-hover:text-white pb-2">$199<span className="text-2xl font-medium">/Month</span></h2>
                        <p className="text-cinza-claro mb-3 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. It repudiandae eos sunt vero.</p>

                        <ul className="font-medium text-cinza-claro my-3 flex flex-col space-y-4 group-hover:text-white">
                            <li>Graphic Design</li>
                            <li>Web Design</li>
                            <li>UI/UX</li>
                            <li>HTML/CSS</li>
                            <li>SEO Marketing</li>
                            <li>Business Analysis</li>
                        </ul>

                        <button className="mt-5 bg-roxo rounded-2xl">
                            <a href="#" className="flex p-3 justify-center items-center font-bold text-white">Start Now <FaAngleRight className="ml-2"/></a>
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 group hover:bg-gradient-to-r from-roxo to-blue-700 hover:text-white transition-all ease duration-500 drop-shadow-xl">
                        <h3 className="text-3xl font-bold text-azul-escuro group-hover:text-white pb-2">Premium Plan</h3>
                        <h2 className="text-3xl font-bold text-roxo group-hover:text-white pb-2">$149<span className="text-2xl font-medium">/Month</span></h2>
                        <p className="text-cinza-claro mb-3 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. It repudiandae eos sunt vero.</p>

                        <ul className="font-medium text-cinza-claro my-3 flex flex-col space-y-4 group-hover:text-white">
                            <li>Graphic Design</li>
                            <li>Web Design</li>
                            <li>UI/UX</li>
                            <li>HTML/CSS</li>
                            <li>SEO Marketing</li>
                            <li>Business Analysis</li>
                        </ul>

                        <button className="mt-5 bg-roxo rounded-2xl">
                            <a href="#" className="flex p-3 justify-center items-center font-bold text-white">Start Now <FaAngleRight className="ml-2"/></a>
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}
export default SectionPricing