import * as React from "react";
import renderer from "react-test-renderer";// Adjust path as needed
import { IconType } from "@/interfaces/types";
import Cards from "../shared/Card";

it(`renders correctly`, () => {
  const cardProps = {
    iconName: "home",
    iconType: "AntDesign" as IconType,
    iconLabel: "Home",
  };

  const tree = renderer.create(<Cards card={cardProps} />).toJSON();
  
  expect(tree).toMatchSnapshot();
});
