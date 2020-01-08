import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import colors from '../../styles/colors';


export default class NoResults extends Component {
    render() {
        const { handleButtonPress } = this.props;
        return(
            <View>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.heading}>Saved</Text>
                    <Text style={styles.description} >Not every day is filled with adventures, but you can start planning for the next one.</Text>
                    <Text style={styles.description}>Tap the heart on any car to start saving your favorites here. </Text>
                </ScrollView>
                <View style={styles.footer} >
                    <TouchableOpacity
                        onPress={handleButtonPress}
                        activeOpacity={0.7}
                        style={styles.findCarsButton}
                    >
                        <Text style={styles.findCarsButtonText}>Find cars</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
} 
NoResults.propTypes = {
    handleButtonPress: PropTypes.func,
}
const styles = StyleSheet.create({
    scrollView: {
        height: '100%',
    },
    heading: {
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 40,
        color: colors.gray04,
        marginTop: 70,
        paddingLeft: 20,
        paddingRight: 20,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.gray04,
        paddingLeft: 20,
        paddingRight: 20,
    },
    footer: {
        position: 'absolute',
        width: '100%',
        height: 80,
        bottom: 0,
        borderTopWidth: 1,
        borderTopColor: colors.gray05,
        paddingLeft: 20,
        paddingRight: 20,
    },
    findCarsButton: {
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 16,
        borderRadius: 4,
        backgroundColor: colors.pink,
    },
    findCarsButtonText: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: '600',
    }

});