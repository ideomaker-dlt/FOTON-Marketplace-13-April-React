import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Menu } from ".";

test("Add Collection 1 InfoBox renders", () => {
    render(<BrowserRouter><Menu /></BrowserRouter>);
    const title = screen.getByText("Define Collection");
    expect(title).toBeInTheDocument();
});
