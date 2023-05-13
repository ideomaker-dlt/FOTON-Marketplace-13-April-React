import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { Header } from ".";

test("Creator Studio Collection Header renders", () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const title = screen.getAllByText("Collection One")[0];
    expect(title).toBeInTheDocument();
});
