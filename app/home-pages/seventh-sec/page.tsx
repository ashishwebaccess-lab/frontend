"use client";

import { useState } from "react";
import {
  Phone,
  MessageCircle,
  X,
  ChevronRight,
} from "lucide-react";
import { originalSurfer } from "@/app/font";

export default function SeventhSection() {
  const [showCallModal, setShowCallModal] =
    useState(false);

  const [showWhatsappModal, setShowWhatsappModal] =
    useState(false);

  const phoneNumber = "+919431565604";

  const whatsappNumber = "919431565604";

  const openWhatsapp = (
    type:
      | "enquiry"
      | "renovation"
      | "services",
  ) => {
    let message = "";

    if (type === "enquiry") {
      message =
        "Hello Ashish Enterprises,%0A%0AI would like to know more about your Interior & Exterior Design services.";
    }

    if (type === "renovation") {
      message =
        "Hello Ashish Enterprises,%0A%0AI am interested in renovation services for my property. Please share details.";
    }

    if (type === "services") {
      message =
        "Hello Ashish Enterprises,%0A%0AI would like information regarding your services.";
    }

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
    );

    setShowWhatsappModal(false);
  };

  return (
    <>
     <section
  id="Contact" className="relative overflow-hidden py-10  bg-gradient-to-br from-[#dbdbdb] via-white to-[#bfac6c] text-black">

        <div className="max-w-7xl mx-auto px-6">
               <div className="flex items-center gap-8 mb-10">
                    <div className="w-20 h-[2px] bg-black" />
                    <h2 className={originalSurfer.className + " text-5xl md:text-6xl font-bold text-black"}>
                    Contact Us
                    </h2>
                  </div>

          <div className="text-center">

            <span className="uppercase tracking-[5px] text-black/60 text-sm">
              
            </span>

            <h2 className="text-5xl md:text-6xl font-bold text-black mt-4">
              Let's Create Your
              Dream Space
            </h2>

            <p className="mt-5 text-lg text-black/70 max-w-2xl mx-auto">
              Ready to transform your home,
              office or commercial space?
              Talk with our experts today.
            </p>

          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-14">

            {/* Mobile Direct Call */}
            <a
              href={`tel:${phoneNumber}`}
              className="
                md:hidden
                px-8
                py-4
                rounded-full
                bg-black
                text-white
                font-semibold
                flex
                items-center
                gap-3
                hover:scale-105
                transition
              "
            >
              <Phone size={20} />
              Call Now
            </a>

            {/* Desktop Popup Call */}
            <button
              onClick={() =>
                setShowCallModal(true)
              }
              className="
                hidden md:flex
                px-8
                py-4
                rounded-full
                bg-black
                text-white
                font-semibold
                items-center
                gap-3
                hover:scale-105
                transition
              "
            >
              <Phone size={20} />
              Call Now
            </button>

            {/* WhatsApp */}
            <button
              onClick={() =>
                setShowWhatsappModal(true)
              }
              className="
                px-8
                py-4
                rounded-full
                bg-[#25D366]
                text-white
                font-semibold
                flex
                items-center
                gap-3
                hover:scale-105
                transition
              "
            >
              <MessageCircle size={20} />
              WhatsApp
            </button>

          </div>
        </div>
      </section>

      {/* CALL MODAL */}
      {showCallModal && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-5">

          <div className="bg-white rounded-[32px] p-8 w-full max-w-md relative">

            <button
              onClick={() =>
                setShowCallModal(false)
              }
              className="absolute right-5 top-5 text-black cursor-pointer"
            >
              <X />
            </button>

            <h3 className="text-3xl font-bold text-center text-black">
              Call Ashish Enterprises
            </h3>

            <p className="text-center text-gray-500 mt-3">
              Contact our design expert
            </p>

<div className="mt-8 text-center">

  <p className="text-4xl font-bold text-[#bfac6c]">
    +91 94315 65604
  </p>

  <div className="mt-8 flex justify-center gap-4">

    <a
      href={`tel:${phoneNumber}`}
      className="
        inline-flex
        items-center
        gap-2
        bg-black
        text-white
        px-8
        py-4
        rounded-full
        font-semibold
        hover:scale-105
        transition
      "
    >
      <Phone size={18} />
      Dial Now
    </a>

    <button
      onClick={() => setShowCallModal(false)}
      className="
        px-8
        py-4
        rounded-full
        border-2
        border-gray-300
        text-gray-700
        font-semibold
        hover:bg-gray-100
        transition
      "
    >
      Cancel
    </button>

  </div>

</div>

          </div>
        </div>
      )}

      {/* WHATSAPP MODAL */}
      {showWhatsappModal && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-5">

          <div className="bg-white rounded-[32px] p-8 w-full max-w-md relative">

            <button
              onClick={() =>
                setShowWhatsappModal(false)
              }
              className="absolute right-5 top-5 text-black cursor-pointer"
            >
              <X />
            </button>

            <h3 className="text-3xl font-bold text-center text-black">
              Select Service
            </h3>

            <p className="text-center text-gray-500 mt-3">
              Choose your requirement
            </p>

            <div className="mt-8 space-y-4">

              <button
                onClick={() =>
                  openWhatsapp("enquiry")
                }
                className="
                  w-full
                  p-5
                  rounded-2xl
                  bg-gray-100
                  hover:bg-gray-200
                  flex
                  justify-between
                  items-center
                  font-semibold
                  text-black
                "
              >
                General Enquiry
                <ChevronRight />
              </button>

              <button
                onClick={() =>
                  openWhatsapp("renovation")
                }
                className="
                  w-full
                  p-5
                  rounded-2xl
                  bg-gray-100
                  hover:bg-gray-200
                  flex
                  justify-between
                  items-center
                  font-semibold
                  text-black
                "
              >
                Renovation Project
                <ChevronRight />
              </button>

              <button
                onClick={() =>
                  openWhatsapp("services")
                }
                className="
                  w-full
                  p-5
                  rounded-2xl
                  bg-gray-100
                  hover:bg-gray-200
                  flex
                  justify-between
                  items-center
                  font-semibold
                  text-black
                "
              >
                Services Information
                <ChevronRight />
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}