import React from "react";
import Title from "./ui/Title";
import styles from "../../styles/home-page/service.module.css";
import SilckSlider from "./ui/Slider";
import ScrollReveal from "./ui/ScrollReveal";
import { slideUp } from "../../helpers/animation";

const Service = () => {
  return (
    <section className="py-28">
      <div>
        <div className="max-w-screen-xl mx-auto md:px-10 px-2">
          <Title
            title="Our Services"
            question="What are the best offers we have for you?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat interdum dolor enim justo."
          />
          <ScrollReveal variants={slideUp} custom={0.6}>
            <div
              className="rounded-md border-8"
              style={{ borderColor: "#fee9c1" }}
            >
              <div
                className={`flex w-max mx-auto space-x-4 items-center justify-center ${styles.polygon} mb-6`}
              >
                <h4 className="font-secondary font-semibold text-very-dark-blue underline text-md capitalize">
                  Marketing
                </h4>
                <h4 className="font-secondary  text-md capitalize">
                  Educations
                </h4>
                <h4 className="font-secondary  text-md capitalize">Others</h4>
              </div>
              <div className=" px-6 py-12 ">
                <SilckSlider arrows={true}>
                  <div className="text-center px-2">
                    <h3 className="text-2xl font-secondary font-semibold text-very-dark-blue mb-4">
                      Seo
                    </h3>
                    <p className="text-gray-600 lg:text-left text-center font-secondary text-sm mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Viverra neque, augue morbi ullamcorper enim urna nam
                      pharetra. Euismod vivamus sit bibendum accumsan, non at.
                      Vitae vitae leo imperdiet tristique fermentum.
                    </p>
                    <button className="font-secondary font-semibold text-white px-6 py-1 text-md bg-primary rounded-full">
                      Learn more
                    </button>
                  </div>
                  <div className="text-center px-2">
                    <h3 className="text-2xl font-secondary font-semibold text-very-dark-blue mb-4">
                      Email marketing
                    </h3>
                    <p className="text-gray-600 lg:text-left text-center font-secondary text-sm mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Viverra neque, augue morbi ullamcorper enim urna nam
                      pharetra. Euismod vivamus sit bibendum accumsan, non at.
                      Vitae vitae leo imperdiet tristique fermentum.
                    </p>
                    <button className="font-secondary font-semibold text-white px-6 py-1 text-md bg-primary rounded-full">
                      Learn more
                    </button>
                  </div>
                  <div className="text-center px-2">
                    <h3 className="text-2xl font-secondary font-semibold text-very-dark-blue mb-4">
                      Paid Media Advertising
                    </h3>
                    <p className="text-gray-600 lg:text-left text-center font-secondary text-sm mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Viverra neque, augue morbi ullamcorper enim urna nam
                      pharetra. Euismod vivamus sit bibendum accumsan, non at.
                      Vitae vitae leo imperdiet tristique fermentum.
                    </p>
                    <button className="font-secondary font-semibold text-white px-6 py-1 text-md bg-primary rounded-full">
                      Learn more
                    </button>
                  </div>
                </SilckSlider>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Service;
