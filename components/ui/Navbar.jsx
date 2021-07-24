import { useRouter } from "next/router";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import styles from "../../styles/ui/navbar.module.css";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { slideDown } from "../../helpers/animation";
import { motion } from "framer-motion";

const Navbar = ({ light = false, primary=false, cta = false, navCenter = false }) => {
  const router = useRouter();

  const [isOpen, setOpen] = useState(false);

  const routes = [
    { name: "home", route: "/" },
    { name: "about", route: "/about" },
    { name: "projects", route: "/projects" },
    { name: "contact", route: "/contact" },
    { name: "privacy", route: "/privacy" },
  ];

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={slideDown}
      custom={0.9}
      className="absolute top-0 z-40 w-full py-4"
    >
      <nav
        className={`flex items-center justify-between max-w-screen-xl mx-auto px-10`}
      >
        <div className="relative z-40">
          <h1 className={`font-main font-bold  text-2xl ${isOpen ? 'text-white' : 'text-primary'}`}>Logo</h1>
        </div>
        <div className="md:hidden absolute right-4 top-3 z-40">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color={isOpen ? "#fff" : "#FF5C00"}
          />
        </div>
        <ul
          className={`md:flex hidden items-center space-x-4  ${
            navCenter ? "justify-self-center" : "justify-self-end"
          } ${
            light ? "text-white" : primary ? 'text-primary' : "text-black"
          } `}
        >
          {routes.map(({ name, route }, index) => (
            <li key={`${name}-${index}}`}>
              <Link href={route}>
                <a
                  className={`${
                    styles.navLink
                  } relative text-lg cursor-pointer capitalize font-secondary ${
                    router.pathname === route ? styles.active : ""
                  }`}
                >
                  {name}
                </a>
              </Link>
            </li>
          ))}

          {cta && (
            <Link href="/signup">
              <a className="text-sm bg-primary rounded-full font-semibold px-6 py-2 text-white font-secondary">
                Enroll
              </a>
            </Link>
          )}
        </ul>
        <ul
          className={`${
            isOpen ? "max-h-screen" : "max-h-0"
          } transition-all duration-300 overflow-hidden flex md:hidden flex-col absolute top-0 right-0 w-screen bg-primary items-center text-white z-30 space-y-6 justify-center  h-screen`}
        >
          {routes.map(({ name, route }, index) => (
            <li key={`${name}-${index}}`}>
              <Link href={route}>
                <a
                  onClick={() => setOpen(false)}
                  className={`${
                    styles.navLinkMobile
                  } relative text-lg cursor-pointer capitalize font-secondary ${
                    router.pathname === route ? styles.active : ""
                  }`}
                >
                  {name}
                </a>
              </Link>
            </li>
          ))}
          <Link href="/signup">
            <a
            onClick={() => setOpen(false)}
            className="text-sm bg-white rounded-full font-semibold px-6 py-2 text-primary font-secondary">
              Enroll
            </a>
          </Link>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
