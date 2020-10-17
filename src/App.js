import React from "react";
import { Labyrinth } from "./solution/Labyrinth";

function App() {
  return (
    <Labyrinth
      targetPosition={[7, 8]}
      availableCells={[
        [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
        [0, 0, 1, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
        [1, 1, 1, 0, 0, 0, 1, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
        [1, 0, 1, 1, 1, 0, 0, 1, 0, 1],
        [0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
        [0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
      ]}
      startingPosition={[4, 4]}
      moveLimit={25}
      cellSize={30}
    />
  );
}

export default App;