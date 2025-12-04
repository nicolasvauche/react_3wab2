import FormSubmit from "../../atom/FormSubmit";
import FormGroup from "../../molecule/FormGroup";

const ContactForm = ({children}) => {
  return (
    <form className="app-form">
      {children}
      
      <FormSubmit content="Envoyer" />
    </form>
  );
};

export default ContactForm;
