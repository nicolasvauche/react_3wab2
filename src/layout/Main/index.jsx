import CountBtn from "../../components/CountBtn";
import Students from "../../components/Students";
import data from "../../data/test.json";

const Main = ({ students }) => {
  return (
    <main className="app-main">
      <h2>Bonjour {data.name} !</h2>
      <div className="card">
        <CountBtn />

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <Students students={students} />
    </main>
  );
};

export default Main;
