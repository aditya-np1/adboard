import React from "react";
import { shallow } from "enzyme";
import ShopShow from "./shopShow";

describe("ShopShow", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ShopShow />);
    expect(wrapper).toMatchSnapshot();
  });
});
