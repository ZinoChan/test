import { motion } from "framer-motion";
import FAQCard from "./ui/FAQCard";
import { itemSlideUp, list, fadeIn } from "../../helpers/animation";
import ScrollReveal from "../home-page/ui/ScrollReveal";

const FAQ = () => {
  return (
    <section className="py-20">
      <ScrollReveal
        custom={0.6}
        variants={list}
        className="text-center mb-16 max-w-screen-md px-10 mx-auto"
      >
        <motion.h2
          variants={itemSlideUp}
          className="font-main text-3xl font-semibold mb-6 text-dark-blue"
        >
          FAQ
        </motion.h2>
        <motion.p
          variants={itemSlideUp}
          className="font-secondary font-light sm mb-6"
        >
          Qet all type of anwsers to any question you need to know or solution
          to any challenge you have been facing. Do well to consult them bellow.
        </motion.p>
      </ScrollReveal>
      <div className="max-w-screen xl md:px-10 px-4 mx-auto">
        <FAQCard
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit.?"
          answer=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend 
                    lacus proin ultrices ut tristique. Vitae phasellus mauris 
                    lectus pharetra dolor, hendrerit dictum
                    Orci fusce blandit  facilisis enim"
        />
        <FAQCard
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit.?"
          answer=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend 
                    lacus proin ultrices ut tristique. Vitae phasellus mauris 
                    lectus pharetra dolor, hendrerit dictum
                    Orci fusce blandit  facilisis enim"
        />
        <FAQCard
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit.?"
          answer=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend 
                    lacus proin ultrices ut tristique. Vitae phasellus mauris 
                    lectus pharetra dolor, hendrerit dictum
                    Orci fusce blandit  facilisis enim"
        />
        <FAQCard
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit.?"
          answer=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend 
                    lacus proin ultrices ut tristique. Vitae phasellus mauris 
                    lectus pharetra dolor, hendrerit dictum
                    Orci fusce blandit  facilisis enim"
        />
      </div>
    </section>
  );
};

export default FAQ;
