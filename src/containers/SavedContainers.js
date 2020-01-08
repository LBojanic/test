import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NoResults from '../components/saved/NoResults';
import colors from '../styles/colors';


export default class SavedContainer extends Component {
    static navigationOptions = { 
        tabBarLabel: 'SAVED',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name="heart-o"
                size={30}
                color={tintColor}
            />
        ),
    };
    
    render() {
        return (
            <View style={styles.wrapper}>
                <NoResults handleButtonPress={() => this.props.navigation.navigate('Explore')}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        backgroundColor: colors.white,
    },

});