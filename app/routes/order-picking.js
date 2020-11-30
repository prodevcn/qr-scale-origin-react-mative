import {createStackNavigator} from 'react-navigation';

import SelectPickList from '../screens/order-picking/select-pick-list';
import PickingStep from '../screens/order-picking/picking-step';

export default navigationOptions =>
  createStackNavigator(
    {
      SelectPickList,
      PickingStep
    },
    {
      initialRouteName: 'SelectPickList',
      navigationOptions
    }
  );
