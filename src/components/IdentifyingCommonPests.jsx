import Container from "./Container";
import cropPestImg from "../assets/Pests&Diseases/Natural-Pest.jpg";
import treeDiseaseImg from "../assets/Pests&Diseases/deadly.jpg";
import livestockPestImg from "../assets/Pests&Diseases/LivestockPestes.jpg";

export default function PestsAndDiseases() {
  const pestCards = [
    {
      id: 1,
      title: "Crop Pets and Diseases",
      image: cropPestImg,
      bacterial: ["Fire Blight", "Bacterial blight"],
      fungal: ["Powdery mildew", "Downy mildew"],
    },
    {
      id: 2,
      title: "Tree Diseases",
      image: treeDiseaseImg,
      bacterial: ["Fire Blight", "Bacterial blight"],
      fungal: ["Powdery mildew", "Downy mildew"],
    },
    {
      id: 3,
      title: "Livestock Pestes", // ছবির হুবহু স্পেলিং রাখা হয়েছে
      image: livestockPestImg,
      bacterial: ["Fire Blight", "Bacterial blight"],
      fungal: ["Powdery mildew", "Downy mildew"],
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <Container>
        {/* মেইন সাদা ব্যাকগ্রাউন্ডের বড় কার্ড কন্টেইনার */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-10 max-w-6xl mx-auto">
          {/* সেকশন মেইন হেডার (ছবির হালকা লাইট গ্রিন শেড) */}
          <div className="bg-[#d1e7dd] py-4 rounded-t-lg border-b border-gray-200/60 mb-8 text-center">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 tracking-wide">
              Identifying Common Pests & Diseases
            </h2>
          </div>

          {/* থ্রি-কলাম গ্রিড লেআউট */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pestCards.map((card) => (
              <div
                key={card.id}
                className="border border-gray-200 rounded-lg overflow-hidden flex flex-col bg-white shadow-sm"
              >
                {/* কার্ডের উপরের ইমেজ সেকশন */}
                <div className="h-50 w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* কার্ডের প্রধান সাব-টাইটেল (বোল্ড টেক্সট) */}
                <div className="px-5 py-4 border-b border-gray-100 text-left">
                  <h3 className="text-lg font-bold text-gray-900 tracking-wide">
                    {card.title}
                  </h3>
                </div>

                {/* ইনফরমেশন এবং লিস্ট এরিয়া */}
                <div className="p-5 flex-1 bg-white text-left text-xs md:text-sm">
                  {/* Bacterial Diseases পার্ট */}
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Bacterial Diseases
                    </h4>
                    <ul className="divide-y divide-gray-100 border border-gray-100 rounded">
                      {card.bacterial.map((item, idx) => (
                        <li
                          key={idx}
                          className="px-3 py-2 text-gray-600 font-medium"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fungle Diseases পার্ট (ছবির স্পেলিং অনুযায়ী) */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Fungle Diseases
                    </h4>
                    <ul className="divide-y divide-gray-100 border border-gray-100 rounded">
                      {card.fungal.map((item, idx) => (
                        <li
                          key={idx}
                          className="px-3 py-2 text-gray-600 font-medium"
                        >
                          {item}
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
