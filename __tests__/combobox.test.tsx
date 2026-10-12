import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Combobox from "../src/components/Combobox";

describe("Combobox option filtering", () => {
  const mockOptions = ["gpt-3.5-turbo", "gpt-4", "text-davinci-003"];
  const onChange = jest.fn();

  it("renders options when combobox button is clicked", () => {
    render(
      <Combobox
        value="gpt-3.5-turbo"
        options={mockOptions}
        onChange={onChange}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(screen.getByText("gpt-3.5-turbo")).toBeInTheDocument();
    expect(screen.getByText("gpt-4")).toBeInTheDocument();
    expect(screen.getByText("text-davinci-003")).toBeInTheDocument();
  });

  it("filters options case-insensitively when user types in combobox", () => {
    render(
      <Combobox
        value="gpt-3.5-turbo"
        options={mockOptions}
        onChange={onChange}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const input = screen.getByRole("combobox");
    fireEvent.change(input, { target: { value: "GPT-4" } });

    expect(screen.getByText("gpt-4")).toBeInTheDocument();
    expect(screen.queryByText("text-davinci-003")).not.toBeInTheDocument();
  });
});
