import { Link, useNavigate } from "react-router";
import Header from "../../layout/Header";
import "./NotFoundpage.css";

const NotFoundpage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <h1>Cette page n'existe pas !</h1>

      <figure>
        <img src="/img/404.png" alt="404" />
      </figure>

      <p>
        Désolé, mais la page que vous cherchez n'existe pas.
        <br />
        Ou plus.
        <br />
        Ou pas encore…
      </p>

      <p>
        Peut-être voudriez-vous{" "}
        <button onClick={() => navigate("/personnages")}>
          aller voir les personnages
        </button>{" "}
        ?
      </p>
      <p>
        Ou bien{" "}
        <button onClick={() => navigate("/")}>retourner à l'accueil</button> ?
      </p>
      <p>
        Ou encore{" "}
        <button onClick={() => navigate(-1)}>revenir en arrière</button> ?
      </p>
    </>
  );
};

export default NotFoundpage;
