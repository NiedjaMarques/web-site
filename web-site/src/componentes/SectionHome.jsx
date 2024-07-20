import { FaAngleRight} from "react-icons/fa6";
import pic5 from '../../public/app/view/main-slider/slider1/pic5.png';

const SectionHome = () => {
    return(
        <>
            <div className="mt-10 md:flex items-center justify-center px-2">
                <div className="md:w-1/2">
                    <h6 className="sm:text-xl mb-4 font-bold text-roxo">
                        WE CREATE IDEAS
                    </h6>

                    <h1 className="font-bold text-4xl sm:text-5xl text-azul-escuro mb-5">
                        Build Stunning <span className="text-roxo">Website</span> With Slack Agency
                    </h1>

                    <p className="text-lg text-cinza-claro mb-5">
                        Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus.
                    </p>

                    <div className='flex items-center mb-8'>

                        <button className='bg-roxo rounded-full p-2 md:p-3 mr-2 shadow-xl'>
                            <FaAngleRight className='text-lg text-white'/>
                        </button>

                        <a href="#" className='text-roxo font-medium'>Learn More</a>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <img src={pic5} alt="img" />
                </div>
            </div>
        </>
    )
} 
export default SectionHome