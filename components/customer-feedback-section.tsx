"use client";

import Image from "next/image";
import { useState } from "react";

export default function CustomerFeedbackSection() {
  const [currentFeedback, setCurrentFeedback] = useState(0);

  const feedbacks = [
    {
      id: 1,
      name: "Tayyab Sohail",
      role: "UX/UI Designer",
      avatar: "/avatar-1.png",
      text: "Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
    },
    {
      id: 2,
      name: "Nafiz Salim",
      role: "Graphics Designer",
      avatar: "/avatar-2.png",
      text: "Simple but delicious. The crust was perfectly crisp with a smoky edge, the tomatoes tasted fresh, and the mozzarella was melty and rich. Classic done right.",
    },
    {
      id: 3,
      name: "Tayyab Iqbal",
      role: "Developer",
      avatar: "/avatar-3.png",
      text: "Juicy and satisfying. The patties were cooked to perfection, cheese melted like a dream, and the toasted brioche bun held it all together. Great value for a casual bite.",
    },
  ];

  const handleDot = (index: number) => {
    setCurrentFeedback(index);
  };

  return (
    <section className="pt-10 px-4 md:px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6 text-black">
              Customer <span className="text-red-600">Feedback</span>
            </h2>
            <p className="text-gray-600 font-sans text-base leading-relaxed mb-8">
              {feedbacks[currentFeedback].text}
            </p>

            {/* Customer info */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex gap-5 items-center">
                <Image
                  src={feedbacks[currentFeedback].avatar || "/placeholder.svg"}
                  alt={feedbacks[currentFeedback].name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold font-sans text-gray-900">
                    {feedbacks[currentFeedback].name}
                  </h3>
                  <p className="text-gray-500 font-sans text-sm">
                    {feedbacks[currentFeedback].role}
                  </p>
                </div>
              </div>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {feedbacks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDot(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentFeedback ? "bg-red-600" : "bg-gray-300"
                    }`}
                    aria-label={`Go to feedback ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Chef image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              {/* Chef image */}
              <div className="relative z-10">
                <Image
                  src="/chef.png"
                  alt="Professional chef"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
