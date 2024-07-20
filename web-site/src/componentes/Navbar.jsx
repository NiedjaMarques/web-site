import logo from '../../public/app/view/logo.png';
import { FaAngleRight, FaAlignRight } from "react-icons/fa6";

const Navbar = () => {
    return(
        <>
            <div className='bg-red-30 flex justify-between md:justify-around my-5'>
                <div className='max-h-10 max-w-32'>
                    <img src={logo} alt="imagem logo" />
                </div>

                <div className='flex items-center'>
                    <nav className='hidden md:flex'>
                        <ul className='flex '>
                            <li className='mx-2 cursor-pointer font-medium text-cinza-escuro'>Home</li>
                            <li className='mx-2 cursor-pointer font-medium text-cinza-escuro'>Pages</li>
                            <li className='mx-2 cursor-pointer font-medium text-cinza-escuro'>Services</li>
                            <li className='mx-2 cursor-pointer font-medium text-cinza-escuro'>Blog</li>
                            <li className='mx-2 cursor-pointer font-medium text-cinza-escuro'>Contact Us</li>
                        </ul>
                    </nav>

                    <div className='flex items-center'>
                        <div className='hidden sm:flex mx-5 items-center'>
                            <button className='bg-roxo rounded-full p-2 md:p-3 mx-2 shadow-xl'>
                                <FaAngleRight className='text-lg text-white'/>
                            </button>
                            <a href="#" className='text-roxo font-medium'>Get A Quote</a>
                        </div>

                        <button className='md:hidden text-xl text-cinza-escuro'>
                            <FaAlignRight />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar