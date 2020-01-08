import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import ExploreContainer from '../containers/ExporeContainer';
import InboxContainer from '../containers/InboxContainer';
import ProfileContainer from '../containers/ProfileContainer';
import SavedContainer from '../containers/SavedContainers';
import TripsContainer from '../containers/TripsContainer';
import CreateList from '../screens/CreateList';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PropTypes} from 'prop-types';
import colors from '../styles/colors';

const ExploreTab = createStackNavigator({
    ExploreContainer: {screen: ExploreContainer,
        navigationOptions: {
            header: null,
          },
    },
    CreateList: { screen: CreateList},
}, 
{
    mode: 'modal',
});


const CustomTabBarIcon = (name, size) => {
    const icon = ({ tintColor }) => (
      <Icon
        name={name}
        size={size}
        color={tintColor}
      />
    );
    
  icon.propTypes = {
    tintColor: PropTypes.string.isRequired,
  };

  return icon;
};

const LoggedInTabNavigator = createBottomTabNavigator({
    Explore: { screen: ExploreTab,
        navigationOptions: {
            tabBarIcon: CustomTabBarIcon('search', 30)
        }
    },
    Saved: { screen: SavedContainer },
    Trips: { screen: TripsContainer },
    Inbox: { screen: InboxContainer },
    Profile: {screen: ProfileContainer },
}, {
    tabBarOptions: {
        showLabel: false,
        activeTintColor: colors.pink,
    },

});

LoggedInTabNavigator.navigationOptions = {
    header: null,
}
export default LoggedInTabNavigator;