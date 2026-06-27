"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { cormorant, dmSerif, italianno } from "@/app/font";
import { TbHandFinger } from "react-icons/tb";
import Link from "next/link";

export default function FirstSection() {
  return (
    <section className="min-h-screen overflow-hidden bg-gradient-to-br from-[#f7f1de] via-white to-[#bfac6c]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-2">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span
              className={`${italianno.className} text-base  uppercase tracking-[4px] text-gray-900`}
            >
              PREMIUM INTERIOR • EXTERIOR • RENOVATION
            </span>

            <h1
              className={`${dmSerif.className} mt-6 text-6xl md:text-7xl lg:text-[70px]  leading-[0.95] text-black font-extrabold`}
            >
              Designing Spaces That
              <br />
              Inspire Every Day
            </h1>

            <p
              className={`${cormorant.className} mt-8 text-lg text-gray-600 max-w-xl leading-relaxed `}
            >
              From luxury interiors and elegant exteriors to complete home and
              commercial renovations,
              <span className="text-[#a84911] font-bold">
                {" "}
                Ashish Enterprises
              </span>{" "}
              creates functional, modern and timeless spaces tailored to your
              vision.
            </p>

           <Link
  href="/gallery"
  className="
    inline-flex items-center
    relative overflow-hidden
    mt-10
    px-8 py-4
    rounded-full
    border border-1 border-gray-500
    text-white
    group
    transition-all duration-300
    hover:scale-105 hover:border-0
  "
>
  <span
    className="
      absolute inset-0
       bg-[#add645]
      scale-x-0
      origin-left
      transition-transform duration-500
      group-hover:scale-x-100
    "
  />

  <span
    className={`${cormorant.className} relative z-10 flex items-center gap-3 text-lg hover:text-white text-black `}
  >
    View Our Work
    <TbHandFinger className="text-2xl animate-bounce" />
  </span>
</Link>

            {/* STATS */}
            <div className="mt-20 grid grid-cols-3 gap-8 border-t border-gray-300 pt-10">
              <div>
                <h3 className="text-5xl font-semibold text-black">400+</h3>
                <p className="text-gray-500 mt-2">Projects Complete</p>
              </div>

              <div>
                <h3 className="text-5xl font-semibold text-black">600+</h3>
                <p className="text-gray-500 mt-2">Satisfied Clients</p>
              </div>

              <div>
                <h3 className="text-5xl font-semibold text-black">100+</h3>
                <p className="text-gray-500 mt-2">Unique Styles</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative h-[700px]">
            {/* Top Image */}
            <div className="absolute top-0 right-0 w-[85%] h-[320px] rounded-md overflow-hidden shadow-2xl z-10">
              <Image
                src="/chair.png"
                alt="Interior Design"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Bottom Image */}
            <div className="absolute bottom-0 left-0 w-[80%] h-[320px] rounded-md overflow-hidden  z-10">
              <Image
                src="/chair2.png"
                alt="Luxury Interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Arrow */}
            <div className="absolute bottom-10 right-8 bg-black w-20 h-20 flex items-center justify-center ">
              <ArrowDown size={32} className="text-white" />
            </div>

            {/* Decorative Border */}
            <div className="absolute top-[340px] -left-[35px] w-30 h-30 border-2 border-black/50" />
          </div>
        </div>

   
      </div>
    </section>
  );
}
