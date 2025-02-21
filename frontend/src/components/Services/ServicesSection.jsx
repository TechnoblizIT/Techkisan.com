import React from "react";

const ServiceSection = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-10 bg-white">
      <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
        <div className="row-span-2 flex flex-col rounded-md border border-slate-200">
          <div className="h-1/2 flex-1">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/c43307b88fb814366e4f3a181c788796cba83faa/4c05c/new/landing/omnichannel.png"
              className="w-full object-cover object-right-top"
              alt="Omnichannel"
            />
          </div>
          <div className="p-10">
            <h3 className="text-xl font-medium text-gray-700">
            Home Automation
            </h3>
            <p className="mt-2 text-slate-500">
            Home automation transforms your living space with smart systems that enhance convenience, security, and energy efficiency. Control lighting, climate, and devices effortlessly through voice commands or a mobile app. Experience modern living tailored to your lifestyle.
            </p>
            <ul className="mt-2 space-y-2 text-gray-700">
  {[
    "Smart Controls",
    "Energy Efficiency",
    "Voice Integration",
    "Remote Access",
    "Enhanced Security",
    "Customizable Solutions",
  ].map((item, index) => (
    <li key={index} className="flex items-center gap-2">
      <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
      {item}
    </li>
  ))}
</ul>

          </div>
        </div>
        <div className="flex rounded-md border border-slate-200">
          <div className="flex-1 p-10">
            <h3 className="text-xl font-medium text-gray-700">
            Light Automation
            </h3>
            <p className="mt-2 text-slate-500">
            Light automation enhances comfort and energy efficiency by providing smart control over your home or office lighting. Adjust brightness, set schedules, or create ambiance effortlessly with advanced automation technology. Experience convenience, savings, and a smarter living space.
            </p>
            <ul className="mt-2 space-y-2 text-gray-700">
  {[
    "Smart Dimming",
    "Remote Control",
    "Motion Sensors",
    "Energy Saving Modes",
    "Schedule Programming",
    "Customizable Solutions",
  ].map((item, index) => (
    <li key={index} className="flex items-center gap-2">
      <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
      {item}
    </li>
  ))}
</ul>

          </div>
          <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
            <div className="absolute inset-0">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/e5290c26cc1703e54e0afe3d1472046098ecd819/53775/new/landing/live-chat.png"
                className="h-full w-full object-cover object-left-top"
                alt="Live Chat"
              />
            </div>
          </div>
        </div>
        <div className="flex rounded-md border border-slate-200">
          <div className="flex-1 p-10">
            <h3 className="text-xl font-medium text-gray-700">
            Light Automation
            </h3>
            <p className="mt-2 text-slate-500">
            Light automation enhances comfort and energy efficiency by providing smart control over your home or office lighting. Adjust brightness, set schedules, or create ambiance effortlessly with advanced automation technology. Experience convenience, savings, and a smarter living space.
            </p>
            <ul className="mt-2 space-y-2 text-gray-700">
  {[
    "Smart Dimming",
    "Remote Control",
    "Motion Sensors",
    "Energy Saving Modes",
    "Schedule Programming",
    "Customizable Solutions",
  ].map((item, index) => (
    <li key={index} className="flex items-center gap-2">
      <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
      {item}
    </li>
  ))}
</ul>

          </div>
          <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
            <div className="absolute inset-0">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/e5290c26cc1703e54e0afe3d1472046098ecd819/53775/new/landing/live-chat.png"
                className="h-full w-full object-cover object-left-top"
                alt="Live Chat"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
