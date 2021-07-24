import SubTitle from "./ui/SubTitle";
import aboutImg1 from "../../assets/about-page/about-img1.jpg";
import aboutImg2 from "../../assets/about-page/about-img2.jpg";
import aboutImg3 from "../../assets/about-page/about-img3.jpg";
import aboutImg4 from "../../assets/about-page/about-img4.jpg";
import Image from "next/image";
import ScrollReveal from "../home-page/ui/ScrollReveal";
import { slideToLeft, slideToRight, slideUp } from "../../helpers/animation";

const Info = () => {
  return (
    <section className="py-20">
      <div className="">
        <SubTitle title="description" />
        <div className="max-w-screen-lg mx-auto px-4 mb-10">
          <ScrollReveal variants={slideUp} className="mb-6">
            <Image src={aboutImg1} width={1000} height={500} alt="about img" />
          </ScrollReveal>
          <div>
            <ScrollReveal variants={slideUp}>
              <h3 className="font-secondary text-center font-semibold text-2xl text-dark-blue mb-4">
                What describr Us
              </h3>
            </ScrollReveal>
            <ScrollReveal variants={slideUp}>
              <p className="font-secondary font-sm leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum
                egestas eleifend lacus proin ultrices ut tristique. Vitae
                phasellus mauris lectus pharetra dolor, hendrerit dictum. Velit
                suscipit habitant laoreet aliquam viverra bibendum neque. Tortor
                scelerisque id ut egestas ac blandit. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ultrices aliquam sit
                vestibulum, duis nunc, velit. Bibendum egestas eleifend lacus
                proin ultrices ut tristique. Vitae phasellus mauris lectus
                pharetra dolor, hendrerit dictum. Velit suscipit habitant
                laoreet aliquam viverra bibendum neque. Tortor scelerisque id ut
                egestas ac blandit. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc,
                velit. Bibendum egestas eleifend lacus proin ultrices ut
                tristique. Vitae phasellus mauris lectus pharetra dolor,
                hendrerit dictum. Velit suscipit habitant laoreet aliquam
                viverra bibendum neque. Tortor scelerisque id ut egestas ac
                blandit.
              </p>
            </ScrollReveal>
          </div>
        </div>
        <div className="mb-10 py-10  bg-gray-100">
          <SubTitle title="phylosophy in Practice" />
          <div className="max-w-screen-lg mx-auto px-4 ">
            <ScrollReveal variants={slideUp} className="mb-6">
              <Image
                src={aboutImg2}
                width={1000}
                height={500}
                alt="about img"
              />
            </ScrollReveal>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
              <ScrollReveal variants={slideToRight} className="self-center">
                <h4 className="font-secondary mb-4 text-lg font-semibold capitalize py-2 border-b-2">
                  You are what drives Us
                </h4>
                <h4 className="font-secondary mb-4 text-lg font-semibold capitalize py-2 border-b-2">
                  Our Mission
                </h4>
                <h4 className="font-secondary mb-4 text-lg font-semibold capitalize py-2 border-b-2">
                  Giving Back
                </h4>
              </ScrollReveal>
              <ScrollReveal variants={slideToLeft} className="col-span-2">
                <h4 className="font-secondary mb-4 text-md">
                  <span>Our Purpose</span>
                  <span className="block w-16 bg-primary h-0.5"></span>
                </h4>
                <p className="font-secondary font-sm leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum
                  egestas eleifend lacus proin ultrices ut tristique. Vitae
                  phasellus mauris lectus pharetra dolor, hendrerit dictum.
                  Velit suscipit habitant laoreet aliquam viverra bibendum
                  neque. Tortor scelerisque id ut egestas ac blandit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
                  aliquam sit vestibulum, duis nunc, velit. Bibendum egestas
                  eleifend lacus proin ultrices ut tristique. Vitae phasellus
                  mauris lectus pharetra dolor, hendrerit dictum. Velit suscipit
                  habitant laoreet aliquam viverra bibendum neque.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto px-4 mb-10">
          <SubTitle title="Our History" />
          <ScrollReveal variants={slideUp} className="mb-6">
            <Image src={aboutImg3} width={1000} height={500} alt="about img" />
          </ScrollReveal>
          <SubTitle title="Where we’ve gone and where we’re going" />
          <ScrollReveal variants={slideUp} className="grid-cols 2 gap-4">
            <p className="font-secondary font-sm leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
              aliquam sit vestibulum, duis nunc, velit. Bibendum egestas
              eleifend lacus proin ultrices ut tristique. Vitae phasellus mauris
              lectus pharetra dolor, hendrerit dictum. Velit suscipit habitant
              laoreet aliquam viverra bibendum neque. Tortor scelerisque id ut
              egestas ac blandit. Lorem ipsum
            </p>
            <p className="font-secondary font-sm leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
              aliquam sit vestibulum, duis nunc, velit. Bibendum egestas
              eleifend lacus proin ultrices ut tristique. Vitae phasellus mauris
              lectus pharetra dolor, hendrerit dictum. Velit suscipit habitant
              laoreet aliquam viverra bibendum neque. Tortor scelerisque id ut
              egestas ac blandit. Lorem ipsum
            </p>
          </ScrollReveal>
        </div>
        <div className="py-20 mt-10 bg-gray-100">
          <div className="max-w-screen-lg mx-auto px-4">
            <SubTitle title="our leadership" />
            <ScrollReveal variants={slideUp} className="mb-6">
              <Image
                src={aboutImg4}
                width={1000}
                height={500}
                alt="about img"
              />
            </ScrollReveal>
            <SubTitle dark title="Meet the people who drive us forward" />
            <ScrollReveal variants={slideUp}>
              <p className="font-secondary font-sm leading-normal text-center">
                We build cars and trucks that help you and your family go places
                reliably and safely. And its our people who power those
                vehicles. Meet the team leaders who live and work in the
                communities where you do.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
