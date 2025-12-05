import FormSubmit from "../../atom/FormSubmit";

const ContactForm = ({ children }) => {
  return (
    <form className="app-form">
      {children}

      <FormSubmit content="Envoyer" />
    </form>
  );
};

export default ContactForm;
