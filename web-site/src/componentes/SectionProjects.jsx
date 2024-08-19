import React, { useState } from 'react';
import img1 from '../../public/app/view/pic11.jpg';
import img2 from '../../public/app/view/pic22.jpg';
import img3 from '../../public/app/view/pic33.jpg';
import img4 from '../../public/app/view/pic44.jpg';
import img5 from '../../public/app/view/pic55.jpg';
import img6 from '../../public/app/view/pic66.jpg';

const items = [
    { id: 1, category: 'All', img: [img1, img2, img3, img4, img5, img6] },
    { id: 2, category: 'Web Design', img: [img4, img5, img6] },
    { id: 3, category: 'Web Development', img: [img1] },
    { id: 4, category: 'Branding', img: [img4, img5, img6, img3] },
    { id: 5, category: 'Mobile App', img: [img5] },
    { id: 6, category: 'SEO', img: [img6, img4, img5] },
];

const SectionProjects = () => {
    const [filter, setFilter] = useState('All');

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const filteredItems = filter === 'All' ? items.find(item => item.category === 'All').img : items.find(item => item.category === filter)?.img || [];

    return (
        <div className='py-5 container mx-auto px-10'>
            <div className="flex flex-col items-center">

                <h6 className="px-4 py-2 my-4 text-center font-semibold text-roxo bg-roxo-transparente rounded-md">
                    Projects
                </h6>

                <h1 className="text-center font-bold text-2xl text-azul-escuro mb-5">
                    Take A Look At Our Latest Portfolio
                </h1>

            </div>

            <div className='text-azul-escuro flex flex-wrap justify-center items-center mb-4 bg-gray-200 rounded-full'>
                {['All', 'Web Design', 'Web Development', 'Branding', 'Mobile App', 'SEO'].map(category => (
                    <button
                        key={category}
                        onClick={() => handleFilterChange(category)}
                        className={`m-2 px-4 py-1 rounded-3xl cursor-pointer ${
                            filter === category ? 'bg-roxo text-white shadow-lg' : ' text-azul-escuro'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center align-items-center cursor-pointer">
                {filteredItems.map((image, index) => (
                    <img key={index} src={image} alt="..." />
                ))}
            </div>
        </div>
    );
};
export default SectionProjects;