import React from "react";
import UseStateDemo from "./assets/plant";
function App() {
  const arr2 = {
    plantName: "Sunflower",
    seed: "seeded",
    icon: "🌻 ",
    height: 50,
  };

  return (
    <div>
      <UseStateDemo plantdetails={arr2} />
    </div>
  );
}

export default App;
