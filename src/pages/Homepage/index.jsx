import Header from "../../templates/Header";
import Footer from "../../templates/Footer";
import ContactForm from "../../organism/Form";
import FormGroup from "../../molecule/FormGroup";
import FormLabel from "../../atom/FormLabel";
import FormInputText from "../../atom/FormInputText";

const Homepage = () => {
  return (
    <>
      <Header />

      <main className="app-main">
        <ContactForm>
          <FormGroup>
            <FormLabel content="Votre nom" inputId="name" />
            <FormInputText inputName="name" inputId="name" />
          </FormGroup>
        </ContactForm>
      </main>

      <Footer />
    </>
  );
};

export default Homepage;
