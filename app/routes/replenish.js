import {createStackNavigator} from 'react-navigation';

import ScanCart from '../screens/replenish/scan-cart';
import StepProcess from '../screens/replenish/step-process';

export default navigationOptions =>
  createStackNavigator(
    {
      ScanCart,
      StepProcess
    },
    {
      initialRouteName: 'ScanCart',
      navigationOptions
    }
  );
