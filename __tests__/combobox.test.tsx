import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Combobox from "../src/components/Combobox";

describe("Combobox Component", () => {
  const options = ["GPT-3.5", "GPT-4", "Claude", "LLaMA"];

  it("renders options when clicked", () => {
    render(
      <Combobox
        options={options}
        value="GPT-3.5"
        onChange={jest.fn()}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    options.forEach((opt) => {
      expect(screen.getByText(opt)).toBeDefined();
    });
  });

  it("filters options based on search query", () => {
    render(
      <Combobox
        options={options}
        value="GPT-3.5"
        onChange={jest.fn()}
      />
    );

    const input = screen.getByRole("combobox");
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "gpt" } });

    expect(screen.getByText("GPT-3.5")).toBeDefined();
    expect(screen.getByText("GPT-4")).toBeDefined();
    expect(screen.queryByText("Claude")).toBeNull();
    expect(screen.queryByText("LLaMA")).toBeNull();
  });
});
