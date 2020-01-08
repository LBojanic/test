import {
    createStackNavigator,
} from 'react-navigation-stack';
import LoggedOut from '../screens/LoggedOut';
import LogIn from '../screens/LogIn';
import LoggedIn from '../screens/LoggedIn';
import ForgotPassword from '../screens/ForgotPassword';
import LoggedInTabNavigator from './LoggedInTabNavigator';
import TurnOnNotifications from '../screens/TurnOnNotifications';
import CreateList from '../screens/CreateList';

const AppRouteConfigs = createStackNavigator({    
    LoggedOut: { screen: LoggedOut,
                navigationOptions: {
                title: null,
                }
    },
    LogIn: { screen: LogIn,
        navigationOptions: {
            title: null,
        }
    },  
    ForgotPassword: { screen: ForgotPassword,
                    navigationOptions: {
                        title: null,
                    }
    },
    LoggedIn: { screen: LoggedInTabNavigator,
                navigationOptions: {
                    title: null,
                }
    },
    TurnOnNotifications: { screen: TurnOnNotifications,
        navigationOptions: {
            title: null,
        }
    },

});

export default AppRouteConfigs;   