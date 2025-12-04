const Btn = ({ handleBtnClick }) => {
  return (
    <button onClick={() => handleBtnClick()}>Incrémenter le compteur</button>
  );
};

export default Btn;
