import React from "react";
import { shallow } from "enzyme";
import ShopRegister from "./shopRegister";

describe("ShopRegister", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ShopRegister />);
    expect(wrapper).toMatchSnapshot();
  });
});
