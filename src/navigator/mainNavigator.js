import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile120073Navigator from '../features/UserProfile120073/navigator';
import Maps120054Navigator from '../features/Maps120054/navigator';
import Settings120032Navigator from '../features/Settings120032/navigator';
import Settings120017Navigator from '../features/Settings120017/navigator';
import NotificationList120016Navigator from '../features/NotificationList120016/navigator';
import Maps120015Navigator from '../features/Maps120015/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile120073: { screen: UserProfile120073Navigator },
Maps120054: { screen: Maps120054Navigator },
Settings120032: { screen: Settings120032Navigator },
Settings120017: { screen: Settings120017Navigator },
NotificationList120016: { screen: NotificationList120016Navigator },
Maps120015: { screen: Maps120015Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
