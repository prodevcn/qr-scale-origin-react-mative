import {createStackNavigator} from 'react-navigation';

import ScanProduct from '../screens/pick-stock/scan-product';
import ProductLocations from '../screens/pick-stock/product-locations';
import PickStockDetail from '../screens/pick-stock/pick-stock-detail';

export default navigationOptions =>
  createStackNavigator(
    {
      ScanProduct,
      ProductLocations,
      PickStockDetail
    },
    {
      initialRouteName: 'ScanProduct',
      navigationOptions
    }
  );
