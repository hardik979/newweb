import { motion, useScroll, useTransform } from "framer-motion";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandGithub,
} from "@tabler/icons-react";

const Footer = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 1], [0.8, 1]);

  return (
    <motion.footer
      style={{ opacity }}
      className="relative w-full bg-custom-gradient text-gray-300 py-10 px-5 md:px-16"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl font-bold text-white"
        >
          Hardik Web-Works
        </motion.h1>

        {/* Navigation Links */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-6 text-sm md:text-base"
        >
          <li className="hover:text-white transition">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-white transition">
            <a href="#">Services</a>
          </li>
          <li className="hover:text-white transition">
            <a href="#">Portfolio</a>
          </li>
          <li className="hover:text-white transition">
            <a href="#">Contact</a>
          </li>
        </motion.ul>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex gap-4 text-lg"
        >
          <a
            href="#"
            className="hover:text-white transition transform hover:scale-110"
          >
            <IconBrandFacebook size={22} />
          </a>
          <a
            href="#"
            className="hover:text-white transition transform hover:scale-110"
          >
            <IconBrandInstagram size={22} />
          </a>
          <a
            href="#"
            className="hover:text-white transition transform hover:scale-110"
          >
            <IconBrandTwitter size={22} />
          </a>
          <a
            href="#"
            className="hover:text-white transition transform hover:scale-110"
          >
            <IconBrandGithub size={22} />
          </a>
        </motion.div>
      </div>

      {/* Bottom Border Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="w-full h-[1px]  my-6"
      />

      {/* Copyright Text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-center text-xs text-gray-500"
      >
        © {new Date().getFullYear()} Hardik web-works's Agency. All rights
        reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
