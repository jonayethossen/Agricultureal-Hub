import Container from "./Container"; // আপনার প্রজেক্টের কন্টেইনার কম্পোনেন্ট

export default function FarmingGuideTutorials() {
  // ছবির ভেতরের টেক্সট এবং লিস্ট আইটেম অনুযায়ী ডেটা স্ট্রাকচার
  const tutorialCards = [
    {
      id: 1,
      title: "Farming Practice",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1", // আপনার ইউটিউব ভিডিওর এমবেড লিঙ্ক দিবেন
      items: [
        "Land preparation",
        "Seed management",
        "Crop management",
        "Pest & disease",
      ],
    },
    {
      id: 2,
      title: "Farming Techniques",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
      items: [
        "Irrigation techniques",
        "Soil techniques",
        "Planting techniques",
        "Fertilizer application techniques",
      ],
    },
    {
      id: 3,
      title: "Farming Methodologies",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
      items: [
        "Organic farming",
        "Sustainable farming",
        "Precision agriculture",
        "Hydroponics",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <Container>
        {/* মেইন সাদা ব্যাকগ্রাউন্ডের কার্ড কন্টেইনার */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-10 max-w-6xl mx-auto">
          {/* সেকশন মেইন হেডার (ছবির মতো স্কাই ব্লু স্ট্রিপ) */}
          <div className="bg-[#e0f2fe] py-4 rounded-t-lg border-b border-gray-100 mb-8 text-center">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 tracking-wide">
              Farming Guide and Tutorials
            </h2>
          </div>

          {/* থ্রি-কলাম গ্রিড লেআউট */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutorialCards.map((card) => (
              <div
                key={card.id}
                className="border border-gray-200 rounded-lg overflow-hidden flex flex-col bg-white shadow-sm"
              >
                {/* ইউটিউব ভিডিও এমবেড এরিয়া (রেসপন্সিভ অ্যাসপেক্ট রেশিও ১৬:৯) */}
                <div className="relative w-full aspect-video bg-black">
                  {/* আপনি যদি রিয়াল ভিডিও চালাতে চান তবে নিচের iframe টি ব্যবহার করবেন */}
                  <iframe
                    className="w-full h-full"
                    src={card.videoUrl}
                    title={card.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* কার্ডের ইনার টাইটেল স্ট্রিপ (লাইট ব্লু) */}
                <div className="bg-[#e0f2fe] px-5 py-3 border-y border-gray-200/60">
                  <h3 className="text-lg font-bold text-gray-800 tracking-wide">
                    {card.title}
                  </h3>
                </div>

                {/* লিস্ট আইটেম এরিয়া */}
                <div className="flex-1 bg-white p-2">
                  <ul className="flex flex-col">
                    {card.items.map((item, index) => (
                      <li
                        key={index}
                        className={`px-4 py-3 text-sm text-gray-700 font-medium tracking-wide ${
                          index !== card.items.length - 1
                            ? "border-b border-gray-100"
                            : ""
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
