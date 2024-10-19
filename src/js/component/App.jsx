import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../../styles/trafficLight.css"; // Estilos del semáforo

const TrafficLight = () => {
  // Hook de estado para almacenar el color actual seleccionado
  const [color, setColor] = useState("red");

  return (
    <div id="trafficLight">
      <div
        className={`light red ${color === "red" ? "selected" : ""}`}
        onClick={() => setColor("red")}
      ></div>
      <div
        className={`light yellow ${color === "yellow" ? "selected" : ""}`}
        onClick={() => setColor("yellow")}
      ></div>
      <div
        className={`light green ${color === "green" ? "selected" : ""}`}
        onClick={() => setColor("green")}
      ></div>
    </div>
  );
};

// Renderizar el componente en el DOM
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));

export default App;