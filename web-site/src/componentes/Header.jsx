import React, { useEffect, useState} from 'react';
import MainLayout from '../componentes/Main'
import Navbar from "./Navbar"
import svgLoading from '../../public/app/view/loading-01.svg'

const Header = () => {
    const [scroll, setScroll] = useState(false);
    // useeffect para controle do scroll
    useEffect(() => {
        const handleScroll = () => { 
            setScroll(window.scrollY > 0); 
        };

        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])

    const [isLoading, setIsLoading] = useState(true)
    //useEffect para carregamento da pagina
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    return(
        <>  
            {isLoading ? (
                <div style={{ backgroundImage: `url(${svgLoading})` }} className='fixed w-full h-full left-0 top-0 z-50 bg-center bg-no-repeat bg-[#f4f2ff]'></div>
            ) : (
                <div>
                    <header className={`flex items-center w-full z-20 py-4 h-20 fixed top-0 left-0 transition duration-500 ${scroll ? 'bg-white shadow-lg' : 'bg-white '}`}>
                        <Navbar/>
                    </header>
                </div>
            )}
        </>
    )
}
export default Header