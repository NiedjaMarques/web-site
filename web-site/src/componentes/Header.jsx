import React, { useEffect, useState} from 'react';
import Navbar from "./Navbar"

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

    return(
        <>  
            <div>
                <header className={`flex items-center w-full z-50 py-4 h-20 fixed top-0 left-0 transition duration-500 ${scroll ? 'bg-white shadow-lg' : 'bg-white '}`}>
                    <Navbar/>
                </header>
            </div>
        </>
    )
}
export default Header