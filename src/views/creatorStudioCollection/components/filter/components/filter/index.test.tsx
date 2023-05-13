import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { FilterAndSortBy } from ".";

test("Creator Studio Collection Filter renders", () => {
    render(<FilterAndSortBy />);
    const title = screen.getAllByText("Filters")[0];
    expect(title).toBeInTheDocument();
});
