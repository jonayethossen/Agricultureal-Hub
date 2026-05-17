import Container from "./Container"; // আপনার প্রজেক্টের কন্টেইনার কম্পোনেন্ট

export default function CategorizationGuide() {
  // ছবির ভেতরের জটিল স্ট্রাকচার অনুযায়ী ডেটা অ্যারে তৈরি করা হয়েছে
  const categories = [
    {
      id: 1,
      title: "Crop Types",
      content: (
        <div className="space-y-4 text-left">
          <div>
            <h4 className="font-bold text-gray-900 text-sm md:text-base">
              Vegetables
            </h4>
            <ul className="pl-2 mt-1 space-y-1 text-xs md:text-sm text-gray-600">
              <li>Leafy greens</li>
              <li>Root vegetables (carrot, potato)</li>
            </ul>
          </div>
          <div className="border-t border-gray-100 pt-3">
            <h4 className="font-bold text-gray-900 text-sm md:text-base">
              Fruits
            </h4>
            <ul className="pl-2 mt-1 text-xs md:text-sm text-gray-600">
              <li>Tropical Fruits (banana, mango, pineapple)</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Farming Methods",
      content: (
        <div className="space-y-4 text-left">
          <div>
            <h4 className="font-bold text-gray-900 text-sm md:text-base">
              Traditional Farming
            </h4>
            <p className="mt-1 text-xs md:text-sm text-gray-600 leading-relaxed">
              Manual tillage, seed sowing, and harvesting methods
            </p>
          </div>
          <div className="border-t border-gray-100 pt-3">
            <h4 className="font-bold text-gray-900 text-sm md:text-base">
              Organic Farming
            </h4>
            <p className="mt-1 text-xs md:text-sm text-gray-600 leading-relaxed">
              Composting, natural pest control, organic certification
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Seasonal Farming Guide",
      content: (
        <div className="space-y-4 text-left">
          <div>
            <h4 className="font-bold text-gray-900 text-sm md:text-base">
              Kharif Season (Monsoon)
            </h4>
            <ul className="pl-2 mt-1 space-y-1 text-xs md:text-sm text-gray-600">
              <li>
                <span className="font-medium text-gray-700">
                  Suitable crops:
                </span>{" "}
                rice, maize, cotton, soybeans
              </li>
              <li>Seasonal practices and precautions during heavy rainfall</li>
            </ul>
          </div>
          <div className="border-t border-gray-100 pt-3">
            <h4 className="font-bold text-gray-900 text-sm md:text-base">
              Rabi Season (Winter)
            </h4>
            <p className="pl-2 mt-1 text-xs md:text-sm text-gray-600">
              <span className="font-medium text-gray-700">Suitable crops:</span>{" "}
              wheat, barley, mustard, peas
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <Container>
        {/* মূল ব্যাকগ্রাউন্ড কার্ড কন্টেইনার */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-10 max-w-6xl mx-auto">
          {/* মেইন সেকশন হেডার (ছবির হালকা লাইট গ্রিন শেড) */}
          <div className="bg-[#d1e7dd] py-4 rounded-t-lg border-b border-gray-200/60 mb-8 text-center">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 tracking-wide">
              Categorization of Guide
            </h2>
          </div>

          {/* ৩টি কার্ডের গ্রিড লেআউট */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((card) => (
              <div
                key={card.id}
                className="border border-gray-200 rounded-lg overflow-hidden flex flex-col justify-between bg-white shadow-sm"
              >
                {/* কার্ড ইনার হেডার (স্কাই ব্লু স্ট্রিপ) */}
                <div className="bg-[#e0f2fe] px-5 py-3 border-b border-gray-200">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 tracking-wide text-left">
                    {card.title}
                  </h3>
                </div>

                {/* কার্ডের ইনার ডাইনামিক কন্টেইনার এরিয়া */}
                <div className="p-5 flex-1 flex flex-col justify-between min-h-55">
                  {/* কন্টেন্ট বডি */}
                  <div className="flex-1 mb-6">{card.content}</div>

                  {/* ডিপ গ্রিন কালার বাটন (ছবির হুবহু কালার ম্যাচ করা) */}
                  <button className="w-full bg-[#198754] hover:bg-[#157347] text-white text-sm font-semibold py-2.5 rounded-md transition-colors duration-300 active:scale-[0.98] shadow-sm">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
