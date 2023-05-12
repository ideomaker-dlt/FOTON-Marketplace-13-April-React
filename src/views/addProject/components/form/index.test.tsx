import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Form } from ".";

test("Add Project Form renders", () => {
    render(<Form />);
    const title = screen.getByText("Name Project:");
    expect(title).toBeInTheDocument();
});
