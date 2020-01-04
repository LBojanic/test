import React, {Component} from 'react';
import { transparentHeaderStyle } from '../styles/navigation';
import { StyleSheet, Text, View, Image} from 'react-native';
import colors from '../styles/colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import RoundedButton from '../components/buttons/RoundedButton'
import { TouchableHighlight } from 'react-native-gesture-handler';
import NavBarButton from '../components/buttons/NavBarButton';

export default class LoggedOut extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerRight: <NavBarButton handleButtonPress={() => navigation.navigate('LogIn')} location="right" color={colors.white} text="Log In" />,
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        headerTintColor: colors.white,
    });

    onFacebookPress() {
        alert('Facebook button pressed')
    }
    onCreateAccountPress() {
        alert('Create Account button pressed')
    }
    onMoreOptionsPressed() {
        alert('More options button pressed')
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.welcomeWrapper}>
                    <Image 
                        source={require('../img/logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.welcomeText}>Welcome to Vozi.</Text>
                    <RoundedButton 
                        text="Continue with Facebook"
                        textColor={colors.green01}
                        background={colors.white}
                        icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon}/>}
                        handleOnPress={this.onFacebookPress}
                    />
                    <RoundedButton 
                        text="Create Account"
                        textColor={colors.white}
                        handleOnPress={this.onCreateAccountPress}
                    />

                    <TouchableHighlight 
                        style={styles.moreOptionsButton}
                        onPress={this.onMoreOptionsPressed}>
                        <Text style={styles.moreOptionsButtonText}>More options</Text>
                    </TouchableHighlight>

                    <View style={styles.termsAndConditions}>
                        <Text style={styles.termsText}>By tapping Continue, Create Account or More options, </Text>
                        <Text style={styles.termsText}>I agree to Vozi's </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Terms of Service</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Payments Terms of Service</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Privacy Policy</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, and </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Nondiscrimination policy</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>.</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.green01,
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 30, 
        padding: 20,
    },
    logo: {
        width: 150,
        height: 71,
        marginTop: 50,
        marginBottom: 40,
    },
    welcomeText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '400', 
        marginBottom: 40,
    },
    facebookButtonIcon: {
        color: colors.green01,
        position: 'relative',
        left: 20,
        zIndex: 8,
    },
    moreOptionsButton: {
        marginTop: 10,
    },
    moreOptionsButtonText: {
        color: colors.white,
        fontSize: 16,
    },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
    },
    termsText: {
        color: colors.white,
        fontSize: 12,
        fontWeight: '600',
    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    }
});
