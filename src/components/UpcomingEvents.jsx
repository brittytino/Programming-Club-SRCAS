import React from 'react';
import sampleImg from '../images/logo-removebg-preview (1).png';
import hackSphereImg from '../images/hacksphere.jpg';

const UpcomingEvents = () => {
    const EventsInfo = [
        { img: hackSphereImg, class: false },
        { img: sampleImg, class: false },
        { img: sampleImg, class: true },
        { img: sampleImg, class: true },
        { img: sampleImg, class: true },
        { img: sampleImg, class: true },
        { img: sampleImg, class: true },
        { img: sampleImg, class: true },
    ];

    return (
        <div className='mt-20 flex flex-col justify-center items-center'>
            <h1 className="text-white mt-16 text-center font-poppins font-bold text-3xl md:text-4xl underline underline-offset-8 decoration-secondary">Upcoming Events</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-10 md:mt-16 px-4 md:px-20'>
                {EventsInfo.map((item, index) => (
                    <div key={index} className='relative w-full h-40 md:w-80 md:h-64 border rounded-md overflow-hidden'>
                        <img src={item.img} alt="" className={`w-full h-full transition-transform duration-300 ease-in-out ${item.class ? 'blur-sm' : ''} rounded-md transform hover:scale-110`} />
                        {item.class && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-black text-secondary rounded-lg px-2 py-1 text-lg md:text-xl font-bold">Coming soon</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingEvents;
