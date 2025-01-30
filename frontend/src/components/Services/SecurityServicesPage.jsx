import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import securityBg from "../../assets/securty-solutions.jpg";
import accessControl from "../../assets/access-control.png";
import cctv from "../../assets/cctv-cameras.jpg";
import network from "../../assets/network.jpg"
import fireSuppression from "../../assets/fire-suppression-system.jpg";
import timeAttendance from "../../assets/time-attendance.jpg";
import boomBarrier from "../../assets/boom-barrier.png";
import fireAlarm from "../../assets/fire_alarm1.jpg";
import vehicleTracking from "../../assets/vehicle-tracking2.jpg";
import burglarAlarm from "../../assets/burgler-alarm.jpg";
import fireHydrant from "../../assets/fire-hydrants.jpg";
import paSystem from "../../assets/pa-system.jpg";
import videoDoorPhone from "../../assets/video-door-phone.png";

const services = [
    {
      title: "Access Control",
      description:
        "Access control systems provide secure and efficient management of entry to your property. They enhance safety by restricting unauthorized access and ensuring seamless control for authorized personnel.",
      image: accessControl,
      checklist: [
        "Keyless Entry",
        "Biometric Authentication",
        "Remote Access",
        "Role-Based Permissions",
        "Real-Time Monitoring",
        "Integration Capabilities",
      ],
    },
    {
      title: "CCTV Surveillance",
      description:
        "CCTV surveillance systems ensure round-the-clock monitoring and security for your property. With high-definition cameras and real-time access, they help deter threats and provide peace of mind.",
      image: cctv,
      checklist: [
        "High-Definition Cameras",
        "Real-Time Monitoring",
        "Night Vision Capability",
        "Motion Detection",
        "Remote Viewing",
        "Cloud Storage Integration",
      ],
    },
    {
      title: "Fire Suppression",
      description:
        "Fire suppression systems provide rapid detection and control of fires to protect life and property. Designed for homes, offices, and industrial spaces, these systems ensure safety with advanced technology.",
      image: fireSuppression,
      checklist: [
        "Rapid Fire Detection",
        "Automatic Suppression",
        "Multi-Agent Systems",
        "Heat and Smoke Sensors",
        "Integration with Alarms",
        "Low Maintenance Design",
      ],
    },
    {
      title: "Time Attendance",
      description:
        "Time attendance systems streamline employee tracking with accurate and automated records. Ideal for businesses of all sizes, they enhance productivity and ensure efficient workforce management.",
      image: timeAttendance,
      checklist: [
        "Biometric Authentication",
        "Cloud-Based Storage",
        "Real-Time Tracking",
        "Integration with Payroll",
        "Touchless Operation",
        "Detailed Reporting",
      ],
    },
    {
      title: "Boom Barrier",
      description:
        "Boom barriers provide secure and automated control of vehicle entry and exit at gates. Designed for residential, commercial, and industrial spaces, they enhance security and streamline access management.",
      image: boomBarrier,
      checklist: [
        "Automatic Operation",
        "Durable Construction",
        "Vehicle Access Control",
        "Remote Management",
        "Integration with Security Systems",
        "Adjustable Speed Settings",
      ],
    },
    {
      title: "Fire Alarm",
      description:
        "Fire alarm systems ensure early detection and prompt alerts during fire emergencies, protecting lives and property. With advanced sensors and reliable performance, they are essential for homes, offices, and industrial spaces.",
      image: fireAlarm,
      checklist: [
        "Early Fire Detection",
        "Smoke and Heat Sensors",
        "Audible and Visual Alerts",
        "Integration with Sprinklers",
        "Remote Monitoring",
        "Battery Backup",
      ],
    },
    {
      title: "Network & Communication",
      description:
        "Network and communication systems provide seamless connectivity for homes and businesses. With reliable and high-speed solutions, they ensure efficient data sharing, communication, and device integration for smooth operations.",
      image: network,
      checklist: [
        "High-Speed Connectivity",
        "Wireless Solutions",
        "Secure Data Sharing",
        "Device Integration",
        "Scalable Infrastructure",
        "Real-Time Monitoring",
      ],
    },
    {
      title: "Vehicle Tracking",
      description:
        "Vehicle tracking systems provide real-time monitoring and management of your fleet or personal vehicles. With GPS technology, they ensure enhanced security, route optimization, and efficient fleet management, offering peace of mind and control.",
      image: vehicleTracking,
      checklist: [
        "Real-Time GPS Tracking",
        "Route Optimization",
        "Geofencing Alerts",
        "Driver Behavior Monitoring",
        "Historical Data Reports",
        "Remote Access",
      ],
    },
    {
      title: "Burglar Alarm",
      description:
        "Burglar alarm systems offer reliable protection by detecting unauthorized entry and triggering immediate alerts. Designed for homes and businesses, they deter intrusions and ensure fast response times to enhance security.",
      image: burglarAlarm,
      checklist: [
        "Intrusion Detection",
        "Instant Alerts",
        "Motion Sensors",
        "Remote Monitoring",
        "Wireless Connectivity",
        "Loud Siren or Siren Alerts",
      ],
    },
    {
      title: "Fire Hydrant",
      description:
        "Fire hydrant systems provide quick access to water for firefighting during emergencies. Strategically placed in key locations, they are essential for ensuring safety and minimizing damage in both residential and commercial properties.",
      image: fireHydrant,
      checklist: [
        "High Water Flow",
        "Easy Access",
        "Durable Construction",
        "Quick Deployment",
        "Remote Monitoring",
        "Emergency Readiness",
      ],
    },
    {
      title: "Public Address (PA) Systems",
      description:
        "Public Address (PA) systems allow clear and effective communication in large spaces. Whether for announcements, emergency alerts, or event coordination, these systems ensure your message reaches everyone in real-time.",
      image: paSystem,
      checklist: [
        "Clear Audio",
        "Wide Coverage",
        "Wireless Integration",
        "Remote Control",
        "Easy Setup",
        "Emergency Alerts",
      ],
    },
    {
      title: "Video Door Phone",
      description:
        "Video door phones provide secure, two-way communication with visitors, enhancing security at entry points. With video and audio capabilities, they allow you to see and speak to visitors before granting access, ensuring peace of mind.",
      image: videoDoorPhone,
      checklist: [
        "Video and Audio Communication",
        "Remote Unlocking",
        "High-Resolution Camera",
        "Night Vision",
        "Two-Way Audio",
        "Integration with Smart Devices",
      ],
    },
  ];

const SecurityServicesPage = () => {
  return (
    <div>
      {/* Parallax Section */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${securityBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Security Solutions</h1>
            <p className="mt-2">"Protecting What Matters Most."</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="container mx-auto py-16 px-6 max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Security Solutions
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

                {/* Checklist */}
                <ul className="mt-4 grid grid-cols-3 gap-4 text-gray-700">
                  {service.checklist.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">
                        <FaCheckCircle />
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

export default SecurityServicesPage;
