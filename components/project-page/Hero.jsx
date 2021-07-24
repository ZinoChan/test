import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "../../assets/project-page/hero-img.png";
import {
  fadeIn,
  slideDown,
  slideToLeft,
  slideUp,
} from "../../helpers/animation";
import Brands from "../ui/Brands";
import chat from "../../assets/project-page/chat.png";

const Hero = () => {
  return (
    <section className=" ">
      <div className="bg-dark-blue py-20">
        <div className="relative max-w-screen-xl md:px-10 px-4 mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            <div className="overflow-hidden">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={slideDown}
                custom={0.3}
                className="text-4xl text-white font-main font-semibold mb-6"
              >
                Achieve your goal with professionals or guarantee success
              </motion.h1>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={slideUp}
                custom={1.2}
                className="text-white font-secondary font-light text-md mb-6"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                vitae sit congue venenatis hac
              </motion.p>
              <motion.form
                initial="hidden"
                animate="visible"
                variants={slideUp}
                custom={1.2}
                action=""
              >
                <div className="relative flex ">
                  <input
                    type="text"
                    className="bg-white lg:w-96 md:w-56 w-full rounded-sm py-2"
                  />
                  <button className="rounded-sm py-2 px-4 bg-primary text-sm text-white">
                    <span className="w-6 h-6 inline-block">
                      {" "}
                      <FontAwesomeIcon icon={faSearch} />
                    </span>
                  </button>
                </div>
              </motion.form>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideToLeft}
              custom={0.3}
              className="overflow-hidden"
            >
              <Image src={heroImg} width={500} height={665} alt="hero img" />
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.3}
            className="absolute md:-bottom-10  -bottom-16"
          >
            <Image src={chat} width={190} height={105} alt="chat img" />
          </motion.div>
        </div>
      </div>
      <Brands />
    </section>
  );
};

export default Hero;
