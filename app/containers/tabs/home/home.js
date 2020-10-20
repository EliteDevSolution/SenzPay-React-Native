//import liraries
import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';
import Swiper from 'react-native-swiper';
import { width } from 'react-native-dimension';
import { connect } from 'react-redux';

import CustomButton from './customButton';

import images from '../../../const/images';

import {
  setDrawerNavigation,
  openDrawer
} from '../../../global';

// create a component
class Home extends Component {
  componentDidMount() {
    setDrawerNavigation(this.props.navigation);
  }

  render() {
    const { user } = this.props;
    // alert(JSON.stringify(user));

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

        <View style={styles.topView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => this.props.navigation.navigate('BuyCredit')}
            >
              <Image source={images.homeBuyCredit} style={styles.circleButtonImage} resizeMode='contain' />
            </TouchableOpacity>
            <View style={styles.photoContainer}>
              <Image source={images.photoPlaceholder} style={styles.profilePhoto} resizeMode='contain' />
            </View>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => this.props.navigation.navigate('CreditTransfer')}
            >
              <Image source={images.homePayCard} style={styles.circleButtonImage} resizeMode='contain' />
            </TouchableOpacity>
          </View>

          <Text style={styles.profileName}>{user.first_name} {user.last_name}</Text>
          <Text style={styles.profileID}>ID:{user.uid}</Text>
          
          <View style={styles.balanceInfo}>
            <Text style={styles.balanceText}>Balance Credit</Text>
            <View style={styles.balance}>
              <Text style={styles.currency}>MYR</Text>
              <Text style={styles.amount}>{user.Bal}</Text>
            </View>
          </View>
        </View>

        <View style={styles.swiper}>
          <Swiper
            paginationStyle={{ marginBottom: -22, marginLeft: width(75) }}
            activeDotColor='#FFF7'
          >
            <View style={{width: '100%', height: 135}}>
              <Image source={images.banner1} style={styles.banner} resizeMode='cover' />
            </View>
            <View style={{width: '100%', height: 135}}>
              <Image source={images.banner3} style={styles.banner} resizeMode='cover' />
            </View>
            <View style={{width: '100%', height: 135}}>
              <Image source={images.banner2} style={styles.banner} resizeMode='cover' />
            </View>
          </Swiper>
        </View>

        <View style={styles.content}>
          <View style={[styles.buttonGroupLine, {marginBottom: 5}]}>
            <CustomButton
              icon={images.homeMobile}
              text1='Mobile'
              text2='Top Up'
              onPress={() => this.props.navigation.navigate('MobileTopUp')}
            />

            <CustomButton
              icon={images.homePostpaid}
              text1='Postpaid'
              text2='Bills'
              onPress={() => this.props.navigation.navigate('Postpaid')}
            />

            <CustomButton
              icon={images.homeUtilities}
              text1='Utilities'
              onPress={() => this.props.navigation.navigate('Utilities')}
            />
          </View>
          <View style={styles.buttonGroupLine}>
            <CustomButton
              icon={images.homeInternational}
              text1='International'
              text2='Top Up'
              onPress={() => this.props.navigation.navigate('InternationalTopUp')}
            />

            <CustomButton
              icon={images.homeEtransfer}
              text1='E-Transfer'
              onPress={() => this.props.navigation.navigate('CreditTransfer')}
            />

            <CustomButton
              icon={images.homeAbout}
              text1='About'
            />
          </View>
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
  topView: {
    width: '100%',
    alignItems: 'center',
  },
  circleButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#232D36',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circleButtonImage: {
    width: 33,
    height: 30,
  },
  photoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 25,
    marginRight: 25,
    overflow: 'hidden',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  profileName: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Gilroy-ExtraBold',
  },
  profileID: {
    color: 'black',
    fontSize: 10,
    fontFamily: 'MyriadPro-Regular',
  },
  balanceInfo: {
    width: 140,
    height: 40,
    margin: 10,
    borderRadius: 8,
    backgroundColor: '#232d36',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  balanceText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'MyriadPro-Regular',
    marginTop: 3,
  },
  balance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currency: {
    color: 'white',
    fontSize: 12,
    marginRight: 5,
    fontFamily: 'Gilroy-Light',
  },
  amount: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Gilroy-ExtraBold',
    backgroundColor: 'transparent'
  },
  swiper: {
    width: '100%',
    height: 135
  },
  banner: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    backgroundColor: '#E1E1E1',
    paddingTop: 5,
    paddingLeft: 30,
    paddingRight: 15,
  },
  buttonGroupLine: {
    flex: 1,
    flexDirection: 'row',
  },
  actionButton: {
    flex: 1,
    margin: 3,
    marginTop: 6,
  }
});

const mapStateToProps = function (state) {
  const { user } = state;
  return {
    user: user.user
  }
};

//make this component available to the app
export default connect(mapStateToProps)(Home);
