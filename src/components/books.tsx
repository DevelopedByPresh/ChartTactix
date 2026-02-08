

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Check } from "lucide-react"
// import book1 from "./images/book.png"
// import mini from "./images/mini.png"
// import buy from "./images/buy.png"
// import register from "./images/register.png"
// import member from './images/member.png'
// import forex from './images/forex.png'
// import fire from "./images/fire.png"



// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// }

// const books = [
//   {
//     title: "The Smart Money Secrets (Vol 1)",
//     price: "$30",
//     image: book1,
//   },
//   {
//     title: "Market Structure Blueprint",
//     price: "$25",
//     image: book1,
//   },
//   {
//     title: "Liquidity & Order Flow",
//     price: "$40",
//     image: book1,
//   },
// ]

// export default function PlansSection() {
//   const [index, setIndex] = useState(0)
//   const [activeTab, setActiveTab] = useState("mentorship")

//   const swipeConfidenceThreshold = 50

//   const paginate = (direction) => {
//     setIndex((prev) => {
//       if (direction > 0) {
//         return prev === books.length - 1 ? 0 : prev + 1
//       }
//       return prev === 0 ? books.length - 1 : prev - 1
//     })
//   }

//   return (
//     <section className="py-20 bg-black text-white">
//       <div className="max-w-6xl mx-auto px-6">
//      {/* <div className="mx-auto px-3 md:px-6 md:max-w-6xl"> */}



//         {/* HEADER */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="text-center mb-14"
//         >
//           <div className="flex justify-center items-center">
//             <img src={mini} alt="" />
//           </div>

//           <h2 className="text-3xl md:text-4xl font-bold mt-3">
//             Available Plans
//           </h2>
//           <p className="mt-3 text-sm text-white/60">
//             Scale your trading journey, select from our available plans
//           </p>

//           {/* TOGGLE */}
//           <div className="mt-6 inline-flex rounded-md overflow-hidden border border-white/10">
//             <button
//             //  onClick={() => setActiveTab("books")}
//               className={`px-5 py-2 text-sm flex justify-center align-center gap-3 cursor-pointer ${
//                 activeTab === "books"
//                   ? "bg-[#A6FF00] text-black"
//                   : "bg-[#0d0d0d] text-white/70"
//               }`}
//             >
//                  <img src={forex} style={{width:'20px', height:'20px'}}/>  Forex e-books
//             </button>
//             <button
//             //  onClick={() => setActiveTab("mentorship")}
//               className={`px-5 py-1.5 text-sm flex justify-center align-center gap-3 cursor-pointer ${
//                 activeTab === "mentorship"
//                   ? "bg-[#A6FF00] text-black"
//                   : "bg-[#0d0d0d] text-white/70"
//               }`}
//             >
//              <img src={member} style={{width:'20px', height:'20px'}}/> Mentorship
//             </button>
//           </div>
//         </motion.div>

//         {/* CARDS */}
//         {/* <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch px-4"> */}
//                 <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch  w-full">

//           {/* ================= BOOK CARD ================= */}
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="
//               bg-[#0d0d0d]
//               border border-white/10
//               rounded-xl
//               p-6
//               flex flex-col
//               w-full
//              w-[92%]
//   sm:w-[420px]
//   md:w-[380px]
//   min-h-[560px]
            
//             "
//           >
//             {/* HEADER */}
//             <div className="flex justify-between  items-start mb-4">
//               <h3 className="text-sm font-medium leading-snug">
//                 Premium Value <br /> Packed E-book
//               </h3>
//               <span className="text-xs text-white/50 cursor-pointer">
//                 See all →
//               </span>
//             </div>

//             <hr />

//             {/* SLIDEABLE BOOK IMAGE */}
//             <div className="bg-white rounded-lg p-5 flex justify-center mb-4 mt-5 overflow-hidden">
//               <AnimatePresence mode="wait">
//                 <motion.img
//                   key={index}
//                   src={books[index].image}
//                   drag="x"
//                   dragConstraints={{ left: 0, right: 0 }}
//                   onDragEnd={(e, info) => {
//                     if (info.offset.x < -swipeConfidenceThreshold) {
//                       paginate(1)
//                     } else if (info.offset.x > swipeConfidenceThreshold) {
//                       paginate(-1)
//                     }
//                   }}
//                   initial={{ opacity: 0, x: 40 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -40 }}
//                   transition={{ duration: 0.4 }}
//                   className="w-[400px] object-contain cursor-grab active:cursor-grabbing"
//                 />
//               </AnimatePresence>
//             </div>

//             {/* DOTS */}
//             <div className="flex justify-center gap-2 mt-3">
//               {books.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setIndex(i)}
//                   className={`w-3 h-3 rounded-full flex items-center justify-center ${
//                     i === index
//                       ? "bg-[#A6FF00]"
//                       : "border border-white/30"
//                   }`}
//                 >
//                   {i === index && (
//                     <span className="w-1.5 h-1.5 bg-black rounded-full" />
//                   )}
//                 </button>
//               ))}
//             </div>

//             {/* FOOTER */}
//             <div className="flex justify-between items-center mt-auto pt-6">
//               <span className="text-[15px] font-semibold pr-25">
//                 {books[index].title}
//               </span>
//               <span className="text-2xl font-semibold text-[#A6FF00]">
//                 {books[index].price}
//               </span>
//             </div>



          
//                 <button className="w-full bg-[#A6FF00] flex justify-center align-center gap-3 text-black py-1.5 rounded-md font-medium mt-5 cursor-pointer">
//                <img src={buy}/>     Buy
//             </button>

         
//           </motion.div>

//           {/* ================= MENTORSHIP CARD ================= */}
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="
//               bg-[#0d0d0d]
//               border border-[#A6FF00]/40
//               rounded-xl
//               p-6
//               flex flex-col
//               w-full
//                         w-[92%]
//   sm:w-[420px]
//   md:w-[380px]
//   min-h-[560px]
//               relative
            
//             "
//           >
         
         
//                    <span className="absolute flex justify-center align-center gap-2 top-10 right-4 bg-[#A6FF00] text-black text-xs px-3 py-1 rounded-full">
//                 <img src={fire} style={{width:'15px'}}/>   Recommended
//             </span>
         
//             <h3 className="text-sm font-medium mb-4 leading-snug">
//               Premium Mentorship <br /> Course
//             </h3>

//             <div className="text-3xl font-bold text-[#A6FF00] mb-5">
//               $300{" "}
//               <span className="text-xs text-white/50 font-normal">
//                 One-Time Payment
//               </span>
//             </div>

//             <hr />

//             <ul className="space-y-3 text-[12px] text-white/70 mt-5">
//               {[
//                 "Full Trading Course",
//                 "Proven trading framework and strategy",
//                 "Market Breakdown & Weekly Analysis",
//                 "Live mentorship classes with real-market breakdowns",
//                 "Recorded sessions for replay access",
//                 "Trading Psychology & Risk Management Training",
//                 "24/7 support",
//               ].map((text, i) => (
//                 <li key={i} className="flex items-start align-center  gap-3 mt-3">
//                   <span className="w-4 h-4 rounded-full bg-[#A6FF00] flex  items-center justify-center">
//                     <Check size={10} className="text-black" />
//                   </span>
//                   {text}
//                 </li>
//               ))}
//             </ul>

//             <button className="w-full bg-[#A6FF00] flex justify-center align-center gap-3 text-black py-1.5 rounded-md font-medium mt-auto cursor-pointer">
//              <img src={register}/> Register Now
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }




























import { useState } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";
import { Check } from "lucide-react";
import book1 from "./images/book.png";
import mini from "./images/mini.png";
import buy from "./images/buy.png";
import register from "./images/register.png";
import member from './images/member.png';
import forex from './images/forex.png';
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
  const [index, setIndex] = useState(0);
  const [activeTab] = useState("mentorship");

  const swipeConfidenceThreshold = 50;

  const paginate = (direction: number) => {
    setIndex((prev) => {
      if (direction > 0) return prev === books.length - 1 ? 0 : prev + 1;
      return prev === 0 ? books.length - 1 : prev - 1;
    });
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex justify-center items-center">
            <img src={mini} alt="" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Available Plans
          </h2>
          <p className="mt-3 text-sm text-white/60">
            Scale your trading journey, select from our available plans
          </p>

          {/* TOGGLE */}
          <div className="mt-6 inline-flex rounded-md overflow-hidden border border-white/10">
            <button
              className={`px-5 py-2 text-sm flex justify-center items-center gap-3 cursor-pointer ${
                activeTab === "books"
                  ? "bg-[#A6FF00] text-black"
                  : "bg-[#0d0d0d] text-white/70"
              }`}
            >
              <img src={forex} style={{ width: "20px", height: "20px" }} /> Forex e-books
            </button>
            <button
              className={`px-5 py-1.5 text-sm flex justify-center items-center gap-3 cursor-pointer ${
                activeTab === "mentorship"
                  ? "bg-[#A6FF00] text-black"
                  : "bg-[#0d0d0d] text-white/70"
              }`}
            >
              <img src={member} style={{ width: "20px", height: "20px" }} /> Mentorship
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
            className="bg-[#0d0d0d] border border-white/10 rounded-xl p-6 flex flex-col w-full w-[92%] sm:w-[420px] md:w-[380px] min-h-[560px]"
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

            {/* SLIDEABLE IMAGE */}
            <div className="bg-white rounded-lg p-5 flex justify-center mb-4 mt-5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={books[index].image}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -swipeConfidenceThreshold) paginate(1);
                    else if (info.offset.x > swipeConfidenceThreshold) paginate(-1);
                  }}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="w-[400px] object-contain cursor-grab active:cursor-grabbing"
                />
              </AnimatePresence>
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-3">
              {books.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full flex items-center justify-center ${
                    i === index ? "bg-[#A6FF00]" : "border border-white/30"
                  }`}
                >
                  {i === index && <span className="w-1.5 h-1.5 bg-black rounded-full" />}
                </button>
              ))}
            </div>

            {/* FOOTER */}
            <div className="flex justify-between items-center mt-auto pt-6">
              <span className="text-[15px] font-semibold pr-25">{books[index].title}</span>
              <span className="text-2xl font-semibold text-[#A6FF00]">{books[index].price}</span>
            </div>

            <button className="w-full bg-[#A6FF00] flex justify-center items-center gap-3 text-black py-1.5 rounded-md font-medium mt-5 cursor-pointer">
              <img src={buy} /> Buy
            </button>
          </motion.div>

          {/* MENTORSHIP CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#0d0d0d] border border-[#A6FF00]/40 rounded-xl p-6 flex flex-col w-full w-[92%] sm:w-[420px] md:w-[380px] min-h-[560px] relative"
          >
            <span className="absolute flex justify-center items-center gap-2 top-10 right-4 bg-[#A6FF00] text-black text-xs px-3 py-1 rounded-full">
              <img src={fire} style={{ width: "15px" }} /> Recommended
            </span>

            <h3 className="text-sm font-medium mb-4 leading-snug">
              Premium Mentorship <br /> Course
            </h3>

            <div className="text-3xl font-bold text-[#A6FF00] mb-5">
              $300{" "}
              <span className="text-xs text-white/50 font-normal">
                One-Time Payment
              </span>
            </div>

            <hr />

            <ul className="space-y-3 text-[12px] text-white/70 mt-5">
              {[
                "Full Trading Course",
                "Proven trading framework and strategy",
                "Market Breakdown & Weekly Analysis",
                "Live mentorship classes with real-market breakdowns",
                "Recorded sessions for replay access",
                "Trading Psychology & Risk Management Training",
                "24/7 support",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 mt-3">
                  <span className="w-4 h-4 rounded-full bg-[#A6FF00] flex items-center justify-center">
                    <Check size={10} className="text-black" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <button className="w-full bg-[#A6FF00] flex justify-center items-center gap-3 text-black py-1.5 rounded-md font-medium mt-auto cursor-pointer">
              <img src={register} /> Register Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

