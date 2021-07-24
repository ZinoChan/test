import { motion } from "framer-motion";
import { slideDown, slideUp } from "../../helpers/animation";
import styles from "../../styles/about-page/hero.module.css";

const Hero = () => {
  return (
    <section className="">
      <div className={`${styles.hero} h-60 w-full mb-16`}></div>
      <div className="max-w-screen-xl mx-auto md:px-10 px-4">
        <div className="max-w-lg mb-10 mx-auto text-center">
          <motion.h3
            initial="hidden"
            animate="visible"
            variants={slideDown}
            custom={0.3}
            className="font-secondary font-semibold text-dark-blue text-3xl mb-4"
          >
            Let’s go places
          </motion.h3>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={0.6}
            className="w-20 h-1 mx-auto bg-dark-blue"
          ></motion.div>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={0.9}
            className="font-secondary"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci fusce
            blandit facilisis enim potenti vulputate quisque. Nunc suspendisse
            urna lobortis quisque pellentesque tempor, pellentesque
          </motion.p>
        </div>
      </div>
      <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUp}
      custom={0.9}
       className="bg-gray-100 flex flex-wrap items-center justify-center ">
        <h4 className="font-secondary font-semibold text-lg py-4 px-8 border">
          Description
        </h4>
        <h4 className="font-secondary font-semibold text-lg py-4 px-8 border">
          Phylosophy in Practice
        </h4>
        <h4 className="font-secondary font-semibold text-lg py-4 px-8 border">
          Our History
        </h4>
        <h4 className="font-secondary font-semibold text-lg py-4 px-8 border">
          Our Leadership
        </h4>
        <h4 className="font-secondary font-semibold text-lg py-4 px-8 border">
          Our partners
        </h4>
      </motion.div>
    </section>
  );
};

export default Hero;
