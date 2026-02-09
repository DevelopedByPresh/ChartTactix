

import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";
import aboutImg from "./images/aboutImg.png";

// Variants
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export default function About() {
  return (
    <section className="w-full bg-[#0d0d0d] text-white py-10" id="about">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* TEXT */}
          <motion.div variants={item} className="space-y-6 order-1 md:order-2">
            <motion.span
              variants={item}
              className="text-xs tracking-widest text-white/60 uppercase underline underline-offset-4"
            >
              About
            </motion.span>
<motion.h2
  variants={item}
  className="text-[20px] md:text-[43px] mt-5 font-bold leading-tight  md:text-left"
>
  Trusted by over <span className="text-[#A6FF00]">300,000</span>
  <br  />
  traders across all socials.
</motion.h2>





            <motion.p
              variants={item}
              className="text-sm md:text-small text-white/70 leading-relaxed max-w-xl"
            >
              With over 6+ years of market experience, my journey has involved
              testing multiple strategies, refining ideas, and learning through
              real market conditions. Each phase taught me what fails, what
              survives, and what produces consistency.
              <br />
              <br />
              That process led me to develop my own trading edge built on
              clarity, structure, and practiced execution. Having gone through
              the full cycle as a trader, I know how to guide others toward a
              more disciplined and profitable approach.
            </motion.p>
          </motion.div>

          {/* IMAGE */}
          <motion.div variants={item} className="relative order-2 md:order-1">
            <img
              src={aboutImg}
              alt="Trading setup"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </motion.div>

        {/* STATS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4  border-white/10"
        >
          {[
            { value: "6+", label: "Years Trading Experience" },
            { value: "5k+", label: "Community Members" },
            { value: "1k", label: "E-books Sold" },
            { value: "2.5k+", label: "Combined Students" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={item}
              className="py-10 flex flex-col items-center text-center  border-white/10 last:border-r-0"
            >
              <span className="text-3xl font-bold">{stat.value}</span>
              <span className="mt-2 text-xs text-white/60">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}










