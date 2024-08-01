import logo from '../../public/app/view/logo.png';
import { FaAngleRight, FaAlignRight, FaX, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <div className='flex justify-between my-5'>
                <div className='min-h-10 min-w-32'>
                    <img src={logo} alt="imagem logo" />
                </div>

                <div className='flex items-center'>
                    <nav className='hidden md:flex'>
                        <ul className='flex sm:text-base md:text-lg'>
                            <li className='mx-2 cursor-pointer font-medium text-cinza-escuro'>Home</li>
                            <li className='mx-2 cursor-pointer font-medium text-cinza-escuro'>Pages</li>
                            <li className='mx-2 cursor-pointer font-medium text-cinza-escuro'>Services</li>
                            <li className='mx-2 cursor-pointer font-medium text-cinza-escuro'>Blog</li>
                            <li className='mx-2 cursor-pointer font-medium text-cinza-escuro'>Contact Us</li>
                        </ul>
                    </nav>

                    <div className='flex items-center '>
                        <div className='hidden sm:flex mx-5 md:mx-2  items-center '>
                            <button className='bg-roxo rounded-full p-2 md:p-3 mx-2 shadow-xl'>
                                <FaAngleRight className='text-lg text-white'/>
                            </button>
                            <a href="#" className='text-roxo font-medium md:text-lg'>Get A Quote</a>
                        </div>

                        <div className='md:hidden text-xl text-cinza-escuro cursor-pointer' onClick={toggleMenu}>
                            {isOpen ? (
                                <>
                                    
                                    <div className='h-full w-full fixed z-20 top-0 left-0 bg-black opacity-60'>
                                        <FaX className='absolute text-white top-9  right-10' />
                                    </div>
                                    
                                    <div className={`bg-white overflow-y-scroll p-5 transition-all ease-linear duration-500 h-full z-30 fixed left-0 top-0 min-w-64 `}>
                                        
                                        <img src={logo} className='max-w-32' alt="imagem logo" />

                                        <nav className='py-10 text-sm'>
                                            <ul className='space-y-2 font-bold text-cinza-escuro cursor-pointer px-2'>
                                                <li className='flex items-center justify-between border-b pb-2'>Home</li>
                                                <li className='flex items-center justify-between border-b pb-2'>Pages <FaAngleRight className='text-white bg-roxo text-2xl px-2' /></li>
                                                <li className='flex items-center justify-between border-b pb-2'>Services <FaAngleRight className='text-white bg-roxo text-2xl px-2' /></li>
                                                <li className='flex items-center justify-between border-b pb-2'>Blog <FaAngleRight className='text-white bg-roxo text-2xl px-2' /></li>
                                                <li className='flex items-center justify-between border-b pb-2'>Contact Us</li>
                                            </ul>
                                        </nav>

                                        <div className="flex items-center justify-center space-x-2 text-roxo text-sm">

                                            <a href="#" className="p-2 rounded-full hover:text-white hover:bg-azul-escuro transition-all duration-500 ease-linear">
                                                <FaFacebookF />
                                            </a>
                                            <a href="#" className="p-2 rounded-full hover:text-white hover:bg-azul-escuro transition-all duration-500 ease-linear">
                                                <FaInstagram />
                                            </a>
                                            <a href="#" className="p-2 rounded-full hover:text-white hover:bg-azul-escuro transition-all duration-500 ease-linear">
                                                <FaTwitter />
                                            </a>
                                            <a href="#" className="p-2 rounded-full hover:text-white hover:bg-azul-escuro transition-all duration-500 ease-linear">
                                                <FaLinkedinIn />
                                            </a>

                                        </div>
                                    </div>
                                
                                </>
                            
                            ) : (
                                <FaAlignRight />
                            )}
                        </div>                        

                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar