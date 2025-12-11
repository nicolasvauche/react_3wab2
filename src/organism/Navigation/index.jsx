import NavButton from "../../atom/NavButton";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="app-navigation">
      <NavButton path="/" text="Accueil" />
      <NavButton path="/a-propos" text="À Propos" />
      <NavButton path="/personnages" text="Personnages" />
    </nav>
  );
};

export default Navigation;
