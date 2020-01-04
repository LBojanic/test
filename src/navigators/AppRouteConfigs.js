import {
    createStackNavigator,
  } from 'react-navigation-stack';
  import LoggedOut from '../screens/LoggedOut';
  import LogIn from '../screens/LogIn';
  import ForgotPassword from '../screens/ForgotPassword';
  
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
  });
  
  export default AppRouteConfigs;