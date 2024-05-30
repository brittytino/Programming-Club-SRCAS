import About from "./About"
import HomePage from "./HomePage"
// import Navbar from "./Navbar"
import Services from "./Services"
import { animateScroll as scroll } from "react-scroll";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
const Home = () => {

    return (
        <div>
            {/* <Navbar /> */}
            <HomePage />
            <Services />
            <About />
            <Testimonial/>
            <Footer/>

            <button
                onClick={() => scroll.scrollToTop()}
                className="fixed bottom-4 right-4 z-50 bg-[#0d0c13] text-white rounded-full p-2 shadow-md hover:bg-secondary hover:text-black transition-all duration-300"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>

        </div>
    )
}

export default Home

