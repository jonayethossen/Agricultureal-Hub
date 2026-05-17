import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Container from "./Container"; // আপনার প্রজেক্টের কন্টেইনার কম্পোনেন্ট

export default function FarmingTips() {
  // শুরুতে কোনো একর্ডিয়ন ওপেন থাকবে না, তাই স্টেট ডিফল্ট null রাখা হয়েছে
  const [activeIndex, setActiveIndex] = useState(null);

  // টগল ফাংশন
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // কৃষি ও চাষাবাদ বিষয়ক বাস্তবসম্মত টিপস ডাটা
  const farmingTipsData = [
    {
      id: 1,
      title: "Soil Preparation & Health",
      content:
        "Before sowing seeds, ensure the soil is well-tilled and mixed with organic compost or well-rotted manure. Testing your soil pH balance helps you determine the exact nutrients required for your specific crop type, ensuring maximum yield.",
    },
    {
      id: 2,
      title: "Smart Irrigation & Water Management",
      content:
        "Water your crops early in the morning or late in the evening to reduce water loss due to evaporation. Implementing drip irrigation is highly recommended as it delivers water directly to the plant roots, saving water and preventing weed growth.",
    },
    {
      id: 3,
      title: "Natural Pest Control Strategies",
      content:
        "Avoid using excessive chemical pesticides. Instead, practice crop rotation and utilize companion planting (like growing marigolds near vegetables) to naturally repel harmful insects. You can also use organic neem oil sprays for effective pest control.",
    },
    {
      id: 4,
      title: "Seasonal Crop Selection",
      content:
        "Always align your farming schedule with the local weather conditions. Plant monsoon-loving crops like rice or maize during the Kharif season, and transition to wheat, mustard, or pulses when winter approaches during the Rabi season.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <Container>
        {/* মেইন সাদা ব্যাকগ্রাউন্ডের কন্টেইনার */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-10 max-w-6xl mx-auto">
          {/* সেকশন মেইন হেডার (স্কাই ব্লু স্ট্রিপ) */}
          <div className="bg-[#e0f2fe] py-4 rounded-t-lg border-b border-gray-100 mb-6 text-center">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 tracking-wide">
              Farming Tips & Best Practices
            </h2>
          </div>

          {/* একর্ডিয়ন লিস্ট গ্রুপ */}
          <div className="border border-gray-200 rounded-lg overflow-hidden divide-y divide-gray-200 shadow-sm">
            {farmingTipsData.map((tip) => {
              const isOpen = activeIndex === tip.id;

              return (
                <div key={tip.id} className="w-full">
                  {/* একর্ডিয়ন হেডার বাটন */}
                  <button
                    onClick={() => toggleAccordion(tip.id)}
                    className={`w-full flex items-center justify-between px-5 py-4 text-left text-sm md:text-base font-semibold tracking-wide transition-all duration-200 focus:outline-none ${
                      isOpen
                        ? "bg-[#e0f2fe] text-blue-900" // ওপেন হলে লাইট ব্লু ব্যাকগ্রাউন্ড দেখাবে
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{tip.title}</span>
                    {/* আপ/ডাউন এরো আইকন */}
                    {isOpen ? (
                      <HiChevronUp className="text-xl text-blue-800 transition-transform duration-300" />
                    ) : (
                      <HiChevronDown className="text-xl text-gray-500 transition-transform duration-300" />
                    )}
                  </button>

                  {/* একর্ডিয়ন বডি কন্টেন্ট (স্মুথ ট্রানজিশন অ্যানিমেশনসহ) */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-5 text-xs md:text-sm text-gray-600 leading-relaxed bg-white border-t border-gray-100 text-justify">
                        {tip.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
