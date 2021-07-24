import Head from "next/head";
import Hero from "../components/privacy-page/Hero";
import PrivacyText from "../components/privacy-page/PrivacyText";
import Navbar from "../components/ui/Navbar";
import "tailwindcss/tailwind.css";

const privacy = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Empower your  Business, Skill, Education and Project with professionals"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar light={true} />

      <main className="overflow-hidden">
        <Hero />
        <PrivacyText />
      </main>
    </div>
  );
};

export default privacy;
