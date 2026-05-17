import Container from "./Container"; // আপনার প্রজেক্টের কন্টেইনার কম্পোনেন্ট

export default function FeaturedSection() {
  // ছবির কনটেন্ট অনুযায়ী ডেটা অ্যারে তৈরি করা হয়েছে
  const featuredItems = [
    {
      id: 1,
      title: "Farming Guides",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi consectetur doloremque earum facilis, molestias quibusdam repudiandae! Ab, cumque quos.",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800", // চারা রোপণের ছবি
    },
    {
      id: 2,
      title: "Crop Details",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi consectetur doloremque earum facilis, molestias quibusdam repudiandae! Ab, cumque quos.",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800", // গমের মাঠের ছবি
    },
    {
      id: 3,
      title: "Pest Control",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi consectetur doloremque earum facilis, molestias quibusdam repudiandae! Ab, cumque quos.",
      image:
        "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=800", // লেডিবাগ/পোকা দমনের ছবি
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <Container>
        {/* মেইন সাদা ব্যাকগ্রাউন্ডের কার্ড কন্টেইনার */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-10 max-w-6xl mx-auto">
          {/* সেকশন মেইন টাইটেল */}
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8 pb-4 border-b border-gray-100">
            Featured Section
          </h2>

          {/* থ্রি-কলাম গ্রিড লেআউট */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden flex flex-col justify-between bg-white shadow-sm"
              >
                {/* কার্ড ইমেজ এরিয়া */}
                <div className="h-50 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* কার্ডের ভেতরের কন্টেন্ট এরিয়া */}
                <div className="flex-1 flex flex-col justify-between">
                  {/* স্কাই ব্লু রঙের টাইটেল স্ট্রিপ */}
                  <div className="bg-[#e0f2fe] px-4 py-3 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 tracking-wide">
                      {item.title}
                    </h3>
                  </div>

                  {/* ডেসক্রিপশন এবং বাটন এরিয়া */}
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6 font-normal">
                      {item.desc}
                    </p>

                    {/* আউটলাইন বর্ডার ডিটেইলস বাটন */}
                    <button className="w-full border border-sky-400 text-sky-500 hover:bg-sky-50 transition-colors duration-300 text-sm font-semibold py-2 rounded-md active:scale-[0.98]">
                      Details
                    </button>
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
