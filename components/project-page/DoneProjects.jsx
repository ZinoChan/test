import ImgCard from "../home-page/ui/ImgCard";

import project3 from "../../assets/global/project3.jpg";
import project4 from "../../assets/global/project4.jpg";
import ScrollReveal from "../home-page/ui/ScrollReveal";
import { itemSlideUp, list, slideUp } from "../../helpers/animation";
import { motion } from "framer-motion";

const DoneProjects = () => {
  return (
    <section className="pb-36">
      <div className="bg-gray-50 py-20">
        <div className="max-w-screen-xl md:px-10 px-4 mx-auto">
          <div className="mb-16">
            <div
              className="w-max px-6 overflow-hidden rounded py-2"
              style={{ backgroundColor: "#F5E6CA" }}
            >
              <h3 className="text-primary font-main font-semibold">
                Projects done
              </h3>
            </div>
            <div
              className="px-8 overflow-hidden rounded py-10"
              style={{ backgroundColor: "#F5E6CA" }}
            >
              <ScrollReveal variants={slideUp}>
                <p className="font-secondary font-light text-sm max-w-lg mx-auto mb-6 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                  vitae sit congue venenatis hac Arcu vitae sit congue venenatis
                  hac
                </p>
              </ScrollReveal>
              <ScrollReveal
                variants={list}
                className="flex items-center flex-wrap justify-center space-x-4"
              >
                <motion.h4
                  variants={itemSlideUp}
                  className="font-secondary font-semibold underline text-lg capitalize"
                >
                  All project
                </motion.h4>
                <motion.h4
                  variants={itemSlideUp}
                  className="font-secondary font-light text-lg capitalize"
                >
                  Marketing project
                </motion.h4>
                <motion.h4
                  variants={itemSlideUp}
                  className="font-secondary font-light text-lg capitalize"
                >
                  programming project
                </motion.h4>
                <motion.h4
                  variants={itemSlideUp}
                  className="font-secondary font-light text-lg capitalize"
                >
                  other project
                </motion.h4>
              </ScrollReveal>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            <ImgCard img={project3} />
            <ImgCard img={project4} />
            <ImgCard img={project3} />
            <ImgCard img={project3} />
            <ImgCard img={project4} />
            <ImgCard img={project3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoneProjects;
