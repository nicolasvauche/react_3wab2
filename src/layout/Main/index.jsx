import Btn from "../../components/Btn";
import Count from "../../components/Count";
import CountBtn from "../../components/CountBtn";
import Students from "../../components/Students";
import data from "../../data/test.json";

const Main = ({ students }) => {
  const handleBtnClick = () => {
    alert("Coucou");
  };

  return (
    <main className="app-main">
      <h2>Bonjour {data.name} !</h2>
      <div className="card">
        {/* <CountBtn /> */}

        <Count />
        <Btn handleBtnClick={handleBtnClick} />

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <Students students={students} />
    </main>
  );
};

export default Main;
