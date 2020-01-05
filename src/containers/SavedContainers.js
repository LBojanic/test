import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class SavedContainer extends Component {
    static navigationOptions = { 
        tabBarLabel: 'SAVED',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name="ios-heart"
                size={25}
                color={tintColor}
            />
        ),
    };
    render() {
        return (
            <View style={styles.wrapper}>
                <Text>Saved Container</Text>
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