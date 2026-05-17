import Container from "./Container"; // আপনার প্রজেক্টের কন্টেইনার কম্পোনেন্ট

export default function AgricultureHub() {
  return (
    <section className="py-12 bg-gray-50">
      <Container>
        {/* মেইন কার্ড কন্টেইনার */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-10 max-w-6xl mx-auto">
          {/* সেকশন হেডার টাইটেল */}
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8 pb-4 border-b border-gray-100">
            Agriculture Information Hub
          </h2>

          {/* গ্রিড লেআউট: মোবাইলে ওপর-নিচে, ডেস্কটপে পাশাপাশি */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* বাম পাশের ইমেজ সেকশন ওভারলেসহ */}
            <div className="relative rounded-lg overflow-hidden h-62.5 md:h-87.5 group shadow-sm">
              {/* ব্যাকগ্রাউন্ড কৃষি ইমেজ */}
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200"
                alt="Agriculture"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* ছবির ভেতরের ডার্ক ওভারলে */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]"></div>

              {/* ছবির ভেতরের গ্রিন সার্কেল ডিজাইন এলিমেন্টস (ছবির মতো) */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-green-600/60 rounded-full blur-sm"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-green-600/60 rounded-full blur-sm"></div>
              <div className="absolute top-8 right-12 w-10 h-10 bg-green-700/40 rounded-full blur-sm"></div>

              {/* মেইন টেক্সট এবং ডট এলিমেন্ট */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                {/* ৩টি ছোট ডট */}
                <div className="flex space-x-1 mb-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full opacity-80"></span>
                  <span className="w-2 h-2 bg-green-500 rounded-full opacity-80"></span>
                  <span className="w-2 h-2 bg-green-500 rounded-full opacity-80"></span>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-wide uppercase drop-shadow-md select-none">
                  Agriculture
                </h3>
              </div>
            </div>

            {/* ডান পাশের টেক্সট ডেসক্রিপশন সেকশন */}
            <div className="border border-gray-200/80 rounded-lg p-6 md:p-8 h-full flex items-center bg-gray-50/30">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut
                beatae dicta dolores eaque earum eius error excepturi hic ipsum
                itaque magnam molestiae, nostrum odio, optio pariatur possimus
                quaerat repellat suscipit vero! Accusamus alias animi
                consectetur corporis cum debitis distinctio ducimus ex expedita
                fuga fugiat, hic, ipsum iure nesciunt perspiciatis placeat
                possimus qui reiciendis sapiente sit tempore veniam vero. Autem
                harum maiores sequi. Adipisci alias amet ea, expedita, facilis
                harum modi porro quasi quis quos tempore unde velit, voluptatem.
                Aspernatur et eum incidunt vel vitae. A ab aliquam amet atque
                aut commodi cum cumque cupiditate debitis delectus deserunt
                dicta distinctio dolore enim esse expedita fuga harum inventore
                ipsum minima nemo numquam odio, placeat quam quasi quia quo
                ratione saepe sapiente sunt tenetur totam velit veniam veritatis
                voluptate voluptatibus voluptatum. Ad amet at corporis,
                dignissimos dolorum eos et minus numquam pariatur perspiciatis
                quasi quis repellendus reprehenderit saepe, sed sint tenetur,
                vel?
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
