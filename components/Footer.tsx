import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

// --- Custom Brand SVGs ---
const TelegramIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L21 4.5ZM17 11.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative w-full  bg-[#000] text-white mt-30">
      {/* 1. Top Wavy Icon Strip - Merges with background */}
      <div className="absolute w-full h-32 md:h-68 z-20 -top-45">
        <Image
          src="/footer-wave.svg" // The wavy image with icons
          alt="Kitchen icons border"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* 2. Main Content Area */}
      <div className="relative z-10 py-16 px-6 flex flex-col items-center overflow-hidden">
        {/* Background Faded Tools (Decorative Gray Images) */}
        {/* <div className="absolute inset-0 z-0 pointer-events-none opacity-10 overflow-hidden">
        
        </div> */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-[50%] w-84 h-84 rotate-10">
          <Image src="/tool-bg-1.png" alt="" fill className="object-contain " />
        </div>
        <div className="absolute top-10 -right-10 w-38 h-38 -rotate-45">
          <Image src="/tool-bg-2.png" alt="" fill className="object-contain " />
        </div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 rotate-25">
          <Image src="/tool-bg-3.png" alt="" fill className="object-contain " />
        </div>
        <div className="absolute top-1/2 right-1/7 w-60 h-60 -rotate-45">
          <Image src="/tool-bg-4.png" alt="" fill className="object-contain " />
        </div>
        {/* 3. Logo Section */}
        <div className="relative z-10 flex flex-col items-center  gap-8 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 relative">
              <Image
                src="/logo.png"
                alt="Lilati Logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-[#D4AF37]">
              LILATI
            </h2>
          </div>
          <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-14 gap-x-16">
            {/* Telegram */}
            <a
              href="#"
              className="flex items-center justify-center md:justify-start gap-4 group"
            >
              <span className="text-teal-500 group-hover:scale-110 transition-transform">
                <TelegramIcon />
              </span>
              <span className="text-gray-400 text-lg group-hover:text-white transition-colors">
                telegram link
              </span>
            </a>

            {/* Location */}
            <a
              href="#"
              className="flex items-center justify-center md:justify-start gap-4 group"
            >
              <MapPin
                className="text-teal-500 group-hover:scale-110 transition-transform"
                size={24}
              />
              <span className="text-gray-400 text-lg group-hover:text-white transition-colors">
                location link
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="#"
              className="flex items-center justify-center md:justify-start gap-4 group"
            >
              <span className="text-teal-500 group-hover:scale-110 transition-transform">
                <WhatsAppIcon />
              </span>
              <span className="text-gray-400 text-lg group-hover:text-white transition-colors">
                whatsapp link
              </span>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="flex items-center justify-center md:justify-start gap-4 group"
            >
              <span className="text-teal-500 group-hover:scale-110 transition-transform">
                <FacebookIcon />
              </span>
              <span className="text-gray-400 text-lg group-hover:text-white transition-colors">
                facebook link
              </span>
            </a>

            {/* Phone 1 */}
            <a
              href="#"
              className="flex items-center justify-center md:justify-start gap-4 group"
            >
              <Phone
                className="text-teal-500 group-hover:scale-110 transition-transform"
                size={24}
              />
              <span className="text-gray-400 text-lg group-hover:text-white transition-colors">
                phone link
              </span>
            </a>

            {/* Phone 2 */}
            <a
              href="#"
              className="flex items-center justify-center md:justify-start gap-4 group"
            >
              <Phone
                className="text-teal-500 group-hover:scale-110 transition-transform"
                size={24}
              />
              <span className="text-gray-400 text-lg group-hover:text-white transition-colors">
                phone link
              </span>
            </a>
          </div>
        </div>

        {/* 4. Social & Contact Links Grid */}
      </div>
    </footer>
  );
};

export default Footer;
