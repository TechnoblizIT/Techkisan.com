import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import automationservices from "../../assets/automationservices.jpg";
import homeautomation from "../../assets/home-automation.jpg";
import lightautomation from "../../assets/light-automation.jpg";
import bms from "../../assets/bms.jpg";
import autodoor from "../../assets/automatic-door.jpg";
import gate from "../../assets/gate-automation.jpg";
import hotel from "../../assets/hotel-lock.jpg";
import Occupancy from "../../assets/occupacy-sensor.png";
import hometheatre from "../../assets/home-theatre.jpg";
import nurse from "../../assets/nurse-calling-system.jpg";
import smartlock from "../../assets/Smart-Lock.jpg";

const services = [
  {
    title: "Home Automation",
    description:
      "Home automation transforms your living space with smart systems that enhance convenience, security, and energy efficiency. Control lighting, climate, and devices effortlessly through voice commands or a mobile app. Experience modern living tailored to your lifestyle.",
    image: homeautomation,
  },
  {
    title: "Lght Automation",
    description:
      "Light automation enhances comfort and energy efficiency by providing smart control over your home or office lighting. Adjust brightness, set schedules, or create ambiance effortlessly with advanced automation technology. Experience convenience, savings, and a smarter living space.",
    image: lightautomation,
  },
  {
    title: "Building Management System (BMS)",
    description:
      "A Building Management System (BMS) optimizes energy use, enhances security, and ensures seamless control of all building operations. From HVAC and lighting to surveillance, our BMS solutions simplify complex systems for improved efficiency and management. Elevate your building’s performance with smart automation.",
    image: bms,
  },
  {
    title: "Automatic Door",
    description:
      "Automatic doors offer seamless access, enhanced security, and convenience for homes and businesses. With smart sensors and customization options, they ensure smooth operation while adding a modern touch to your property. Experience effortless entry and improved safety.",
    image: autodoor,
  },
  {
    title: "Gate Automation",
    description:
      "Gate automation combines security, convenience, and modern technology to control access to your property effortlessly. With features like remote operation and durable designs, it enhances safety while providing ease of use for residential and commercial spaces.",
    image: gate,
  },
  {
    title: "Hotel Lock",
    description:
      "Hotel lock systems provide secure, efficient, and modern access solutions for guests and staff. With features like keyless entry and remote management, they enhance convenience and elevate the guest experience while ensuring top-notch security.",
    image: hotel,
  },
  {
    title: "Occupancy Sensor",
    description:
      "Occupancy sensors optimize energy use and enhance convenience by detecting movement to control lighting and other systems automatically. They improve efficiency, reduce costs, and create smarter spaces for homes and businesses.",
    image: Occupancy,
  },
  {
    title: "Home Theatre",
    description:
      "A home theatre system delivers a cinematic experience in the comfort of your home. With immersive sound, high-definition visuals, and smart controls, it transforms your space into an entertainment hub for movies, music, and gaming.",
    image: hometheatre,
  },
  {
    title: "Nurse Calling System",
    description:
      "The Nurse Calling System ensures prompt and efficient communication between patients and medical staff. Designed for hospitals and care facilities, it enhances patient care with easy-to-use alerts and quick response mechanisms.",
    image: nurse,
  },
  {
    title: "Smart Lock",
    description:
      "Smart locks provide keyless entry and enhanced security for homes and businesses. With advanced features like remote access and activity tracking, they offer convenience, control, and peace of mind for modern living.",
    image: smartlock,
  },
];

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

      {/* Services Section */}
      <div className="container mx-auto py-16 px-6 max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Automation Services
        </h2>
        
        <div className="grid gap-10 lg:grid-cols-1 relative ">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:z-10"
            >
              {/* Left - Image */}
              <div className="lg:w-1/3">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right - Content */}
              <div className="lg:w-2/3 p-6 flex flex-col justify-center relative z-10">
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>

                {/* Checklist (3x2 Grid) */}
                <ul className="mt-4 grid grid-cols-3 gap-4 text-gray-700">
                  {[
                    "Smart Controls",
                    "Energy Efficiency",
                    "Voice Integration",
                    "Remote Access",
                    "Enhanced Security",
                    "Customizable Solutions",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">
                        <FaAnglesRight />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutomationServices;
