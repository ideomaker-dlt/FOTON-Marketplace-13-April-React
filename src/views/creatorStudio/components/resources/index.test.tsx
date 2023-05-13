import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { Resources } from ".";

test("Creator Studio Resources   renders", () => {
    render(<BrowserRouter><Resources /></BrowserRouter>);
    const title = screen.getAllByText("By FOTON")[0];
    expect(title).toBeInTheDocument();
});
