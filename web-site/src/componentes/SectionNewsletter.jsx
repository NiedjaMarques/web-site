import img2 from '../../public/app/view/img9.png'
import bg13 from '../../public/app/view/background/bg/bg13.png'


const SectionNewsletter = () => {
    return(
        <>
            <div style={{ backgroundImage: `url(${bg13})` }} className="bg-cover bg-center bg-no-repeat my-10 md:flex items-center justify-center p-10 bg-roxo text-white">

                <div className="md:w-1/3 md:mr-10">
                    <img src={img2} alt="" />
                </div>

                <div className="md:w-1/2 mb-2 ">
                    <h6 className="w-32 px-4 py-2 my-4 text-center font-semibold bg-violet-400 rounded-md">
                        Newsletter
                    </h6>

                    <h1 className="font-bold text-2xl mb-5">
                        Subscribe To Our Newsletter For Latest Update Of Finanical Services
                    </h1>

                    <p className="mb-5">
                        Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur ante eros id urna. Mauris luctus nulla ut pharetra tempor.
                    </p>

                    <div className='relative p-3 flex items-center max-w-sm rounded-full shadow-lg bg-white'>
                        <input className='rounded-full w-full pr-16 outline-none text-black' type="email" name="#" id="#" placeholder="Email Address"/>
                        <button className='absolute right-0 top-0 mt-1 mr-1 rounded-full p-2 bg-roxo hover:bg-blue-700 transition-all duration-500 font-bold'>Subscribe Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionNewsletter