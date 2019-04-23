import React from "react";
import { mount } from "enzyme";
import Home from "../../../../../src/components/views/Home";

describe("Home", () => {
  describe("when button begin is pressed", () => {
    it("should start the trivia game", () => {
      const navigate = jest.fn();
      const wrapper = mount(<Home navigation={{ navigate }} />);
      const button = wrapper.find("TouchableOpacity").first();
      button.props().onPress();
      expect(navigate).toBeCalledWith("Quizz");
    });
  });
});
