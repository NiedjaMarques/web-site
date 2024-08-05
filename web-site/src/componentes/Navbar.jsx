import logo from '../../public/app/view/logo.png';
import { FaAngleRight, FaAngleDown, FaAlignRight, FaX, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isWhiteOpen, setIsWhiteOpen] = useState(false)
    const [openOptions, setIsOpenOptions] = useState({
        pages: false,
        services: false,
        blog: false,
    })

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const toggleSubMenu = (id, event) => {
        event.stopPropagation()

        if (isOpen) {
            setIsOpenOptions(prevState => ({
                ...prevState,
                [id]: !prevState[id]
            }))   
        }
    }

    useEffect(() => {
        if (!isOpen) {
            setIsOpenOptions({
                pages: false,
                services: false,
                blog: false,
            });
        }
    }, [isOpen]);

    useEffect(() => {
        if(isOpen){
            setTimeout(() => {
                setIsWhiteOpen(true)  
            }, 500)
        }else{
            setIsWhiteOpen(false)
        }
    }, [isOpen])

    return(
        <>
            <div className='flex justify-between items-center '>
                <div className='h-10 w-32'>
                    <img src={logo} alt="imagem logo" />
                </div>

                <div className='flex items-center'>
                    <nav className='hidden md:flex'>
                        <ul className='space-x-5 flex text-sm cursor-pointer  text-cinza-escuro'>
                            <li className='hover:text-indigo-500 transition-all duration-300'>Home</li>

                            <li className='group'>
                                <div className='flex items-center hover:text-indigo-500 transition-all duration-300'>Pages<FaAngleDown className='text-xs'/></div>

                                <ul className='bg-white shadow-2xl py-1.5 absolute w-56 transition-opacity opacity-0 group-hover:opacity-100 group-hover:block hidden '>
                                    
                                    <li className='hover:bg-indigo-100 bg-opacity-5 transition duration-700 ease-in-out flex items-center'>                                        
                                        <span className='py-2.5 px-6 hover:text-indigo-500 hover:translate-x-3 transition duration-300'>About Us</span>
                                    </li>

                                    <li className='hover:bg-indigo-100 bg-opacity-5 transition duration-300 ease-in-out flex items-center'>
                                        <span className='py-2.5 px-6 hover:text-indigo-500 hover:translate-x-3 transition duration-300'>Fac</span>
                                    </li>

                                    <li className='hover:bg-indigo-100 bg-opacity-5 transition duration-300 ease-in-out flex items-center'>
                                        <span className='py-2.5 px-6 hover:text-indigo-500 hover:translate-x-3 transition duration-300'>Pricing Table</span>
                                    </li>

                                    <li className='hover:bg-indigo-100 bg-opacity-5 transition duration-300 ease-in-out flex items-center'>
                                        <span className='py-2.5 px-6 hover:text-indigo-500 hover:translate-x-3 transition duration-300'>Team</span>
                                    </li>

                                    <li className='hover:bg-indigo-100 bg-opacity-5 transition duration-300 ease-in-out flex items-center'>
                                        <span className='py-2.5 px-6 hover:text-indigo-500 hover:translate-x-3 transition duration-300'>Coming Soon</span>
                                    </li>

                                    <li className='hover:bg-indigo-100 bg-opacity-5 transition duration-300 ease-in-out flex items-center'>
                                        <span className='py-2.5 px-6 hover:text-indigo-500 hover:translate-x-3 transition duration-300'>Error 404</span>
                                    </li>
                                    
                                    <li className='hover:bg-indigo-100 bg-opacity-5 transition duration-300 ease-in-out flex items-center'>
                                        <span className='py-2.5 px-6 hover:text-indigo-500 hover:translate-x-3 transition duration-300'>Site Down</span>
                                    </li>

                                </ul>
                            </li>

                            <li className='group'>
                                
                                <div className='flex items-center hover:text-indigo-500 transition-all duration-300'>Services<FaAngleDown className='text-xs'/></div>

                                <ul className='bg-white shadow-2xl py-1.5 absolute w-56 transition-opacity opacity-0 group-hover:opacity-100 group-hover:block hidden'>

                                    <li className='hover:bg-indigo-100 bg-opacity-5 transition duration-300 ease-in-out flex items-center'>

                                        <span className='py-2.5 px-6 hover:text-indigo-500 hover:translate-x-3 transition duration-300'>Services</span>

                                    </li>

                                    <li className='hover:bg-indigo-100 bg-opacity-5 transition duration-700 ease-in-out flex items-center'>

                                        <span className='py-2.5 px-6 hover:text-indigo-500 hover:translate-x-3 transition duration-300'>Services Details</span>

                                    </li>
                                </ul>

                            </li>

                            <li className='group'>
                                
                                <div className='flex items-center hover:text-indigo-500 transition-all duration-300'>Blog<FaAngleDown className='text-xs'/></div>

                                <ul className='bg-white shadow-2xl py-1.5 absolute w-56 transition-opacity opacity-0 group-hover:opacity-100 group-hover:block hidden'>

                                    <li className='hover:bg-indigo-100 bg-opacity-5 transition duration-300 ease-in-out flex items-center'>

                                        <span className='py-2.5 px-6 hover:text-indigo-500 hover:translate-x-3 transition duration-300'>Large Right Sidebar</span>

                                    </li>

                                    <li className='hover:bg-indigo-100 bg-opacity-5 transition duration-700 ease-in-out flex items-center'>

                                        <span className='py-2.5 px-6 hover:text-indigo-500 hover:translate-x-3 transition duration-300'>Blog Details</span>

                                    </li>
                                </ul>

                            </li>
                            
                            <li className='hover:text-indigo-500 transition-all duration-300'>Contact Us</li>
                        </ul>
                    </nav>

                    <div className='flex items-center '>
                        <div className='hidden sm:flex mx-5 md:mx-2 items-center'>
                            <button className='bg-roxo rounded-full p-2 mx-2 shadow-xl'>
                                <FaAngleRight className='text-sm  text-white'/>
                            </button>
                            <a href="#" className='text-roxo font-medium text-sm transition-all ease-linear duration-200 hover:text-blue-600'>Get A Quote</a>
                        </div>

                        <div className='md:hidden text-xl text-cinza-escuro cursor-pointer' onClick={toggleMenu}>
                            {isOpen ? (
                                <>
                                    <div className={`h-full w-full fixed z-20 top-0 left-0 bg-black opacity-60`}>
                                        <FaX className='absolute text-white top-9 right-10' />
                                    </div>
                                    
                                    <div className={`bg-white overflow-y-scroll p-5 transition-all ease-linear duration-700 h-full z-30 left-0 fixed top-0 w-64 ${isWhiteOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                                        
                                        <img src={logo} className='max-w-32' alt="imagem logo" />

                                        <nav className='py-10 text-sm'>

                                            <ul className='space-y-2 font-bold text-cinza-escuro cursor-pointer px-2'>

                                                <li className='flex items-center justify-between border-b pb-2'>Home</li>

                                                <li onClick={(event) => toggleSubMenu('pages', event)} className='flex items-center justify-between border-b pb-2'>
                                                    Pages<FaAngleRight className='text-white bg-roxo text-2xl px-2' /> 
                                                </li>
                                                {openOptions.pages && (
                                                    <ul>
                                                        <li className='flex p-1 items-center'><FaAngleRight className='mr-1'/>About Us</li>
                                                        <li className='flex p-1 items-center'><FaAngleRight className='mr-1'/>Fac</li>
                                                        <li className=' flex p-1 items-center'><FaAngleRight className='mr-1'/>Pricing Table</li>
                                                        <li className=' flex p-1 items-center'><FaAngleRight className='mr-1'/>Team</li>
                                                        <li className=' flex p-1 items-center'><FaAngleRight className='mr-1'/>Coming Soon</li>
                                                        <li className=' flex p-1 items-center'><FaAngleRight className='mr-1'/>Error 404</li>
                                                        <li className=' flex p-1 items-center'><FaAngleRight className='mr-1'/>Site Down</li>
                                                    </ul>
                                                )}

                                                <li onClick={(event) => toggleSubMenu('services', event)} className='flex items-center justify-between border-b pb-2'>
                                                    Services<FaAngleRight className='text-white bg-roxo text-2xl px-2'/>
                                                </li>
                                                {openOptions.services && (
                                                    <ul>
                                                        <li className='flex p-1 items-center'><FaAngleRight className='mr-1'/>Services</li>
                                                        <li className='flex p-1 items-center'><FaAngleRight className='mr-1'/>Services Details</li>
                                                    </ul>
                                                )}

                                                <li onClick={(event) => toggleSubMenu('blog', event)} className='flex items-center justify-between border-b pb-2'>
                                                    Blog <FaAngleRight className='text-white bg-roxo text-2xl px-2'/>
                                                </li>
                                                {openOptions.blog && (
                                                    <ul>
                                                        <li className='flex p-1 items-center'><FaAngleRight className='mr-1'/>Large Right Sidebar</li>
                                                        <li className='flex p-1 items-center'><FaAngleRight className='mr-1'/>Blog Details</li>
                                                    </ul>
                                                )}

                                                <li className='flex items-center justify-between border-b pb-2'>
                                                    Contact Us
                                                </li>
                                                
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