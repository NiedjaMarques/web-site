import img1 from '../../public/app/view/flaticon/clickstream.png'
import img2 from '../../public/app/view/flaticon/cloud-computing.png'
import img3 from '../../public/app/view/flaticon/dashboard.png'

const SectionServices = () => {
    return(
        <>
            <div className="py-10">

                <div className="flex flex-col items-center">

                    <h6 className="text-xl px-4 py-2 my-4 text-center font-semibold text-roxo bg-roxo-transparente rounded-md">
                        Services
                    </h6>

                    <h1 className="text-center font-bold text-3xl text-azul-escuro mb-5">
                        Provide Awesome Service To You
                    </h1>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-around text-center">

                    <div className="hover:border hover:shadow-sm hover:shadow-yellow-600 items-center flex flex-col p-5 rounded-xl hover:drop-shadow-2xl">
                        <div className="mb-5 bg-yellow-400 rounded-full p-4">
                            <img className="w-16 h-16" src={img1} alt="" />
                        </div>

                        <h1 className="pb-3 text-azul-escuro font-bold text-2xl">
                            Strategy & Research
                        </h1>

                        <p className="text-md text-cinza-claro font-medium mb-5">
                            Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.
                        </p>
                    </div>

                    <div className="hover:border hover:shadow-sm hover:shadow-red-600 items-center flex flex-col p-5 rounded-xl hover:drop-shadow-2xl">
                        <div className="mb-5 bg-red-600 rounded-full p-4">
                            <img className="w-16 h-16" src={img2} alt="" />
                        </div>

                        <h1 className="pb-3 text-azul-escuro font-bold text-2xl">
                            Web Development
                        </h1>

                        <p className="text-md text-cinza-claro mb-5 font-medium">
                            Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.
                        </p>
                    </div>
                    
                    <div className="hover:border hover:shadow-sm hover:shadow-green-600  items-center flex flex-col p-5 rounded-xl hover:drop-shadow-2xl">
                        <div className="mb-5 bg-green-600 rounded-full p-4">
                            <img className="w-16 h-16" src={img3} alt="" />
                        </div>

                        <h1 className="pb-3 text-azul-escuro font-bold text-2xl">
                            Web Solution
                        </h1>

                        <p className="text-md text-cinza-claro mb-5 font-medium">
                            Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.
                        </p>
                    </div>

                </div>

            </div>
        </>
    )
}
export default SectionServices