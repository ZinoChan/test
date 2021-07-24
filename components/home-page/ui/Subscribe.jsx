import { slideUp } from "../../../helpers/animation";
import styles from "../../../styles/home-page/contact.module.css";
import ScrollReveal from "./ScrollReveal";

const Subscribe = () => {
  return (
    <ScrollReveal
      variants={slideUp}
      className={`text-center py-16 mb-20 md:px-8 px-2 rounded-lg ${styles.gradient}`}
    >
      <div className="max-w-screen-md px-2 mx-auto">
        <ScrollReveal variants={slideUp} custom={0.6}>
          <h2 className="font-secondary text-xl font-semibold text-dark-blue mb-4">
            Subscribe to the news-letter to recieve latest <br /> informtion
            about our services
          </h2>
        </ScrollReveal>
        <ScrollReveal variants={slideUp} custom={0.9}>
          <p className="font-secondary font-light text-dark-blue text-sm mb-6 max-w-screen-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend
            lacus proin ultrices ut tristique. Vitae phasellus mauris lectus
            pharetra dolor, hendrerit dictum
          </p>
        </ScrollReveal>
        <ScrollReveal variants={slideUp} custom={1.3}>
          <form action="" className="relative w-full">
            <div className="w-full">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email address for best offers"
                className="w-full rounded-full bg-white py-3 px-6 font-secondary text-black text-sm font-light"
              />
              <button
                className="absolute top-1/2 transform -translate-y-1/2 right-1 rounded-full font-semibold text-sm text-white font-secondary py-2 px-6"
                style={{ backgroundColor: "#FF0001" }}
              >
                Subscribe
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </ScrollReveal>
  );
};

export default Subscribe;
