import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import formImg from "../../../assets/home-page/form-img.jpg";
import {
  fadeIn,
  itemSlideRight,
  list,
  slideDown,
  slideUp,
} from "../../../helpers/animation";
import ScrollReveal from "./ScrollReveal";

const ContactForm = () => {
  const [width, setWidth] = useState(250);
  const [height, setheight] = useState(360);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 768) {
        setWidth(160);
        setheight(190);
      }
    }
  }, []);

  return (
    <div
      className="relative lg:mt-0 mt-32 py-8 md:px-10 px-2  rounded-md max-w-screen-md mx-auto"
      style={{ backgroundColor: "#eee" }}
    >
      <ScrollReveal
        variants={fadeIn}
        className="lg:absolute lg:top-1/2 xl:-right-40 lg:-right-20 rounded-md transform text-center -translate-y-1/2"
      >
        <Image src={formImg} width={width} height={height} alt="form image" />
      </ScrollReveal>
      <ScrollReveal variants={slideDown} custom={0.6}>
        <h3 className="font-secondary font-semibold mb-6">Contact Form</h3>
      </ScrollReveal>

      <form action="" className="max-w-lg overflow-hidden">
        <ScrollReveal variants={list} className="mb-4">
          <motion.label
            variants={itemSlideRight}
            htmlFor="Name"
            className="block mb-2 font-secondary text-sm"
          >
            Name
          </motion.label>
          <motion.div variants={itemSlideRight}>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-white rounded-sm py-3 px-3 w-full"
            />
          </motion.div>
        </ScrollReveal>
        <ScrollReveal variants={list} className="mb-4">
          <motion.label
            variants={itemSlideRight}
            htmlFor="Email"
            className="block mb-2 font-secondary text-sm"
          >
            Email Adress
          </motion.label>
          <motion.div variants={itemSlideRight}>
            <input
              type="emain"
              name="name"
              id="name"
              className="bg-white rounded-sm py-3 px-3 w-full"
            />
          </motion.div>
        </ScrollReveal>
        <ScrollReveal variants={list} className="mb-4">
          <motion.label
            variants={itemSlideRight}
            htmlFor="message"
            className="block mb-2 font-secondary text-sm"
          >
            Mesage
          </motion.label>
          <motion.div variants={itemSlideRight}>
            <textarea
              name="message"
              id="message"
              rows="8"
              className="bg-white rounded-sm py-3 px-3 w-full"
            ></textarea>
          </motion.div>
        </ScrollReveal>
        <ScrollReveal variants={slideUp}>
          <button
            type="submit"
            className="rounded-full font-main font-semibold bg-white px-6 py-2"
          >
            Send
          </button>
        </ScrollReveal>
      </form>
    </div>
  );
};

export default ContactForm;
