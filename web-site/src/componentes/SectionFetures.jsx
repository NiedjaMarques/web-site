import { FaPanorama } from "react-icons/fa6"
import img5 from '../../public/app/view/img5.png'
import foguete from '../../public/app/view/foguete.png'
import ideia from '../../public/app/view/ideia.png'
import red2 from '../../public/app/view/move/red2.png'
import yellow1 from '../../public/app/view/move/yellow1.png'
import green1 from '../../public/app/view/move/green3.png'

const SectionFetures = () => {
    return(
        <>
            <div className="my-12 md:flex items-center justify-center container mx-auto px-10">

                <div className="md:w-1/2 mt-2">
                    <h6 className="w-32 text-center px-4 py-2 my-4 font-semibold text-roxo bg-roxo-transparente rounded-md">
                        Fetures
                    </h6>

                    <h1 className="font-bold text-3xl  text-azul-escuro mb-5">
                        Our Working Process To Help Your Boost Your Business
                    </h1>

                    <div className="mt-10 mb-5 flex items-center justify-center">

                        <div className="girarDiv relative z-30 w-56 h-32 p-10 flex items-center justify-center cursor-pointer bg-geen-300 border8 border-blue-800">
                            <img className="girarImg absolute w-full h-full object-contain z-10 bg-reen-200" src={red2} alt="red2" />
                            <img className="absolute z-20 w-12 h-12 rounded-full bg-lue-500" src={ideia} alt="ideia"/>
                        </div>

                        <div className="ml-5">
                        
                            <h1 className="text-azul-escuro font-bold text-xl mb-2">
                                Idea & Analysis Gathering
                            </h1>

                            <p className="text-base text-cinza-claro mb-5 bg-late-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                        </div>
                        
                    </div>

                    <div className="mb-5 flex items-center justify-center md:ml-20 transition-all ease-linear duration-500">
                        
                        <div className="girarDiv relative z-30 w-56 h-32 p-10 flex items-center justify-center cursor-pointer ">
                            <img className="girarImg absolute w-full h-full object-contain z-10" src={yellow1} alt="red2"/>
                            <FaPanorama className="absolute z-20 w-10 h-16"/>
                        </div>

                        <div className="ml-5">

                            <h1 className="text-azul-escuro font-bold text-xl mb-2">
                                Designing & Developing
                            </h1>

                            <p className="text-base text-cinza-claro mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                        </div>

                    </div>

                    <div className="mb-5 flex items-center justify-center">
                        
                        <div className="girarDiv relative z-30 w-56 h-32 p-10 flex items-center justify-center cursor-pointer ">
                            <img className="girarImg absolute w-full h-full object-contain z-10" src={green1} alt="red2" />
                            <img className="absolute z-20 w-12 h-12 rounded-full " src={foguete} alt="foguete"/>
                        </div>
                        
                        <div className="ml-5">

                            <h1 className="text-azul-escuro font-bold text-xl mb-2">                                
                                Testing & Lunching
                            </h1>

                            <p className="text-base text-cinza-claro mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                        </div>

                    </div>
                    
                </div>

                <div className="md:w-1/2 transition-all ease-linear duration-500 animate-swing">
                    <img src={img5} alt="img5"/>
                </div>
                
            </div>
        </>
    )
}
export default SectionFetures