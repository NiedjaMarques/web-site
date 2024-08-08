import logoWhite from '../../public/app/view/logo-white.png';
import { FaMapLocationDot, FaEnvelopesBulk, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const SectionEnd = () => {
    return(
        <>
            <footer className='bg-roxo text-white'>
                
                <div className='px-6 py-4 mx-auto container'>

                    <div className='md:flex md:justify-between md:items-center md:space-x-6 transition-all duration-500 ease-linear'>

                        <img src={logoWhite} alt="..." />

                        <div className='sm:flex items-center space-y-5 sm:space-y-0 sm:space-x-10 py-5 transition-all duration-500 ease-linear'>
                    
                            <div className='flex items-center space-x-5'>
                                <FaEnvelopesBulk className='text-4xl sm:text-5xl'/>
                                <p>
                                    +91 987-654-3210 <br />
                                    info@example.com
                                </p>
                            </div>

                            <div className='flex items-center space-x-5'>
                                <FaMapLocationDot className='text-4xl sm:text-5xl'/>
                                <p>
                                    Marmora Road Chi Minh City, Vietnam
                                </p>
                            </div>

                        </div>

                    </div>

                    <hr className='my-8'/>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>

                        <div>
                            <p className='font-bold text-2xl sm:text-3xl pb-3'>
                                About Us
                            </p>
                            <p className='font-medium text-start pb-4'>
                                Maecenas pellentesque placerat quam, in finibus nisl tincidunt sed. Aliquam magna augue, malesuada ut feugiat eget, cursus eget felis.
                            </p>
                            <div className="flex pt-4 pb-8 space-x-2">
                                <a href="#" className="p-2 rounded-full text-roxo hover:text-white transition-all ease-linear duration-500 bg-purple-100 hover:bg-purple-600">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="p-2 rounded-full text-roxo hover:text-white transition-all ease-linear duration-500 bg-purple-100 hover:bg-purple-600">
                                    <FaInstagram/>
                                </a>
                                <a href="#" className="p-2 rounded-full text-roxo hover:text-white transition-all ease-linear duration-500 bg-purple-100 hover:bg-purple-600">
                                    <FaTwitter/>
                                </a>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold text-2xl sm:text-3xl pb-3'>
                                Our links
                            </p>
                            <ul className='font-medium text-start space-y-2 pt-2 pb-6'>
                                <li>
                                    <a href="##">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="##">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="##">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="##">
                                        Team
                                    </a>
                                </li>
                                <li>
                                    <a href="##">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className='font-bold text-2xl sm:text-3xl pb-3'>
                                Our Services
                            </p>
                            <ul className='font-medium text-start space-y-2 pt-2 pb-6'>
                                <li>
                                    <a href="##">
                                        Strategy & Research
                                    </a>
                                </li>
                                <li>
                                    <a href="##">
                                        Web Development
                                    </a>
                                </li>
                                <li>
                                    <a href="##">
                                        Web Solution
                                    </a>
                                </li>
                                <li>
                                    <a href="##">
                                        Digital Marketing
                                    </a>
                                </li>
                                <li>
                                    <a href="##">
                                        App Design
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className='font-bold text-2xl sm:text-3xl pb-3'>
                                Other links
                            </p>
                            <ul className='font-medium text-start space-y-2 pt-2 pb-6'>
                                <li>
                                    <a href="##">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="##">
                                        Portfolio
                                    </a>
                                </li>
                                <li>
                                    <a href="##">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="##">
                                        Terms & Conditions
                                    </a>
                                </li>
                                <li>
                                    <a href="##">
                                        Support
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </footer>

            <div className='text-center font-medium bg-violet-400 w-full text-white p-4'>
                <p>
                    Copyright © 2021 DexignZone. All rights reserved.
                </p>
            </div>
        </>
    )
}
export default SectionEnd