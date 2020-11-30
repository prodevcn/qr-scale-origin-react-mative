import {createStackNavigator} from 'react-navigation';

import StoreList from '../screens/purchase/store-list';
import OrderFilter from '../screens/purchase/order-filter';
import OrderList from '../screens/purchase/order-list';
import OrderProcess from '../screens/purchase/order-process';
import OrderLineProcess from '../screens/purchase/order-line-process';
import AddLineScanProduct from '../screens/purchase/add-line-scan-product';
import AddLineProductPreview from '../screens/purchase/add-line-product-preview';
import CreateOrder from '../screens/purchase/create-order';

export default navigationOptions =>
  createStackNavigator(
    {
      StoreList,
      OrderFilter,
      OrderList,
      OrderProcess,
      OrderLineProcess,
      AddLineScanProduct,
      AddLineProductPreview,
      CreateOrder
    },
    {
      initialRouteName: 'StoreList',
      navigationOptions
    }
  );
