import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import { list, slideUp } from "../../helpers/animation";
import ScrollReveal from "../home-page/ui/ScrollReveal";


const Footer = () => {
  return (
    <section className="bg-dark-blue text-white py-20">
      <div className="max-w-screen-xl md:px-10 px-4 mx-auto">
        <ScrollReveal variants={list} className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          <motion.div variants={slideUp}>
            <h3 className="font-main font-bold capitalize text-3xl mb-2">
              Adress
            </h3>
            <h3 className="font-main font-bold text-3xl capitalize mb-4">
              company name
            </h3>
            <p className="font-secondary font-light flex space-x-2 items-center mb-3 text-lg">
              <span className="inline-block w-4 h-4">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span>+977-981234567</span>
            </p>
            <p className="font-secondary font-light flex space-x-2 items-center mb-3 text-lg">
              <span className="inline-block w-4 h-4">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span>Sales@mycompany.com</span>
            </p>
            <p className="font-secondary font-light flex space-x-2 items-center mb-3 text-lg">
              <span className="inline-block w-4 h-4">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span>technical@myconpany.com</span>
            </p>
          </motion.div>
          <motion.div variants={slideUp}>
            <h3 className="font-main font-bold capitalize text-3xl mb-4">
              Our Services
            </h3>
            <h4 className="font-secondary  text-xl mb-2">Marketing</h4>
            <h4 className="font-secondary text-xl mb-2">Education</h4>
            <h4 className="font-secondary text-xl mb-2">System development</h4>
            <h4 className="font-secondary text-xl mb-2">Merge & Acquisition</h4>
          </motion.div>
          <motion.div variants={slideUp}>
            <h3 className="font-main font-bold capitalize text-3xl mb-4">
              Links
            </h3>
            <h4 className="font-secondary  text-xl mb-2">Projects</h4>
            <h4 className="font-secondary  text-xl mb-2">Our Team</h4>
            <h4 className="font-secondary  text-xl mb-2">Our Service</h4>
            <h4 className="font-secondary  text-xl mb-2">Blog</h4>
          </motion.div>
          <motion.div variants={slideUp}>
            <h3
              className="font-main font-bold font-bold capitalize text-3xl mb-4
            "
            >
              Town (Head Office)
            </h3>
            <p className="font-secondary font-light flex space-x-2 items-center mb-3 text-lg">
              <span className="inline-block w-4 h-4">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span>+977-981234567</span>
            </p>
            <p className="font-secondary font-light flex space-x-2 items-center mb-3 text-lg">
              <span className="inline-block w-6 h-6">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <span>760 Market Street, floor 10 San Francisco, CA, 94102</span>
            </p>
          </motion.div>
        </ScrollReveal>
        <ScrollReveal variants={slideUp} className="mt-10">
          <h3 className="font-main font-bold text-xl capitalize mb-4">
            Social Media
          </h3>
          <div className="flex space-x-4 ">
            <span className="inline-block w-4 h-4">
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
            <span className="inline-block w-6 h-6">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="inline-block w-6 h-8">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span className="inline-block w-6 h-6">
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal variants={slideUp} className="text-center mt-8">
          <p className="font-secondary font-light text-white text-lg">
            copyright, company@2021
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Footer;
