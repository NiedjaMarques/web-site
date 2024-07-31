import { FaAngleRight } from "react-icons/fa6";

const SectionMoreWithUs = () => {
    return(
        <>
            <div className="my-10 py-1">
                <h2 className="w-40 text-center px-4 py-3 my-2 font-semibold text-roxo bg-roxo-transparente rounded-md">
                    More With Us
                </h2>

                <div className=" sm:flex items-center justify-between">
                    <h1 className="font-bold text-2xl sm:text-3xl text-azul-escuro sm:w-8/12">
                        You Want To Showcase Your Website In Top Join With Us
                    </h1>
                    <div className='flex items-center my-8'>

                        <button className='bg-roxo rounded-full p-2 md:p-3 mr-2 shadow-xl'>
                            <FaAngleRight className='text-lg text-white'/> 
                        </button>

                        <a href="#" className='text-roxo font-medium'>Join Now</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionMoreWithUs