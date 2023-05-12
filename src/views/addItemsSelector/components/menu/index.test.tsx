import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { Menu } from ".";

test("Add Item Selector Menu renders", () => {
    render(
        <BrowserRouter>
            <Menu />
        </BrowserRouter>
    );
    const title = screen.getByText("Define your Item below");
    expect(title).toBeInTheDocument();
});
