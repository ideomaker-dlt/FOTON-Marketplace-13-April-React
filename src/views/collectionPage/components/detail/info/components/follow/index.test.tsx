import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Follow } from ".";

test("Collection Page Follow renders", () => {
    render(<Follow />);
    const title = screen.getAllByText("Follow")[0];
    expect(title).toBeInTheDocument();
});
