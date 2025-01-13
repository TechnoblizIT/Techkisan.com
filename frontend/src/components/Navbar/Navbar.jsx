import React, { useEffect, useRef, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import LOGO from "./../../assets/logo.png";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    dropdown: [
      { id: 1, title: "Automations", path: "/" },
      {
        id: 2,
        title: "Solar Services",
        path: "/",
      },
      { id: 3, title: "Security Solutions", path: "/" },
      { id: 4, title: "IT Services", path: "/" },
    ],
  },
  {
    id: 4,
    title: "Shop",
    dropdown: [
      { id: 1, title: "Products", path: "/" },
      {
        id: 2,
        title: "Cart",
        path: "/",
      },
      { id: 3, title: "Orders", path: "/" },
    ],
  },
  {
    id: 3,
    title: "About Us",
    path: "#",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle the dropdown for the clicked menu
  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <img src={LOGO} alt="LOGO" className="w-40 h-20 object-contain" />
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6 relative">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="relative group">
                <a
                  href={menu.path}
                  aria-expanded={activeDropdown === menu.id ? "true" : "false"}
                  aria-controls={`dropdown-${menu.id}`}
                  className="inline-block py-2 px-4 cursor-pointer rounded-lg hover:bg-gray-200 hover:shadow-[0px_7px_10px_-7px_#9e9d9b]"
                >
                  {menu.title}
                </a>

                {/* Dropdown Menu */}
                {menu.dropdown && (
                  <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 120,
                    }}
                    className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg z-10 hidden group-hover:block"
                  >
                    {menu.dropdown.map((item) => (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }} // Start below the menu
                        animate={{
                          opacity: 1,
                          y: 0, // Slide to position
                        }}
                        transition={{
                          duration: 0.3,
                          delay: item.id * 0.1, // Staggered
                          type: "spring",
                          stiffness: 120, // Natural spring effect
                        }}
                      >
                        <motion.a
                          href={item.path}
                          className="block px-4 py-2 hover:bg-gray-200"
                          whileHover={{
                            scale: 1.1, // Zoom effect on hover
                            transition: { type: "spring", stiffness: 300 },
                          }}
                        >
                          {item.title}
                        </motion.a>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <div
            onClick={toggleMobileMenu} // Toggle the mobile menu
            className="cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <IoMdClose className="text-4xl" /> // Show close icon when menu is open
            ) : (
              <IoMdMenu className="text-4xl" /> // Show hamburger icon when menu is closed
            )}
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg z-10 p-4 mt-10"
            >
              <ul className="space-y-4">
                {/* Mobile Menu Options */}
                {NavbarMenu.map((item) => (
                  <li key={item.id} className="relative">
                    <div
                      className="block py-2 px-4 cursor-pointer rounded-lg hover:bg-gray-200"
                      onClick={() => {
                        // If the clicked item is Services or Shop, toggle its dropdown
                        if (item.dropdown) {
                          toggleDropdown(item.id);
                        } else {
                          // For other items, close the menu directly
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      {item.title}
                    </div>

                    {/* Show dropdown menu if active */}
                    {item.dropdown && activeDropdown === item.id && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          type: "spring",
                          stiffness: 120,
                        }}
                        className="space-y-2 mt-2"
                      >
                        {item.dropdown.map((subItem) => (
                          <motion.li
                            key={subItem.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.3,
                              delay: subItem.id * 0.1,
                              type: "spring",
                              stiffness: 120,
                            }}
                          >
                            <a
                              href={subItem.path}
                              className="block px-4 py-2 hover:bg-gray-200"
                              onClick={() => setIsMobileMenuOpen(false)} // Close on item click
                            >
                              {subItem.title}
                            </a>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </li>
                ))}
                <button
                  className="primary-btn w-full"
                  onClick={() => setIsMobileMenuOpen(false)} // Close on button click
                >
                  Sign In
                </button>
              </ul>
            </motion.div>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
