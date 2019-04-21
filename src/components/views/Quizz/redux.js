import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

import axios from 'axios';
import api from '../../../Services/api';

const LOADING_QUESTIONS = 'loadingQuestions';
const SET_QUESTIONS = 'setQuestions';
const SET_ANSWER = 'setAnswer';

export const actions = {
  fetchQuestions() {
    return async dispatch => {
      dispatch({ type: LOADING_QUESTIONS, payload: true });
      try {
        const response = await axios.get(
          'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
        );
        dispatch({ type: SET_QUESTIONS, payload: response.data.results });
      } catch (err) {
        console.log(err);
      }
    };
  },
  storeAnswer(question, answer) {
    const correctAnswer = question.correct_answer.toLowerCase() === answer.toLowerCase();
    return { type: SET_ANSWER, payload: { correctAnswer, question } };
  },
};

const INITIAL_STATE = Immutable({
  questions: [],
  answers: [],
  currentQuestion: [],
  loading: true,
});

export const reducer = createReducer(INITIAL_STATE, {
  [LOADING_QUESTIONS]: (state, { payload }) => state.merge({ loading: true }),
  [SET_QUESTIONS]: (state, { payload }) => state.merge({ loading: false, questions: payload }),
  [SET_ANSWER]: (state, { payload }) =>
    state.merge({ answers: [...state.getIn('answers'), payload] }),
});
