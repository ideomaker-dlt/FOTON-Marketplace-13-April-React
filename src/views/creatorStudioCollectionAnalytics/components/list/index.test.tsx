import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { List } from ".";

test("Creator Studio Collection Analysis List renders", () => {
    render(<BrowserRouter><List /></BrowserRouter>);
    const title = screen.getAllByText("Followers")[0];
    expect(title).toBeInTheDocument();
});
