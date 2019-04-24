import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import Results from './Results';

function Container({ answers, navigation, correctAnswerCount }) {
  return (
    <Results
      answers={answers}
      correctAnswerCount={correctAnswerCount}
      onPlayAgain={() => navigation.navigate('Home')}
    />
  );
}

const mapStateToProps = state => ({
  answers: state.answers,
  correctAnswerCount: state.correctAnswerCount,
});

export default connect(mapStateToProps)(Container);
