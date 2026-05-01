import Image from "next/image";
import { Shield, Settings, Headphones, CheckCircle, Zap } from "lucide-react";

const features = [
  {
    title: "فحص الأمان",
    description:
      "كشف تسريبات الغاز (Safety Check) لضمان سلامة الكادر والمنشأة.",
    icon: <Shield className="text-blue-500" size={28} />,
  },
  {
    title: "ضمان حقيقي",
    description: "قطع غيار أصلية مع ضمان شامل على الصيانة.",
    icon: <Settings className="text-gray-700" size={28} />,
  },
  {
    title: "خدمة عملاء",
    description:
      "فنيون مختصون في صيانة أفران الغاز والمعدات الاحترافية للمطاعم والفنادق.",
    icon: <Headphones className="text-blue-400" size={28} />,
  },
  {
    title: "فريق متخصص",
    description:
      "فنيون مختصون في صيانة أفران الغاز والمعدات الاحترافية للمطاعم والفنادق.",
    icon: <CheckCircle className="text-purple-600" size={28} />,
  },
  {
    title: "سرعة استجابة",
    description: "نصلك فوراً لأننا نعرف أن الوقت يساوي المال في المطاعم.",
    icon: <Zap className="text-amber-500 fill-amber-500" size={28} />,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 w-full items-center">
          {/* Right Side: Text Content */}
          <div className="text-right space-y-8 ">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                لماذا تختارنا؟ و ماهي مزايانا؟
              </h2>
              <p className="text-gray-500 text-lg md:text-xl max-w-xl ml-auto">
                فنيون مختصون في صيانة أفران الغاز والمعدات الاحترافية للمطاعم
                والفنادق.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-10">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  {/* Text Container */}
                  {/* Icon Container */}
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Left Side: Single Vertical Image */}
          <div className="relative h-[500px] md:h-[700px] w-full flex justify-center lg:justify-start ">
            <Image
              src="/diamond.png" // Replace with your actual exported image
              alt="Professional Kitchen Maintenance"
              fill
              className="object-contain" // object-contain ensures the full vertical shape is visible
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
