import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate()
    const handleNavigation=(path)=>{
        navigate(path);
    }

    return (
        <div className="pt-10 md:pt-20 pb-4 bg-black">
            <hr />
            <h1 className="mt-10 text-center text-2xl md:text-4xl font-semibold text-yellow-500 pb-4">Ready to Elevate Your Coding Skills?</h1>
            <p className="text-center text-xl md:text-2xl font-medium text-gray-200">Join Programming Club for unmatched coding experiences and growth.</p>
            <div className="flex items-center justify-center gap-5 mt-10 md:mt-10">
                <button onClick={()=>handleNavigation('/join')} className="hover:bg-yellow-600 bg-secondary font-semibold text-[#171717] transition-all text-xl md:text-3xl rounded-2xl py-3 px-5">Join Now</button>
                <button onClick={()=> handleNavigation('/join')} className="py-3 px-5 rounded-2xl text-white text-xl md:text-2xl border border-yellow-500 hover:text-black hover:bg-yellow-500 transition-all">Contact Us</button>
            </div>
            <h1 className=" text-gray-400 text-md text-center mt-10">Designed by Programming club, SRCAS </h1>

            <footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col col-12">
      <div class="footer__inner">
        <div class="copyright">2024 © <a href="/">Programming Club | IITK</a>Developed &amp; Maintained by <a href="https://pclub.in">Programming Club IITK</a>.</div>
        
<div class="social">
  <ul class="social__list list-reset">
    
    <li class="social__item">
      <a class="social__link" href="https://twitter.com/pclubiitk" aria-label="social icon"><i class="ion ion-logo-twitter"></i></a>
    </li>
    
    <li class="social__item">
      <a class="social__link" href="https://www.youtube.com/@pclubiitk" aria-label="social icon"><i class="ion ion-logo-youtube"></i></a>
    </li>
    
    <li class="social__item">
      <a class="social__link" href="https://github.com/pclubiitk" aria-label="social icon"><i class="ion ion-logo-github"></i></a>
    </li>
    
    <li class="social__item">
      <a class="social__link" href="https://www.linkedin.com/in/pclubiitk" aria-label="social icon"><i class="ion ion-logo-linkedin"></i></a>
    </li>
    
  </ul>
</div>

        </div>
      </div>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;
