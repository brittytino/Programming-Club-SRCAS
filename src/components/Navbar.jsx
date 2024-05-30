import { useState } from "react";
import { MdMenu, MdClose } from 'react-icons/md';
import { Link, useNavigate } from "react-router-dom";
import logoImg from '../images/logo-removebg-preview (1).png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const MenuIcon = showMenu ? MdClose : MdMenu;

    const handleNavigation = (path) => {
        navigate(path);
        setShowMenu(false);
    };

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Gallery", path: "/gallery" },
        { name: "Partners", path: "/partners" },
        { name: "Projects", path: "/Projects" },
        { name: "Contact us", path: "/Contact" }
    ];

    return (
        <div className="sticky bg-black top-0 z-10 w-full shadow-md text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between py-4 px-7 md:px-28 border-b border-gray-950">
                <div className="flex items-center font-bold text-2xl cursor-pointer">
                    <img src={logoImg} alt="" className="text-3xl pl-1 md:px-3 h-16 w-50" />
                    <div className="md:hidden ml-auto">
                        <MenuIcon onClick={toggleMenu} className="text-white text-3xl cursor-pointer" />
                    </div>
                </div>
                <ul className={`md:flex items-center ${showMenu ? 'block' : 'hidden'} md:mt-0 mt-4 md:flex-row flex-col w-full md:w-auto`}>
                    {navLinks.map((link, index) => (
                        <li key={index} className="text-xl cursor-pointer md:my-0 my-2 text-left md:text-center">
                            {link.path.startsWith("#") ? (
                                <Link to={link.path} className="md:ml-8 text-white duration-300 hover:text-[#3CB371]">{link.name}</Link>
                            ) : (
                                <div onClick={() => handleNavigation(link.path)} className="md:ml-8 text-white duration-300 hover:text-[#3CB371]">{link.name}</div>
                            )}
                        </li>
                    ))}
                    <Link to="/join">
                        <button className="md:ml-4 transition-all hover:bg-[#28A745] hover:text-black font-semibold rounded-2xl px-3 py-2 border border-[#ffff] text-[#ffff]">
                            Join Us
                        </button>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
