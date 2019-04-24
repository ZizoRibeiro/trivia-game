import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { NavigationActions } from 'react-navigation';
import api from '../../../services/api';

const LOADING_QUESTIONS = 'loadingQuestions';
const SET_QUESTIONS = 'setQuestions';
const SET_ANSWER = 'setAnswer';

export const actions = {
  fetchQuestions() {
    return async dispatch => {
      dispatch({ type: LOADING_QUESTIONS, payload: true });

      const response = await api.get(`/api.php?amount=10&difficulty=hard&type=boolean`);
      dispatch({ type: SET_QUESTIONS, payload: response.data.results });
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
  loading: true,
  correctAnswerCount: 0,
});

export const reducer = createReducer(INITIAL_STATE, {
  [LOADING_QUESTIONS]: (state, { payload }) => state.merge(INITIAL_STATE),
  [SET_QUESTIONS]: (state, { payload }) => state.merge({ loading: false, questions: payload }),
  [SET_ANSWER]: (state, { payload }) =>
    state.merge({
      answers: [...state.answers, payload],
      correctAnswerCount: payload.correctAnswer
        ? state.correctAnswerCount + 1
        : state.correctAnswerCount,
    }),
});
