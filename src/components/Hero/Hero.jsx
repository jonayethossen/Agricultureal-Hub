import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default function Hero() {
  // এগ্রিকালচার রিলেটেড হাই-কোয়ালিটি ইমেজ এবং টেক্সট কনটেন্ট
  const slides = [
    {
      id: 1,
      title: "AGRICULTURE PRESENTATION",
      tagline: "Add your tagline here",
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2000",
    },
    {
      id: 2,
      title: "SMART FARMING GUIDE",
      tagline: "Cultivating innovation for tomorrow",
      image:
        "https://images.unsplash.com/photo-1592417817098-8f3d6eb18865?q=80&w=2000",
    },
    {
      id: 3,
      title: "PEST CONTROL STRATEGIES",
      tagline: "Protect your crops with modern solutions",
      image:
        "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=2000",
    },
  ];

  return (
    <section className="hero-container w-full h-125 md:h-150 relative">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* ব্যাকগ্রাউন্ড ইমেজ */}
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* টেক্সট ফুটিয়ে তোলার জন্য ডার্ক ওভারলে */}
              <div className="absolute inset-0 bg-black/35 backdrop-blur-[0.5px]"></div>

              {/* টেক্সট কনটেন্ট এরিয়া */}
              <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center h-full">
                <h1 className="text-3xl md:text-6xl font-black tracking-wider text-white uppercase drop-shadow-lg mb-4 select-none">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl font-medium tracking-wide text-white/90 font-serif italic drop-shadow-md">
                  {slide.tagline}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
