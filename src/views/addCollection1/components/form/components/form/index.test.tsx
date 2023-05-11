import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Form } from ".";

test("Add Collection 1 InfoBox renders", () => {
    render(<BrowserRouter><Form /></BrowserRouter>);
    const title = screen.getByText("Name Collection:");
    expect(title).toBeInTheDocument();
});
