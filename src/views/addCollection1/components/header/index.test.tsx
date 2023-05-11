import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from ".";

test("Add Collection 1 Header renders", () => {
    render(<Header />);
    const title = screen.getByText("Create New Collection");
    expect(title).toBeInTheDocument();
});
