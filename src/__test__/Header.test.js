import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header";
import { BrowserRouter } from "react-router-dom";

const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

test('Should render the "open certs" in the header', () => {
  render(<MockHeader />);
  const testElement = screen.getByText(/open-certs/i);
  expect(testElement).toBeInTheDocument();
});
