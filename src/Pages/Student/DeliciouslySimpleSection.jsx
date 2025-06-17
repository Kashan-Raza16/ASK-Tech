import React from "react";
import Jam from "../../assets/img/Jam.png";
import AddTask from "../../assets/img/AddTask.png";
import GetDesigns from "../../assets/img/GetDesign.png"; 



const DeliciouslySimpleSection = () => {

  const features = [
    {
      id: 1,
      imageUrl: Jam,
      title: "Subscribe",
      description:
        "Subscribing is as easy as opening up a jar of jam... well in theory. Just press the subscribe button below.",
    },
    {
      id: 2,
      imageUrl: AddTask,
      title: "Add Tasks",
      description:
        "Begin adding design tasks to your backlog. Add as many as you want and we'll get Jammin'!",
    },
    {
      id: 3,
      imageUrl: GetDesigns, 
      title: "Get Designs",
      description:
        "Start receiving your designs within a couple of business days. We'll revise until you're happy.",
    },
  ];

  return (
    <section className="container bg-[#fbf7f2] max-h-screen mx-auto px-4 py-8 sm:py-12 lg:py-16 text-center">
      {/* Section Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight rounded-lg">
        It's deliciously simple
      </h1>
      {/* Section Subtitle */}
      <p className="text-lg sm:text-xl text-gray-800 mb-8 sm:mb-12 rounded-lg">
        It's just how you've always wanted design to work.
      </p>

      {/* Feature Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-gray-100 rounded-3xl shadow-lg  p-6 sm:p-8 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Feature Image */}
            <div className="mb-4 sm:mb-6">
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-30 h-30 sm:w-40 sm:h-40 object-contain "
                // Fallback for image loading errors
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/150x150/e0e0e0/333333?text=Image+Error";
                }}
              />
            </div>
            {/* Feature Title */}
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4 rounded-lg">
              {feature.title}
            </h3>
            {/* Feature Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed rounded-lg">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default DeliciouslySimpleSection;
