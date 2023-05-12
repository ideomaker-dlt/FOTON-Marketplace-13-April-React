import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { FormComponent } from ".";

test("Add Item Form renders", () => {
    render(<FormComponent />);
    const title = screen.getByText("Name Item:");
    expect(title).toBeInTheDocument();
});
