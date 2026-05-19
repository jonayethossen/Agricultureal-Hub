import Container from "./Container";
import monitoringImg from "../assets/MonitoringAndTreatment/FarmERP.png";
import detectionImg from "../assets/MonitoringAndTreatment/Farming.jpg";
import treatmentImg from "../assets/MonitoringAndTreatment/PrecisionAgriculture.jpeg";

export default function MonitoringAndTreatment() {
  const cardData = [
    {
      id: 1,
      title: "Monitoring",
      image: monitoringImg,
      paragraphs: [
        "Regular feild inspection and pest scouting.",
        "Regular feild inspection and pest scouting.",
        "Regular feild inspection and pest scouting.",
      ],
    },
    {
      id: 2,
      title: "Early Detection",
      image: detectionImg,
      paragraphs: [
        "Use Traps Lorem ipsum dolor sit amet, consectetur adipisicing.",
        "Use tras Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, totam.",
      ],
    },
    {
      id: 3,
      title: "Effective Treatment",
      image: treatmentImg,
      paragraphs: [
        "Aply safe prestictudes, purne infected parts, and maintain sanitation",
        "Aply safe prestictudes, purne infected parts, and maintain sanitation",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <Container>
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-10 max-w-6xl mx-auto">
          <div className="bg-[#d1e7dd] py-4 rounded-t-lg border-b border-gray-200/60 mb-8 text-center">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 tracking-wide">
              Monitornig, Early Detecation & Treatment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="border border-gray-200 rounded-lg overflow-hidden flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-50 w-full overflow-hidden p-1 bg-white">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-t-md"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4 tracking-wide">
                      {card.title}
                    </h3>

                    <div className="space-y-4 text-xs md:text-sm text-gray-600 font-medium leading-relaxed">
                      {card.paragraphs.map((para, index) => (
                        <p key={index} className="text-justify">
                          {para}
                        </p>
                      ))}
                    </div>
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
