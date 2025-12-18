import { useTranslation } from "react-i18next";
import "./App.css";

const App = () => {
  const { t, i18n } = useTranslation();

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>

      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={() => setLanguage("fr")}
          disabled={i18n.language === "fr"}
        >
          FR
        </button>

        <button
          onClick={() => setLanguage("en")}
          disabled={i18n.language === "en"}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default App;
