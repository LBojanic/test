import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from '../components/SearchBar';
import Categories from '../components/explore/Categories';
import colors from '../styles/colors';
import categoriesList from '../data/categories';
import { ScrollView } from 'react-native-gesture-handler';
import Listings from '../components/explore/Listings';
import listings from '../data/listings';


export default class ExploreContainer extends Component {

    static navigationOptions = { 
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name="search"
                size={30}
                color={tintColor}
            />
        ),
    };

    renderListings() {
        return listings.map((listing, index) => (
          <View
            key={`listing-${index}`}
          >
            <Listings
              key={`listing-item-${index}`}
              title={listing.title}
              boldTitle={listing.boldTitle}
              listings={listing.listings}
              showAddToFav={listing.showAddToFav}
              handleAddToFav={this.handleAddToFav}
            />
          </View>
        ));
      }

    render() {
        return (
            <View style={styles.wrapper}>
                <SearchBar />
                <ScrollView
                style={styles.scrollview}
                    contentContainerStyle={styles.scrollViewContent}
                >
                    <Text style={styles.heading}>Categories</Text>
                    <View style={styles.categories}>
                        <Categories categories={categoriesList}/>
                    </View>
                    {this.renderListings()}
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.white,
    },
    scrollview: {
        paddingTop: 100,
    },
    scrollViewContent: {
        paddingBottom: 80,
    },
    categories: {
        marginBottom: 40,
    },
    heading: {
        fontSize: 22,
        fontWeight: '600',
        paddingLeft: 20,
        paddingBottom: 20,
        color: colors.gray04,
    },
});