import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Filters } from ".";

test("Collection Page Name renders", () => {
    render(<Filters />);
    const title = screen.getByText("Select All");
    expect(title).toBeInTheDocument();
});
