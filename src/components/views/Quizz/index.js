import React from 'react';
import { ActivityIndicator } from 'react-native';

import { flow } from 'lodash';

import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { actions } from './redux';

import Quizz from './Quizz';
import { Container as FlexContainer } from '../../shared/Container';

export { reducer } from './redux';

type Props = {
  navigation: object,
  answersCount: number,
  questions: [object],
  nextQuestion: [object],
  loading: boolean,
  storeAnswer: (answer: string, question: Object) => void,
};

class Container extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const {
      navigation,
      answersCount,
      questions,
      nextQuestion = {},
      loading,
      storeAnswer,
    } = this.props;
    if (loading) {
      return (
        <FlexContainer>
          <ActivityIndicator size="large" color="#0DFFC9" />
        </FlexContainer>
      );
    }
    let onAnswer = storeAnswer;
    if (answersCount + 1 === questions.length) {
      onAnswer = compose(
        () => navigation.navigate('Results'),
        storeAnswer
      );
    }
    return (
      <Quizz
        navigation={navigation}
        question={nextQuestion}
        answersCount={answersCount}
        onAnswer={onAnswer}
      />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  questions: state.questions,
  nextQuestion: state.questions[state.answers.length],
  answersCount: state.answers.length,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
