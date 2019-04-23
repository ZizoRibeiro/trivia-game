import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from '../components/views/Quizz';

const rootReducer = reducer;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
