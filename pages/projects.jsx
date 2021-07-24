import Head from "next/head";
import "tailwindcss/tailwind.css";
import DoneProjects from "../components/project-page/DoneProjects";
import FutureProjects from "../components/project-page/FutureProjects";
import Hero from "../components/project-page/Hero";
import TopProjects from "../components/project-page/TopProjects";
import Navbar from "../components/ui/Navbar";

const project = () => {
  return (
    <div>
      <Head>
        <title>Project</title>
        <meta
          name="description"
          content="Empower your  Business, Skill, Education and Project with professionals"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar light={true} />
      <main>
        <Hero />
        <TopProjects />
        <DoneProjects />
        <FutureProjects />
      </main>
    </div>
  );
};

export default project;
