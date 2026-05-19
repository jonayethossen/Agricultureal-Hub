import Container from "./Container"; // আপনার প্রজেক্টের কন্টেইনার কম্পোনেন্ট

// লোকাল অ্যাসেট ফোল্ডার থেকে ইমেজগুলো ইমপোর্ট করা হচ্ছে
import riceImg from "../assets/Crop_Categories/Whole_Grains.jpg";
import fruitImg from "../assets/Crop_Categories/fruits.jpg";
import bannnaImg from "../assets/Crop_Categories/Banana.jpg";
import cottonImg from "../assets/Crop_Categories/Cotton.jpg";
import tolarImg from "../assets/Crop_Categories/tola.jpg";
import vagitableImg from "../assets/Crop_Categories/vegetables.jpg";
import epubImg from "../assets/Crop_Categories/epub.jpg";

import { useState } from "react";

export default function CropCategoriesTab() {
  const [activeTab, setActiveTab] = useState("Grains");
  const tabs = ["Grains", "Fruits", "Vegetables", "Cash Crop"];

  const cropData = {
    Grains: [
      {
        id: 1,
        name: "Rice",
        image: epubImg,
        calories: "130 per 100g",
        carbs: "28g",
        protein: "2.7g",
        fiber: "0.4g",
        uses: "Staple food, flour, rice bran oil, animal feed.",
      },
      {
        id: 2,
        name: "Wheat",
        image: riceImg,
        calories: "339 per 100g",
        carbs: "71g",
        protein: "13.2g",
        fiber: "12.2g",
        uses: "Bread, pasta, noodles, biscuits, traditional flour dishes.",
      },
    ],
    Fruits: [
      {
        id: 1,
        name: "Mango",
        image: fruitImg, // আপনার লোকাল ইমেজ ইমপোর্ট করে এখানে ভ্যারিয়েবল বসাবেন
        calories: "60 per 100g",
        carbs: "15g",
        protein: "0.8g",
        fiber: "1.6g",
        uses: "Fresh consumption, juices, pickles, desserts.",
      },
      {
        id: 2,
        name: "Banana",
        image: bannnaImg, // এখানে লোকাল ভ্যারিয়েবলটি বসানো হয়েছে

        calories: "89 per 100g",
        carbs: "23g",
        protein: "1.1g",
        fiber: "2.6g",
        uses: "Direct snack, baking, smoothies, baby food.",
      },
    ],
    Vegetables: [
      {
        id: 1,
        name: "Potato",
        image: vagitableImg,
        calories: "77 per 100g",
        carbs: "17g",
        protein: "2g",
        fiber: "2.2g",
        uses: "Daily cooking, french fries, chips, starch production.",
      },
      {
        id: 2,
        name: "Tomato",
        image: vagitableImg,
        calories: "18 per 100g",
        carbs: "3.9g",
        protein: "0.9g",
        fiber: "1.2g",
        uses: "Salads, curries, sauces, ketchup, soups.",
      },
    ],
    "Cash Crop": [
      {
        id: 1,
        name: "Jute",
        image: tolarImg,
        calories: "N/A",
        carbs: "N/A",
        protein: "N/A",
        fiber: "Extremely High (Industrial)",
        uses: "Sacks, bags, twine, ropes, mats, eco-friendly packaging.",
      },
      {
        id: 2,
        name: "Tea",
        image: cottonImg,
        calories: "1 per 100g (brewed)",
        carbs: "0.2g",
        protein: "0g",
        fiber: "0g",
        uses: "Beverages, antioxidants extraction, cosmetics.",
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-12">
      <Container>
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-10 max-w-6xl mx-auto">
          {/* সেকশন হেডার */}
          <div className="bg-[#e0f2fe] py-4 rounded-t-lg border-b border-gray-100 mb-6 text-center">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 tracking-wide">
              Farming Guide: Crop Categories
            </h2>
          </div>

          {/* ট্যাব নেভিগেশন */}
          <div className="flex flex-wrap border-b border-gray-200 mb-6 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold tracking-wide transition-all duration-200 rounded-t-md -mb-[1px] ${
                  activeTab === tab
                    ? "border-t border-x border-gray-300 bg-white text-blue-600 shadow-sm"
                    : "text-blue-500 hover:text-blue-700 bg-transparent border-transparent"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ডাইনামিক গ্রিড কন্টেন্ট */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cropData[activeTab].map((crop) => (
              <div
                key={crop.id}
                className="border border-gray-200 rounded-lg p-4 flex flex-col justify-between bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* শস্যের ছবি এরিয়া */}
                <div className="h-[220px] w-full overflow-hidden rounded-md border border-gray-100 mb-4">
                  <img
                    src={crop.image} // এখানে লোকাল ভ্যারিয়েবল পাথটি রেন্ডার হবে
                    alt={crop.name}
                    loading="lazy"
                    className="w-full h-full object-cover transform hover:scale-103 transition-transform duration-500"
                  />
                </div>

                {/* শস্যের ডিটেইলস */}
                <div className="flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {crop.name}
                    </h3>{" "}
                    {/* */}
                    <div className="mb-3">
                      <h4 className="text-sm font-bold text-gray-800 mb-1">
                        Nutritional Values:
                      </h4>{" "}
                      {/* */}
                      <ul className="list-disc pl-5 space-y-0.5 text-xs md:text-sm text-gray-600">
                        <li>
                          <span className="font-medium text-gray-700">
                            Calories:
                          </span>{" "}
                          {crop.calories}
                        </li>{" "}
                        {/* */}
                        <li>
                          <span className="font-medium text-gray-700">
                            Carbohydrates:
                          </span>{" "}
                          {crop.carbs}
                        </li>{" "}
                        {/* */}
                        <li>
                          <span className="font-medium text-gray-700">
                            Protein:
                          </span>{" "}
                          {crop.protein}
                        </li>{" "}
                        {/* */}
                        <li>
                          <span className="font-medium text-gray-700">
                            Fiber:
                          </span>{" "}
                          {crop.fiber}
                        </li>{" "}
                        {/* */}
                      </ul>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 mb-6 leading-relaxed">
                      <span className="font-bold text-gray-800">
                        Potential Uses:{" "}
                      </span>{" "}
                      {/* */}
                      {crop.uses} {/* */}
                    </p>
                  </div>

                  {/* ডিটেইলস বাটন */}
                  <button className="w-fit bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2 rounded shadow-sm transition-colors duration-200 active:scale-95">
                    Details {/* */}
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
