import { useMemo } from "react";

/**
 * Hook pour générer le contenu d'un tableau :
 * - déduit les clés (headers bruts) depuis la 1re ligne
 * - génère les lignes à partir des clés
 * - ajoute les colonnes complémentaires (label + render) dans l'ordre fourni
 */
export const useTable = (input, { extraColumns = [] } = {}) => {
  // Data stable (évite de changer la ref à chaque render)
  const data = useMemo(() => (Array.isArray(input) ? input : []), [input]);

  // Clés brutes issues du JSON (ordre de Object.keys sur la première ligne)
  const keys = useMemo(() => {
    if (data.length === 0) return [];
    return Object.keys(data[0]);
  }, [data]);

  // Headers = clés brutes + labels des colonnes complémentaires
  const headers = useMemo(() => {
    const extras = extraColumns.map((c) => c.label);
    return [...keys, ...extras];
  }, [keys, extraColumns]);

  // Rows = valeurs basées sur les clés + cellules complémentaires rendues par l'appelant
  const rows = useMemo(() => {
    return data.map((row) => {
      const baseCells = keys.map((k) => {
        const v = row[k];
        if (Array.isArray(v)) return v.join(", ");
        if (v === null || v === undefined) return "—";
        return String(v);
      });

      const extraCells = extraColumns.map((col) => col.render(row));
      return [...baseCells, ...extraCells];
    });
  }, [data, keys, extraColumns]);

  return { headers, rows, keys };
};
