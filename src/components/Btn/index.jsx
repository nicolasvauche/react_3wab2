const Btn = ({handleBtnClick}) => {
  return (
    <button onClick={() => handleBtnClick()}>
      Increase counter
    </button>
  );
};

export default Btn;
