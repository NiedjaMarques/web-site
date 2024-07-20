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

                    <div className="border items-center flex flex-col p-5">
                        <div className="mb-5 drop-shadow-2xl bg-yellow-200">
                            <img className="w-16 h-16" src="" alt="" />
                        </div>

                        <h1 className="pb-3 text-cinza-claro font-semibold text-xl">
                            Strategy & Research
                        </h1>

                        <p className="text-md text-cinza-claro mb-5">
                            Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.
                        </p>
                    </div>

                    <div className="border items-center flex flex-col p-5">
                        <div className="bg-red-200">
                            <img className="w-16 h-16" src="" alt="" />
                        </div>

                        <h1 className="pb-3 text-cinza-claro font-semibold text-xl">
                            Web Development
                        </h1>

                        <p className="text-md text-cinza-claro mb-5">
                            Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.
                        </p>
                    </div>
                    
                    <div className="border items-center flex flex-col p-5">
                        <div className="bg-green-200">
                            <img className="w-16 h-16" src="" alt="" />
                        </div>

                        <h1 className="pb-3 text-cinza-claro font-semibold text-xl">
                            Web Solution
                        </h1>

                        <p className="text-md text-cinza-claro mb-5">
                            Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.
                        </p>
                    </div>

                </div>

            </div>
        </>
    )
}
export default SectionServices