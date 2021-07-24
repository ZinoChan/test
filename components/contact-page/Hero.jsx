import { motion } from "framer-motion";
import Image from "next/image";
import contactImg from "../../assets/contact-page/contact-img.jpg";
import { itemSlideUp, list, fadeIn } from "../../helpers/animation";
import ContactForm from "../home-page/ui/ContactForm";
import ScrollReveal from "../home-page/ui/ScrollReveal";
import Subscribe from "../home-page/ui/Subscribe";

const Hero = () => {
  return (
    <section>
      <div className="bg-dark-blue md:h-96 h-56" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={0.3}
        className="mx-auto px-4 flex justify-center transform flex -translate-y-1/2"
      >
        <Image src={contactImg} width={680} height={390} alt="contact img" />
      </motion.div>
      <ScrollReveal
        custom={0.6}
        variants={list}
        className="pb-20 text-center max-w-screen-lg mx-auto"
      >
        <motion.h2
          variants={itemSlideUp}
          className="font-secondary font-semibold text-3xl mb-6"
        >
          Get In Touch With Us
        </motion.h2>
        <motion.p
          variants={itemSlideUp}
          className="font-secondary font-light text-sm mb-6"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci fusce
          blandit facilisis enim potenti vulputate quisque. Nunc suspendisse
          urna lobortis quisque pellentesque tempor, pellentesque
        </motion.p>
      </ScrollReveal>
      <div className="max-w-screen-xl md:px-10 px-4 mx-auto">
        <div className="mb-10">
          <ContactForm />
        </div>
        <Subscribe />
      </div>
    </section>
  );
};

export default Hero;
