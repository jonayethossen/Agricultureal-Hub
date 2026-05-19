import Container from "./Container";

export default function AdvisorContact() {
  const advisors = [
    {
      id: 1,
      name: "Md. SK Ahmed",
      desination: "Senior Officer Agriculture Department",
      email: "skahmed24@gmail.com",
      phone: "01765428712",
      officeHours: "9am-5pm",
    },
    {
      id: 2,
      name: "Sr Sinha",
      desination: "Junior Officer Agriculture Department",
      email: "srinha544@gmail.com",
      phone: "01765428715",
      officeHours: "9am-5pm",
    },
    {
      id: 3,
      name: "Anthony Gomes",
      desination: "Field Officer Agriculture Department",
      email: "angomes25@gmail.com",
      phone: "01765428728",
      officeHours: "9am-5pm",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <Container>
        {/* মেইন সাদা ব্যাকগ্রাউন্ডের বড় কার্ড কন্টেইনার */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-10 max-w-6xl mx-auto">
          {/* সেকশন মেইন হেডার (ছবির লাইট গ্রিন শেড) */}
          <div className="bg-[#d1e7dd] py-5 rounded-t-lg border-b border-gray-200/60 text-center px-4">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 tracking-wide mb-1">
              Agricultural Advisor Contact
            </h2>
            <p className="text-xs md:text-sm text-gray-600 font-medium">
              If you need direct assistance, contact our certified agriculture
              advisors:
            </p>
          </div>

          {/* থ্রি-কলাম গ্রিড লেআউট */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {advisors.map((advisor) => (
              <div
                key={advisor.id}
                className="border border-gray-200 rounded-lg overflow-hidden flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* কার্ডের উপরের নেম হেডার (হালকা গ্রিন ব্যাকগ্রাউন্ড) */}
                <div className="bg-[#d1e7dd]/60 px-5 py-4 border-b border-gray-200 text-left">
                  <h3 className="text-xl font-bold text-gray-900 tracking-wide">
                    {advisor.name}
                  </h3>
                </div>

                {/* ইনফরমেশন এবং কন্টাক্ট ডিটেইলস এরিয়া */}
                <div className="p-5 flex-1 bg-white text-left text-xs md:text-sm space-y-3.5">
                  {/* Desination */}
                  <div className="pb-3 border-b border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      <span className="font-bold text-gray-900">
                        Desination:
                      </span>{" "}
                      {advisor.desination}
                    </p>
                  </div>

                  {/* Email */}
                  <div className="pb-3 border-b border-gray-100">
                    <p className="text-gray-600">
                      <span className="font-bold text-gray-900">Email:</span>{" "}
                      {advisor.email}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="pb-3 border-b border-gray-100">
                    <p className="text-gray-600">
                      <span className="font-bold text-gray-900">Phone:</span>{" "}
                      {advisor.phone}
                    </p>
                  </div>

                  {/* Office Hours */}
                  <div>
                    <p className="text-gray-600">
                      <span className="font-bold text-gray-900">
                        Office Hours:
                      </span>{" "}
                      {advisor.officeHours}
                    </p>
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
