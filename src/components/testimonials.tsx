
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import mini from "./images/mini.png"

import ts1 from "./images/ts1.png"
import ts2 from "./images/ts2.png"
import ts3 from "./images/ts3.png"
import ts4 from "./images/ts4.png"
import ts5 from "./images/ts5.png"
import ts6 from "./images/ts6.png"
import ts7 from "./images/ts7.png"
import ts8 from "./images/ts8.png"
import ts9 from "./images/ts9.png"
import ts10 from "./images/ts10.png"
import ts11 from "./images/ts11.png"
import ts12 from "./images/ts12.png"
import ts13 from "./images/ts13.png"
import ts14 from "./images/ts14.png"
import ts15 from "./images/ts15.png"

const images = [
  ts1, ts2, ts3, ts4, ts5,
  ts6, ts7, ts8, ts9, ts10,
  ts11, ts12, ts13, ts14, ts15,
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const columns = [
    { speed: 55 },
    { speed: 65 },
    { speed: 75 }, // desktop-only
  ]

  return (
    <section className="relative bg-black py-20 overflow-hidden" id='clientResults'>
      {/* TITLE */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-3">
          <img src={mini} alt="" />
        </div>
        <h2 className="text-3xl font-bold text-white">Clients Results</h2>
        <p className="mt-3 text-sm text-white/60">
          Real testimonials and results from our successful clients.
        </p>
      </div>

      {/* SCROLLING PHONES */}
      <div className="flex justify-center gap-8">
        {columns.map((col, index) => (
          <ScrollingColumn
            key={index}
            speed={col.speed}
            images={images}
            setActiveIndex={setActiveIndex}
            className={index === 2 ? "hidden lg:block" : ""}
          />
        ))}
      </div>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* CLOSE */}
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={34} />
            </button>

            {/* PREV */}
            <button
              onClick={() =>
                setActiveIndex(
                  (activeIndex - 1 + images.length) % images.length
                )
              }
              className="absolute left-6 text-white"
            >
              <ChevronLeft size={44} />
            </button>

            {/* IMAGE */}
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              className="max-h-[90vh] max-w-[90vw] rounded-xl"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
            />

            {/* NEXT */}
            <button
              onClick={() =>
                setActiveIndex((activeIndex + 1) % images.length)
              }
              className="absolute right-6 text-white"
            >
              <ChevronRight size={44} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* ================= SCROLLING COLUMN ================= */

function ScrollingColumn({
  images,
  speed,
  setActiveIndex,
  className = "",
}: {
  images: string[]
  speed: number
  setActiveIndex: (i: number) => void
  className?: string
}) {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: ["0%", "-50%"],
      transition: {
        duration: speed,
        ease: "linear",
        repeat: Infinity,
      },
    })
  }, [controls, speed])

  return (
    <motion.div
      className={`h-[720px] overflow-hidden ${className}`}
      onHoverStart={() => controls.stop()}
      onHoverEnd={() =>
        controls.start({
          y: ["0%", "-50%"],
          transition: {
            duration: speed,
            ease: "linear",
            repeat: Infinity,
          },
        })
      }
    >
      <motion.div animate={controls} className="flex flex-col gap-6">
        {[...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setActiveIndex(i % images.length)}
            className="w-[220px] rounded-xl cursor-pointer shadow-xl"
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

