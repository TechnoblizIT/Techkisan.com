import React from "react";
import homeautomation from "../../assets/home-automation.png"
import solarservice from "../../assets/solar-energy.png"
import securitysol from "../../assets/security.png"
import building from "../../assets/building-automation.png"
import itservice from "../../assets/app-development.png"
import officefactory from "../../assets/sensor.png"
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Home Automation",
    link: "/automationservices#homeautomation",
    image: homeautomation,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Solar Services",
    link: "/solarservices",
    image: solarservice,
    delay: 0.3,
  },    
  {
    id: 3,
    title: "Security Solutions",
    link: "/securityservices",
    image: securitysol,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Building & Commercial Automation",
    link: "/automationservices#bms",
    image: building,
    delay: 0.5,
  },
  {
    id: 5,
    title: "IT Services",
    link: "/itservices",
    image: itservice,
    delay: 0.6,
  },
  {
    id: 6,
    title: "Office & Factory Automation",
    link: "/automationservices",
    image: officefactory,
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-5">
        <h1 className="text-4xl font-bold text-left pb-10 text-center">
          Services we provide
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <a href={service.link}>
              <div className="text-4xl mb-4"><img src={service.image} alt="image" className="h-20 w-20"/></div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;