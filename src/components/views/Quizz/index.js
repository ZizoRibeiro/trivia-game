import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './redux';
import Quizz from './Quizz';
export { reducer } from './redux';

class Container extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    console.log(this.props);
    const { navigation, questions, loading } = this.props;
    console.log(questions[0]);
    if (loading) {
      return null;
    }
    return <Quizz navigation={navigation} question={questions[0]} />;
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  questions: state.questions,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
