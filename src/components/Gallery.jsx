import React from 'react';

import g4Img from '../images/gallery/g1.webp';
import cyberSessionImg from '../images/gallery/session-cyber.webp';
import CSImg2 from '../images/gallery/session-cyber2.webp';
import codathonImg from '../images/gallery/codathon.webp'
import Linux1 from '../images/gallery/Linux1.webp'
import Linux2 from '../images/gallery/Linux2.webp'

const Gallery = () => {

    const Imgdata = [
        
        { img: g4Img, event: 'Mastering the art of Web Designing' },
        { img: cyberSessionImg, event: 'Cyber Session' },
        { img: CSImg2, event: 'Cyber Session 2' },
        {img: codathonImg, event: 'Codathon 2k24'},
        {img: Linux1, event: 'Linux session - Mr. S.PRATHAPAN '},
        {img :Linux2, event: 'Linux session - Mr. S.PRATHAPAN'},
    ];

    return (
        <div className="mt-10 px-10 pb-10">
            <h1 className="text-center text-secondary text-4xl font-semibold underline underline-offset-8 decoration-secondary">Event Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
                {Imgdata.map((data, index) => (
                    <div key={index} className="relative w-full pb-[100%] overflow-hidden group">
                        <img src={data.img} alt="" className="absolute inset-0 w-full h-full object-cover rounded-sm transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                            <p className="text-secondary bg-[#000] p-2 rounded-lg text-lg font-bold">{data.event}</p>
                        </div>
                    </div>
            
                ))}
            </div>
            <p className='text-gray-500 text-center font-medium mt-10'>Stay tuned for more exciting events!</p>
        </div>
    );
};

export default Gallery;
