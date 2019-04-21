import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './components/views/Home';
import Quizz from './components/views/Quizz';
import Results from './components/views/Results';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Quizz,
      Results,
    },
    { initialRouteName: 'Home' },
    {
      defaultNavigationOptions: {
        header: null,
      },
    }
  )
);

export default Routes;
