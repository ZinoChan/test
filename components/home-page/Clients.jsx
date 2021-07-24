import Image from "next/image";
import Title from "./ui/Title";
import map from "../../assets/home-page/map.png";
import client1 from "../../assets/home-page/clients/client1.png";
import client2 from "../../assets/home-page/clients/client2.png";
import client3 from "../../assets/home-page/clients/client3.png";
import client4 from "../../assets/home-page/clients/client4.png";
import client5 from "../../assets/home-page/clients/client5.png";
import client6 from "../../assets/home-page/clients/client6.png";
import client7 from "../../assets/home-page/clients/client7.png";
import client8 from "../../assets/home-page/clients/client8.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "../../styles/home-page/client.module.css";

const Clients = () => {
  const [width, setWidth] = useState(60);
  const [height, setheight] = useState(60);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 768) {
        setWidth(30);
        setheight(30);
      }
    }
  }, []);

  return (
    <section className="pb-20 ">
      <Title
        title=""
        question="What our clients say about us?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat interdum dolor enim justo."
      />
      <div className="relative mx-auto h-max-w-max text-center">
        <Image src={map} width={1440} height={970} alt="map" />
        <motion.div
          whileHover={{ scale: 1.7 }}
          className={`absolute ${styles.client}`}
          style={{ left: "30%", top: "70%" }}
        >
          <Image src={client1} width={width} height={height} alt="client" />
          <div
            className={`bg-white shadow-lg relative z-20  rounded-lg opacity-0 mt-6 transition-all duration-300 w-52 ${styles.clientBox}`}
          >
            <p className="font-secondary text-sm font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur pariatur necessitatibus.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.7 }}
          className={`absolute ${styles.client}`}
          style={{ right: "20%", top: "60%" }}
        >
          <Image src={client2} width={width} height={height} alt="client" />
          <div
            className={`bg-white shadow-lg relative z-20  rounded-lg opacity-0 mt-6 transition-all duration-300 w-52 ${styles.clientBox}`}
          >
            <p className="font-secondary text-sm font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur pariatur necessitatibus.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.7 }}
          className={`absolute ${styles.client}`}
          style={{ left: "20%", top: "40%" }}
        >
          <Image src={client3} width={width} height={height} alt="client" />
          <div
            className={`bg-white shadow-lg relative z-20  rounded-lg opacity-0 mt-6 transition-all duration-300 w-52 ${styles.clientBox}`}
          >
            <p className="font-secondary text-sm font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur pariatur necessitatibus.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.7 }}
          className={`absolute ${styles.client}`}
          style={{ left: "50%", bottom: "20%" }}
        >
          <Image src={client4} width={width} height={height} alt="client" />
          <div
            className={`bg-white shadow-lg relative z-20  rounded-lg opacity-0 mt-6 transition-all duration-300 w-52 ${styles.clientBox}`}
          >
            <p className="font-secondary text-sm font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur pariatur necessitatibus.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.7 }}
          className={`absolute ${styles.client} top-1/2 right-1/2`}
        >
          <Image src={client5} width={width} height={height} alt="client" />
          <div
            className={`bg-white shadow-lg relative z-20  rounded-lg opacity-0 mt-6 transition-all duration-300 w-52 ${styles.clientBox}`}
          >
            <p className="font-secondary text-sm font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur pariatur necessitatibus.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.7 }}
          className={`absolute ${styles.client}`}
          style={{ right: "40%", top: "20%" }}
        >
          <Image src={client6} width={width} height={height} alt="client" />
          <div
            className={`bg-white shadow-lg relative z-20  rounded-lg opacity-0 mt-6 transition-all duration-300 w-52 ${styles.clientBox}`}
          >
            <p className="font-secondary text-sm font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur pariatur necessitatibus.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.7 }}
          className={`absolute ${styles.client}`}
          style={{ right: "30%", top: "30%" }}
        >
          <Image src={client7} width={width} height={height} alt="client" />
          <div
            className={`bg-white shadow-lg relative z-20  rounded-lg opacity-0 mt-6 transition-all duration-300 w-52 ${styles.clientBox}`}
          >
            <p className="font-secondary text-sm font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur pariatur necessitatibus.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.7 }}
          className={`absolute ${styles.client}`}
          style={{ right: "10%", top: "20%" }}
        >
          <Image src={client8} width={width} height={height} alt="client" />
          <div
            className={`bg-white shadow-lg relative z-20  rounded-lg opacity-0 mt-6 transition-all duration-300 w-52 ${styles.clientBox}`}
          >
            <p className="font-secondary text-sm font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur pariatur necessitatibus.
            </p>
          </div>
        </motion.div>
      </div>

      <div></div>
    </section>
  );
};

export default Clients;
