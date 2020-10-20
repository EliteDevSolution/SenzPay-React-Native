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

import images from '../../../../const/images';

// create a component
class CreditCardListScreen extends Component {
  render() {
    return (
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

          <Text style={styles.headerText}>Credit Card</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.balanceText}>RM 150.00</Text>
          <ScrollView
            style={styles.cardListView}
          >
          {
            new Array(2).fill(null).map((item, idx) => {
              return (
                <View key={idx} style={styles.cardView}>
                  <View style={[styles.cardLineView, {alignItems: 'center'}]}>
                    <View style={styles.bankInfoView}>
                      <Image
                        style={styles.bankImage}
                        resizeMode='contain'
                      />
                      <Text style={styles.bankName}>HDFC Bank</Text>
                    </View>
                    <View style={styles.cardTypeView}>
                      <Text style={styles.cardType}>Credit Card</Text>
                    </View>
                  </View>
                  <View style={styles.cardLineView}>
                    <Text style={styles.cardNumber}>5555XXXXXXXX4562</Text>
                  </View>
                  <View style={[styles.cardLineView, {alignItems: 'flex-end'}]}>
                    <View>
                      <Text style={[styles.smallText, {marginBottom: 6}]}>Valid Until</Text>
                      <Text style={styles.smallText}>12/18</Text>
                    </View>
                    <TouchableOpacity
                    >
                      <Image
                        style={styles.removeButtonImage}
                        resizeMode='contain'
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )
            })
          }
          </ScrollView>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.9}
          onPress={() => {this.props.navigation.navigate('CreditCardAdd')}}
        >
          <Text style={styles.addButtonText}>Add New Card</Text>
        </TouchableOpacity>
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
  headerText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Myriad-Italic',
  },
  content: {
    flex: 1,
    backgroundColor: '#E1E1E1',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  balanceText: {
    color: 'black',
    fontFamily: 'Myriad-Roman',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 10,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  cardListView: {
    flex: 1,
    width: '100%',
  },
  cardView: {
    width: '100%',
    height: 120,
    borderRadius: 3,
    backgroundColor: 'white',
    marginBottom: 5,
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  cardLineView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bankInfoView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankImage: {
    width: 25,
    height: 30,
    backgroundColor: 'red',
    marginRight: 10,
  },
  bankName: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Myriad-Italic',
  },
  cardTypeView: {
    height: 16,
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 7,
    backgroundColor: '#E1E1E1'
  },
  cardType: {
    color: 'black',
    fontSize: 10,
    fontFamily: 'Myriad-Italic',
  },
  cardNumber: {
    color: 'black',
    fontSize: 19,
    fontFamily: 'Myriad-Italic',
  },
  smallText: {
    color: 'black',
    fontSize: 11,
    fontFamily: 'Myriad-Italic',
  },
  removeButtonImage: {
    width: 10,
    height: 15,
    backgroundColor: 'red'
  },
  addButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#6a6fa6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontFamily: 'Myriad-Italic',
    fontSize: 20,
  }
});

//make this component available to the app
export default CreditCardListScreen;
