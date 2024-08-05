import React, { useEffect, useState} from 'react';
import MainLayout from '../componentes/Main'
import Navbar from "./Navbar"

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => { 
            setScroll(window.scrollY > 0); 
        };

        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return(
        <>
            <div>
                <header className={`flex items-center w-full z-20 py-4 h-20 fixed top-0 left-0 transition duration-500 ${scroll ? 'bg-white shadow-lg' : 'bg-white '}`}>
                    <MainLayout>
                        <Navbar/>
                    </MainLayout>
                </header>
            </div>
        </>
    )
}
export default Header