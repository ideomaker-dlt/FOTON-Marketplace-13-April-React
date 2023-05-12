import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { AddItem } from ".";

test("Add Items Selector AddItem renders", () => {
    render(
        <BrowserRouter>
            <AddItem />
        </BrowserRouter>
    );
    const title = screen.getByText("Add single Item");
    expect(title).toBeInTheDocument();
});
