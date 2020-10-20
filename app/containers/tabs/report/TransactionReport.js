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
import DatePicker from 'react-native-datepicker';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UpdateFilter, ApplyFilter } from '../../../actions/report';

import images from '../../../const/images';

import {
  updateStackNavigation
} from '../../../global';

// create a component
class TransactionReport extends Component {
  constructor(props) {
    super(props);

    updateStackNavigation(props.navigation, 2);
  }

  updateFilter(start_date, end_date) {
    const { UpdateFilter } = this.props;
    UpdateFilter(start_date, end_date);
  }

  applyFilter() {
    const { ApplyFilter, start_date, end_date, uid } = this.props;
    ApplyFilter(uid, 'All', start_date, end_date);
  }

  getImageUrl(pid) {
    const { products } = this.props;
    let path = '';
    products.map((product) => {
      if (product.ID === pid)
        path = product.imagepath
    })
    return path;
  }

  render() {
    const customStyles = {
      dateInput: {
        position: 'absolute',
        width: '100%',
        height: 35,
        top: 0,
        borderWidth: 0,
        padding: 5,
        alignItems: 'flex-start'
      },
      dateIcon: {
        position: 'absolute',
        top: 6,
        right: 0,
        width: 20,
        height: 20
      },
      placeholderText: {
        color: '#6E7072',
        fontSize: 18,
        fontFamily: 'Myriad-Italic',
      },
      dateText: {
        color: '#6E7072',
        fontSize: 18,
        fontFamily: 'Myriad-Italic',
      }
    };
    const dayPickerStyle = {
      style: styles.dayPicker,
      customStyles: customStyles,
      mode: 'date',
      iconSource: images.pickerIconDate,
      format: 'YYYY-MM-DD',
      confirmBtnText: 'Confirm',
      cancelBtnText: 'Cancel'
    }

    const { start_date, end_date, transactions } = this.props;
    let TotalSuccess = 0;
    let TotalFail = 0;
    transactions.map((transaction, idx) => {
      const success = transaction.Result.toLowerCase().includes('success');
      if (success) {
        TotalSuccess += parseInt(transaction.Amt);
      } else {
        TotalFail += parseInt(transaction.Amt);
      }
    })
    
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

          <Text style={styles.headerText}>Transaction Report</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.filterView}>
            <View style={styles.filterTopView}>
              <View style={styles.dateSelectView}>
                <DatePicker
                  {...dayPickerStyle}
                  placeholder='From'
                  date={start_date}
                  onDateChange={(date) => { this.updateFilter(date, end_date) }}
                />
                <DatePicker
                  {...dayPickerStyle}
                  placeholder='To'
                  date={end_date}
                  onDateChange={(date) => { this.updateFilter(start_date, date) }}
                />
              </View>
              <View style={styles.statusView}>
                <View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.successText1, { width: 120 }]}>Total Success:</Text>
                    <Text style={styles.successText2}>RM {TotalSuccess}</Text>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.failedText1, { width: 120 }]}>Total Failed:</Text>
                    <Text style={styles.failedText2}>RM {TotalFail}</Text>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.grandText1, { width: 120 }]}>Total Grand:</Text>
                    <Text style={styles.grandText2}>RM {TotalSuccess + TotalFail}</Text>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={this.applyFilter.bind(this)}
            >
              <ImageBackground
                source={images.buttonBG1}
                style={styles.button}
                resizeMode='stretch'
              >
                <Text style={styles.buttonText}>Filter</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.transactionList}>
            {
              transactions.map((transaction, idx) => {
                const success = transaction.Result.toLowerCase().includes('success');
                const imageUrl = this.getImageUrl(transaction.pid);
                return (
                  <View key={idx} style={[styles.transactionView, {marginBottom: transactions.length-1===idx?15:0}]}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text style={styles.transactionIDText}>S_ID: {transaction.ID}</Text>
                      <Text style={styles.transactionFeeText}>Fee: RM {parseInt(transaction.fee).toFixed(2)}</Text>
                    </View>
                    <Text style={styles.transactionTimeText}>{transaction.InsDt}</Text>
                    <View style={styles.digiInfo}>
                      <Image
                        source={{uri: imageUrl}}
                        style={styles.digiIcon}
                        resizeMode='contain'
                      />
                      <View style={styles.transactionStatusView}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <Text style={styles.digiText}>{transaction.phonenumber}</Text>
                          <Text style={styles.digiText}>RM {transaction.Amt}</Text>
                        </View>
                        <Text style={styles.digiText}>{transaction.Name}</Text>
                        {
                          success ?
                          <Text style={styles.digiIDText}>{transaction.TransID}</Text>
                          : null
                        }
                        <Text style={[styles.digiStatusText, {color: success ? '#88C247' : '#FF0000'}]} numberOfLines={2}>{transaction.Result}</Text>
                      </View>
                    </View>
                  </View>
                )
              })
            }
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
    backgroundColor: '#E1E1E1'
  },
  filterView: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#6E7072',
  },
  filterTopView: {
    width: '100%',
    height: 75,
    marginBottom: 10,
    flexDirection: 'row',
  },
  dateSelectView: {
    flex: 1,
    height: '100%',
    marginRight: 30,
    justifyContent: 'space-between'
  },
  dayPicker: {
    width: '100%',
    height: 32,
    padding: 0,
    borderBottomWidth: 1,
    borderColor: '#6E7072'
  },
  statusView: {
    width: 180,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  successText1: {
    color: '#88C247',
    fontSize: 17,
    fontFamily: 'Myriad-Roman',
  },
  successText2: {
    color: '#88C247',
    fontSize: 17,
    fontFamily: 'Myriad-Bold',
  },
  failedText1: {
    color: '#FF0000',
    fontSize: 17,
    fontFamily: 'Myriad-Roman',
  },
  failedText2: {
    color: '#FF0000',
    fontSize: 17,
    fontFamily: 'Myriad-Bold',
  },
  grandText1: {
    color: '#231F20',
    fontSize: 17,
    fontFamily: 'Myriad-Roman',
  },
  grandText2: {
    color: '#231F20',
    fontSize: 17,
    fontFamily: 'Myriad-Bold',
  },
  button: {
    width: 80,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
    backgroundColor: 'transparent'
  },
  transactionList: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  transactionView: {
    width: '100%',
    // height: 130,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 15,
  },
  transactionIDText: {
    marginBottom: 5,
    color: '#231F20',
    fontSize: 17,
    fontFamily: 'Myriad-Roman',
  },
  transactionFeeText: {
    color: '#231F20',
    fontSize: 14,
    fontFamily: 'Myriad-Roman',
  },
  transactionTimeText: {
    color: '#231F20',
    fontSize: 14,
    fontFamily: 'Myriad-Italic',
  },
  digiInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  digiIcon: {
    width: 90,
    height: 55,
  },
  transactionStatusView: {
    flex: 1,
  },
  digiText: {
    color: '#231F20',
    fontSize: 14,
    fontFamily: 'Myriad-Roman',
  },
  digiIDText: {
    color: '#231F20',
    fontSize: 14,
    fontFamily: 'Myriad-Roman',
  },
  digiStatusText: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Myriad-Italic',
  }
});

const mapStateToProps = function (state) {
  const { user, report, products } = state;
  return {
    ...user.user,
    ...report.filter,
    products,
    transactions: report.transactions
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    UpdateFilter,
    ApplyFilter
  }, dispatch);
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(TransactionReport);
