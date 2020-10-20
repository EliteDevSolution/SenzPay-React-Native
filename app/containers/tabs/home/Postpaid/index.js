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
  TextInput,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { width, height } from 'react-native-dimension';

import ButtonPanel from '../buttonPanel';

import images from '../../../../const/images';

import {
  updateStackNavigation
} from '../../../../global';

// create a component
class PostpaidScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.products
    }

    updateStackNavigation(props.navigation, 0);
  }
  
  onItemPress = (product) => () => {
    this.props.navigation.navigate('PostpaidDetail', {product})
  }

  render() {
    const { items } = this.state;

    return (
      <ScrollView contentContainerStyle={styles.outerContainer} scrollEnabled={false}>
        <ImageBackground
          source={images.background2}
          style={styles.container}
          resizeMode='cover'
        >
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.headerLeftButton}
              onPress={() => this.props.navigation.goBack()}
            >
              <Image
                source={images.back}
                style={styles.headerLeftIcon}
                resizeMode='contain'
              />
            </TouchableOpacity>

            <Text style={styles.headerText}>Postpaid Bills</Text>
          </View>

          <View style={styles.content}>
            <View style={styles.buttonPanel}>
              <Text style={styles.title}>Products</Text>
              <ButtonPanel
                data={items}
                onPress={this.onItemPress}
              />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  outerContainer: {
    width: width(100),
    height: height(100) - 60,
  },
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
  headerText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Myriad-Italic',
  },
  content: {
    flex: 1,
    backgroundColor: '#E1E1E1',
    alignItems: 'center',
  },
  buttonPanel: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
  },
  title: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
    marginTop: 7,
    marginBottom: 10,
  }
});

const mapStateToProps = state => {
  const { postpaidProducts } = state;
  return {
    products: postpaidProducts
  }
};

//make this component available to the app
export default connect(mapStateToProps)(PostpaidScreen);
