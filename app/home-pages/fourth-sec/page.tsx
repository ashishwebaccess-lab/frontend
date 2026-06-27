"use client";

import { cormorant, dmSerif, originalSurfer } from "@/app/font";

import { text } from "framer-motion/m";
import {
  Sofa,
  Building2,
  Hammer,
  Wrench,
  Trees,
  Lightbulb,
} from "lucide-react";

export default function FourthSection() {
  const services = [
    {
      icon: Sofa,
      title: "Interior Design",
      desc: "Elegant and functional interiors crafted to match your lifestyle and vision.",
    },
    {
      icon: Building2,
      title: "Exterior Design",
      desc: "Modern and timeless exterior concepts that enhance curb appeal.",
    },
    {
      icon: Hammer,
      title: "Renovation",
      desc: "Transform old spaces into beautiful modern environments with expert renovation.",
    },
    {
      icon: Wrench,
      title: "Construction Services",
      desc: "End-to-end project execution with quality materials and skilled professionals.",
    },
    {
      icon: Trees,
      title: "Landscape Design",
      desc: "Create stunning outdoor spaces with thoughtful landscape planning.",
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      desc: "Perfect lighting solutions to enhance ambience, comfort and aesthetics.",
    },
  ];

  return (
    <section className="overflow-hidden bg-gradient-to-tr from-[#dbdbdb] via-white to-[#bfac6c] py-15">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="flex items-center gap-8 mb-15">
          <div className="w-20 h-[2px] bg-black" />
          <h2 className={originalSurfer.className + " text-5xl md:text-6xl font-bold text-black"}>
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service, index) => {
    const Icon = service.icon;

    return (
      <div
        key={index}
        className="
          group
          relative
          overflow-hidden
          rounded-[30px]
          p-8
          bg-white/70
          backdrop-blur-xl
          border border-white/50
          shadow-lg
          hover:shadow-2xl
          hover:-translate-y-3
          transition-all duration-500
        "
      >
        {/* Glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#bfac6c]/20 blur-3xl group-hover:bg-[#bfac6c]/40 transition-all duration-500" />

        {/* Icon */}
        <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#bfac6c]/10 flex items-center justify-center mb-6 group-hover:bg-[#bfac6c] transition-all duration-500">
          <Icon
            size={34}
            strokeWidth={1.5}
            className="text-[#bfac6c] group-hover:text-white transition-all duration-500"
          />
        </div>

        {/* Title */}
        <h3 className={`${dmSerif.className} relative z-10 text-2xl font-semibold text-black mb-4`}>
          {service.title}
        </h3>

        {/* Description */}
        <p className={`${cormorant.className} relative z-10 text-gray-600 leading-8`}>
          {service.desc}
        </p>

        {/* Bottom line */}
        <div className="relative z-10 mt-8 h-[2px] w-12 bg-[#bfac6c] group-hover:w-44 transition-all duration-500" />
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
}