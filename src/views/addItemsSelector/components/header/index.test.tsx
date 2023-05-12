import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { Header } from ".";

test("Add Item Selector Header renders", () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
    const title = screen.getByText("Create New Item");
    expect(title).toBeInTheDocument();
});
