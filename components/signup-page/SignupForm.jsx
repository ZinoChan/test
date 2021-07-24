import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import signImg from "../../assets/signup-page/signup-img.png";
import flag from "../../assets/signup-page/icons/flag.svg";
import ScrollReveal from "../home-page/ui/ScrollReveal";
import { fadeIn, list, slideUp } from "../../helpers/animation";

const SignupForm = () => {
  return (
    <section className="py-28 md:px-10 px-4">
      <div className="max-w-screen-lg mx-auto bg-white shadow-xl rounded-lg">
        <ScrollReveal variants={fadeIn} className="lg:w-max mx-auto">
          <Image src={signImg} width={630} height={540} alt="Sign up" />
        </ScrollReveal>
        <form
          action=""
          className="overflow-hidden max-w-2xl mx-auto px-10 pt-6 pb-20"
        >
          <ScrollReveal
            variants={slideUp}
            className="grid sm:grid-cols-4 grid-cols-1   gap-6 items-center mb-4"
          >
            <label htmlFor="Name" className="font-secondary text-sm">
              Name
            </label>
            <input
              type="text"
              className="focus:outline-none px-3 rounded-full py-2 bg-gray-100 col-span-3 w-full"
            />
          </ScrollReveal>
          <ScrollReveal
            variants={slideUp}
            className="grid sm:grid-cols-4 grid-cols-1  gap-6 items-center mb-4"
          >
            <label htmlFor="Surname" className="font-secondary text-sm">
              Surame
            </label>
            <input
              type="text"
              className="focus:outline-none px-3 rounded-full py-2 bg-gray-100 col-span-3 w-full"
            />
          </ScrollReveal>
          <ScrollReveal
            variants={slideUp}
            className="grid sm:grid-cols-4 grid-cols-1  gap-6 items-center mb-4"
          >
            <label htmlFor="Email" className="font-secondary text-sm">
              Email
            </label>
            <input
              type="email"
              className="focus:outline-none px-3 rounded-full py-2 bg-gray-100 col-span-3 w-full"
            />
          </ScrollReveal>
          <ScrollReveal
            variants={slideUp}
            className="grid sm:grid-cols-4 grid-cols-1  gap-6 items-center mb-4"
          >
            <label htmlFor="Birth date" className="font-secondary text-sm">
              Birth date
            </label>
            <input
              type="date"
              className="focus:outline-none px-3 rounded-full py-2 bg-gray-100 col-span-3 w-full"
            />
          </ScrollReveal>
          <ScrollReveal
            variants={slideUp}
            className="grid sm:grid-cols-4 grid-cols-1  gap-6 items-center mb-4"
          >
            <label htmlFor="country" className="font-secondary text-sm">
              Country
            </label>
            <div className="relative m-max h-max">
              <div className="absolute flex items-center top-1/2 left-2 transform -translate-y-1/2">
                <Image src={flag} height={26} width={26} alt="flag" />
              </div>
              <span className="inline-block w-4 h-4 absolute top-1/2 right-2 transform -translate-y-1/2">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
              <input
                type="text"
                className="focus:outline-none px-3 rounded-full py-2 bg-gray-100 w-full"
              />
            </div>
            <label
              htmlFor="country"
              className="font-secondary text-sm sm:justify-self-center"
            >
              Postal code
            </label>
            <input
              type="text"
              className="focus:outline-none px-3 rounded-full py-2 bg-gray-100 w-full"
            />
          </ScrollReveal>
          <ScrollReveal
            variants={slideUp}
            className="grid sm:grid-cols-4 grid-cols-1  gap-6 items-center mb-4"
          >
            <label htmlFor="City" className="font-secondary text-sm">
              City
            </label>
            <input
              type="text"
              className="focus:outline-none px-3 rounded-full py-2 bg-gray-100 col-span-3 w-full"
            />
          </ScrollReveal>
          <ScrollReveal
            variants={slideUp}
            className="grid sm:grid-cols-4 grid-cols-1  gap-6 items-center mb-4"
          >
            <label htmlFor="Phone" className="font-secondary text-sm">
              Phone number
            </label>
            <input
              type="phone"
              className="focus:outline-none px-3 rounded-full py-2 bg-gray-100 col-span-3 w-full"
            />
          </ScrollReveal>
          <ScrollReveal
            variants={slideUp}
            className="grid sm:grid-cols-4 grid-cols-1  gap-6 items-center mb-4"
          >
            <label htmlFor="password" className="font-secondary text-sm">
              Password
            </label>
            <input
              type="password"
              className="focus:outline-none px-3 rounded-full py-2 bg-gray-100 col-span-3 w-full"
            />
          </ScrollReveal>
          <ScrollReveal
            variants={slideUp}
            className="grid sm:grid-cols-4 grid-cols-1  gap-6 items-center mb-6"
          >
            <label
              htmlFor="confirm password"
              className="font-secondary text-sm"
            >
              Confirm password
            </label>
            <input
              type="password"
              className="focus:outline-none px-3 rounded-full py-2 bg-gray-100 col-span-3 w-full"
            />
          </ScrollReveal>
          <ScrollReveal variants={slideUp} className="text-right ">
            <button
              className="font-secondary font-semibold rounded-full text-white px-6 py-2"
              style={{ backgroundColor: "#517BCB" }}
            >
              Validate
            </button>
          </ScrollReveal>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
