import { FaAngleRight } from "react-icons/fa6";
import bg3 from '../../public/app/view/background/bg/bg3.png'

const SectionMoreWithUs = () => {
    return(
        <>
            <div style={{ backgroundImage: `url(${bg3})` }} className="bg-[#bbb3f0] py-8">
                <div  className="my-10 py-1 container mx-auto px-10 ">
                    <h2 className="w-40 text-center px-4 py-3 my-2 font-semibold text-roxo bg-[#f7f6fe7a] rounded-md">
                        More With Us
                    </h2>
                    <div className="sm:flex items-center justify-between">
                        <h1 className="font-bold text-2xl text-azul-escuro sm:w-8/12">
                            You Want To Showcase Your Website In Top Join With Us
                        </h1>
                        <div className='flex items-center my-8 group'>
                            <button className='bg-roxo rounded-full p-2 md:p-3 mr-2 shadow-xl transition-all ease-linear duration-200 group-hover:bg-blue-600'>
                                <FaAngleRight className='text-lg text-white'/>
                            </button>
                            <a href="#" className='text-roxo font-medium text-sm transition-all ease-linear duration-200 hover:text-blue-600'>Join Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionMoreWithUs