import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExploreContainer from '../containers/ExporeContainer';
import InboxContainer from '../containers/InboxContainer';
import ProfileContainer from '../containers/ProfileContainer';
import SavedContainer from '../containers/SavedContainers';
import TripsContainer from '../containers/TripsContainer';
import colors from '../styles/colors';

const LoggedInTabNavigator = createBottomTabNavigator({
    ExploreContainer: { screen: ExploreContainer},
    SavedContainer: { screen: SavedContainer },
    TripsContainer: { screen: TripsContainer },
    InboxContainer: { screen: InboxContainer },
    ProfileContainer: {screen: ProfileContainer },
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