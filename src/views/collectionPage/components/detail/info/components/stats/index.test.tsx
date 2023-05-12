import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Stats } from ".";

test("Collection Page Stats renders", () => {
    render(<Stats />);
    const title = screen.getByText("Views");
    expect(title).toBeInTheDocument();
});
