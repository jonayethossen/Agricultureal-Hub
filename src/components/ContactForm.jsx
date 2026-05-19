import { useState } from "react";
import Container from "./Container";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ইমেজ ফাইল হ্যান্ডলার
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // ফর্ম সাবমিট হ্যান্ডলার
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    console.log("Uploaded Image:", selectedImage);
    alert("Message sent successfully!");
  };

  return (
    <section className="bg-gray-50 py-12">
      <Container>
        {/* মেইন কার্ড কন্টেইনার */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10 max-w-3xl mx-auto">
          {/* হেডার সেকশন */}
          <div className="border-b border-gray-100 pb-4 mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">
              Get in Touch
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              We would love to hear from you. Please fill out the form below.
            </p>
          </div>

          {/* ফর্ম এরিয়া */}
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm text-gray-800 placeholder-gray-400 shadow-sm"
              />
            </div>

            {/* Subject Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What is this regarding?"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm text-gray-800 placeholder-gray-400 shadow-sm"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                type="type" // আপনার ইমেজের প্যাটার্ন অনুযায়ী সাধারণ টাইপ, ভ্যালিডেশনের জন্য 'email' করা যেতে পারে
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@domain.com"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm text-gray-800 placeholder-gray-400 shadow-sm"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message here..."
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm text-gray-800 placeholder-gray-400 shadow-sm resize-y"
              ></textarea>
            </div>

            {/* Choice Image Input (প্রিমিয়াম ড্রপ-জোন ডিজাইন) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Upload Image
              </label>
              <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-emerald-500 transition-colors bg-gray-50/50 text-center cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center justify-center space-y-1">
                  {/* ক্লাউড আপলোড আইকন */}
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-xs md:text-sm text-gray-600 font-medium">
                    {selectedImage ? (
                      <span className="text-emerald-600 font-semibold">
                        Selected: {selectedImage.name}
                      </span>
                    ) : (
                      "Click to upload or drag and drop an image"
                    )}
                  </p>
                  <p className="text-[11px] text-gray-400">
                    PNG, JPG, JPEG up to 5MB
                  </p>
                </div>
              </div>
            </div>

            {/* সাবমিট বাটন (ছবির ডার্ক গ্রিন থিম কালার) */}
            <button
              type="submit"
              className="w-full bg-[#198754] hover:bg-[#157347] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-200 active:scale-[0.99] text-center tracking-wide"
            >
              Submit Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
