import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  return <p>Le compteur est égal à {count}</p>;
};

export default Count;
