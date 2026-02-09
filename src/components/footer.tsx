import { Instagram, Facebook, Youtube,  Send } from "lucide-react"
import logo from "./images/mini.png" 

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden " id='contact'>
      
      {/* TOP GRADIENT GLOW */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#A6FF00]/10 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">

        {/* LOGO + SOCIALS */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="ChartTactix" className="w-6 h-6" />
            <span className="text-white font-semibold text-lg">
              Chart<span className="text-[#A6FF00]">Tactix</span>
            </span>
          </div>

          {/* SOCIAL ICONS */}

<div className="flex gap-4 mb-8">
  {[
    { icon: Instagram, href: "https://www.instagram.com/chart__tactix?igsh=aXJvbTRoMXp4N2x1" }, 
    {
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="16"
          height="16"
        >
          <path d="M18.244 2H21.5l-7.1 8.115L22.5 22h-6.7l-5.25-6.87L4.5 22H1.244l7.6-8.69L1.5 2h6.8l4.75 6.27L18.244 2z"/>
        </svg>
      ),
      href: "https://x.com/Chart__Tactix",
    },
    { icon: Facebook, href: "https://www.facebook.com/share/1GJk3AHaYE/" },
    { icon: Youtube, href: "https://www.youtube.com/@ChartTactix" },
    { icon: Send, href: "https://t.me/ChartTactix" },
  ].map((Item, i) => (
    <a
      key={i}
      href={Item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-9 h-9
        rounded-md
        bg-[#A6FF00]
        flex items-center justify-center
        text-black
        hover:scale-105
        transition
      "
    >
      {/* Type-safe rendering */}
      {"icon" in Item && typeof Item.icon === "function" ? (
        <Item.icon />
      ) : (
        // @ts-ignore
        <Item.icon size={18} />
      )}
    </a>
  ))}
</div>


          {/* QUICK LINKS */}
          <div className="text-sm text-white/70 mb-10">
            <span className="font-medium text-white mr-4">Quick Links</span>
            <div className="flex flex-wrap justify-center gap-4 mt-3">
              {["Home", "About Us", "Client Results", "Contact Us"].map(
                (link) => (
                  <a
                    key={link}
                    href=""
                    className="hover:text-[#A6FF00] transition"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-10" />

        {/* COPYRIGHT */}
        <p className="text-center text-xs text-white/50 mb-4">
          © 2026 ChartTactix. All rights reserved
        </p>

        {/* DISCLAIMER */}
        <p className="text-center text-[11px] text-white/40 leading-relaxed max-w-4xl mx-auto">
          Disclaimer: Trading involves risk and may result in the loss of
          capital. Past performance is not indicative of future results. All
          content, including the e-book and mentorship, is for educational
          purposes only and does not constitute financial advice. No guarantees
          are made, and you are responsible for your own decisions.
        </p>
      </div>
    </footer>
  )
}
