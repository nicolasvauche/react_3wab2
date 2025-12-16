import { useReducer } from "react";
import { calculatorReducer, initialState } from "./calculatorReducer";
import "./Calculator.css";

export default function Calculator() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleDigit = (digit) => {
    if (state.display === "Erreur") {
      dispatch({ type: "CLEAR" });
      dispatch({ type: "ADD_DIGIT", payload: digit });
      return;
    }

    dispatch({ type: "ADD_DIGIT", payload: digit });
  };

  const handleOperator = (op) => {
    if (state.display === "Erreur") return;
    dispatch({ type: "CHOOSE_OPERATOR", payload: op });
  };

  const handleEqual = () => dispatch({ type: "EVALUATE" });
  const handleReset = () => dispatch({ type: "CLEAR" });

  return (
    <div className="calc">
      <div className="calc-display">{state.display}</div>

      <div className="calc-grid">
        {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].map((n) => (
          <button key={n} onClick={() => handleDigit(n)}>
            {n}
          </button>
        ))}

        <button className="op" onClick={() => handleOperator("+")}>
          +
        </button>
        <button className="op" onClick={() => handleOperator("-")}>
          -
        </button>
        <button className="op" onClick={() => handleOperator("*")}>
          *
        </button>

        <button className="equal" onClick={handleEqual}>
          =
        </button>
      </div>

      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
