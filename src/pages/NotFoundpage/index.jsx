import { Link } from "react-router";
import Header from "../../layout/Header";
import "./NotFoundpage.css";

const NotFoundpage = () => {
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
        <Link to="/personnages">aller voir les personnages</Link> ?
        <br />
        Ou bien{" "}
        <Link to="/">revenir à l'accueil</Link> ?
      </p>
    </>
  );
};

export default NotFoundpage;
