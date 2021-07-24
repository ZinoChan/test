import Head from "next/head";
import Hero from "../components/contact-page/Hero";
import "tailwindcss/tailwind.css";
import FAQ from "../components/contact-page/FAQ";
import Navbar from "../components/ui/Navbar";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Empower your  Business, Skill, Education and Project with professionals"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar light={true} />
      <main className="overflow-hidden">
        <Hero />
        <FAQ />
      </main>
    </div>
  );
};

export default contact;
