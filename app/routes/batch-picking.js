import {createStackNavigator} from 'react-navigation';

import ScanCart from '../screens/batch-picking/scan-cart';
import BatchPickingStep from '../screens/order-picking/picking-step';
import BatchInitial from '../screens/batch-picking/batch-initial';
import SelectBatchList from '../screens/batch-picking/select-batch-list';

export default navigationOptions =>
  createStackNavigator(
    {
      BatchInitial,
      ScanCart,
      SelectBatchList,
      BatchPickingStep
    },
    {
      initialRouteName: 'BatchInitial',
      navigationOptions
    }
  );
