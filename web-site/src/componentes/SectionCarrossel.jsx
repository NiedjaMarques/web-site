import logoblue1 from '../../public/app/view/logo/logo-blue1.png' //logo-light1
import logolight1 from '../../public/app/view/logo/logo-light1.png'
import logoblue2 from '../../public/app/view/logo/logo-blue2.png'//logo-light2
import logolight2 from '../../public/app/view/logo/logo-light2.png'//logo-light
import logoblue3 from '../../public/app/view/logo/logo-blue3.png'//logo-light3
import logolight3 from '../../public/app/view/logo/logo-light3.png'//logo-light
import logoblue4 from '../../public/app/view/logo/logo-blue4.png'//logo-light4
import logolight4 from '../../public/app/view/logo/logo-light4.png'//logo-light
import logoblue5 from '../../public/app/view/logo/logo-blue5.png'//logo-light5
import logolight5 from '../../public/app/view/logo/logo-light5.png'//logo-light
import logoblue6 from '../../public/app/view/logo/logo-blue6.png'//logo-light6
import logolight6 from '../../public/app/view/logo/logo-light6.png'//logo-light

const SectionCarrossel = () => {
    return(
        <>
            <div className="flex mt-10 ">
                <div className='flex w-full justify-around items-center '>

                    <div className='py-5 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group'>
                        <img className='block group-hover:hidden' src={logoblue1} alt="logocarroussel" />
                        <img className='hidden group-hover:block' src={logolight1} alt="logocarroussel" />
                    </div>

                    <div className='py-5 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group'>
                        <img className='block group-hover:hidden' src={logoblue2} alt="logocarroussel" />
                        <img className='hidden group-hover:block' src={logolight2} alt="logocarroussel" />
                    </div>

                    <div className='py-5 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group'>
                        <img className='block group-hover:hidden' src={logoblue3} alt="logocarroussel" />
                        <img className='hidden group-hover:block' src={logolight3} alt="logocarroussel" />
                    </div>

                    <div className='py-5 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group'>
                        <img className='block group-hover:hidden' src={logoblue4} alt="logocarroussel" />
                        <img className='hidden group-hover:block' src={logolight4} alt="logocarroussel" />
                    </div>

                    <div className='py-4 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group'>
                        <img className='block group-hover:hidden' src={logoblue5} alt="logocarroussel" />
                        <img className='hidden group-hover:block' src={logolight5} alt="logocarroussel" />
                    </div>

                    <div className='py-6 px-8 hover:bg-roxo transition-all duration-500 ease-linear rounded-xl mx-1 group'>
                        <img className='block group-hover:hidden' src={logoblue6} alt="logocarroussel" />
                        <img className='hidden group-hover:block' src={logolight6} alt="logocarroussel" />
                    </div>

                </div>
            </div>
        </>
    )
}
export default SectionCarrossel