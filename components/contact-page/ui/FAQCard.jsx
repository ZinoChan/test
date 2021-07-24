import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { slideUp } from "../../../helpers/animation";
import ScrollReveal from "../../home-page/ui/ScrollReveal";

const FAQ = ({ question, answer }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <ScrollReveal
      variants={slideUp}
      className="max-w-screen-lg mx-auto bg-gray-200 p-4 mb-6 rounded-sm"
    >
      <div className="flex items-center justify-between">
        <p className="font-secondary font-light text-md">{question}</p>
        <button onClick={() => setOpen(!isOpen)}>
          <span className="inline-block h-8 w-8 text-dark-blue">
            <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
          </span>
        </button>
      </div>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="font-secondary text-left leading-relaxed text-md">
          {answer}
        </p>
      </div>
    </ScrollReveal>
  );
};

export default FAQ;
