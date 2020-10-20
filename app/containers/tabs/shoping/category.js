//import liraries
import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import GridView from 'react-native-super-grid';
import { width } from 'react-native-dimension';

import images from '../../../const/images';

import {
  updateStackNavigation
} from '../../../global';

// create a component
class CategoryScreen extends Component {
  constructor(props) {
    super(props);

    updateStackNavigation(props.navigation, 1);
  }

  renderItem = item => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {}}
      >
        <Image source={null} style={styles.itemImage} resizeMode='cover'/>
        <Text style={styles.itemName}>Mixer Label</Text>
        <Text style={styles.itemType}>Black Wave Long Sleeve</Text>
        <Text style={styles.itemPrice}>RM 69.00</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { navigation } = this.props;

    return (
      <ImageBackground
        source={images.background2}
        style={styles.container}
        resizeMode='cover'
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerLeftButton}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={images.back}
              style={styles.headerLeftIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>

          <Text style={styles.headerText}>{navigation.state.params.title}</Text>

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

          <TouchableOpacity
            style={styles.headerRightButton}
            onPress={() => alert('search')}
          >
            <Image
              source={images.categoryLove}
              style={styles.headerRightIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.headerRightButton}
            onPress={() => alert('search')}
          >
            <Image
              source={images.categoryCart}
              style={styles.headerRightIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.menuBar}>
            <TouchableOpacity
              style={styles.menuButton}
            >
              <Image
                source={images.categorySort}
                style={styles.menuButtonIcon}
                resizeMode='contain'
              />
              <Text style={styles.menuButtonText}>Sort</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuButton}
            >
              <Image
                source={images.categoryView}
                style={styles.menuButtonIcon}
                resizeMode='contain'
              />
              <Text style={styles.menuButtonText}>Category</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuButton}
            >
              <Image
                source={images.categoryFilter}
                style={styles.menuButtonIcon}
                resizeMode='contain'
              />
              <Text style={styles.menuButtonText}>Filter</Text>
            </TouchableOpacity>
          </View>

          <GridView
            itemDimension={width(40)}
            spacing={15}
            items={[1, 2, 3, 4, 5, 6]}
            renderItem={this.renderItem}
          />
        </View>
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
  headerLeftButton: {
    marginLeft: 12,
    marginRight: 12,
  },
  headerLeftIcon: {
    width: 20,
    height: 20
  },
  headerRightButton: {
    marginRight: 15,
  },
  headerRightIcon: {
    width: 30,
    height: 25
  },
  headerText: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    fontFamily: 'Myriad-Italic',
  },
  content: {
    flex: 1,
    backgroundColor: '#E1E1E1'
  },
  menuBar: {
    width: '100%',
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#6E7072',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButtonIcon: {
    width: 15,
    height: 15
  },
  menuButtonText: {
    marginLeft: 3,
    color: 'black',
    fontSize: 16,
    fontFamily: 'Myriad-Italic',
  },
  item: {
    width: '100%',
    height: 260,
    justifyContent: 'space-between'
  },
  itemImage: {
    width: '100%',
    height: 205,
    backgroundColor: 'yellow'
  },
  itemName: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Roman',
  },
  itemType: {
    color: 'black',
    fontSize: 13,
    fontFamily: 'Myriad-Italic',
  },
  itemPrice: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Myriad-Bold',
  }
});

//make this component available to the app
export default CategoryScreen;
