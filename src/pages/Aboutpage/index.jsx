import Header from "../../layout/Header";
import "./Aboutpage.css";

const Aboutpage = () => {
  return (
    <>
      <Header />
      <h1>À Propos</h1>
      <p>
        Notre app ne sert à rien, et c'est pour ça qu'elle est belle{" "}
        <span className="icon">🫶</span>
      </p>
    </>
  );
};

export default Aboutpage;
