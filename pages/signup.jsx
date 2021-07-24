import Head from "next/head";
import Hero from "../components/signup-page/Hero";
import SignupForm from "../components/signup-page/SignupForm";
import "tailwindcss/tailwind.css";
import Navbar from "../components/ui/Navbar";

const signup = () => {
  return (
    <div>
      <Head>
        <title>Sign Up</title>
        <meta
          name="description"
          content="Empower your  Business, Skill, Education and Project with professionals"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar light={true} navCenter={true} />
      <main className="overflow-hidden">
        <Hero />
        <SignupForm />
      </main>
    </div>
  );
};

export default signup;
