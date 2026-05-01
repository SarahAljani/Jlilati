import Image from "next/image";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-end px-6 md:px-24 overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/kitchen.png" // Ensure this image is in your public folder
          alt="Kitchen Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/40 to-transparent" />
        {/* Subtle Cyan tint for that professional look */}
        <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply" />
      </div>

      {/* Hero Text Content */}
      <div className="relative z-10  text-right w-full flex flex-col items-start gap-6">
        <p className="text-teal-400 font-medium text-sm md:text-lg">
          سرعة في الاستجابة ومهنية عالية في تصليح طباخات المطعم
        </p>

        <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
          مطبخك <span className="text-teal-400">لا يتوقف!</span>
          <br />
          <span className="text-white">تصليح غازات </span>
          <span className="text-teal-400">المطاعم والأفران</span> 
          <br />
          بسرعة واحترافية
        </h1>

        <p className="max-w-lg text-gray-300 text-base md:text-xl leading-relaxed">
          استجابة فورية، قطع غيار أصلية، وفحص أمان شامل لضمان استمرار أعمالك دون انقطاع.
        </p>

        {/* CTA Button */}
        <button className="mt-4 flex items-center gap-3 rounded-lg bg-white px-6 py-2 text-lg font-bold text-black transition-all hover:bg-teal-50 hover:scale-105 shadow-2xl">
          <span>تواصل معنا</span>
          <MessageCircle className="text-teal-500 fill-teal-500/10" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;