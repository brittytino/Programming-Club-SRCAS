import { FcIdea } from 'react-icons/fc';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { GrCertificate, GrProjects } from 'react-icons/gr';
import { SiSololearn } from 'react-icons/si';

const cardContent = [
    {
        imgSrc: <FcIdea className="text-4xl text-blue-500" />,
        name: "Hackathons",
        desc: "Show your skills in fast-paced coding competitions and win prizes.They can also be a lot of fun!"
    },
    {
        imgSrc: <FaChalkboardTeacher className="text-4xl text-blue-500" />,
        name: "Seminars",
        desc: "Learn from industry experts and expand your tech knowledge.",
    },
    {
        imgSrc: <GiTeacher className="text-4xl text-blue-500" />,
        name: "Workshops",
        desc: "Hands-on sessions to build and enhance your coding skills."
    },
    {
        imgSrc: <GrCertificate className="text-4xl text-blue-500" />,
        name: "Certifications",
        desc: "Earn credentials to validate and showcase your skills.",
    },
    {
        imgSrc: <SiSololearn className="text-4xl text-blue-500" />,
        name: "Webinars",
        desc: "Learn from industry experts and expand your tech knowledge.",
    },
    {
        imgSrc: <GrProjects className="text-4xl text-blue-500" />,
        name: "Projects",
        desc: "Collaborate on exciting tech projects to showcase your skills and gain experience.",
    }
];

const ServicesSection = () => {
    return (
        <div className="md:-mt-24 text-center">
            <h1 className="text-[#d1fffa] underline underline-offset-8 decoration-primary text-3xl font-semibold">Our Club Services</h1>

            {/* Cards */}
            <div className="flex justify-center mt-10 px-3 md:px-28 pb-4">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
                    {
                        cardContent.map((item, index) => (
                            <div key={index} className="bg-[#1c1c24] shadow-xl hover:bg-gray-800 hover:transition-all text-left rounded-lg p-6 flex flex-col items-center">
                                <div className="mb-4">
                                    {item.imgSrc}
                                </div>
                                <h2 className="text-2xl font-semibold text-[#03dac6] mb-2">{item.name}</h2>
                                <p className=" text-gray-400 text-xs md:text-base">{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
