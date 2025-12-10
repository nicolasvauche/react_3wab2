import CountBtn from "../../components/CountBtn";
import data from "../../data/test.json";

const Main = ({ children }) => {
  return (
    <main className="app-main">
      <h2>Bonjour {data.name} !</h2>

      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>

      <div className="card">
        <CountBtn />
      </div>

      {children}
    </main>
  );
};

export default Main;
