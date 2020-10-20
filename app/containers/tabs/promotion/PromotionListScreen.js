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
import { width, height } from 'react-native-dimension';

import images from '../../../const/images';

import { openDrawer } from '../../../global';

const scrollWidth = width(100) - 30;

// create a component
class PromotionListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      left: [],
      right: [],
    }
  }

  componentWillMount() {
    const data = [
      { image: images.testPromotion1, width: 151, height: 236 },
      { image: images.testPromotion2, width: 151, height: 94 },
      { image: images.testPromotion4, width: 151, height: 249 },
      { image: images.testPromotion3, width: 151, height: 139 },
      { image: images.testPromotion5, width: 151, height: 143 },
      { image: images.testPromotion6, width: 151, height: 119 }
    ];
    let left = [], right = [];
    let leftHeight = 0, rightHeight = 0;
    data.map((item) => {
      const newHeight = this.calcImageHeight(item) + 40;
      if (leftHeight <= rightHeight) {
        left.push(item)
        leftHeight += newHeight;
      } else {
        right.push(item)
        rightHeight += newHeight;
      }
    })
    this.setState({left, right});
  }

  calcImageHeight(data) {
    const imageWidth = (scrollWidth - 10) / 2;
    data.height = data.height / data.width * imageWidth;
    data.width = imageWidth;
    return data.height;
  }

  renderPromotion(item, index) {
    return (
      <TouchableOpacity
        key={index}
        style={styles.promotion}
        onPress={() => this.props.navigation.navigate('Detail', {item})}
      >
        <Image
          source={item.image}
          style={{width: item.width, height: item.height, borderTopLeftRadius: 5, borderTopRightRadius: 5}}
          resizeMode='stretch'
        />
        <View style={styles.textView}>
          <Text style={styles.text}>1 day ago</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { left, right } = this.state;

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
        </View>

        <View style={styles.content}>
          <Text style={styles.titleText}>Latest Promotion</Text>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={{flexDirection: 'row', justifyContent: 'space-between',}}
            showsVerticalScrollIndicator={false}
          >
            <View style={{width: (scrollWidth-10)/2}}>
              {
                left.map((item, idx) => {
                  return this.renderPromotion(item, idx);
                })
              }
            </View>
            <View style={{width: (scrollWidth-10)/2}}>
              {
                right.map((item, idx) => {
                  return this.renderPromotion(item, idx);
                })
              }
            </View>
          </ScrollView>
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
  content: {
    flex: 1,
    backgroundColor: '#E1E1E1',
    alignItems: 'center',
    paddingTop: 7,
    paddingLeft: 15,
    paddingRight: 15,
  },
  titleText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
  },
  scrollView: {
    width: '100%',
    height: '100%'
  },
  promotion: {
    width: '100%',
    marginBottom: 10,
  },
  textView: {
    width: '100%',
    height: 30,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#302E3D',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  text: {
    color: '#B8B8B8',
    fontSize: 14,
    fontFamily: 'Myriad Pro',
  }
});

//make this component available to the app
export default PromotionListScreen;
