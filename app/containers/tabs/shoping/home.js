//import liraries
import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView
} from 'react-native';

import images from '../../../const/images';

import { openDrawer } from '../../../global';

// create a component
class Home extends Component {
  openCategories = categoryName => () => {
    this.props.navigation.navigate('Category', {title: categoryName})
  }

  render() {
    return (
      <ImageBackground
        source={images.background2}
        style={styles.container}
        resizeMode='cover'
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => openDrawer()}
          >
            <Image
              source={images.menu}
              style={styles.menuIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>

          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode='contain'
          />

          <View style={{flex: 1}} />

          <TouchableOpacity
            style={styles.headerRightButton}
            onPress={() => alert('search')}
          >
            <Image
              source={images.categorySearch}
              style={styles.headerRightIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Trending</Text>
          </View>
          <View style={styles.trendingView}>
            <ImageBackground
              source={null}
              style={styles.trendingImage}
              resizeMode='cover'
            >
              <View style={styles.diagonal} />
            </ImageBackground>
            <View style={styles.trendingTextView}>
              <Text style={[styles.trendingText, {marginBottom: 5}]}>L A T E S T</Text>
              <Text style={styles.trendingText}>A R R I V A L</Text>
            </View>
          </View>

          <View style={styles.heading}>
            <Text style={styles.headingText}>Shop By Category</Text>
          </View>
          <TouchableOpacity
            style={styles.categoryView1}
          >
            <Text style={styles.categoryText}>ACCESSORIES</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: 3, marginBottom: 3}}>
            <TouchableOpacity
              style={[styles.categoryView2, {marginRight: 3}]}
              onPress={this.openCategories('Clothing')}
            >
              <ImageBackground
                source={null}
                style={styles.categoryImage}
              >
                <Text style={styles.categoryText}>CLOTHING</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryView2}
            >
              <ImageBackground
                source={null}
                style={styles.categoryImage}
              >
                <Text style={styles.categoryText}>SHOES</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.categoryView2}
          >
            <ImageBackground
              source={null}
              style={styles.categoryImage}
            >
              <Text style={styles.categoryText}>TOP WEARS</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.select({ ios: 20 }),
    backgroundColor: 'transparent'
  },
  header: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    marginLeft: 15,
  },
  menuIcon: {
    width: 23,
    height: 23,
  },
  logo: {
    width: 100,
    height: 40,
  },
  headerRightButton: {
    marginLeft: 12,
    marginRight: 12,
  },
  headerRightIcon: {
    width: 25,
    height: 25
  },
  content: {
    flex: 1,
    backgroundColor: '#E1E1E1'
  },
  heading: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
  },
  trendingView: {
    width: '100%',
    height: 150,
    backgroundColor: '#798347',
    flexDirection: 'row',
  },
  trendingImage: {
    flex: 1,
    backgroundColor: 'white'
  },
  diagonal: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 30,
    height: 150,
    borderLeftWidth: 30,
    borderLeftColor: 'transparent',
    borderBottomWidth: 150,
    borderBottomColor: '#798347',
  },
  trendingTextView: {
    flex: 1,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  trendingText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  categoryView1: {
    width: '100%',
    height: 150,
    backgroundColor: '#6D8186',
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6D8186',
  },
  categoryText: {
    color: 'white',
    fontSize: 20,
  },
  categoryView2: {
    flex: 1,
    height: 110,
  }
});

//make this component available to the app
export default Home;
