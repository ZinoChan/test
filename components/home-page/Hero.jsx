import Image from "next/image";
import heroImg from "../../assets/home-page/hero-img.png";
import manage from "../../assets/home-page/icons/manage.svg";
import learning from "../../assets/home-page/icons/learning.svg";
import marketing from "../../assets/home-page/icons/marketing.svg";
import code from "../../assets/home-page/icons/code.svg";
import Brands from "../ui/Brands";
import { motion } from "framer-motion";
import {
  itemSlideLeft,
  list,
  slideDown,
  slideToLeft,
  slideUp,
} from "../../helpers/animation";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="lg:py-0 py-20 flex justify-center items-center">
      <div>
        <div className="max-w-screen-xl mx-auto md:px-10 px-2 ">
          <div className="grid lg:grid-cols-3 grid-cols-1 items-center">
            <div className="overflow-hidden">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={slideDown}
                custom={0.3}
                className="text-4xl text-very-dark-blue font-main font-semibold mb-6"
              >
                Empower your <span className="text-primary">Buisness</span>,
                Skill, Education and Project with{" "}
                <span className="text-primary">professionals</span>
              </motion.h1>
              <div className="md:block hidden">
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={slideUp}
                  custom={0.6}
                  className="text-black font-secondary text-md mb-6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                  vitae sit congue venenatis hac viverra imperdiet viverra
                  volutpat.
                </motion.p>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={slideUp}
                  custom={0.9}
                  className="flex space-x-4"
                >
                  <button className="py-2  px-6 font-main font-semibold bg-primary text-white rounded-full">
                    <Link href="/signup">
                      <a>Enroll Now</a>
                    </Link>
                  </button>
                  <button className="py-2 px-6 font-main hover:text-primary font-semibold  border border-primary  text-black rounded-full">
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </button>
                </motion.div>
              </div>
            </div>
            <div className="flex justify-end md:col-span-2 md:mb-0 mb-10">
              <div className="flex relative">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={list}
                  custom={0.9}
                  className="md:absolute -left-48 top-40 z-20 flex flex-col md:space-y-16 space-y-4 md:justify-between justify-center"
                >
                  <motion.div
                    variants={itemSlideLeft}
                    className="flex flex-col items-start md:space-y-6 space-y-2"
                  >
                    <button className="ml-6 py-3 px-6 flex items-center justify-center  font-main font-semibold bg-white text-black shadow-lg rounded-full">
                      <Image src={manage} width={30} height={30} alt="icon" />
                      <span className="ml-4">Management</span>
                    </button>
                    <button className="py-3 px-6 flex items-center justify-center font-main font-semibold bg-white text-black shadow-lg rounded-full">
                      <Image src={learning} width={30} height={30} alt="icon" />
                      <span className="ml-4">Learning</span>
                    </button>
                  </motion.div>
                  <motion.div
                    variants={itemSlideLeft}
                    className="flex flex-col items-start md:space-y-6 space-y-2"
                  >
                    <button className="ml-6 py-3 px-6 flex items-center justify-center font-main font-semibold bg-white text-black shadow-lg rounded-full">
                      <Image
                        src={marketing}
                        width={30}
                        height={30}
                        alt="icon"
                      />
                      <span className="ml-4">Marketing</span>
                    </button>
                    <button className="ml-8 py-3 px-6 flex items-center justify-center font-main font-semibold bg-white text-black shadow-lg rounded-full">
                      <Image src={code} width={30} height={30} alt="icon" />
                      <span className="ml-4">Programming</span>
                    </button>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={slideToLeft}
                  custom={0.3}
                >
                  <Image
                    width={466}
                    height={697}
                    src={heroImg}
                    alt="hero img"
                  />
                </motion.div>
              </div>
            </div>
            <div className="md:hidden mb-10">
              <motion.p
                initial="hidden"
                animate="visible"
                variants={slideUp}
                custom={0.6}
                className="text-black font-secondary text-md mb-6"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                vitae sit congue venenatis hac viverra imperdiet viverra
                volutpat.
              </motion.p>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideUp}
                custom={0.9}
                className="flex space-x-4"
              >
                <button className="py-2  px-6 font-main font-semibold bg-primary text-white rounded-full">
                  <Link href="/signup">
                    <a>Enroll Now</a>
                  </Link>
                </button>
                <button className="py-2 px-6 font-main hover:text-primary font-semibold  border border-primary  text-black rounded-full">
                  <Link href="/contact">
                    <a>Contact Us</a>
                  </Link>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
        <Brands />
      </div>
    </section>
  );
};

export default Hero;
