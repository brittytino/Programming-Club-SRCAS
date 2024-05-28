

import { useState, useEffect } from "react";
import { MdMenu, MdClose } from 'react-icons/md';
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImg from '../images/logo-removebg-preview (1).png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/join") {
            // Scroll to the "About" section after a delay when navigating to the "Join" page
            setTimeout(() => {
                document.getElementById("about").scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }, [location.pathname]);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const MenuIcon = showMenu ? MdClose : MdMenu;

    const handleNavigation = (path) => {
        navigate(path);
        setShowMenu(false); // Close menu after navigation
        if (path === "/join") {
            // Scroll to the top after navigating to the "Join" page
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100);
        }
    };

    return (
        <div className="sticky bg-[#0d0c13] top-0 z-10 w-full shadow-md text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between py-4 px-7 md:px-28">
                <div className="flex items-center font-bold text-2xl cursor-pointer">
                    {/* <h1 className="text-3xl font-semibold px-3">Programming Club</h1> */}
                    <img src={logoImg} alt="" className="text-3xl pl-1 md:px-3  h-16 w-50" />
                    <div className="md:hidden ml-auto">
                        <MenuIcon onClick={toggleMenu} className="text-gray-700 text-3xl cursor-pointer" />
                    </div>
                </div>
                <ul className={`md:flex items-center ${showMenu ? 'block' : 'hidden'} md:mt-0 mt-4 md:flex-row flex-col w-full md:w-auto`}>
                    <li className="text-xl cursor-pointer md:my-0 my-2 text-left md:text-center">
                        <div onClick={() => handleNavigation("/")} className="md:ml-8 text-[#f638dc] hover:text-gray-400 duration-300">Home</div>
                    </li>
                    <li className="text-xl cursor-pointer md:my-0 my-2 text-left md:text-center">
                        <Link to="/gallery" className="md:ml-8 text-[#f638dc] hover:text-gray-400 duration-300">Gallery</Link>
                    </li>
                    <li className="text-xl cursor-pointer md:my-0 my-2 text-left md:text-center">
                        <div onClick={() => handleNavigation("/partners")} className="md:ml-8 text-[#f638dc] hover:text-gray-400 duration-300">Partners</div>
                    </li>
                    <li className="text-xl cursor-pointer md:my-0 my-2 text-left md:text-center">
                        <Link to="#about" className="md:ml-8 text-[#f638dc] hover:text-gray-400 duration-300">About us</Link>
                    </li>
                    <li className="text-xl cursor-pointer md:my-0 my-2 text-left md:text-center">
                        <div onClick={() => handleNavigation("/join")} className="md:ml-8 text-[#f638dc] hover:text-gray-400 duration-300">Contact us</div>
                    </li>

                    <Link to="/join">
                      <button className="md:ml-4 transition-all hover:bg-primary hover:text-black font-semibold rounded-2xl px-3 py-2 border border-[#f638dc]">
                           Join Us
                        </button>
                    </Link>
                </ul>
               
            </div>
        </div>
    );
};

export default Navbar;
