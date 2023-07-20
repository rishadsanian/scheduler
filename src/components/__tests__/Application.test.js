import React from "react";
import { render, act } from "@testing-library/react";
import Application from "components/Application";

it.skip("renders without crashing", () => {
  act(() => {
    render(<Application />);
  });

});
