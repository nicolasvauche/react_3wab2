import Header from "../../templates/Header";
import Footer from "../../templates/Footer";
import Form from "../../organism/Form";
import FormGroup from "../../molecule/FormGroup";
import FormLabel from "../../atom/FormLabel";
import FormInputText from "../../atom/FormInputText";
import FormInputEmail from "../../atom/FormInputEmail";
import FormTextarea from "../../atom/FormTextarea";

const Contactpage = () => {
  return (
    <>
      <Header />

      <main className="app-main">
        <Form>
          <FormGroup>
            <FormLabel content="Votre nom" inputId="name" />
            <FormInputText inputName="name" inputId="name" />
          </FormGroup>

          <FormGroup>
            <FormLabel content="Votre email" inputId="email" />
            <FormInputEmail inputName="email" inputId="email" />
          </FormGroup>

          <FormGroup>
            <FormLabel content="Sujet" inputId="subject" />
            <FormInputText inputName="subject" inputId="subject" />
          </FormGroup>

          <FormGroup>
            <FormLabel content="Votre message" inputId="message" />
            <FormTextarea inputName="message" inputId="message" />
          </FormGroup>
        </Form>
      </main>

      <Footer />
    </>
  );
};

export default Contactpage;
