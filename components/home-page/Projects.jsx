import ImgCard from "./ui/ImgCard";
import Title from "./ui/Title";
import project1 from "../../assets/global/project1.jpg";
import project2 from "../../assets/global/project2.jpg";
import project3 from "../../assets/global/project3.jpg";
import Image from "next/image";
import about from "../../assets/home-page/aboutus.jpg";
import styles from "../../styles/home-page/projects.module.css";
import SilckSlider from "./ui/Slider";
import ScrollReveal from "./ui/ScrollReveal";
import {
  itemSlideUp,
  slideToRight,
  slideUp,
  list,
} from "../../helpers/animation";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="pb-40 ">
      <Title
        title="Our Project"
        question="We are your Best choice, now and ever"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci fusce blandit facilisis enim potenti vulputate quisque. Nunc suspendisse urna lobortis quisque pellentesque tempor, pellentesque tortor. Est, vitae volutpat ullamcorper enim."
      />
      <div className="py-16 sm:px-10 px-2 bg-dark-blue">
        <ScrollReveal
          variants={slideUp}
          className="max-w-screen-xl mx-auto md:px-10 px-2"
        >
          <SilckSlider dots={true}>
            <div className="lg:px-4 px-2">
              <ImgCard img={project1} />
            </div>
            <div className="lg:px-4 px-2">
              <ImgCard img={project3} />
            </div>
            <div className="lg:px-4 px-2">
              <ImgCard img={project2} />
            </div>
            <div className="lg:px-4 px-2">
              <ImgCard img={project3} />
            </div>
          </SilckSlider>
        </ScrollReveal>
      </div>
      <div className="max-wscreen-xl mx-auto md:px-10 px-2">
        <div className="pt-20 grid lg:grid-cols-2 grid-cols-1 justify-center gap-8">
          <div className="lg:hidden">
            <h4 className="font-secondary font-light text-sm mb-4">About Us</h4>
            <h3 className="font-main font-semibold text-2xl mb-4">
              Who are we and what we do?
            </h3>
          </div>
          <ScrollReveal
            variants={slideToRight}
            custom={0.3}
            className={`${styles.about} relative w-max md:px-0 px-6 justify-self-center`}
          >
            <Image src={about} width={495} height={350} alt="about us" />
          </ScrollReveal>
          <ScrollReveal variants={list} custom={0.6} className="self-center">
            <motion.div variants={itemSlideUp} className="lg:block hidden">
              <h4 className="font-secondary font-light text-sm mb-4">
                About Us
              </h4>
              <h3 className="font-main font-semibold text-2xl mb-4">
                Who are we and what we do?
              </h3>
            </motion.div>
            <motion.p
              variants={itemSlideUp}
              className="font-secondary font-light text-sm mb-6"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
              aliquam sit vestibulum, duis nunc, velit. Bibendum egestas
              eleifend lacus proin ultrices ut tristique. Vitae phasellus mauris
              lectus pharetra dolor, hendrerit dictum. Velit suscipit habitant
              laoreet aliquam viverra bibendum neque. Tortor scelerisque id ut
              egestas ac blandit.
            </motion.p>
            <motion.button
              variants={itemSlideUp}
              className="rounded-lg bg-primary text-white fontmain capitalize px-8 py-2"
            >
              read more
            </motion.button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;
