import ContactForm from "./ui/ContactForm";
import Subscribe from "./ui/Subscribe";
const Contact = () => {
  return (
    <section className="pb-40 relative">
      <div className="max-w-screen-xl mx-auto md:px-10 px-2">
        <Subscribe />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
