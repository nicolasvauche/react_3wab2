import { useState } from "react";
import Btn from "../../components/Btn";
import Count from "../../components/Count";
import CountBtn from "../../components/CountBtn";
import Students from "../../components/Students";
import data from "../../data/test.json";

const Main = ({ students }) => {
  const [count, setCount] = useState(0);

  const handleBtnClick = () => {
    setCount(count + 1);
  };

  return (
    <main className="app-main">
      <h2>Bonjour {data.name} !</h2>

      <div className="card">
        <CountBtn />

        <Count count={count} />
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
