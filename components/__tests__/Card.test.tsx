import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { IconType } from "@/interfaces/types";
import Cards from "../shared/Card";

describe("Cards Component", () => {
  const mockOnPress = jest.fn();

  const cardProps = {
    iconName: "home",
    iconType: "AntDesign" as IconType,
    iconLabel: "Home",
  };

  it("renders the icon and label correctly", () => {
    const { getByText, getByTestId } = render(
      <Cards card={cardProps} onPress={mockOnPress} />
    );

    // Check if the label is rendered
    expect(getByText("Home")).toBeTruthy();

    // Check if the icon is rendered (by its testID)
    expect(getByTestId("icon-home")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const { getByTestId } = render(
      <Cards card={cardProps} onPress={mockOnPress} />
    );

    const pressable = getByTestId("card-pressable");
    fireEvent.press(pressable);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("does not render icon if iconName is missing", () => {
    const { queryByTestId } = render(
      <Cards card={{ iconLabel: "No Icon" }} />
    );

    expect(queryByTestId("icon-home")).toBeNull();
  });
});
