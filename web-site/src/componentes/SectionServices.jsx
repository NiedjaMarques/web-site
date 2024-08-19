import img1 from '../../public/app/view/flaticon/clickstream.png'
import img2 from '../../public/app/view/flaticon/cloud-computing.png'
import img3 from '../../public/app/view/flaticon/dashboard.png'
import green from '../../public/app/view/move/green.png'
import yellow from '../../public/app/view/move/yellow.png'
import red from '../../public/app/view/move/red.png'
import bg1 from '../../public/app/view/background/bg/bg1.png'
import '../index.css'

const SectionServices = () => {
  return(
    <>
      <div style={{ backgroundImage: `url(${bg1})` }} className="p-10 container mx-auto bg-cover bg-center bg-no-repeat">

        <div className="flex flex-col items-center">

          <h6 className="px-4 py-2 my-4 text-center font-semibold text-roxo bg-roxo-transparente rounded-md">
            Services
          </h6>

          <h1 className="text-center font-bold text-3xl text-azul-escuro mb-5">
            Provide Awesome Service To You
          </h1>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-around text-center">
          
          <div className='my-element relative p-4 group'>

            <div className="rounded-xl hover:shadow-2xl boder-black p-5 flex flex-col justify-center items-center cursor-pointer">

              <div className="mb-6 mt-3 rounded-full relative z-40 flex justify-center items-center">

                <div className='z-20 p-4 bg-yellow-400 rounded-full drop-shadow-2xl'>
                  <img className="w-14 h-14" src={img1} alt="..." />
                </div>

                <img className='background-image absolute z-10' src={yellow} alt="..."/>

              </div>

              <h1 className="py-3 text-azul-escuro font-bold text-xl">
                Strategy & Research
              </h1>

              <p className="text-cinza-claro font-medium">
                Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.
              </p>

            </div>

          </div>

          <div className='my-element relative p-4 group'>

            <div className="rounded-xl hover:shadow-2xl boder-black p-5 flex flex-col justify-center items-center cursor-pointer">

              <div className="mb-6 mt-3 rounded-full relative z-40 flex justify-center items-center">

                <div className='z-20 p-4 bg-red-400 rounded-full drop-shadow-2xl'>
                  <img className="w-14 h-14" src={img2} alt="..." />
                </div>

                <img className='background-image absolute z-10' src={red} alt="..."/>

              </div>

              <h1 className="py-3 text-azul-escuro font-bold text-xl">
                Web Development
              </h1>
              <p className="text-cinza-claro font-medium">
                Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, 
                consequat elit. Praesent sed vehicula.
              </p>

            </div>

          </div>
          
          <div className='my-element relative p-4 group'>

            <div className="rounded-xl hover:shadow-2xl boder-black p-5 flex flex-col justify-center items-center cursor-pointer">

              <div className="mb-6 mt-3 rounded-full relative z-40 flex justify-center items-center">
                
                <div className='z-20 p-4 bg-green-400 rounded-full drop-shadow-2xl'>
                  <img className="w-14 h-14" src={img3} alt="..." />
                </div>
                
                <img className='background-image absolute z-10' src={green} alt="..."/>

              </div>

              <h1 className="py-3 text-azul-escuro font-bold text-xl">
                Web Solution
              </h1>
              <p className="text-cinza-claro font-medium">
                Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.
              </p>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}
export default SectionServices