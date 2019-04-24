import React from "react";
import { shallow } from "enzyme";
import Quizz from "../../../../../src/components/views/Quizz/Quizz";
import { ButtonWrapper } from "../../../../../src/components/shared/Button";
import { enzymeFind } from "styled-components/test-utils";

const question = {
  category: "Video games",
  question: "PC is better than consoles"
};
describe("Quizz", () => {
  describe("when an answer is given", () => {
    it("should choose false or true", () => {
      const onAnswer = jest.fn();
      const wrapper = shallow(
        <Quizz onAnswer={onAnswer} question={question} answersCount={1} />
      );
      const buttonTrue = wrapper
        .findWhere(node => node.prop("testID") === "trueAnswer")
        .first();
      const buttonFalse = wrapper
        .findWhere(node => node.prop("testID") === "falseAnswer")
        .first();
      buttonTrue.props().onPress();
      expect(onAnswer).toBeCalledWith(question, "true");
      buttonFalse.props().onPress();
      expect(onAnswer).toBeCalledWith(question, "false");
    });
  });
});
