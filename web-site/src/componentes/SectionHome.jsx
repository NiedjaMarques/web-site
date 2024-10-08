import { FaAngleRight} from "react-icons/fa6"
import pic2 from '/app/view/main-slider/slider1/pic2.png'
import pic3 from '/app/view/main-slider/slider1/pic3.png'
import pic4 from '/app/view/main-slider/slider1/pic4.png'
import pic6 from '/app/view/move/pic1.png'
import pic7 from '/app/view/move/pic2.png'

const SectionHome = () => {
    return(
        <>
            <div style={{ backgroundImage: `url(${pic2})` }} className='bg-center bg-no-repeat my-24 bg-cover'>

                <div className="container mx-auto px-10 md:flex items-center justify-center">

                    <div style={{ backgroundImage: `url(${pic3})` }} className='md:w-1/2 bg-cover bg-no-repeat '>

                        <h6 className="mb-4 font-bold text-roxo">
                            WE CREATE IDEAS
                        </h6>

                        <h1 className="font-bold text-4xl sm:text-5xl text-azul-escuro mb-5">
                            Build Stunning <span className="text-roxo">Website</span> With Slack Agency
                        </h1>

                        <p className="text-lg text-cinza-claro mb-5">
                            Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus.
                        </p>

                        <div className='flex items-center mb-8 group'>
                            <button className='bg-roxo rounded-full p-2 md:p-3 mr-2 shadow-xl transition-all ease-linear duration-200 group-hover:bg-blue-600'>
                                <FaAngleRight className='text-lg text-white'/>
                            </button>
                            <a href="#" className='text-roxo font-medium transition-all ease-linear duration-200 hover:text-blue-600'>Learn More</a>
                        </div>

                    </div>

                    <div style={{ backgroundImage: `url(${pic4})`}} className="md:w-1/2 relative">
                        <div className='relative'>
                            <img src={pic6} alt="..." className="animate-swing z-10" />
                            <img src={pic7} alt="..." className="animate-swing2 z-20 absolute bottom-0"  />
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
} 
export default SectionHome