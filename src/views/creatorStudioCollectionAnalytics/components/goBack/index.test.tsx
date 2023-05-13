import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { GoBack } from ".";

test("Creator Studio Collection Analysis GoBack renders", () => {
    render(<BrowserRouter><GoBack /></BrowserRouter>);
    const title = screen.getAllByText("Analytics")[0];
    expect(title).toBeInTheDocument();
});
