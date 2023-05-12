import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Menu } from ".";
import { BrowserRouter } from "react-router-dom";

test("Add Project Menu renders", () => {
    render(<BrowserRouter><Menu /></BrowserRouter>);
    const title = screen.getByText("Define your item below");
    expect(title).toBeInTheDocument();
});
