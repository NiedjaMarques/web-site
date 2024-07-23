import img1 from '../../public/app/view/pic1.jpg'
import img2 from '../../public/app/view/pic2.jpg'
import img3 from '../../public/app/view/pic3.jpg'
import img4 from '../../public/app/view/pic4.jpg'
import img5 from '../../public/app/view/pic5.jpg'
import img6 from '../../public/app/view/pic6.jpg'

const SectionProjects = () => {
    return(
        <>
            <div className="py-5">

                <div className="flex flex-col items-center">

                    <h6 className="text-xl px-4 py-2 my-4 text-center font-semibold text-roxo bg-roxo-transparente rounded-md">
                        Projects
                    </h6>

                    <h1 className="text-center font-bold text-3xl text-azul-escuro mb-5">
                        Take A Look At Our Latest Portfolio
                    </h1>

                </div>

                <div>
                    <ul className='flex items-center justify-around bg-roxo-transparente my-3 p-3 rounded-full text-azul-escuro font-semibold'>
                        <li className='cursor-pointer px-4 py-1 rounded-3xl'>All</li>
                        <li className='cursor-pointer px-4 py-1 rounded-3xl'>Web Design</li>
                        <li className='cursor-pointer px-4 py-1 rounded-3xl'>Web Development</li>
                        <li className='cursor-pointer px-4 py-1 rounded-3xl'>Branding</li>
                        <li className='cursor-pointer active:bg-blue-500 bg-slate-400 px-4 py-1 rounded-3xl'>Mobile App</li>
                        <li className='cursor-pointer active:text-white active:drop-shadow-2xl px-4 py-1 rounded-3xl'>SEO</li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-around">
                    <div className=''><img src={img1} alt="" /></div>
                    <img className='' src={img2} alt="" />
                    <img className='' src={img3} alt="" />
                    <img className='' src={img4} alt="" />
                    <img className='' src={img5} alt="" />
                    <img className='' src={img6} alt="" />
                </div>

            </div>
        </>
    )
}
export default SectionProjects