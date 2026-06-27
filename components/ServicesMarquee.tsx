"use client";

export default function ServicesMarquee() {
  const services = [
    "INTERIOR",
    "EXTERIOR",
    "RENOVATION ",
    "COMMERCIAL",
    "SERVICES",
  ];

  return (
    <section className="overflow-hidden py-16 bg-gradient-to-tr from-[#f7f1de] via-white to-[#bfac6c]">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...services, ...services, ...services].map((item, index) => (
          <div
            key={index}
            className="flex items-center flex-shrink-0"
          >
            <h2 className="text-[40px] md:text-[100px] font-black uppercase leading-none text-black">
              {item}
            </h2>

            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#add645] mx-4 md:mx-4" />
          </div>
        ))}
      </div>
    </section>
  );
}