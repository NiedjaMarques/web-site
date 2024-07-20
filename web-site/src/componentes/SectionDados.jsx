import project from '../../public/app/view/flaticon/smile1.png'
import project1 from '../../public/app/view/flaticon/blockchain.png'
import project2 from '../../public/app/view/flaticon/rocket.png'
import project3 from '../../public/app/view/flaticon/crypto.png'

const SectionDados = () => {
    return(
        <>
            <div className="bg-roxo grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-4 w-full py-20 justify-around">

                <div className='text-center my-4  bg-white p-10 hover:-translate-y-4 transition-all ease-linear duration-500 flex flex-col justify-center items-center rounded-2xl drop-shadow-2xl'>
                    <div className='mb-5 drop-shadow-2xl' >
                       <img className="w-16 h-16" src={project} alt="img smile" />
                    </div>
                    <p className='pb-3 text-cinza-claro font-semibold text-xl'>
                        Satisfied Clients
                    </p>
                    <span className='text-roxo text-3xl font-bold'>
                        9875
                    </span>
                </div>

                <div className='text-center my-4 sm:relative sm:top-8 hover:-translate-y-4 transition-all ease-linear duration-500 bg-white p-10 flex flex-col justify-center items-center rounded-2xl drop-shadow-2xl'>
                    <div className='mb-5 drop-shadow-2xl' >
                       <img className="w-16 h-16" src={project1} alt="img smile" />
                    </div>
                    <p className='pb-3 text-cinza-claro font-semibold text-xl'>
                        Project Completed
                    </p>
                    <span className='text-roxo text-3xl font-bold'>
                        8765
                    </span>
                </div>

                <div className='text-center my-4 bg-white p-10 hover:-translate-y-4 transition-all ease-linear duration-500 flex flex-col justify-center items-center rounded-2xl drop-shadow-2xl'>
                    <div className='mb-5 drop-shadow-2xl' >
                       <img className="w-16 h-16" src={project2} alt="img smile" />
                    </div>
                    <p className='pb-3 text-cinza-claro font-semibold text-xl'>
                        Project Lunched
                    </p>
                    <span className='text-roxo text-3xl font-bold'>
                        7894
                    </span>
                </div>

                <div className='text-center my-4 sm:relative sm:top-8 hover:-translate-y-4 transition-all ease-linear duration-500 bg-white p-10 flex flex-col justify-center items-center rounded-2xl drop-shadow-2xl'>
                    <div className='mb-5 drop-shadow-2xl' >
                       <img className="w-16 h-16" src={project3} alt="img smile" />
                    </div>
                    <p className='pb-3 text-cinza-claro font-semibold text-xl'>
                        Years Completed
                    </p>
                    <span className='text-roxo text-3xl font-bold'>
                        65
                    </span>
                </div>
                
            </div>
        </>
    )
}
export default SectionDados