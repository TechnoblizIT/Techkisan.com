import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import itservices from "../../assets/it-services.jpg";
import webdesign from "../../assets/web-design.jpg";
import software from "../../assets/software-development.jpeg";
import website from "../../assets/Website-development-services.png";
import cybersecurity from "../../assets/cybersecurity-solutions.png";
import consulting from "../../assets/it-consultancy-strategy.png";
import ai from "../../assets/ai-solutions.jpg";
import data from "../../assets/data-management.jpeg";
import cloud from "../../assets/cloudcomputing.jpg";

const services = [
  {
    title: "Web Design",
    description:
      "Our web design services create visually stunning, user-friendly websites that reflect your brand and engage your audience.",
    image: webdesign,
    features: [
      "Responsive Design",
      "SEO Optimization",
      "User-Centric",
      "Fast Loading",
      "Mobile-Friendly",
      "Customizable Layouts",
    ],
  },
  {
    title: "Software Development",
    description:
      "Our software development services provide custom solutions tailored to your business needs.",
    image: software,
    features: [
      "Custom Solutions",
      "Scalable Architecture",
      "User-Friendly Interface",
      "Cross-Platform Compatibility",
      "Secure Coding",
      "Continuous Support",
    ],
  },
  {
    title: "Website Development",
    description:
      "Techkisan Automation offers comprehensive website development services that combine creativity and functionality.",
    image: website,
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Custom Development",
      "Fast Loading Speed",
      "User-Friendly Interface",
      "Secure Architecture",
    ],
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Our cybersecurity solutions protect your business from digital threats, ensuring data security and integrity.",
    image: cybersecurity,
    features: [
      "Threat Detection",
      "Data Encryption",
      "Real-Time Monitoring",
      "Firewall Protection",
      "Vulnerability Assessment",
      "Incident Response",
    ],
  },
  {
    title: "IT Consulting and Strategy",
    description:
      "Our IT consulting and strategy services help businesses align technology with their objectives to drive growth and efficiency.",
    image: consulting,
    features: [
      "Technology Roadmap",
      "Strategic Planning",
      "Infrastructure Optimization",
      "Process Automation",
      "IT Alignment",
      "Risk Management",
    ],
  },
  {
    title: "AI Solutions",
    description:
      "Techkisan Automation offers cutting-edge AI solutions designed to transform your business operations.",
    image: ai,
    features: [
      "Machine Learning",
      "Data Analytics",
      "Predictive Insights",
      "Intelligent Automation",
      "Custom AI Models",
      "Real-Time Decision-Making",
    ],
  },
  {
    title: "Data Management",
    description:
      "Our data management services help businesses organize, store, and analyze vast amounts of data securely and efficiently.",
    image: data,
    features: [
      "Data Storage Solutions",
      "Data Integration",
      "Data Security",
      "Real-Time Analytics",
      "Backup & Recovery",
      "Compliance Management",
    ],
  },
  {
    title: "Cloud Computing",
    description:
      "Our cloud computing services provide scalable, flexible, and secure solutions for businesses.",
    image: cloud,
    features: [
      "Scalable Infrastructure",
      "Cost-Effective Solutions",
      "Remote Accessibility",
      "Data Backup & Recovery",
      "High Security",
      "Easy Integration",
    ],
  },
];

const ITServicesPage = () => {
  return (
    <div>
      {/* Parallax Section */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${itservices})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">IT Services</h1>
            <p className="mt-2">
              "Empowering Your Business with Smart IT Solutions."
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="container mx-auto py-16 px-6 max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our IT-Services
        </h2>

        <div className="grid gap-10 lg:grid-cols-1 relative">
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
                  className="w-full max-h-64 object-cover"
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

                {/* Dynamic Checklist */}
                <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      {feature}
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

export default ITServicesPage;
