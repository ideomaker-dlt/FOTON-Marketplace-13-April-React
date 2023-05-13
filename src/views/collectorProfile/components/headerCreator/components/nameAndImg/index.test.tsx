import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { NameAndImg } from ".";

test("Collector Profile NameAndImg renders", () => {
    render(<NameAndImg />);
    const title = screen.getAllByText("Danoshi Hughemoto")[0];
    expect(title).toBeInTheDocument();
});
