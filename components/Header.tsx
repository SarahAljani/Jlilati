import { MessageCircle, MapPin, Send } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-16">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 text-amber-500">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C12 2 7 8.5 7 12.875C7 15.7056 9.23858 18 12 18C14.7614 18 17 15.7056 17 12.875C17 8.5 12 2 12 2Z" />
          </svg>
        </div>
        <span className="text-2xl font-bold tracking-widest text-[#D4AF37]">LILATI</span>
      </div>

      {/* Navigation & Socials */}
      <div className="flex items-center gap-8">
        {/* Desktop Links */}
        <div className="hidden items-center gap-6 text-white md:flex">
          <Link href="/" className="hover:text-teal-400 transition-colors">الصفحة الرئيسية</Link>
          <Link href="/about" className="hover:text-teal-400 transition-colors">حولنا</Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-white">
          <a href="#" className="hover:text-teal-400 transition-transform hover:scale-110">
            <Send size={20} />
          </a>
          <a href="#" className="hover:text-teal-400 transition-transform hover:scale-110">
            <MapPin size={20} />
          </a>
          <a href="#" className="hover:text-teal-400 transition-transform hover:scale-110">
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;