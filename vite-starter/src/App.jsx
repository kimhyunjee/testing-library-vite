import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const nextColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button className={buttonColor} onClick={() => setButtonColor(nextColor)}>
        change to {nextColor}
      </button>
      <h1>React Testing Library</h1>
    </div>
  );
}

export default App;
