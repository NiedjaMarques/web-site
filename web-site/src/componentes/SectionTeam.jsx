import person1 from '../../public/app/view/Teams/person1.jpg'
import person2 from '../../public/app/view/Teams/person2.jpg'
import person3 from '../../public/app/view/Teams/person3.jpg'
import person4 from '../../public/app/view/Teams/person4.jpg'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const SectionTeam = () => {
    return(
        <>
            <div>
                <div className="flex flex-col items-center">

                    <h6 className="text-xl px-4 py-2 my-4 text-center font-semibold text-roxo bg-roxo-transparente rounded-md">
                        Team
                    </h6>

                    <h1 className="text-center font-bold text-3xl text-azul-escuro mb-5">
                        Our Best Expertise
                    </h1>

                </div>

                <div className='min-h-screen flex items-center justify-center py-10'>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

                        <div class="bg-white rounded-lg shadow-lg overflow-hidden">

                            <img src={person1} alt="img person1" class="rounded-md"/>

                            <div class="p-6">

                                <h2 class="text-xl font-bold text-azul-escuro">Alina Jia</h2>

                                <p class="text-azul-escuro font-semibold">Senior Designer</p>

                                <div class="flex mt-4 space-x-2">

                                    <a href="#" class="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#" class="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                        <FaInstagram/>
                                    </a>
                                    <a href="#" class="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                        <FaTwitter/>
                                    </a>

                                </div>

                            </div>

                        </div>

                        <div class="bg-white rounded-lg shadow-lg overflow-hidden">

                            <img src={person2} alt="img person2" class="rounded-md"/>

                            <div class="p-6">

                                <h2 class="text-xl font-bold text-azul-escuro">Suresh Doe</h2>

                                <p class="text-azul-escuro font-semibold">Senior Designer</p>

                                <div class="flex mt-4 space-x-2">

                                    <a href="#" class="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                        <FaFacebookF />
                                    </a>

                                    <a href="#" class="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                        <FaInstagram/>
                                    </a>

                                    <a href="#" class="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                        <FaTwitter/>
                                    </a>

                                </div>

                            </div>

                        </div>

                        <div class="bg-white rounded-lg shadow-lg overflow-hidden">

                            <img src={person3} alt="img person3" class="rounded-md"/>

                            <div class="p-6">
                                
                                <h2 class="text-xl font-bold text-azul-escuro">Ashley Davis</h2>

                                <p class="text-azul-escuro font-semibold">Senior Designer</p>

                                <div class="flex mt-4 space-x-2">

                                    <a href="#" class="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                        <FaFacebookF />
                                    </a>

                                    <a href="#" class="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                        <FaInstagram/>
                                    </a>

                                    <a href="#" class="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                        <FaTwitter/>
                                    </a>

                                </div>

                            </div>

                        </div>

                        <div class="bg-white rounded-lg shadow-lg overflow-hidden">

                            <img src={person4} alt="img person5" class="rounded-md"/>

                            <div class="p-6">

                                <h2  class="text-xl font-bold text-azul-escuro">Michael Johnson</h2>

                                <p class="text-azul-escuro font-semibold">Senior Designer</p>

                                <div class="flex mt-4 space-x-2">

                                    <a href="#" class="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                        <FaFacebookF />
                                    </a>

                                    <a href="#" class="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                        <FaInstagram/>
                                    </a>

                                    <a href="#" class="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                        <FaTwitter/>
                                    </a>

                                </div>

                            </div>

                        </div>

                        <div class="bg-white rounded-lg shadow-lg overflow-hidden">

                            <img src={person1} alt="img person1" class="rounded-md"/>

                            <div class="p-6">

                                <h2  class="text-xl font-bold text-azul-escuro">Elizabeth Anderson</h2>
                                
                                <p class="text-azul-escuro font-semibold">Senior Designer</p>
                            
                                <div class="flex mt-4 space-x-2">

                                    <a href="#" class="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                        <FaFacebookF />
                                    </a>

                                    <a href="#" class="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                        <FaInstagram/>
                                    </a>

                                    <a href="#" class="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                        <FaTwitter/>
                                    </a>

                                </div>

                            </div>

                        </div>

                        <div class="bg-white rounded-lg shadow-lg overflow-hidden">

                            <img src={person2} alt="img person2" class="rounded-md"/>

                            <div class="p-6">

                                <h2  class="text-xl font-bold text-azul-escuro">Charles Taylor</h2>

                                <p class="text-azul-escuro font-semibold">Senior Designer</p>

                                <div class="flex mt-4 space-x-2">

                                    <a href="#" class="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                        <FaFacebookF />
                                    </a>

                                    <a href="#" class="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                        <FaInstagram/>
                                    </a>

                                    <a href="#" class="p-2 rounded-full text-roxo hover:text-white bg-purple-100 hover:bg-purple-600">
                                        <FaTwitter/>
                                    </a>

                                </div>

                            </div>

                        </div>
                        
                    </div>

                </div>

            </div>
        </>
    )
}
export default SectionTeam