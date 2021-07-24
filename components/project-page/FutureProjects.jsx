import Image from "next/image";
import project5 from "../../assets/project-page/project5.jpg";
import project6 from "../../assets/project-page/project6.jpg";
import {
  slideToLeft,
  slideToRight,
  slideUp,
} from "../../helpers/animation";
import ScrollReveal from "../home-page/ui/ScrollReveal";

const FutureProjects = () => {
  return (
    <section className="pb-36">
      <div className="max-w-screen-xl mx-auto md:px-10 px-4">
        <ScrollReveal
          variants={slideUp}
          className="max-w-screen-md mx-auto  mb-6 text-center"
        >
          <h3 className="font-main font-semibold text-2xl mb-4">
            Up Coming Projects
          </h3>

          <p className="font-secondary font-light text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu vitae
            sit congue venenatis hac Arcu vitae sit congue venenatis hac
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 grid-cols-1 overflow-hidden gap-12">
          <ScrollReveal variants={slideToRight}>
            <Image src={project5} width={600} height={590} alt="card img" />
          </ScrollReveal>
          <ScrollReveal className="self-center" variants={slideToLeft}>
            <h4 className="font-secondary text-center font-semibold text-2xl mb-4">
              Project Title
            </h4>

            <p className="font-secondary font-light text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
              aliquam sit vestibulum, duis nunc, velit. Bibendum egestas
              eleifend lacus proin ultrices ut tristique. Vitae phasellus mauris
              lectus pharetra dolor, hendrerit dictum. Velit suscipit habitant
              laoreet aliquam viverra bibendum neque. Tortor scelerisque id ut
              egestas ac blandit. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc,
              velit. Bibendum egestas eleifend lacus proin ultrices ut
              tristique. Vitae phasellus mauris lectus pharetra dolor, hendrerit
              dictum. Velit suscipit habitant laoreet aliquam viverra bibendum
              neque. Tortor scelerisque id ut egestas ac blandit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit
              vestibulum, duis nunc, velit. Bibendum egestas eleifend lacus
              proin ultrices ut tristique. Vitae phasellus mauris lectus
              pharetra dolor, hendrerit dictum. Velit suscipit habitant laoreet
              aliquam viverra bibendum neque. Tortor scelerisque id ut egestas
              ac blandit.
            </p>
          </ScrollReveal>

          <ScrollReveal
            variants={slideToRight}
            className="self-center md:order-3 order-4"
          >
            <h4 className="font-secondary text-center font-semibold text-2xl mb-4">
              Project Title
            </h4>
            <p className="font-secondary font-light text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
              aliquam sit vestibulum, duis nunc, velit. Bibendum egestas
              eleifend lacus proin ultrices ut tristique. Vitae phasellus mauris
              lectus pharetra dolor, hendrerit dictum. Velit suscipit habitant
              laoreet aliquam viverra bibendum neque. Tortor scelerisque id ut
              egestas ac blandit. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc,
              velit. Bibendum egestas eleifend lacus proin ultrices ut
              tristique. Vitae phasellus mauris lectus pharetra dolor, hendrerit
              dictum. Velit suscipit habitant laoreet aliquam viverra bibendum
              neque. Tortor scelerisque id ut egestas ac blandit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit
              vestibulum, duis nunc, velit. Bibendum egestas eleifend lacus
              proin ultrices ut tristique. Vitae phasellus mauris lectus
              pharetra dolor, hendrerit dictum. Velit suscipit habitant laoreet
              aliquam viverra bibendum neque. Tortor scelerisque id ut egestas
              ac blandit.
            </p>
          </ScrollReveal>
          <ScrollReveal variants={slideToLeft} className="md:order-4 order-3">
            <Image src={project6} width={600} height={590} alt="card img" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FutureProjects;
