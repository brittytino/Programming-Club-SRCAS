import sampleImg from '../images/logo-removebg-preview (1).png';

const UpcomingEvents = () => {
    const EventsInfo = [
        { img: sampleImg, class: false },
        { img: sampleImg, class: false },
        { img: sampleImg, class: true },
        { img: sampleImg, class: true },
        { img: sampleImg, class: true },
        { img: sampleImg, class: true },
        { img: sampleImg, class: true },
        { img: sampleImg, class: true },
    ];

    return (
        <div className='mb-28'>
            <h1 className="text-white mt-16 text-center font-semibold text-4xl underline underline-offset-8 decoration-secondary">Upcoming Events</h1>
            <div className='grid grid-cols-4 gap-8 mt-20 px-20'>
                {EventsInfo.map((item, index) => (
                    <div key={index} className='relative w-80 min-h-64 border rounded-md overflow-hidden'>
                        <img src={item.img} alt="" className={`w-full h-full transition-transform duration-300 ease-in-out ${item.class ? 'blur-sm' : ''} rounded-md transform hover:scale-110`} />
                        {item.class && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-black text-secondary rounded-lg px-2 py-1 text-xl font-bold">Coming soon</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingEvents;
