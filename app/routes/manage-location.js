import {createStackNavigator} from 'react-navigation';

import ScanLocation from '../screens/manage-location/scan-location';
import LocationProducts from '../screens/manage-location/location-products';
import AddProductToLocation from '../screens/manage-location/add-product-to-location';
import PickStockDetail from '../screens/pick-stock/pick-stock-detail';

export default navigationOptions =>
  createStackNavigator(
    {
      ScanLocation,
      LocationProducts,
      PickStockDetail,
      AddProductToLocation
    },
    {
      initialRouteName: 'ScanLocation',
      navigationOptions
    }
  );
