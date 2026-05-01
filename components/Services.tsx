import { MessageCircle } from "lucide-react";

const services = [
  {
    title: "إصلاح المواقد التجارية، القلايات، والشوايات الغازية.",
    description:
      "نصلك فوراً لأننا نعرف أن الوقت يساوي المال في المطاعم. نصلك فوراً لأننا نعرف أن الوقت يساوي المال في المطاعم. نصلك فوراً لأننا نعرف أن الوقت يساوي المال في ا",
  },
  {
    title: "صيانة وتصليح أفران المطاعم بجميع ماركاتها.",
    description:
      "نصلك فوراً لأننا نعرف أن الوقت يساوي المال في المطاعم. نصلك فوراً لأننا نعرف أن الوقت يساوي المال في المطاعم. نصلك فوراً لأننا نعرف أن الوقت يساوي المال في ا",
  },
  {
    title: "صيانة شاملة لخطوط الغاز ومواسير التوصيل.",
    description:
      "نصلك فوراً لأننا نعرف أن الوقت يساوي المال في المطاعم. نصلك فوراً لأننا نعرف أن الوقت يساوي المال في المطاعم. نصلك فوراً لأننا نعرف أن الوقت يساوي المال في ا",
  },
  {
    title: "تنظيف شعلات الغاز لتحسين الأداء وتوفير استهلاك الوقود.",
    description:
      "نصلك فوراً لأننا نعرف أن الوقت يساوي المال في المطاعم. نصلك فوراً لأننا نعرف أن الوقت يساوي المال في المطاعم. نصلك فوراً لأننا نعرف أن الوقت يساوي المال في ا",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        {/* Section Header */}
        <div className="text-right mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            الخدمات التي نقدمها:
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl ml-auto">
            فنيون معتمدون في صيانة أفران الغاز والمعدات الاحترافية للمطاعم
            والفنادق.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-12 rounded-[1.5rem] shadow-lg shadow-gray-200 flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#135D66] mb-6 leading-relaxed">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                {service.description}
              </p>

              {/* WhatsApp CTA Button */}
              <button className="mt-auto flex items-center gap-2 bg-[#135D66] text-white px-8 py-2.5 rounded-xl font-bold hover:bg-[#0E464D] transition-colors">
                <MessageCircle size={20} className="fill-white/20" />
                <span>اتصل بنا</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
