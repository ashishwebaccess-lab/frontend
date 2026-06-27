"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { originalSurfer } from "@/app/font";

export default function Footer() {
  return (
<footer className="sticky bottom-0 h-screen overflow-hidden bg-[#f7f1de] text-black">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] rounded-full bg-[#bfac6c]/40 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-8">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <h3 className={`${originalSurfer.className} text-3xl font-bold `}>
              Ashish Enterprises
            </h3>

            <p className="mt-5 text-black/70 leading-7">
              Transforming spaces with premium
              interior design, exterior solutions,
              renovation and architecture services.
            </p>

            <a
              href="https://wa.me/919431565604"
              target="_blank"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                bg-[#25D366]
                text-white
                px-5
                py-3
                rounded-full
                font-semibold
              "
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-black/70">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/interior">Interior</Link></li>
              <li><Link href="/exterior">Exterior</Link></li>
              <li><Link href="/renovation">Renovation</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-5">
              Services
            </h4>

            <ul className="space-y-3 text-black/70">
              <li>Interior Design</li>
              <li>Exterior Design</li>
              <li>Home Renovation</li>
              <li>Modular Kitchen</li>
              <li>Space Planning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-5">
              Contact
            </h4>

            <div className="space-y-4 text-black/70">

              <div className="flex gap-3">
                <Phone size={18} />
                <span>+91 94315 65604</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <span>
                  info@ashishenterprises.com
                </span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>
                  Bhopal, Madhya Pradesh, India
                </span>
              </div>

            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
              >
                <FaInstagram size={18} />
              </a>

           

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
              >
                < FaLinkedinIn size={18} />
              </a>

            </div>
          </div>

        </div>

        {/* Huge Brand Name */}
        <div className="mt-24 overflow-hidden">
          <h1
            className="
              text-[6vw]
              leading-none
              font-black
              tracking-tight
              text-[#e8debf]
              whitespace-nowrap
            "
          >
            ASHISH ENTERPRISES
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 pt-6 mt-6 flex flex-col md:flex-row justify-between gap-4 text-black/60">

          <span className="text-black" >
            © 2026 Ashish Enterprises.
            All Rights Reserved.
          </span>

          <span>
            Interior • Exterior • Renovation
          </span>

          <span>
            Designed with Excellence
          </span>

        </div>

      </div>
    </footer>
  );
}