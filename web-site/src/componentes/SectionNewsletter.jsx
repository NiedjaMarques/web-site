import img2 from '../../public/app/view/img2.png'

const SectionNewsletter = () => {
    return(
        <>
            <div className="my-10 md:flex items-center justify-center p-10 bg-roxo text-white">

                <div className="md:w-1/3 md:mr-10">
                    <img src={img2} alt="" />
                </div>

                <div className="md:w-1/2 mb-2 ">
                    <h6 className="text-lg w-32 px-4 py-2 my-4 text-center font-semibold bg-violet-400 rounded-md">
                        Newsletter
                    </h6>

                    <h1 className="font-bold text-3xl   mb-5">
                        Subscribe To Our Newsletter For Latest Update Of Finanical Services
                    </h1>

                    <p className="text-base mb-5">
                        Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur ante eros id urna. Mauris luctus nulla ut pharetra tempor.
                    </p>

                    <div className="flex items-center w-full max-w-md bg-white rounded-full shadow-lg">
                        <input className="rounded-full p-4 text-black flex-grow outline-none" type="email" name="#" id="#" placeholder="Email Address" />
                        <button className="bg-roxo hover:bg-blue-700 transition-all duration-500 font-bold p-2 rounded-full mr-2 ">Subscribe Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionNewsletter