import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    TouchableWithoutFeedbackBase,
} from 'react-native';

export default class HeartButton extends Component {
    constructor(props) {
        super(props);
        this.state = {addedToFavorite: false};

        this.addToFavorite = this.addToFavorite.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ addedToFavorite: nextProps.selected})
    }

    addToFavorite() {
        const { onPress } = this.props;
        this.setState({
            addedToFavorite: !this.state.addedToFavorite
        }, () => {
            onPress && onPress();
        });
    }

    render() {
        const { addedToFavorite } = this.state;
        const { color, selectedColor } = this.props;
        return(
            <TouchableOpacity
                onPress={this.addToFavorite}
                style={styles.favoriteBtn}
            >
                <View>
                    <Icon
                        name={addedToFavorite ? 'heart' : 'heart-o'}
                        color={addedToFavorite ? selectedColor : color}
                        size={18}

                    />
                    <Icon
                        name='heart-o'
                        size={18}
                        color={color}
                        style={[
                            { display: addedToFavorite ? 'flex' : 'none' },
                            styles.selectedColor
                        ]}
                        />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    selectedColor: {
        position: 'absolute',
        left: 0, 
        top: 0,
    }
});

HeartButton.propTypes = {
    color: PropTypes.string.isRequired,
    selectedColor: PropTypes.string.isRequired,
    itemId: PropTypes.number.isRequired,   
    onPress: PropTypes.func,
    selected: PropTypes.bool,
}