

import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png"

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative  w-full bg-black text-white overflow-hidden " id='Home'>
   


      {/* STICKY NAVBAR */}
        <div
        className={`fixed top-0 left-0 w-full transition-colors duration-300 z-50 ${
          isSticky ? "black" : "bg-transparent"
        }`}
      >
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          sticky top-0 z-40
          bg-black
          border-b border-white/10
        "
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          {/* LOGO */}
          <div className="text-lg font-semibold tracking-tight">
            <img src={img4}/>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-8 text-sm text-white/70">
            <a href="#Home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About us</a>
            <a href="#clientResults" className="hover:text-white">Client Results</a>
            <a href="#contact" className="hover:text-white">Contact Us</a>
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex gap-3">
            <button className="bg-[#A6FF00] text-black text-sm font-medium px-4 py-2 rounded-md cursor-pointer">
              Available Plans
            </button>
            <button className="border border-white/30 text-sm px-4 py-2 rounded-md cursor-pointer">
              Join our Telegram
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button onClick={() => setOpen(true)} className="md:hidden">
            <Menu size={26} />
          </button>
        </div>
      </motion.nav>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex flex-col"
          >
            {/* TOP BAR */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
              <div className="text-lg font-semibold">
              <img src={img4}/>
              </div>
              <button onClick={() => setOpen(false)}>
                <X size={26} />
              </button>
            </div>

            {/* LINKS */}
            <div className="flex-1 px-6 pt-10 space-y-6 text-lg">
              <a href="#" className="block">Home</a>
              <a href="#" className="block">About us</a>
              <a href="#" className="block">Client Results</a>
              <a href="#" className="block">Contact Us</a>
            </div>

            {/* CTA BUTTONS */}
            <div className="px-6 pb-10 space-y-4">
              <button className="w-full bg-[#A6FF00] text-black font-medium py-3 rounded-md cursor-pointer">
                Available Plans
              </button>
              <button className="w-full border border-white/30 py-3 rounded-md cursor-pointer">
                Join our Telegram
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 text-center px-6 pt-25"
      >
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Master the Market <br />
          with <span className="text-[#A6FF00]">ChartTactix.</span>
        </h1>

        <p className="mt-2 max-w-xl mx-auto text-sm md:text-base text-white/70">
          A complete trading education built on structure and logic.
          Learn through the E-book. Improve through mentorship.
        </p>

       {/* HERO CTA */}
        <div className="mt-5 flex flex-col md:flex-row gap-4 md:gap-6 max-w-xs md:max-w-none mx-auto justify-center">
          <button className="bg-[#A6FF00] text-black font-medium py-2.5 px-15 rounded-md cursor-pointer">
            Available Plans
          </button>
          <button className="border border-white/30 py-2.5 px-15 rounded-md cursor-pointer">
            Join our Telegram
          </button>
        </div>
      </motion.div>

      {/* GREEN RIBBON (DESKTOP ONLY) */}
      <img
        src={img1}
        alt="Green ribbon"
        className="
          hidden md:block
          absolute
          w-[950px]
          left-1/2 top-1/2
           -translate-x-1/2 -translate-y-[10%]
          z-2
          opacity-40
          pointer-events-none
        "
      />

      {/* CHART IMAGES */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 mt-10 px-6 flex justify-center "
      >
        <div className="relative w-full max-w-md md:max-w-5xl flex justify-center md:gap-6">
          {/* MAIN CHART */}
          <img
            src={img2}
            className="w-full md:w-[650px] rounded-xl shadow-2xl"
          />

          {/* MOBILE OVERLAPPING CHART */}
          <img
            src={img3}
            className="
              absolute
              bottom-[10px]
              right-10
              w-[80px]
              rounded-xl
              shadow-2xl
              md:static md:w-[180px]
                md:mt-8
          
            "
          />
        </div>
      
      </motion.div>
        <h1 style={{color:'black'}}>hi</h1>
  

    </section>
  );
}






















