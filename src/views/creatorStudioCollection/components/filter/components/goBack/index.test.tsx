import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

import { GoBack } from ".";

test("Creator Studio Collection GoBack renders", () => {
    render(<BrowserRouter><GoBack /></BrowserRouter>);
    const title = screen.getAllByText("My Items 1")[0];
    expect(title).toBeInTheDocument();
});
