"use client";

import Image from "next/image";
import {
  Rocket,
  Lightbulb,
  CheckCircle,
} from "lucide-react";
import { cormorant, dmSerif, originalSurfer } from "@/app/font";

export default function ThirdSection() {
  return (
    <section className="py-2 bg-gradient-to-br from-[#ffffff] via-white to-[#bfac6c] text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <h2 className={`${originalSurfer.className} text-5xl font-bold leading-tight mb-14`}>
              Designing Your Dream in
              <br />
              Three Simple Steps
            </h2>

            <div className="">

              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center">
                    <Rocket size={20} />
                  </div>
                  <div className="w-px h-20 bg-gray-300 mt-4" />
                </div>

                <div>
                  <h3 className={`${dmSerif.className} text-3xl font-semibold mb-3`}>
                    Start Project
                  </h3>

                  <p className={`${cormorant.className} text-[18px] text-gray-600 leading-8`}>
                    Embark on your design adventure by initiating
                    your project. Share your vision and set the
                    stage for a bespoke design experience.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center">
                    <Lightbulb size={20} />
                  </div>
                  <div className="w-px h-20 bg-gray-300 mt-4" />
                </div>

                <div>
                  <h3 className={`${dmSerif.className} text-3xl font-semibold mb-3`}>
                    Craft
                  </h3>

                  <p className={`${cormorant.className} text-[18px] text-gray-600 leading-8`}>
                    Collaborate closely to achieve design
                    excellence refining your vision and crafting
                    brilliance into every aspect of your space.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div>
                  <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center">
                    <CheckCircle size={20} />
                  </div>
                </div>

                <div>
                  <h3 className={`${dmSerif.className} text-3xl font-semibold mb-3`}>
                    Execute
                  </h3>

                  <p className={`${cormorant.className} text-[18px] text-gray-600 leading-8`}>
                    Witness your vision becoming a reality as we
                    execute the design plan with precision.
                    Celebrate the joy of your newly transformed
                    space.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
   <div className="relative w-full h-[700px] overflow-hidden">


  <div className="absolute top-0 right-0 w-[420px] h-[340px] overflow-hidden rounded-sm z-20">
    <Image
      src="/ark.png"
      alt="Interior"
      fill
      className="object-cover"
    />
  </div>


  <div className="absolute left-5 bottom-0 w-[520px] h-[320px] overflow-hidden rounded-sm z-20">
    <Image
      src="/ark2.png"
      alt="Interior"
      fill
      className="object-cover"
    />
  </div>




</div>

        </div>
      </div>
    </section>
  );
}