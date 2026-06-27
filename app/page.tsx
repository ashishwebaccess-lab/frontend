// "use client";

// import Navbar from "@/components/Navbar";
// import { useEffect, useState } from "react";
// import FirstSection from "./home-pages/first-sec/page";
// import Footer from "@/components/Footer";

// export default function HomeClient() {
// const launchDate = new Date("2026-06-29T00:00:00").getTime();

// const [timeLeft, setTimeLeft] = useState({
// days: "00",
// hours: "00",
// minutes: "00",
// seconds: "00",
// });

// useEffect(() => {
// const timer = setInterval(() => {
// const now = new Date().getTime();
// const distance = launchDate - now;


//   if (distance <= 0) {
//     clearInterval(timer);
//     return;
//   }

//   setTimeLeft({
//     days: String(
//       Math.floor(distance / (1000 * 60 * 60 * 24))
//     ).padStart(2, "0"),

//     hours: String(
//       Math.floor(
//         (distance % (1000 * 60 * 60 * 24)) /
//           (1000 * 60 * 60)
//       )
//     ).padStart(2, "0"),

//     minutes: String(
//       Math.floor(
//         (distance % (1000 * 60 * 60)) /
//           (1000 * 60)
//       )
//     ).padStart(2, "0"),

//     seconds: String(
//       Math.floor((distance % (1000 * 60)) / 1000)
//     ).padStart(2, "0"),
//   });
// }, 1000);

// return () => clearInterval(timer);


// }, []);

// return ( <main className="bg-black text-white">
//   <Navbar/>
//  <FirstSection/>

//   {/* HERO */}
//   <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-black via-slate-950 to-black">
//     <div className="max-w-5xl text-center">

//       <span className="inline-block px-5 py-2 rounded-full bg-orange-500/20 text-orange-400">
//         Premium Interior Design Studio
//       </span>

//       <h1 className="text-5xl md:text-7xl font-bold mt-6">
//         Best Interior & Exterior Design Company
//       </h1>

//       <p className="text-xl text-gray-300 mt-6">
//         Transforming homes, offices and commercial spaces with
//         world-class interior design, architecture and renovation solutions.
//       </p>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

//         <div className="bg-white/10 p-6 rounded-2xl">
//           <h3 className="text-4xl font-bold">{timeLeft.days}</h3>
//           <p>Days</p>
//         </div>

//         <div className="bg-white/10 p-6 rounded-2xl">
//           <h3 className="text-4xl font-bold">{timeLeft.hours}</h3>
//           <p>Hours</p>
//         </div>

//         <div className="bg-white/10 p-6 rounded-2xl">
//           <h3 className="text-4xl font-bold">{timeLeft.minutes}</h3>
//           <p>Minutes</p>
//         </div>

//         <div className="bg-white/10 p-6 rounded-2xl">
//           <h3 className="text-4xl font-bold">{timeLeft.seconds}</h3>
//           <p>Seconds</p>
//         </div>

//       </div>
//     </div>
//   </section>

//   {/* SERVICES */}
//   <section className="py-24 px-6 max-w-7xl mx-auto">
//     <h2 className="text-5xl font-bold text-center mb-16">
//       Our Design Services
//     </h2>

//     <div className="grid md:grid-cols-4 gap-8">

//       <div className="bg-zinc-900 p-8 rounded-2xl">
//         <h3 className="text-2xl font-bold mb-4">
//           Interior Design
//         </h3>
//         <p>
//           Luxury interiors for homes and offices.
//         </p>
//       </div>

//       <div className="bg-zinc-900 p-8 rounded-2xl">
//         <h3 className="text-2xl font-bold mb-4">
//           Exterior Design
//         </h3>
//         <p>
//           Modern exterior elevation and facade design.
//         </p>
//       </div>

//       <div className="bg-zinc-900 p-8 rounded-2xl">
//         <h3 className="text-2xl font-bold mb-4">
//           Renovation
//         </h3>
//         <p>
//           Complete home and office renovation.
//         </p>
//       </div>

//       <div className="bg-zinc-900 p-8 rounded-2xl">
//         <h3 className="text-2xl font-bold mb-4">
//           Architecture
//         </h3>
//         <p>
//           Professional architectural planning.
//         </p>
//       </div>

//     </div>
//   </section>

//   {/* WHY CHOOSE US */}
//   <section className="py-24 bg-zinc-950">
//     <div className="max-w-7xl mx-auto px-6">

//       <h2 className="text-5xl font-bold text-center mb-16">
//         Why Choose Ashish Enterprises
//       </h2>

//       <div className="grid md:grid-cols-4 gap-8 text-center">

//         <div>
//           <h3 className="text-5xl font-bold text-orange-400">
//             500+
//           </h3>
//           <p>Projects Completed</p>
//         </div>

//         <div>
//           <h3 className="text-5xl font-bold text-orange-400">
//             100%
//           </h3>
//           <p>Client Satisfaction</p>
//         </div>

//         <div>
//           <h3 className="text-5xl font-bold text-orange-400">
//             10+
//           </h3>
//           <p>Years Experience</p>
//         </div>

//         <div>
//           <h3 className="text-5xl font-bold text-orange-400">
//             24/7
//           </h3>
//           <p>Support</p>
//         </div>

//       </div>
//     </div>
//   </section>

//   {/* PROCESS */}
//   <section className="py-24 max-w-7xl mx-auto px-6">

//     <h2 className="text-5xl font-bold text-center mb-16">
//       Our Process
//     </h2>

//     <div className="grid md:grid-cols-5 gap-8 text-center">

//       <div>1. Consultation</div>
//       <div>2. Concept Design</div>
//       <div>3. 3D Visualization</div>
//       <div>4. Execution</div>
//       <div>5. Final Delivery</div>

//     </div>

//   </section>

//   {/* FAQ */}
//   <section className="py-24 bg-zinc-950 px-6">

//     <div className="max-w-4xl mx-auto">

//       <h2 className="text-5xl font-bold mb-10">
//         Frequently Asked Questions
//       </h2>

//       <div className="space-y-8">

//         <div>
//           <h3 className="text-2xl font-semibold">
//             How much does interior design cost?
//           </h3>
//           <p className="text-gray-400">
//             Pricing depends on project size and requirements.
//           </p>
//         </div>

//         <div>
//           <h3 className="text-2xl font-semibold">
//             Do you provide renovation services?
//           </h3>
//           <p className="text-gray-400">
//             Yes, we provide complete renovation solutions.
//           </p>
//         </div>

//       </div>
//     </div>

//   </section>

//   {/* CTA */}
//   <section className="py-24 text-center px-6">

//     <h2 className="text-5xl font-bold mb-6">
//       Ready To Transform Your Space?
//     </h2>

//     <p className="text-xl text-gray-400 mb-8">
//       Book your free consultation today.
//     </p>

//     <button className="bg-orange-500 px-8 py-4 rounded-xl font-semibold">
//       Get Free Quote
//     </button>

//   </section>
//   {/* <Footer/> */}

// </main>


// );
// }



"use client";

import Navbar from "@/components/Navbar";
import FirstSection from "./home-pages/first-sec/page";
import Footer from "@/components/Footer";
import ServicesMarquee from "@/components/ServicesMarquee";
import SecondSection from "./home-pages/second-sec/page";
import ThirdSection from "./home-pages/third-sec/Page";
import FourthSection from "./home-pages/fourth-sec/page";
import FifthSection from "./home-pages/fifth-sec/page";
import SixthSection from "./home-pages/sixth-sec/page";
import SeventhSection from "./home-pages/seventh-sec/page";

export default function Home() {
  return (
    <div className="relative ">
      {/* Footer Background Layer */}
   

      {/* Main Content */}
      <main className="relative z-10  text-white ">
        <Navbar />

        <FirstSection />
        <ServicesMarquee />
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
        <SixthSection/>
        <SeventhSection/>




      </main>
         <Footer />
    </div>
  );
}