import { motion, useScroll, useTransform } from "framer-motion";
import { FeaturesSectionDemo } from "./Feature";
import { MarqueeDemo } from "../Testimonials";

const About = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]);
  const opacity = useTransform(scrollY, [0, 800], [0, 1]);
  return (
    <motion.div className=" w-full bg-custom-gradient">
      <motion.h1
        style={{ scale, opacity }}
        className="text-white font-semibold font-montserrat  py-10 text-3xl text-center"
      >
        Our Offerings ~
      </motion.h1>
      <FeaturesSectionDemo />
      <motion.h1
        style={{ scale, opacity }}
        className="text-white font-semibold font-montserrat  py-10 text-3xl text-center"
      >
        What Our Client's Think ~
      </motion.h1>
      <MarqueeDemo />
    </motion.div>
  );
};

export default About;
