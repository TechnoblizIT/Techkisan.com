import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-14 bg-[#eaeaea]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* First section */}
          <div
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
            className="space-y-4 max-w-[300px] text-dark2"
          >
            <h1 className="text-2xl font-bold text-black">Address</h1>
            <p>
              <strong>Address: </strong>
              <span itemProp="streetAddress">
                Nakade Complex, Near Sai Mandir,<br /> Mama Chowk, Gondia
              </span>
              ,<br />
              <span itemProp="addressLocality">Maharashtra</span>,{" "}
              <span itemProp="addressRegion">Maharashtra</span> -{" "}
              <span itemProp="postalCode">441601</span>{" "}
              <span itemProp="addressCountry">India</span>.
            </p>
            <p>
              <strong>Telephone: </strong>
              <span itemProp="telephone">7972025213, 9511831914</span>
            </p>
            <p>
              <strong>Email: </strong>
              <span itemProp="email">
                <a
                  href="mailto:info@techkisan.in"
                  className="text-primary hover:underline"
                >
                  info@techkisan.in
                </a>
                ,{" "}
                <a
                  href="mailto:sales@techkisan.in"
                  className="text-primary hover:underline"
                >
                  sales@techkisan.in
                </a>
              </span>
            </p>
            <p>
              <strong>Sub Offices: </strong>
              <span itemProp="sub-offices">
                <a href="#" className="text-primary hover:underline">
                  Pune (MH)
                </a>
              </span>
              <span> | </span>
              <span itemProp="sub-offices">
                <a href="#" className="text-primary hover:underline">
                  Nagpur (MH)
                </a>
              </span>
              <span> | </span>
              <span itemProp="sub-offices">
                <a href="#" className="text-primary hover:underline">
                  Betul (MP)
                </a>
              </span>
              <span> | </span>
              <span itemProp="sub-offices">
                <a href="#" className="text-primary hover:underline">
                  Chandrapur (MH)
                </a>
              </span>
              <span> | </span>
              <span itemProp="sub-offices">
                <a href="#" className="text-primary hover:underline">
                  Wardha (MH)
                </a>
              </span>
            </p>
          </div>

          {/* Second section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Links</h1>
            <div className="text-dark2">
              <ul className="space-y-2 text-lg">
                <li className="cursor-pointer hover:text-secondary duration-200">
                  Home
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                  Services
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                  About
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                  Contact
                </li>
              </ul>
            </div>
          </div>

          {/* Third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold text-black">Location on Map</h1>
            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29706.876869484528!2d80.2042816!3d21.4544021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2ba92f8a12e471%3A0x8685529359bb82f8!2sTechkisan%20Automation!5e0!3m2!1sen!2sin!4v1705585445560!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
