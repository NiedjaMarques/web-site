import { FaAngleRight } from "react-icons/fa6"
import img5 from '../../public/app/view/img5.png'
import connection from '../../public/app/view/connection.png'
import datamanagement from '../../public/app/view/data-management.png' 
import virtualreality from '../../public/app/view/virtual-reality.png'

const SectionFetures = () => {
    return(
        <>
            <div className="mt-10 md:flex items-center justify-center px-2">

                <div className="md:w-1/2 mt-2 ">
                    <h6 className="text-lg w-32 text-center px-4 py-2 my-4 font-semibold text-roxo bg-roxo-transparente rounded-md">
                        Fetures
                    </h6>

                    <h1 className="font-bold text-3xl  text-azul-escuro mb-5">
                        Our Working Process To Help Your Boost Your Business
                    </h1>

                    <div className="mt-10 mb-5 flex items-center justify-center">

                        <img className="w-16 h-16 " src={virtualreality} alt="imgvirtualreality"/>

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
                        
                        <img className="w-16 h-16" src={datamanagement} alt="imgdatamanagement"/>

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
                        
                        <img className="w-16 h-16" src={connection} alt="imgconnection"/>
                        
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

                <div className="md:w-1/2 transition-all ease-linear duration-500">
                    <img src={img5} alt="img5"/>
                </div>
            </div>
        </>
    )
}
export default SectionFetures