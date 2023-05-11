import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { InfoBox } from ".";

test("Add Collection 1 InfoBox renders", () => {
    render(<InfoBox />);
    const title = screen.getByText("Info:");
    expect(title).toBeInTheDocument();
});
