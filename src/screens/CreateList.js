import React, { Component } from 'react';
import {
    View, 
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import InputField from '../components/form/InputField';
import RadioInput from '../components/form/RadioInput';
import RoundedButton from '../components/buttons/RoundedButton';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


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
    });

    constructor(props) {
        super(props);
        this.state = {
            privacyOption: 'private',
            location: props.navigation.state.params.listing.location,
            loading: false,
        };

        this.listCreated = false;
        this.selectPrivacyOption = this.selectPrivacyOption.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleCreateList = this.handleCreateList.bind(this);
    }

    componentWillUnmount() {
        const { navigation } = this.props;
        navigation.state.params.onCreateListClose(navigation.state.params.listing.id, this.listCreated);
    }
    handleLocationChange(location) {
        this.setState({location});
    }

    selectPrivacyOption(privacyOption) {
        this.setState({privacyOption});
    }

    handleCreateList() {
        const { goBack } = this.props.navigation;
        this.setState({ loading: true });
        this.listCreated = true;

        // slow server
        setTimeout(() => {
            this.setState({ loading: false }, () => {
                goBack();
            })
        }, 2000);
    }

    render() {
        const { privacyOption, location } = this.state;
        return (
            <View style={styles.wrapper}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.heading}>Create a list</Text>
                    <View style={styles.content}>
                        <View style={styles.inputWrapper}>
                            <InputField 
                                labelText="Title"
                                labelTextSize={18}
                                labelTextWeight="400"
                                labelColor={colors.lightBlack}
                                textColor={colors.lightBlack}
                                showCheckmark={false}
                                value={location}
                                placeholder = {location}
                                autoFocus={false}
                                inputType="text"
                                inputStyle={styles.inputStyle}
                                borderBottomColor={colors.gray06}
                                onChangeText={this.handleLocationChange}
                            />
                        </View>
                        <View style={styles.privacyOptions}>
                            <Text style={styles.privacyHeading} >
                                Privacy
                            </Text>
                            <TouchableHighlight 
                                style={styles.privacyOptionItem}
                                underlayColor={colors.gray01}
                                onPress={() => this.selectPrivacyOption('public')}
                            >
                                <View>
                                    <Text style={styles.privacyOptionTitle}>Public</Text>
                                    <Text style={styles.privacyOptionDescription}>Visible to everyone and included on your public Vozi profile.</Text>
                                    <View style={styles.privacyRadioInput}>
                                    <RadioInput 
                                            backgroundColor={colors.gray07}
                                            borderColor={colors.gray05}
                                            selectedBackgroundColor={colors.green01}
                                            selectedBorderColor={colors.green01}
                                            iconColor={colors.white}
                                            selected={privacyOption === 'public'}
                                        />
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <View style={styles.divider}>

                            </View>
                            <TouchableHighlight 
                                style={styles.privacyOptionItem}
                                underlayColor={colors.gray01}
                                onPress={() => this.selectPrivacyOption('private')}
                            >
                                <View>
                                    <Text style={styles.privacyOptionTitle}>Private</Text>
                                    <Text style={styles.privacyOptionDescription}>Visible only to you and any friends you invite.</Text>
                                    <View style={styles.privacyRadioInput}>
                                        <RadioInput 
                                            backgroundColor={colors.gray07}
                                            borderColor={colors.gray05}
                                            selectedBackgroundColor={colors.green01}
                                            selectedBorderColor={colors.green01}
                                            iconColor={colors.white}
                                            selected={privacyOption === 'private'}
                                        />
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.createButton}>
                    <RoundedButton
                        text="Create"
                        textColor={colors.white}
                        textAlign="left"
                        background={colors.green01}
                        borderColor="transparent"   
                        iconPosition="right"
                        disabled={!location}
                        loading={this.state.loading}
                        icon={<View style={styles.buttonIcon}>
                                <FontAwesomeIcon
                                    name="angle-right"
                                    color={colors.white}
                                    size={30}
                                />
                            </View>
                            }
                        handleOnPress={this.handleCreateList}
                    />
                </View>
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
        fontSize: 28,
        fontWeight: '800',
        color: colors.black,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 15,
    },
    content: {
        paddingTop: 50,
    },
    inputWrapper: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    inputStyle: {
        fontSize: 24,
        fontWeight: '400',
        paddingBottom: 30,
    },
    privacyOptions: {
        marginTop: 40,
    },
    privacyHeading: {
        fontSize: 18,
        fontWeight: '400',
        color: colors.lightBlack,
        marginBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    privacyOptionItem: {
        flex: 1,
        padding: 20,
    },
    privacyOptionTitle: {
        fontSize: 16,
        fontWeight: '200',
        color: colors.lightBlack,
    },
    privacyOptionDescription: {
        fontSize: 14,
        fontWeight: '200',
        color: colors.lightBlack,
        marginTop: 10,
        paddingRight: 100,
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: colors.gray06,
        height: 1,
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
    },
    privacyRadioInput: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    createButton: {
        position: 'absolute',
        bottom: 0,
        right: 10,
        width: 110,
    },
    buttonIcon: {
        position: 'absolute',
        right: 0,
        top: '50%',
        marginTop: -16,
    }
});