import project from '../../public/app/view/flaticon/risonho.png'
import project1 from '../../public/app/view/flaticon/computador.png'
import project2 from '../../public/app/view/flaticon/foguete.png'
import project3 from '../../public/app/view/flaticon/fogos-de-artificio.png'
import bg3 from '../../public/app/view/background/bg/bg3.png'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { useState } from 'react'

const SectionDados = () => {
    const [counterOn, setCounterOn] = useState(false)
    return(
        <>
            <div style={{ backgroundImage: `url(${bg3})` }} className="bg-roxo bg-cover bg-no-repeat bg-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-4 w-full py-12 justify-around">

                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className='text-center my-4  bg-white p-10 hover:-translate-y-4 transition-all ease-linear duration-500 flex flex-col justify-center items-center rounded-2xl drop-shadow-2xl cursor-pointer'>
                        <div className='mb-5 drop-shadow-2xl' >
                           <img className="w-16 h-16" src={project} alt="img smile" />
                        </div>
                        <p className='pb-3 font-semibold text-xl'>
                            Satisfied Clients
                        </p>
                        <span className='text-roxo text-3xl font-bold'>
                            {counterOn && <CountUp start={0} end={9875} duration={2} separator="" delay={0}/>}
                        </span>
                    </div>
                </ScrollTrigger>

                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className='text-center my-4 sm:relative sm:top-8 hover:-translate-y-4 transition-all ease-linear duration-500 bg-white p-10 flex flex-col justify-center items-center rounded-2xl drop-shadow-2xl cursor-pointer'>
                        <div className='mb-5 drop-shadow-2xl' >
                           <img className="w-16 h-16" src={project1} alt="img smile" />
                        </div>
                        <p className='pb-3 font-semibold text-xl'>
                            Project Completed
                        </p>
                        <span className='text-roxo text-3xl font-bold'>
                            {counterOn && <CountUp start={0} end={8765} duration={2} separator="" delay={0}/>}
                        </span>
                    </div>
                </ScrollTrigger>

                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className='text-center my-4 bg-white p-10 hover:-translate-y-4 transition-all ease-linear duration-500 flex flex-col justify-center items-center rounded-2xl drop-shadow-2xl cursor-pointer'>
                        <div className='mb-5 drop-shadow-2xl' >
                           <img className="w-16 h-16" src={project2} alt="img smile" />
                        </div>
                        <p className='pb-3 font-semibold text-xl'>
                            Project Lunched
                        </p>
                        <span className='text-roxo text-3xl font-bold'>
                            {counterOn && <CountUp start={0} end={7894} duration={2} separator="" delay={0}/>}
                        </span>
                    </div>
                </ScrollTrigger>

                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className='text-center my-4 sm:relative sm:top-8 hover:-translate-y-4 transition-all ease-linear duration-500 bg-white p-10 flex flex-col justify-center items-center rounded-2xl drop-shadow-2xl cursor-pointer'>
                        <div className='mb-5 drop-shadow-2xl' >
                           <img className="w-16 h-16" src={project3} alt="img smile" />

                        </div>
                        <p className='pb-3 font-semibold text-xl'>
                            Years Completed
                        </p>
                        <span className='text-roxo text-3xl font-bold'>
                            {counterOn && <CountUp start={0} end={65} duration={2} separator="" delay={0}/>}
                        </span>
                    </div>
                </ScrollTrigger>
                
            </div>
        </>
    )
}
export default SectionDados