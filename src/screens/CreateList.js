import React, { Component } from 'react';
import {
    View, 
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class CreateList extends Component {
    static navigationOptions = ({navigation}) => ({
        title: null,
        headerLeft: <TouchableOpacity
            style={styles.closeButton}
            onPress={()=> navigation.goBack()}
            >
                <Icon
                    name="md-close"
                    size={30}
                    color={colors.lightBlack}
                    />
            </TouchableOpacity>,
        headerStyle: styles.header,
        tabBarVisible: false,
    });
    render() {
        return (
            <View style={styles.wrapper}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.heading}>Create a list</Text>
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.white,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    closeButton: {
        marginLeft: 20,
    },
    header: {
        backgroundColor: colors.white,
        borderBottomWidth: 0,
        elevation: 0,
    },
    heading: {
        fontSize: 26,
        fontWeight: '800',
        color: colors.black,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 15,
    },
    scrollView: {

    }
});