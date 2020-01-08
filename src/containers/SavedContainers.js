import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


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