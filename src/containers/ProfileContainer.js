import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProfileContainer extends Component {
    static navigationOptions = { 
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name="user-o"
                size={30}
                color={tintColor}
            />
        ),
    };
    
    render() {
        return (
            <View style={styles.wrapper}>
                <Text>Profile Container</Text>
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