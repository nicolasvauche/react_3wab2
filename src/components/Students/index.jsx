import { useMemo } from "react";
import Table from "../Table";
import { useTable } from "../../hook/useTable";

const Students = ({ students }) => {
  /**
   * Colonnes complémentaires à ajouter au tableau.
   * Ici : "Moyenne".
   *
   * On les mémorise avec useMemo :
   *  - pour ne PAS recréer les objets à chaque render
   *  - pour éviter de casser les dépendances de useTable (références stables)
   *
   * Chaque colonne = { label, render }
   *  - label  → texte de l'en-tête
   *  - render → fonction qui reçoit une ligne et retourne la valeur à afficher
   */
  const extraColumns = useMemo(
    () => [
      {
        label: "Moyenne",
        render: (s) =>
          Array.isArray(s.notes) && s.notes.length
            ? (s.notes.reduce((sum, n) => sum + n, 0) / s.notes.length).toFixed(
                2
              )
            : "—",
      },
    ],
    []
  );

  /**
   * Labels pour renommer certaines colonnes issues du JSON.
   * Ici, on ne les utilise plus dans useTable (on les enlève volontairement),
   *
   * Exemple :
   *   - "name" devient "Prénom"
   *   - "notes" devient "Notes"
   *
   * Même logique que pour extraColumns : memo pour stabilité.
   */
  const labels = useMemo(
    () => ({
      name: "Prénom",
      notes: "Notes",
    }),
    []
  );

  /**
   * Appel au hook générique useTable.
   *
   * On lui passe :
   *   - les données brutes : students
   *   - nos colonnes additionnelles définies ici dans Students
   *
   * Et c’est le hook qui :
   *   - extrait les clés du JSON
   *   - génère les headers à partir des clés
   *   - formate les valeurs (string, tableau, null…)
   *   - insère LES colonnes supplémentaires dans l’ordre
   */
  const { headers, rows } = useTable(students, { labels, extraColumns });

  return (
    <>
      <h2>Liste des étudiants</h2>

      {/* Le composant Table ne fait que recevoir headers + rows déjà préparés */}
      <Table headers={headers} rows={rows} />
    </>
  );
};

export default Students;
