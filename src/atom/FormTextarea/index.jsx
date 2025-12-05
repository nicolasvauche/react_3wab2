const FormTextarea = ({ inputName, inputId }) => {
  return (
    <textarea className="form-control" name={inputName} id={inputId}></textarea>
  );
};

export default FormTextarea;
