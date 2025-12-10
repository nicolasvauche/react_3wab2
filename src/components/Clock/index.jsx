import { useClock } from "../../hook/useClock";
import "./clock.css";

const Clock = () => {
  const time = useClock();

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="clock">
      <div className="handle"></div>
      {hours} : {minutes} : {seconds}
    </div>
  );
};

export default Clock;
