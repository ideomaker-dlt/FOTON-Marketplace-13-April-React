import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Name } from ".";

test("Collection Page Name renders", () => {
    render(<Name />);
    const title = screen.getAllByText("Collection One")[0];
    expect(title).toBeInTheDocument();
});
