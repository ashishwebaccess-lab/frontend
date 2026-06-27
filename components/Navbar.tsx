"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Home,
  Building2,
  PaintBucket,
  Wrench,
  Phone,
} from "lucide-react";
import { cormorant, italianno } from "@/app/font";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);

    const isBottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight - 100;

    setHideNavbar(isBottom);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const navLinks = [
    {
      name: "Interior",
      href: "/interior",
      icon: <Building2 size={18} />,
    },
    {
      name: "Exterior",
      href: "/exterior",
      icon: <PaintBucket size={18} />,
    },
    {
      name: "Renovation",
      href: "/renovation",
      icon: <Wrench size={18} />,
    },
    {
      name: "Services",
      href: "/services",
      icon: <Phone size={18} />,
    },
  ];

  return (
    <>
 <header
  className={`
    fixed top-0 left-0 w-full z-50
    transition-all duration-500
    ${
      hideNavbar
        ? "-translate-y-full opacity-0"
        : "translate-y-0 opacity-100"
    }
    ${
      isScrolled
        ? "bg-[#bfac6c] backdrop-blur-xl shadow-2xl border-b border-white/10"
        : "bg-transparent"
    }
  `}
>
        <div className="px-6 mx-auto  lg:px-20">
          <div className="flex items-center justify-between h-15">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-full ">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h1
                  className={`font-bold text-xl lg:text-2xl tracking-wide transition-colors duration-300 ${
                    isScrolled ? "text-white" : "text-black"
                  }`}
                >
                  Ashish Enterprises
                </h1>

                <p
                  className={`text-xs transition-colors duration-300 ${
                    isScrolled ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  Interior & Exterior Design
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${cormorant.className} hover:text-[#add645] text-[18px] transition duration-300 flex items-center gap-1 font-medium ${
                    isScrolled ? "text-white" : "text-black"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}

     <Link
  href="/contact"
  className={`
    relative overflow-hidden
    px-4 py-1.5 rounded-full
    font-semibold
    hover:border-0
    group
    ${isScrolled
      ? "border border-white/50 text-white"
      : "border border-black/30 text-black"}
  `}
>
   <Link href="#Contact"
  className="group"
>
  <span
    className={`${italianno.className} relative z-10 text-2xl transition-colors duration-300 group-hover:text-white ${
      isScrolled ? "text-white" : "text-black"
    }`}
  >
    Contact Us
  </span>
</Link>

                <span
                  className="
    absolute left-0 top-full
    w-full h-full
    bg-[#add645]
    rounded-full
    transition-all duration-300 ease-out
    group-hover:top-0
    "
                />
              </Link>
            </nav>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden text-black"
            >
              {mobileMenu ? <X size={30} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-black/95 backdrop-blur-xl z-[60]
    origin-top-right transform transition-all duration-500 ease-in-out
    ${
      mobileMenu
        ? "scale-100 opacity-100 translate-x-0"
        : "scale-0 opacity-0 translate-x-10 pointer-events-none"
    }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-white text-xl font-bold">Menu</h2>

            <button onClick={() => setMobileMenu(false)} className="text-white">
              <X size={23} />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 text-white text-lg hover:text-yellow-400 transition"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="mt-4 bg-[#add645] text-black font-semibold text-center py-3 rounded-full"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
