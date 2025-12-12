import { useEffect, useState } from "react";
import Header from "../../layout/Header";
import "./Characterspage.css";

const API_URL = "http://localhost:3000/api/characters";
const IMG_BASE = "http://localhost:3000/public/img/character/";

const Characterspage = () => {
  const [characters, setCharacters] = useState([]);

  // Appel API
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .catch((err) => console.error("Erreur API :", err));
  }, []);

  return (
    <>
      <Header />
      <h1>Les Personnages</h1>

      {characters.length === 0 && <p>Chargement…</p>}

      <section className="characters-grid">
        {characters.map((c) => (
          <article className="character-card" key={c.id}>
            <div className="character-media">
              <img
                src={IMG_BASE + c.picture}
                alt={c.name}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = IMG_BASE + "placeholder.png";
                }}
              />
            </div>

            <div className="character-body">
              <h2 className="character-name">{c.name}</h2>
              <p className="character-class">{c.class}</p>

              <ul className="character-stats">
                <li>❤️ PV max : {c.healthMax}</li>
                <li>🔷 Mana max : {c.manaMax}</li>
                <li>⚔️ Dégâts : {c.damage}</li>
                <li>🛡️ Défense : {c.defense}</li>
                <li>💰 Fortune : {c.fortuneBase}</li>
              </ul>

              <h3>Sorts :</h3>

              {c.spells.length === 0 ? (
                <p>Aucun sort</p>
              ) : (
                <ul className="character-spells">
                  {c.spells.map((s) => (
                    <li key={s.id}>
                      <strong>{s.name}</strong> — {s.effect} {s.amount} ( mana :{" "}
                      {s.mana_cost})
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default Characterspage;
