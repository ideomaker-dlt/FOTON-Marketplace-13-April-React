import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from ".";

test("Add Project Header renders", () => {
    render(<Header />);
    const title = screen.getByText("Create New Project");
    expect(title).toBeInTheDocument();
});
