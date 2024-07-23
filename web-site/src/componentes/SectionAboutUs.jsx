import { FaAngleRight } from "react-icons/fa6"
import img2 from '../../public/app/view/img2.png'
import sign from '../../public/app/view/sign.png'

const SectionAboutus = () => {
    return(
        <>
            <div className="mt-10 md:flex items-center justify-center px-2">
                <div className="md:w-1/2">
                    <img src={img2} alt="" />
                </div>

                <div className="md:w-1/2 mt-2 ">
                    <h6 className="text-lg w-32 px-4 py-2 my-4 text-center font-semibold text-roxo bg-roxo-transparente rounded-md">
                        About Us
                    </h6>

                    <h1 className="font-bold text-3xl  text-azul-escuro mb-5">
                        How We Can Help You Achieve Your Business Goal
                    </h1>

                    <p className="text-base text-cinza-claro mb-5">
                        Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur ante eros id urna. Mauris luctus nulla ut pharetra tempor.
                    </p>

                    <p className="text-base text-cinza-claro mb-5">
                        Mauris egestas eleifend sapien eu malesuada. Phasellus at metus eget sapien tristique accumsan non sit amet augue.
                    </p>

                    <img className="my-2 " src={sign} alt="" />

                    <h4 className="font-bold text-3xl text-azul-escuro mb-5">
                        CEO Jhone Doe
                    </h4>

                    <div className='flex items-center mb-8'>

                        <button className='bg-roxo rounded-full p-2 md:p-3 mr-2 shadow-xl'>
                            <FaAngleRight className='text-lg text-white'/> 
                        </button>

                        <a href="#" className='text-roxo font-medium'>Learn More</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionAboutus