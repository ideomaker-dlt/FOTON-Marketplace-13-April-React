import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { Projects } from ".";

test("Creator Studio Projects renders", () => {
    render(<BrowserRouter><Projects /></BrowserRouter>);
    const title = screen.getAllByText("Project One")[0];
    expect(title).toBeInTheDocument();
});
