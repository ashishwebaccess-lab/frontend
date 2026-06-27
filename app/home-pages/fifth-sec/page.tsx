"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { cormorant, dmSerif, originalSurfer } from "@/app/font";

export default function FifthSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-[#dbdbdb] via-white to-[#bfac6c] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="flex items-center gap-8 mb-10">
          <div className="w-20 h-[2px] bg-black" />
          <h2 className={originalSurfer.className + " text-5xl md:text-6xl font-bold text-black"}>
            About Founder
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Founder Image */}
          <div className="relative">
            {/* Glow */}
         

            <div className="relative overflow-hidden rounded-[30px]">
              <Image
                src="/ashish.png"
                alt="Founder Ashish"
                width={700}
                height={850}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-black text-white px-8 py-6 rounded-3xl ">
              <h3 className="text-4xl font-bold">17+</h3>
              <p className={cormorant.className + " text-sm uppercase tracking-widest"}>
                Years Experience
              </p>
            </div>
          </div>

          {/* Founder Content */}
          <div>
            <div className="w-16 h-16 rounded-full bg-[#bfac6c]/20 flex items-center justify-center mb-8">
              <Quote size={30} className="text-[#bfac6c]" />
            </div>

            <h3 className={dmSerif.className + " text-4xl lg:text-5xl font-bold text-black leading-tight mb-8"}>
              Creating Timeless Spaces
              <br />
              With Passion & Precision
            </h3>

            <p className={cormorant.className + " text-lg text-gray-700 leading-9 mb-6"}>
              Ashish Enterprises was founded with a vision to transform
              ordinary spaces into extraordinary environments. With years of
              experience in interior design, exterior development and
              renovation projects, our focus has always been on delivering
              elegant, functional and timeless designs.
            </p>

            <p className={cormorant.className + " text-lg text-gray-700 leading-9 mb-8"}>
              Every project is approached with creativity, attention to detail
              and a commitment to quality. From luxury residences to
              commercial spaces, we believe every space should reflect the
              personality and aspirations of its owner.
            </p>

            {/* Founder Name */}
            <div className="border-l-4 border-[#bfac6c] pl-6">
              <h4 className={dmSerif.className + " text-3xl font-bold text-black"}>
                Ashish Kumar
              </h4>

              <p className={cormorant.className + " text-gray-600 mt-2"}>
                Founder & Creative Director
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <h4 className= {dmSerif.className + " text-4xl font-bold text-black"}>400+</h4>
                <p className={cormorant.className + " text-gray-600 mt-2"}>Projects</p>
              </div>

              <div>
                <h4 className={dmSerif.className + " text-4xl font-bold text-black"}>600+</h4>
                <p className={cormorant.className + " text-gray-600 mt-2"}>Clients</p>
              </div>

              <div>
                <h4 className={dmSerif.className + " text-4xl font-bold text-black"}>100%</h4>
                <p className={cormorant.className + " text-gray-600 mt-2"}>Satisfaction</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}