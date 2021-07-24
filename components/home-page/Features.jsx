import Title from "./ui/Title";
import Image from "next/image";
import work1 from "../../assets/home-page/work1.png";
import work2 from "../../assets/home-page/work2.png";
import work3 from "../../assets/home-page/work3.png";
import styles from "../../styles/home-page/features.module.css";
import { itemSlideUp, list, slideUp } from "../../helpers/animation";
import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";

const Features = () => {
  return (
    <section className="pb-40">
      <div className="max-w-screen-xl mx-auto md:px-10 px-2">
        <Title
          title="features"
          question="What do you gain working with Us?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci fusce blandit facilisis enim potenti vulputate quisque. Nunc suspendisse urna lobortis quisque pellentesque tempor, pellentesque tortor. Est, vitae volutpat ullamcorper enim."
        />

        <div className="grid lg:grid-cols-3 grid-cols-1  gap-12 items-start justify-center ">
          <ScrollReveal variants={slideUp} custom={0.3}>
            <div
              className={`bg-white p-6 rounded-md cursor-pointer ${styles.box}`}
            >
              <div className="text-center">
                <Image
                  src={work1}
                  width={120}
                  height={120}
                  alt="feature image"
                />
              </div>
              <h3 className="font-secondary font-semibold text-primary text-lg my-6 text-center">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="font-secondary font-light leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                fusce blandit facilisis enim potenti vulputate quisque. Nunc
                suspendisse urna lobortis quisque pellentesque tempor,
                pellentesque tortor. Est, vitae volutpat ullamcorper enim.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variants={slideUp} custom={0.5}>
            <div
              className={`bg-white mt-16 shadow-lg cursor-pointer rounded-md p-6 ${styles.box}`}
            >
              <div className="text-center">
                <Image
                  src={work2}
                  width={120}
                  height={120}
                  alt="feature image"
                />
              </div>
              <h3 className="font-secondary font-semibold text-primary text-lg my-6 text-center">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="font-secondary leading-relaxed font-light text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                fusce blandit facilisis enim potenti vulputate quisque. Nunc
                suspendisse urna lobortis quisque pellentesque tempor,
                pellentesque tortor. Est, vitae volutpat ullamcorper enim.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variants={slideUp} custom={0.9}>
            <div
              className={`bg-white mt-20 p-6 rounded-md cursor-pointer ${styles.box}`}
            >
              <div className="text-center">
                <Image
                  src={work3}
                  width={120}
                  height={120}
                  alt="feature image"
                />
              </div>
              <h3 className="font-secondary font-semibold text-primary text-lg my-6 text-center">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="font-secondary leading-relaxed font-light text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                fusce blandit facilisis enim potenti vulputate quisque. Nunc
                suspendisse urna lobortis quisque pellentesque tempor,
                pellentesque tortor. Est, vitae volutpat ullamcorper enim.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Features;
