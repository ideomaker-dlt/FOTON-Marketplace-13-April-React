import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Description } from ".";

test("Collection Page Description renders", () => {
    render(<Description />);
    const title = screen.getByText("Created on 23 Apr 2023");
    expect(title).toBeInTheDocument();
});
