"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Play } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { cormorant, dmSerif, originalSurfer } from "@/app/font";

export default function SixthSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
  );

  const slides = [
    {
      image: "/you1.png",
      title: "Interior Design",
      link: "https://www.youtube.com/watch?v=VIDEO_1",
    },
    {
      image: "/you2.png",
      title: "Exterior Design",
      link: "https://www.youtube.com/watch?v=VIDEO_2",
    },
    {
      image: "/ashish.png",
      title: "Renovation Work",
      link: "https://www.youtube.com/watch?v=VIDEO_3",
    },
    {
      image: "/chair.png",
      title: "Modular Kitchen",
      link: "https://www.youtube.com/watch?v=VIDEO_4",
    },
    {
      image: "/chair2.png",
      title: "Luxury Bedroom",
      link: "https://www.youtube.com/watch?v=VIDEO_5",
    },
  ];

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-tr from-[#dbdbdb] via-white to-[#bfac6c]">
      <div className="max-w-[1800px] mx-auto">
        {/* Heading */}
<div className="max-w-7xl mx-auto px-6 mb-10 flex justify-end">
  <div>
    <div className="flex items-center gap-6 justify-end">
      <div className="w-20 h-[2px] bg-black" />

      <h2
        className={`${originalSurfer.className} text-5xl md:text-6xl text-black`}
      >
        Our Youtube Gallery
      </h2>
    </div>


  </div>
</div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => {
              const isCenter = selectedIndex === index;

              return (
                <div
                  key={index}
                  className="flex-[0_0_70%] md:flex-[0_0_50%] px-5 max-md:px-0"
                >
                  <div
                    className={`
                      relative h-[420px] max-md:h-[300px] max-sm:h-[200px] max-sm:w-[280px]
                      rounded-[32px]
                      overflow-hidden
                      transition-all duration-700
                      ${
                        isCenter
                          ? "scale-100 opacity-100"
                          : "scale-90 opacity-60"
                      }
                    `}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Play Button ONLY CENTER CARD */}
                    {isCenter && (
                      <a
                        href={slide.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      z-20
      group
    "
                      >
                        <div
                          className="
        w-28
        h-20
        max-sm:w-14 max-sm:h-10 max-sm:rounded-[12px]
        bg-[#FF0000]
        rounded-[22px]
        flex
        items-center
        justify-center
        shadow-2xl
        group-hover:scale-110
        transition-all
        duration-300
      "
                        >
                          <Play
                            size={42}
                            fill="white"
                            className="text-white ml-1 max-sm:h-[22px]"
                          />
                        </div>
                      </a>
                    )}

                    {/* Content */}
                    <div className="absolute bottom-8 left-8 text-white z-10 max-sm:left-2  max-sm:bottom-4 ">
                      <h3 className="text-3xl font-bold max-sm:text-xl">{slide.title}</h3>

                      <p className="mt-2 max-sm:mt-0 text-gray-200 max-sm:text-base">
                        Luxury Interior & Exterior Solutions
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
