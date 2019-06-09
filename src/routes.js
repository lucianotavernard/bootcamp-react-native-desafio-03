import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/pages/main';

const Routes = createAppContainer(
  createStackNavigator(
    { Main },
    {
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);

export default Routes;
