import FormSubmit from "../../atom/FormSubmit";
import "./index.css";

const ContactForm = ({ children }) => {
  return (
    <form className="app-form">
      {children}

      <FormSubmit content="Envoyer" />
    </form>
  );
};

export default ContactForm;
