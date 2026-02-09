

import { motion } from "framer-motion"
import mini from "./images/mini.png"
import comm1 from "./images/comm1.png"
import comm2 from "./images/comm2.png"
import comm3 from "./images/comm3.png"
import comm4 from "./images/comm4.png"
import comm5 from "./images/comm5.png"
import comm6 from "./images/comm6.png"
import comm7 from "./images/comm7.png"
import comm8 from "./images/comm8.png"



const avatars = [
  comm1,
  comm2,
  comm3,
  comm4,
  comm5,
  comm6,
  comm7,
  comm8,

 

]

export default function Community() {
  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Be part of our numbers
          </h2>

          <p className="text-white/60 text-sm leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
            Gain access to elite funding, cutting-edge tools, and the support
            of a whole community dedicated to your growth.
          </p>

          <div className="flex justify-center lg:justify-start gap-4" >
            <a href="#books">
            <button className="bg-[#A6FF00] text-black px-10 py-3 rounded-md font-medium text-[11px] whitespace-nowrap  cursor-pointer" >
              Available Plans
            </button>
             </a>

            <button className="border border-white/20 text-white px-10 py-3 rounded-md text-[11px] whitespace-nowrap hover:bg-white/5 transition cursor-pointer" onClick={() => window.open("https://t.me/ChartTactix", "_blank")}>
              Join our Telegram
            </button>
          </div>
        </motion.div>


     {/* RIGHT ORBIT VISUAL */}

<div className="relative flex justify-center items-center w-full mt-18 lg:mt-0">

  {/* OUTER ORBIT */}
  <motion.div
    className="
      absolute
      w-[220px] h-[220px]
      sm:w-[260px] sm:h-[260px]
      md:w-[300px] md:h-[300px]
      rounded-full
      border border-dashed border-white/20
    "
    animate={{ rotate: 360 }}
    transition={{ duration: 50, ease: "linear", repeat: Infinity }}
  />

  {/* INNER ORBIT */}
  <motion.div
    className="
      absolute
      w-[150px] h-[150px]
      sm:w-[190px] sm:h-[190px]
      md:w-[220px] md:h-[220px]
      rounded-full
      border border-dashed border-white/20
    "
    animate={{ rotate: -360 }}
    transition={{ duration: 35, ease: "linear", repeat: Infinity }}
  />

  {/* ===== OUTER ORBIT AVATARS (4) ===== */}
  {avatars.slice(0, 4).map((img, i) => {
    const angle = (i / 4) * 360

    return (
      <motion.div
        key={`outer-${i}`}
        className="absolute"
        style={{ rotate: angle }}
        animate={{ rotate: angle + 360 }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div
          className="
            flex items-center justify-center
            translate-y-[-110px]
            sm:translate-y-[-130px]
            md:translate-y-[-150px]
          "
        >
          <img
            src={img}
            alt=""
            className="
              w-5 h-5
              sm:w-6 sm:h-6
              rounded-full
              object-cover
              border border-white/20
              bg-black
              shadow-md
            "
          />
        </div>
      </motion.div>
    )
  })}

  {/* ===== INNER ORBIT AVATARS (4) ===== */}
  {avatars.slice(4, 8).map((img, i) => {
    const angle = (i / 4) * 360

    return (
      <motion.div
        key={`inner-${i}`}
        className="absolute"
        style={{ rotate: angle }}
        animate={{ rotate: angle - 360 }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div
          className="
            flex items-center justify-center
            translate-y-[-75px]
            sm:translate-y-[-95px]
            md:translate-y-[-110px]
          "
        >
          <img
            src={img}
            alt=""
            className="
              w-5 h-5
              sm:w-6 sm:h-6
              rounded-full
              object-cover
              border border-white/20
              bg-black
              shadow-md
            "
          />
        </div>
      </motion.div>
    )
  })}

  {/* CENTER LOGO */}
  <div
    className="
      relative z-20
      w-14 h-14
      rounded-full
      bg-[#0d0d0d]
      flex items-center justify-center
      border border-white/10
    "
  >
    <img src={mini} alt="" className="w-6" />
  </div>
</div>



<h1 >hi</h1>


      </div>
    </section>
  )
}

