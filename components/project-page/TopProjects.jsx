import ImgCard from "../home-page/ui/ImgCard";
import project1 from "../../assets/global/project1.jpg";
import project2 from "../../assets/global/project2.jpg";
import project3 from "../../assets/global/project3.jpg";
import project4 from "../../assets/global/project4.jpg";
import styles from "../../styles/project-page/project.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ScrollReveal from "../home-page/ui/ScrollReveal";
import { fadeIn, slideUp } from "../../helpers/animation";

const TopProjects = () => {
  return (
    <section className="py-36">
      <div className="max-w-screen-xl mx-auto md:px-10 px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <ScrollReveal variants={slideUp} className="self-center">
            <h3 className="font-secondary font-semibold text-very-dark-blue text-2xl mb-4">
              Our Top and awarded Projects lately
            </h3>
            <p className="font-secondary font-light text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
              vitae sit congue venenatis hac
            </p>
            <button className="rounded-full bg-primary text-white p-4 flex items-center justify-center">
              <span className="w-4 h-4 inline-block">
                {" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          </ScrollReveal>

          <ImgCard custom={0.3} img={project1} />
          <ImgCard custom={0.6} img={project2} />
          <ImgCard custom={0.3} img={project3} />
          <ImgCard custom={0.6} img={project4} />
          <ImgCard custom={0.9} img={project3} />
        </div>
      </div>
      <ScrollReveal
        variants={fadeIn}
        className={`mt-20 ${styles.banner}`}
      ></ScrollReveal>
    </section>
  );
};

export default TopProjects;
