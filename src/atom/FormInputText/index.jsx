const FormInputText = ({ inputName, inputId }) => {
  return (
    <input type="text" name={inputName} id={inputId} className="form-control" />
  );
};

export default FormInputText;
