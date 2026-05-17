import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Container from "./Container"; // আপনার প্রজেক্টের কন্টেইনার কম্পোনেন্ট
import { useState } from "react";

export default function CropInformation() {
  // শুরুতে কোনো একর্ডিয়ন ওপেন থাকবে না, তাই স্টেট null রাখা হয়েছে
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // ছবির টাইটেল অনুযায়ী বাস্তবসম্মত এগ্রিকালচার ডেটা
  const cropInfoData = [
    {
      id: 1,
      title: "Cultivation Methods",
      content: (
        <div className="space-y-3">
          <p>
            Different crops require specific sowing and transplanting methods to
            maximize growth efficiency:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
            <li>
              <span className="font-semibold text-gray-800">Rice (Paddy):</span>{" "}
              Primarily grown using the transplantation method where seedlings
              are raised in nurseries and then moved to flooded fields.
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Wheat & Maize:
              </span>{" "}
              Usually cultivated using direct line-sowing or broadcasting
              methods in well-aerated, moisture-retaining soil blocks.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      title: "Soil Requirements",
      content: (
        <div className="space-y-3">
          <p>
            Soil texture, organic matter content, and pH levels play a vital
            role in root system development:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
            <li>
              <span className="font-semibold text-gray-800">
                Loamy to Clayey Soil:
              </span>{" "}
              Ideal for water-retentive crops like Rice, as it holds moisture
              effectively over long periods.
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Sandy Loam Soil:
              </span>{" "}
              Highly preferred for Wheat, Potatoes, and Pulses because it
              ensures excellent drainage and prevents root rot.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: "Harvesting Techniques",
      content: (
        <div className="space-y-3">
          <p>
            Timely harvesting ensures optimal grain quality, minimal scattering
            loss, and protects the market value:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
            <li>
              <span className="font-semibold text-gray-800">
                Manual Harvesting:
              </span>{" "}
              Traditional cutting using sickles close to the ground, followed by
              sun-drying and threshing manually.
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Mechanical Combine Harvesting:
              </span>{" "}
              Modern approach using combine harvesters that simultaneously cut,
              thresh, and clean the grains efficiently, saving time and labor.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <Container>
        {/* মেইন সাদা ব্যাকগ্রাউন্ডের কন্টেইনার */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-10 max-w-6xl mx-auto">
          {/* সেকশন হেডার স্ট্রিপ (ছবির হুবহু স্কাই ব্লু কালার) */}
          <div className="bg-[#e0f2fe] py-4 rounded-t-lg border-b border-gray-100 mb-6 text-center">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 tracking-wide">
              Information of Different Crops
            </h2>
          </div>

          {/* একর্ডিয়ন লিস্ট গ্রুপ কন্টেইনার */}
          <div className="border border-gray-200 rounded-lg overflow-hidden divide-y divide-gray-200 shadow-sm">
            {cropInfoData.map((info) => {
              const isOpen = activeIndex === info.id;

              return (
                <div key={info.id} className="w-full">
                  {/* একর্ডিয়ন হেডার বাটন */}
                  <button
                    onClick={() => toggleAccordion(info.id)}
                    className={`w-full flex items-center justify-between px-6 py-4 text-left text-sm md:text-base font-bold tracking-wide transition-all duration-200 focus:outline-none ${
                      isOpen
                        ? "bg-[#e0f2fe] text-blue-900"
                        : "bg-white text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    <span>{info.title}</span>
                    {/* আপ/ডাউন এরো আইকন */}
                    {isOpen ? (
                      <HiChevronUp className="text-xl text-blue-800 transition-transform duration-300" />
                    ) : (
                      <HiChevronDown className="text-xl text-gray-500 transition-transform duration-300" />
                    )}
                  </button>

                  {/* একর্ডিয়ন বডি কন্টেন্ট ট্রানজিশন */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-6 text-xs md:text-sm text-gray-600 leading-relaxed bg-white border-t border-gray-100 text-justify">
                        {info.content}
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
