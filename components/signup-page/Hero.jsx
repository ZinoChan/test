import styles from "../../styles/signup-page/hero.module.css";
import img3d1 from "../../assets/global/3d1.png";
import img3d2 from "../../assets/global/3d2.png";
import Image from "next/image";
import { slideDown, slideToLeft, slideToRight } from "../../helpers/animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className={`lg:py-32 py-20 grid grid-cols-4 ${styles.hero}`}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideToRight}
        custom={0.6}
      >
        <Image src={img3d1} width={270} height={310} alt="Sign up" />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideDown}
        custom={0.3}
        className=" col-span-2 self-end text-center "
      >
        <h1 className="font-main font-semibold lg:text-7xl text-4xl capitalize text-white">
          Sign Up
        </h1>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideToLeft}
        custom={0.3}
        className="justify-self-end"
      >
        <Image src={img3d2} width={270} height={310} alt="Sign up" />
      </motion.div>
    </section>
  );
};

export default Hero;
