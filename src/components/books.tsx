

import { useState } from "react";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";
import { Check,  } from "lucide-react";
import book1 from "./images/book.png";
import { FaGraduationCap } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";




import fire from "./images/fire.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const books = [
  { title: "The Smart Money Secrets (Vol 1)", price: "$30", image: book1 },
  { title: "Market Structure Blueprint", price: "$25", image: book1 },
  { title: "Liquidity & Order Flow", price: "$40", image: book1 },
];

export default function PlansSection() {
  const [index] = useState(0);
  const [activeTab, setActiveTab] = useState("mentorship")

  

  return (
    <section className="py-20 bg-black text-white" id='books'>
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
       

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Available Plans
          </h2>
          <p className="mt-3 text-sm text-white/60">
            Scale your trading journey, select from our available plans
          </p>

          {/* TOGGLE */}
          <div className="mt-6 inline-flex rounded-md overflow-hidden border border-white/10">
            <button
                 onClick={() => setActiveTab("books")}
              className={`px-5 py-2 text-sm font-semibold flex justify-center items-center gap-3 cursor-pointer ${
                activeTab === "books"
                  ? "bg-[#A6FF00] text-black"
                  : "bg-[#0d0d0d] text-white/70"
              }`}
            >
                 <FaBook  size={16}/>  Forex E-book
            </button>
            <button
               onClick={() => setActiveTab("mentorship")}
              className={`px-5 py-1.5 text-sm font-semibold flex justify-center items-center gap-3 cursor-pointer ${
                activeTab === "mentorship"
                  ? "bg-[#A6FF00] text-black"
                  : "bg-[#0d0d0d] text-white/70"
              }`}
            >
 
       <FaGraduationCap size={20}/>  Mentorship
   

            </button>
          </div>
        </motion.div>

        {/* CARDS */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch w-full">
          {/* BOOK CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
             className={`bg-[#0d0d0d] rounded-xl p-6 flex flex-col w-full w-[92%] sm:w-[420px] md:w-[380px] min-h-[560px] relative
                    ${activeTab === 'books' ? 'border border-[#A6FF00]/40' : 'border border-transparent'}`}
          >
            {/* HEADER */}
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-sm font-medium leading-snug">
                Premium Value <br /> Packed E-book
              </h3>
              <span className="text-xs text-white/50 cursor-pointer">
                See all →
              </span>
            </div>

            <hr />

         {/* STATIC IMAGE */}
<div className="bg-white rounded-lg p-5 flex justify-center mb-4 mt-5">
  <img
    src={books[0].image}
    alt="Book preview"
    className="w-[400px] object-contain"
  />
</div>


         

            {/* FOOTER */}
            <div className="flex justify-between items-center mt-auto pt-6">
              <span className="text-[14px] font-semibold pr-25">{books[index].title}</span>
              <span className="text-2xl font-semibold text-[#A6FF00]">{books[index].price}</span>
            </div>

            <button className="w-full bg-[#A6FF00] flex justify-center items-center gap-3 text-black py-1.5 rounded-md font-medium mt-5 cursor-pointer" onClick={() => window.open("https://gumroad.com/checkout", "_blank")}>
            <FaCartPlus style={{width:20}} />  Buy
            </button>
          </motion.div>

          {/* MENTORSHIP CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`bg-[#0d0d0d] rounded-xl p-6 flex flex-col w-full w-[92%] sm:w-[420px] md:w-[380px] min-h-[560px] relative
  ${activeTab === 'mentorship' ? 'border border-[#A6FF00]/40' : 'border border-transparent'}
`}

          >
            <span className="absolute flex justify-center items-center gap-2 top-10 right-4 bg-[#A6FF00] text-black text-xs px-3 py-1 rounded-full">
              <img src={fire} style={{ width: "15px" }} /> Recommended
            </span>

            <h3 className="text-sm font-medium mb-4 leading-snug">
              ChartTactix Academy
            </h3>

            <div className="text-3xl font-bold text-[#A6FF00] mb-5">
              $500{" "}
              <span className="text-xs text-white/50 font-normal">
                Billed Annually
              </span>
            </div>

            <hr />

            <ul className="space-y-3 text-[10px]  text-white/70 mt-5">
              {[
                "Full Trading Course",
                "Proven trading framework and strategy",
                "Market Breakdown & Weekly Analysis",
                "Live mentorship classes with real-market breakdowns",
                "Recorded sessions for replay access",
                "Trading Psychology & Risk Management Training",
                "24/7 support",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 mt-6">
                  <span className="w-4 h-4 rounded-full bg-[#A6FF00] flex items-center justify-center">
                    <Check size={10} className="text-black" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <button className="w-full bg-[#A6FF00] flex justify-center items-center gap-3 text-black py-1.5 rounded-md font-medium mt-auto cursor-pointer"   onClick={() => window.open("https://whop.com/checkout/plan_8XFBu7La7dXlZ", "_blank")}>
              <FaGraduationCap style={{width:20}} />  Register Now
            </button>



          </motion.div>
        </div>
      </div>
    </section>
  );
}

