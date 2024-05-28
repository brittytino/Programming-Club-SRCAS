import r1Img from '../images/r1.png'
import r2Img from '../images/r2.jpg'
import r3Img from '../images/r3.jpg'
import { FaStar } from "react-icons/fa6";


const Testimonial = () => {
    const review = [
        {
            title: "This club gave me the tools and support to excel.",
            imgSrc: r1Img,
            name: "John",
            bg: "#faea73",
            
        },
        {
            title: "Being a part of this community boosted my coding confidence.",
            imgSrc: r2Img,
            name: "Priya",
            bg: "#cceff6"
        },
        {
            title: "The projects and peer interactions were invaluable.",
            imgSrc: r3Img,
            name: "Tino",
            bg: "#f7cedc"
        }
    ];

    return (
        <div className="mt-10 pt-10 pb-10 md:flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl font-semibold text-[#F6F5F5]">Hear from Our Satisfied Members</h1>
    
        <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-16 px-4 md:px-28 justify-center items-center'>
            {review.map((item, index) => (
                <div key={index} className="rounded-lg p-2 w-full md:w-fit md:p-5" style={{ backgroundColor: item.bg }}>
                    <h1 className="text-xs md:text-2xl text-[#080a47] text-left">{item.title}</h1>
                    
                    <div className='flex justify-start gap-4 pt-2 items-center'>
                        <img src={item.imgSrc} className='w-12 md:w-20' alt="" />
                        <p>{item.name}</p>
                        <div className='flex flex-row text-green-800'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
    </div>
    
    );
};

export default Testimonial;
