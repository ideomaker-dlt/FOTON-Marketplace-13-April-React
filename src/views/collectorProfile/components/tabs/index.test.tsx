import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Tabs } from ".";

test("Collector Profile Tabs renders", () => {
    render(<Tabs />);
    const title = screen.getAllByText("Profile")[0];
    expect(title).toBeInTheDocument();
});
