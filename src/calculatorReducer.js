export const initialState = {
  display: "0",
  prevValue: null,
  operator: null,
  waitingForNext: false,
};

function evaluate(prev, operator, current) {
  const a = parseFloat(prev);
  const b = parseFloat(current);
  if (Number.isNaN(a) || Number.isNaN(b)) return current;

  switch (operator) {
    case "+":
      return String(a + b);
    case "-":
      return String(a - b);
    case "*":
      return String(a * b);
    case "/":
      return b === 0 ? "Erreur" : String(a / b);
    default:
      return current;
  }
}

export function calculatorReducer(state, action) {
  switch (action.type) {
    case "ADD_DIGIT": {
      const digit = action.payload;
      const MAX_LENGTH = 12;

      if (!state.waitingForNext && state.display.length >= MAX_LENGTH) {
        return state;
      }

      if (state.waitingForNext) {
        return {
          ...state,
          display: digit,
          waitingForNext: false,
        };
      }

      if (state.display === "0" && digit === "0") {
        return state;
      }

      if (state.display === "0") {
        return { ...state, display: digit };
      }

      return {
        ...state,
        display: state.display + digit,
      };
    }

    case "CHOOSE_OPERATOR": {
      const operator = action.payload;

      if (state.prevValue == null) {
        return {
          ...state,
          prevValue: state.display,
          operator,
          waitingForNext: true,
        };
      }

      if (state.waitingForNext) {
        return {
          ...state,
          operator,
        };
      }

      const result = evaluate(state.prevValue, state.operator, state.display);

      return {
        ...state,
        display: result,
        prevValue: result,
        operator,
        waitingForNext: true,
      };
    }

    case "EVALUATE": {
      if (!state.prevValue || !state.operator || state.waitingForNext) {
        return state;
      }

      const result = evaluate(state.prevValue, state.operator, state.display);

      return {
        display: result,
        prevValue: null,
        operator: null,
        waitingForNext: true,
      };
    }

    case "CLEAR":
      return initialState;

    default:
      return state;
  }
}
