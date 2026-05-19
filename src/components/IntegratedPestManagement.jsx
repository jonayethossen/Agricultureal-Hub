import Container from "./Container"; // আপনার প্রজেক্টের কন্টেইনার কম্পোনেন্ট

import preventiveImg from "../assets/Pests&Diseases/LivestockPestes.jpg";
import biologicalImg from "../assets/Pests&Diseases/deadly.jpg";
import organicImg from "../assets/Pests&Diseases/Natural-Pest.jpg";

export default function IntegratedPestManagement() {
  // ছবির ভেতরের টেক্সট এবং লিস্ট আইটেম অনুযায়ী ডাটা অ্যারে
  const ipmData = [
    {
      id: 1,
      title: "Prevantive Measures", // ছবির হুবহু স্পেলিং রাখা হয়েছে
      image: preventiveImg,
      points: [
        "Crpo rotaion & sanitation", // ছবির টেক্সট মিল রাখা হয়েছে
        "Pest-resiternt varieastis",
        "Soil helth maintanance",
      ],
    },
    {
      id: 2,
      title: "Biological Controls",
      image: biologicalImg,
      points: [
        "Ladybugs,parstics wasps",
        "Microbial pestitcs (Bt)",
        "Presatory insect & birds",
      ],
    },
    {
      id: 3,
      title: "Organic Remedies",
      image: organicImg,
      points: [
        "Neem oil spray",
        "Garlic-chili solution",
        "Pheromone & sticky traps",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <Container>
        {/* মেইন সাদা ব্যাকগ্রাউন্ডের কার্ড কন্টেইনার */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-10 max-w-6xl mx-auto">
          {/* সেকশন মেইন হেডার (ছবির হালকা লাইট গ্রিন শেড) */}
          <div className="bg-[#d1e7dd] py-4 rounded-t-lg border-b border-gray-200/60 mb-8 text-center">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 tracking-wide">
              Integrated Pest Management (IPM)
            </h2>
          </div>

          {/* থ্রি-কলাম গ্রিড লেআউট */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ipmData.map((card) => (
              <div
                key={card.id}
                className="border border-gray-200 rounded-lg overflow-hidden flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* কার্ডের উপরের ইমেজ কন্টেইনার */}
                <div className="h-50 w-full overflow-hidden p-1 bg-white">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-t-md"
                  />
                </div>

                {/* কার্ড কন্টেন্ট এরিয়া (টেক্সট এবং বুলেট পয়েন্ট) */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left">
                  <div>
                    {/* সাব-টাইটেল */}
                    <h3 className="text-lg font-bold text-gray-800 mb-3 tracking-wide">
                      {card.title}
                    </h3>

                    {/* ডট বা বুলেট পয়েন্ট লিস্ট (ছবির মতো স্টাইল) */}
                    <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-gray-600 font-medium">
                      {card.points.map((point, index) => (
                        <li key={index} className="leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
