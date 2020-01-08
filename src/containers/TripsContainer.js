import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
} from 'react-native';
import Icon from  'react-native-vector-icons/FontAwesome';


export default class TripsContainer extends Component {
    static navigationOptions = { 
        tabBarLabel: 'TRIPS',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name="plus-square-o"
                size={30}
                color={tintColor}
            />
        ),
    };
    
    render() {
        return (
            <View style={styles.wrapper}>
                <Text>Trips Container</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        padding: 50,
    }
});