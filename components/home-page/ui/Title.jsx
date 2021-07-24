import { slideUp } from "../../../helpers/animation";
import ScrollReveal from "./ScrollReveal";

const Title = ({ title = "", question, text }) => {
  return (
    <div className="max-w-screen-md mx-auto md:px-10 px-2 text-center mb-8">
      <ScrollReveal variants={slideUp}>
        <h2 className="font-secondary text-xl text-primary capitalize mb-4">
          {title}
        </h2>
      </ScrollReveal>
      <ScrollReveal variants={slideUp} custom={0.3}>
        <h3 className="font-secondary text-very-dark-blue font-semibold mb-2">
          {question}
        </h3>
      </ScrollReveal>
      <ScrollReveal variants={slideUp} custom={0.6}>
        <p className="font-secondary font-light text-sm text-black">{text}</p>
      </ScrollReveal>
    </div>
  );
};

export default Title;
