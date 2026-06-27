"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Plus } from "lucide-react";
import { cormorant, dmSerif, originalSurfer } from "@/app/font";
import Link from "next/link";

export default function SecondSection() {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <>
{preview && (
  <>
    {/* Overlay */}
    <div
      className="
        fixed inset-0
        bg-black/10
        z-40
        pointer-events-none
        transition-all duration-300
      "
    />

    {/* Floating Preview Image */}
    <div className="hidden lg:block fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] pointer-events-none">
      <Image
        src={preview}
        alt="Preview"
        width={450}
        height={550}
        priority
        unoptimized
        className="rounded-[30px] object-cover shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
      />
    </div>
  </>
)}

      <section className="relative min-h-screen bg-gradient-to-br from-[#f7f1de] via-white to-white flex items-center py-2 overflow-hidden">
        
        {/* ================= MAIN CONTENT ================= */}
        <div
          className={`max-w-7xl mx-auto px-6 lg:px-10 w-full transition-all duration-500 ${
            preview
              ? "opacity-30 scale-[0.98]"
              : "opacity-100 scale-100"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT IMAGE */}
            <div className="relative">
              <Image
                src="/sec-img.png"
                alt="Interior Design"
                width={700}
                height={800}
                className="w-full h-[500px] md:h-[650px] object-cover rounded-[5px]"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h2
                className={`${originalSurfer.className} text-4xl md:text-6xl font-bold text-[#1f1f1f] leading-tight`}
              >
                Designing Your Dream
                <br />
                With Brilliance
              </h2>

              <p
                className={`${cormorant.className} mt-6 text-lg md:text-xl text-gray-600 leading-relaxed`}
              >
                Elevate your spaces with bespoke interior designs that reflect
                your unique style and aspirations, crafted with precision and
                brilliance for an unforgettable living experience.
              </p>

              {/* SERVICE 1 */}
 <div
  className="mt-5 border-b border-gray-300 pb-3 group cursor-pointer relative z-50"
  onMouseEnter={() => setPreview("/nn.jpeg")}
  onMouseLeave={() => setPreview(null)}
>
  <div className="flex items-center justify-between">
    <h3 className={`${cormorant.className} text-xl md:text-2xl font-semibold text-[#1f1f1f] transition-all duration-300 group-hover:translate-x-2`}>
      Living Room Interior Design
    </h3>

    <Plus
      size={34}
      className="transition-transform duration-300 group-hover:rotate-90 text-black"
    />
  </div>
</div>

              {/* SERVICE 2 */}
<div
  className="py-3 border-b border-gray-300 group cursor-pointer relative z-50"
  onMouseEnter={() => setPreview("/office-int.png")}
  onMouseLeave={() => setPreview(null)}
>
  <div className="flex items-center justify-between">
    <h3 className={`${cormorant.className} text-xl md:text-2xl font-semibold text-[#1f1f1f] transition-all duration-300 group-hover:translate-x-2`}>
      Commercial Office Room Interior Design
    </h3>

    <Plus
      size={34}
      className="transition-transform duration-300 group-hover:rotate-90 text-black"
    />
  </div>
</div>

<div
  className="py-3 border-b border-gray-300 group cursor-pointer relative z-50"
  onMouseEnter={() => setPreview("/room.jpeg")}
  onMouseLeave={() => setPreview(null)}
>
  <div className="flex items-center justify-between">
    <h3 className={`${cormorant.className} text-xl md:text-2xl font-semibold text-[#1f1f1f] transition-all duration-300 group-hover:translate-x-2`}>
       Room Interior Design
    </h3>

    <Plus
      size={34}
      className="transition-transform duration-300 group-hover:rotate-90 text-black "
    />
  </div>
</div>

              {/* BUTTON */}
<Link
  href="/gallery"
  className="
    relative overflow-hidden
    inline-flex items-center justify-center gap-2
    mt-6
    px-6 py-3
    rounded-full
    font-semibold
    border border-black/20
    group
  "
>
  <span className={`${cormorant.className} relative z-10 text-black text-lg transition-colors duration-300 group-hover:text-white`}>
    Learn More
  </span>

  <ArrowRight
    size={20}
    className="relative z-10 text-black transition-all duration-300 group-hover:text-white group-hover:translate-x-1"
  />

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
            </div>

          </div>
        </div>
      </section>
    </>
  );
}