import React from "react";
import { render } from "@testing-library/react";
import Alpha from "./alpha";

test("renders learn react link", () => {
  const { getByText } = render(<Alpha />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
