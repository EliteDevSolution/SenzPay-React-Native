//import liraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView
} from 'react-native';

import images from '../../../const/images';

// create a component
class ButtonPanel extends Component {
  static propTypes = {
    data: PropTypes.array,
    onPress: PropTypes.func,
    spacing: PropTypes.number,
  }

  static defaultProps = {
    data: [],
    onPress: () => {},
    spacing: 5
  }

  constructor() {
    super();

    this.state = {
      width: 0,
      height: 0
    }
  }

  onLayout({nativeEvent}) {
    const { width, height } = nativeEvent.layout;
    this.setState({width, height})
  }

  render() {
    const { width, height } = this.state;
    const { data, onPress, spacing } = this.props;
    const count = data.length;
    const rows = Math.floor((count + 2) / 3);
    const itemWidth = (width - 2 * spacing) / 3;

    let rowViews = [];
    for (let i = 0; i < rows; i ++) {
      let rowView = [];
      for (let j = 0; (j<3) && (i*3+j<count); j ++) {
        const index = i*3+j;
        rowView.push(
          <TouchableOpacity
            key={j}
            style={{
              width: itemWidth,
              height: itemWidth,
              marginRight: j < 2 ? spacing : 0,
            }}
            onPress={onPress(data[index])}
          >
            <ImageBackground
              source={images.buttonBG2}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingRight: itemWidth*0.1,
                paddingBottom: itemWidth*0.1
              }}
              resizeMode='contain'
            >
              <Image
                source={{uri: data[index].imagepath}}
                style={{
                  width: itemWidth*2/3,
                  height: itemWidth*0.4,
                  marginBottom: itemWidth*0.07
                }}
                resizeMode='contain'
              />
              <Text style={styles.itemText}>{data[index].Name}</Text>
            </ImageBackground>
          </TouchableOpacity>
        )
      }
      rowViews.push(
        <View
          key={i}
          style={{
            flexDirection: 'row',
            marginBottom: i < rows-1 ? spacing : 0
          }}
        >
          { rowView }
        </View>
      )
    }

    return (
      <View onLayout={this.onLayout.bind(this)} style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {rowViews}
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  scrollView: {
    flex: 1,
  },
  itemText: {
    color: 'black',
    fontFamily: 'Myriad-Italic',
    fontSize: 14,
    textAlign: 'center',
    backgroundColor: 'transparent'
  }
});

//make this component available to the app
export default ButtonPanel;
