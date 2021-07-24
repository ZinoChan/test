import Title from "./ui/Title";
import Image from "next/image";
import person from "../../assets/home-page/icons/person.svg";
import bag from "../../assets/home-page/icons/bag.svg";
import client from "../../assets/home-page/icons/client.svg";
import ScrollReveal from "./ui/ScrollReveal";
import { itemSlideUp, list } from "../../helpers/animation";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistics = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="pb-40 ">
      <div
        className="py-10"
        style={{ backgroundColor: "rgba(52, 63, 86, 0.02)" }}
      >
        <div className="max-w-screen-xl mx-auto md:px-10 px-2">
          <Title
            title="Success History"
            question="Do you know why we are the Best?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci fusce blandit facilisis enim potenti vulputate quisque. Nunc suspendisse urna lobortis quisque pellentesque tempor, pellentesque tortor. Est, vitae volutpat ullamcorper enim."
          />

          <ScrollReveal
            variants={list}
            className="flex items-center sm:flex-row sm:space-y-0 flex-col space-y-6 justify-center sm:space-x-6"
          >
            <motion.div variants={itemSlideUp}>
              <h4 className="font-main text-very-dark-blue mb-4">
                We are trusted by
              </h4>
              <div className="flex items-center space-x-2" ref={ref}>
                <Image src={person} width={30} height={30} alt="icon" />
                <span className="font-main font-semibold text-3xl text-dark-blue">
                  <CountUp start={0} duration={2} end={inView ? 5 : 0} />
                  K+
                </span>
              </div>
            </motion.div>
            <motion.div variants={itemSlideUp}>
              <h4 className="font-main text-very-dark-blue mb-4">
                Project realized
              </h4>
              <div className="flex items-center space-x-2" ref={ref}>
                <Image src={bag} width={30} height={30} alt="icon" />
                <span className="font-main font-semibold text-3xl text-dark-blue">
                  <CountUp start={0} duration={2} end={inView ? 200 : 0} />+
                </span>
              </div>
            </motion.div>
            <motion.div variants={itemSlideUp}>
              <h4 className="font-main text-very-dark-blue mb-4">
                Happy Clients
              </h4>
              <div className="flex items-center space-x-2" ref={ref}>
                <Image src={client} width={30} height={30} alt="icon" />
                <span className="font-main font-semibold text-3xl text-dark-blue">
                  <CountUp start={0} duration={2} end={inView ? 600 : 0} />+
                </span>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
