import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { LeftContainer } from ".";

test("Collector Profile LeftContainer renders", () => {
    render(<LeftContainer />);
    const title = screen.getAllByText("About")[0];
    expect(title).toBeInTheDocument();
});
