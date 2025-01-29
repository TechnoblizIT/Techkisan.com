import React from "react";
import automationservices from "../../assets/automationservices.jpg";

const AutomationServices = () => {
  return (
    <div>
      {/* Parallax Section */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${automationservices})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Automation</h1>
            <p className="mt-2">"Simplifying Life with Smart Solutions"</p>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Home Automation Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Home Automation
              </h2>
              <p className="text-gray-600 mb-4">
                Home automation transforms your living space with smart systems
                that enhance convenience, security, and energy efficiency.
                Control lighting, climate, and devices effortlessly through
                voice commands or a mobile app. Experience modern living
                tailored to your lifestyle.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Smart Controls</li>
                <li>Energy Efficiency</li>
                <li>Voice Integration</li>
                <li>Remote Access</li>
                <li>Enhanced Security</li>
                <li>Customizable Solutions</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AutomationServices;
