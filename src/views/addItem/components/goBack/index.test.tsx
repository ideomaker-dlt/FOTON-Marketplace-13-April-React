import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { GoBack } from ".";

test("Add Item GoBack renders", () => {
    render(
        <BrowserRouter>
            <GoBack />
        </BrowserRouter>
    );
    const title = screen.getByText("Define your Item below");
    expect(title).toBeInTheDocument();
});
