import "./students.css";

const Students = ({ students }) => {
  return (
    <>
      <h2>Liste des étudiants</h2>
      <table>
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Notes</th>
            <th>Moyenne</th>
            <th>&nbsp;</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.notes.join(", ")}</td>
              <td>
                {(
                  student.notes.reduce(
                    (sum, currentValue) => sum + currentValue,
                    0
                  ) / student.notes.length
                ).toFixed(2)}
              </td>
              <td>Modifier | Supprimer</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Students;
