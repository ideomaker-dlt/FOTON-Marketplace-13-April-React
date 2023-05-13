import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { RightContainer } from ".";

test("Collector Profile RightContainer renders", () => {
    render(<RightContainer />);
    const title = screen.getAllByText("Artefacts")[0];
    expect(title).toBeInTheDocument();
});
