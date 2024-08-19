import imgContact from '../../public/app/view/main-slider/slider3/img1.png'
import { FaAngleRight, FaRegUser, FaRegEnvelope, FaListUl, FaPhone, FaRegFileLines, FaRegCommentDots } from "react-icons/fa6";
import bg18 from '../../public/app/view/background/bg/bg19.png'

const SectionContact = () => {
    return(
        <>
            <div style={{ backgroundImage: `url(${bg18})` }} className='bg-cover bg-center bg-no-repeat'>

                <div className='bg-slate400 my-10 md:flex items-center justify-center container mx-auto px-10'>

                    <div className='md:w-1/2 mt-2 '>

                        <h6 className="w-36 text-center px-4 py-2 my-4 font-semibold text-roxo bg-roxo-transparente rounded-md">
                            Contact Us
                        </h6>

                        <h1 className='font-bold text-2xl  text-azul-escuro my-5'>
                            We Love To Help Great Companies To Enlarge Their Revenues.
                        </h1>

                        <div className='py-5 sm:pr-5'>

                            <form action="#" className='grid grid-cols-1 gap-4 sm:grid-cols-2'>

                                <div className="flex items-center justify-center space-x-3 shadow-2xl rounded-full p-2 border border-gray-200 bg-white ">

                                    <label htmlFor="#" className='border-r border-roxo'>
                                        <FaRegUser className='text-roxo mx-2 my-1' />
                                    </label>

                                    <input  className="focus:outline-none w-full rounded-lg" type="text" name="formilustrativo" id="1"  placeholder="First Name"/>

                                </div>

                                <div className="flex items-center justify-center space-x-3 shadow-2xl rounded-full p-2 border border-gray-200 bg-white">

                                    <label htmlFor="#" className='border-r border-roxo'>
                                        <FaRegUser className='text-roxo mx-2 my-1 ' />
                                    </label>

                                    <input  className="outline-none rounded-lg w-full" type="text" name="formilustrativo" id="2"  placeholder="Last Name"/>

                                </div>

                                <div className="flex items-center justify-center space-x-3 shadow-2xl rounded-full p-2 border border-gray-200 bg-white">

                                    <label htmlFor="#" className='border-r border-roxo'>
                                        <FaRegEnvelope className='text-roxo mx-2 my-1 '/>
                                    </label>

                                    <input  className="focus:outline-none rounded-lg w-full" type="email" name="formilustrativo" id="3"  placeholder="Email Address"/>

                                </div>

                                <div className="flex items-center justify-center space-x-3 shadow-2xl rounded-full p-2 border border-gray-200 bg-white">

                                    <label htmlFor="#" className='border-r border-roxo'>
                                        <FaPhone className='text-roxo mx-2 my-1 ' />
                                    </label>

                                    <input className="outline-none rounded-lg w-full" type="tel" name="formilustrativo" id="4"  placeholder="Phone No."/>

                                </div>

                                <div className="flex items-center justify-center space-x-3 shadow-2xl rounded-full p-2 border border-gray-200 bg-white">

                                    <label htmlFor="#" className='border-r border-roxo'>
                                        <FaRegFileLines className='text-roxo mx-2 my-1 '/>
                                    </label>

                                    <input  className="outline-none rounded-lg w-full"type="text" name="formilustrativo" id="5"  placeholder="Project Title"/>

                                </div>

                                <div className="flex items-center justify-center space-x-3 shadow-2xl rounded-full p-2 border border-gray-200 bg-white">

                                    <label htmlFor="#" className='border-r border-roxo'>
                                        <FaListUl className='text-roxo mx-2 my-1' />
                                    </label>

                                    <select className="outline-none rounded-lg w-full text-cinza-claro" id="6" name="formilustrativo">
                                        <option value="1">Choose Service</option>
                                        <option value="2">Web Development</option>
                                        <option value="3">Web Desing</option>
                                        <option value="4">Strategy & Research</option>
                                    </select>

                                </div>

                            </form>

                            <div className="my-5 flex items-start space-x-3 shadow-2xl rounded-2xl bg-white p-2 border border-gray-200">

                                <label htmlFor="#" className='border-r border-roxo'>
                                    <FaRegCommentDots className='text-roxo mx-2 my-1 ' />
                                </label>

                                <textarea  className="outline-none rounded-lg bg-white w-full resize-none" id="comments" name="comments" rows="4" cols="50" placeholder="Message"></textarea>

                            </div>

                        </div>

                        <div className='flex items-center group'>

                            <button className='bg-roxo rounded-full p-2 md:p-3 mr-2 shadow-xl transition-all ease-linear duration-200 group-hover:bg-blue-600'>

                                <FaAngleRight className='text-lg text-white'/>

                            </button>

                            <a href="#" className='text-roxo font-medium text-sm transition-all ease-linear duration-200 hover:text-blue-600'>Learn More</a>

                        </div>

                    </div>

                    <div className='md:w-1/2 transition-all ease-linear duration-500 animate-swing'>
                        <img src={imgContact} alt="..."  className=''/>
                    </div>

                </div>
                
            </div>
        </>
    )
}
export default SectionContact