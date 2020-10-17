import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Labyrinth } from "../solution/Labyrinth";

describe("Labyrinth", () => {
    const props = {
      targetPosition: [4, 4],
      availableCells: [
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1],
      ],
      startingPosition: [0, 0],
      moveLimit: 10,
      cellSize: 30,
    };

  it("should win", () => {
    const { container, getByTestId, queryByTestId } = render(
      <Labyrinth {...props} />
    );
    fireEvent.keyDown(container, { key: "ArrowRight" });
    fireEvent.keyDown(container, { key: "ArrowRight" });
    fireEvent.keyDown(container, { key: "ArrowDown" });
    fireEvent.keyDown(container, { key: "ArrowDown" });
    fireEvent.keyDown(container, { key: "ArrowDown" });
    fireEvent.keyDown(container, { key: "ArrowDown" });
    fireEvent.keyDown(container, { key: "ArrowRight" });
    fireEvent.keyDown(container, { key: "ArrowRight" });

  });

  it("should lose", () => {
    const { container, getByTestId, queryByTestId } = render(
      <Labyrinth {...props} moveLimit={2} />
    );
    fireEvent.keyDown(container, { key: "ArrowRight" });
    fireEvent.keyDown(container, { key: "ArrowRight" });
    fireEvent.keyDown(container, { key: "ArrowRight" });
    fireEvent.keyDown(container, { key: "ArrowRight" });

    expect(getByTestId("game-message").textContent).toBe("you loose");
  });
});
