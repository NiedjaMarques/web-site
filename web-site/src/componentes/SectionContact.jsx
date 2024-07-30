import imgContact from '../../public/app/view/main-slider/slider3/img1.png'
import { FaAngleRight, FaRegUser, FaRegEnvelope, FaListUl, FaPhone, FaRegFileLines, FaRegCommentDots } from "react-icons/fa6";

const SectionContact = () => {
    return(
        <>
            <div className='bg-slate-400 mt-10 md:flex items-center justify-center px-2'>
                <div className='bg-red-200 md:w-1/2 mt-2 '>
                    <h6 className="text-lg w-36 text-center px-4 py-2 my-4 font-semibold text-roxo bg-roxo-transparente rounded-md">
                        Contact Us
                    </h6>

                    <h1 className='font-bold text-3xl  text-azul-escuro mb-5'>
                        We Love To Help Great Companies To Enlarge Their Revenues.
                    </h1>

                    <div className=''>
                        <form action="#" className='bg-red-500 grid grid-cols-1 gap-4 sm:grid-cols-2'>

                            <div className="flex items-center justify-center space-x-3">
                                <label htmlFor="#"><FaRegUser /></label>   
                                <input type="text" name="formilustrativo" id="formilustrativo" />
                            </div>

                            <div className="flex items-center justify-center space-x-3">
                                <label htmlFor="#"><FaRegUser /></label>
                                <input type="text" name="formilustrativo" id="formilustrativo" />
                            </div>

                            <div className="flex items-center justify-center space-x-3">
                                <label htmlFor="#"><FaRegEnvelope /></label>
                                <input type="email" name="formilustrativo" id="formilustrativo" />
                            </div>

                            <div className="flex items-center justify-center space-x-3">
                                <label htmlFor="#"><FaRegFileLines /></label>
                                <input type="text" name="formilustrativo" id="formilustrativo" />
                            </div>

                            <div className="flex items-center justify-center space-x-3">
                                <label htmlFor="#"><FaRegCommentDots /></label>
                                <input type="text" name="formilustrativo" id="formilustrativo" />
                            </div>

                            <div className="flex items-center justify-center space-x-3">
                                <label htmlFor="#"><FaPhone /></label>
                                <input type="tel" name="formilustrativo" id="formilustrativo" />
                            </div>

                            <div className="flex items-center justify-center space-x-3">
                                <label htmlFor="#"><FaListUl /></label>
                                <select id="fruits" name="fruits">
                                    <option value="apple">Apple</option>
                                    <option value="banana">Banana</option>
                                    <option value="cherry">Cherry</option>
                                    <option value="date">Date</option>
                                </select>
                            </div>

                        </form>
                    </div>

                    <div className='flex items-center mb-8'>

                        <button className='bg-roxo rounded-full p-2 md:p-3 mr-2 shadow-xl'>
                            <FaAngleRight className='text-lg text-white'/> 
                        </button>

                        <a href="#" className='text-roxo font-medium'>Learn More</a>
                    </div>
                </div>

                <div className='bg-slate-200 md:w-1/2 transition-all ease-linear duration-500'>
                    <img src={imgContact} alt="..." />
                </div>
            </div>
        </>
    )
}
export default SectionContact