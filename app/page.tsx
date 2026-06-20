"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const launchDate = new Date("2026-06-29T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).padStart(2, "0"),
        minutes: String(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, "0"),
        seconds: String(
          Math.floor((distance % (1000 * 60)) / 1000)
        ).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-5xl">
        <p className="text-orange-400 uppercase tracking-[6px] text-sm md:text-base mb-4">
          Launching Soon
        </p>

        <h1 className="text-4xl md:text-7xl font-extrabold mb-6">
          Ashish Enterprises
        </h1>

        <h2 className="text-xl md:text-3xl text-gray-300 mb-4">
          Interior Design Website
        </h2>

        <p className="text-gray-400 text-base md:text-xl mb-10">
          Our new premium interior design experience is arriving on
          <span className="text-orange-400 font-semibold">
            {" "}
            29 June 2026
          </span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <h3 className="text-3xl md:text-5xl font-bold">
              {timeLeft.days}
            </h3>
            <p className="text-gray-400 mt-2">Days</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <h3 className="text-3xl md:text-5xl font-bold">
              {timeLeft.hours}
            </h3>
            <p className="text-gray-400 mt-2">Hours</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <h3 className="text-3xl md:text-5xl font-bold">
              {timeLeft.minutes}
            </h3>
            <p className="text-gray-400 mt-2">Minutes</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <h3 className="text-3xl md:text-5xl font-bold">
              {timeLeft.seconds}
            </h3>
            <p className="text-gray-400 mt-2">Seconds</p>
          </div>
        </div>

        <p className="mt-10 text-gray-500 text-sm md:text-base">
          Crafted with Excellence • Interior Design • Architecture • Space Planning
        </p>
      </div>
    </main>
  );
}