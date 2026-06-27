
"use client";

import { useEffect, useState } from "react";
import { cormorant, dmSerif } from "@/app/font";
import Navbar from "@/components/Navbar";

interface Project {
  _id: string;
  title: string;
  mediaType: "image" | "video";
  mediaUrl: string;
}

export default function GalleryPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects`
    )
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className=" text-white min-h-screen">
      <Navbar/>

      {/* Hero Section */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0  bg-gradient-to-br from-[#f7f1de] via-white to-[#bfac6c]" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <p
            className={`${cormorant.className} uppercase tracking-[8px] text-[#D4AF37] mb-4`}
          >
            Luxury Portfolio
          </p>

          <h1
            className={`${dmSerif.className} text-5xl md:text-7xl leading-tight`}
          >
            Our Finest
            <span className="block text-[#D4AF37]">
              Interior Creations
            </span>
          </h1>

          <p
            className={`${cormorant.className} mt-8 text-xl text-gray-300 max-w-3xl mx-auto`}
          >
            Discover timeless elegance, bespoke interiors,
            and architectural excellence crafted with passion.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-24 ">

        {loading ? (
          <div className="text-center py-20">
            Loading...
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            No Projects Found
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((item) => (
              <div
                key={item._id}
                className="group relative overflow-hidden rounded-3xl border border-white/10"
              >

                {item.mediaType === "image" ? (
                  <img
                    src={`http://localhost:5001/uploads/${item.mediaUrl}`}
                    alt={item.title}
                    className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                ) : (
                  <video
                    controls
                    className="h-[450px] w-full object-cover"
                  >
                    <source
                      src={`http://localhost:5000/uploads/${item.mediaUrl}`}
                    />
                  </video>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="absolute bottom-0 left-0 p-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  <h3
                    className={`${dmSerif.className} text-2xl text-[#D4AF37]`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-300 mt-2">
                    Premium Design Project
                  </p>
                </div>

              </div>
            ))}

          </div>
        )}
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">

          <h2
            className={`${dmSerif.className} text-4xl md:text-5xl`}
          >
            Let's Create Your
            <span className="block text-[#D4AF37]">
              Dream Space
            </span>
          </h2>

          <p
            className={`${cormorant.className} text-xl text-gray-300 mt-6`}
          >
            Transforming homes and commercial spaces into
            extraordinary experiences.
          </p>

          <button className="mt-10 px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-full hover:scale-105 transition">
            Get Free Consultation
          </button>

        </div>
      </section>

    </main>
  );
}

