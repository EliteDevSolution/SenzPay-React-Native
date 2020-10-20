//import liraries
import React, { Component } from 'react';
import {
  ScrollView,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

import { connect } from 'react-redux';
import { UpdateProfile, UpdatePassword } from '../actions/user';

import images from '../const/images';

// create a component
class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    const { user } = props;

    this.state = {
      edit: false,
      field: -1,
      text: '',
      name: user.first_name + ' ' + user.last_name,
      email: user.email,
      address: user.address,
      password: user.password,
    };
  }

  exitEdit() {
    const { field, text } = this.state;
    this.setState({edit: false, field: -1});
    if (field === 0) {
      this.setState({name: text});
    } else if (field === 1) {
      this.setState({ email: text });
    } else if (field === 2) {
      this.setState({ address: text });
    } else if (field === 3) {
      this.setState({ password: text });
    }
  }

  onSave = () => () => {
    if (this.state.edit) {
      this.exitEdit();
    }

    const { name, email, address, password } = this.state;
    const { user, UpdateProfile, UpdatePassword } = this.props;
    const prevPassword = user.password;
    let res = name.split(' ', 2);
    const first_name = res[0], last_name = res[1];
    UpdateProfile(email, prevPassword, first_name, last_name, address)
      .then(() => {
        if (password !== prevPassword) {
          UpdatePassword(email, prevPassword, password)
            .then(() => {
              alert('Profile updated successfully!');
            })
        }
      })
  }

  onCancel = () => () => {
    this.props.navigation.goBack();
  }

  render() {
    const { edit, field, text, name, email, address, password } = this.state;
    
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

            <Text style={styles.headerText}>Profile</Text>

            <TouchableOpacity
              style={styles.headerRightButton}
              onPress={() => alert('camera')}
            >
              <Image
                source={images.profileCamera}
                style={styles.headerRightIcon}
                resizeMode='contain'
              />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <View style={styles.photoView}>
              <Image
                source={{uri: 'https://via.placeholder.com/100x100'}}
                style={styles.photo}
                resizeMode='contain'
              />
            </View>

            <View style={styles.infoView}>
              <Image
                source={images.profileUser}
                style={styles.infoIcon}
                resizeMode='contain'
              />
              <View style={styles.infoBox}>
                {
                  edit && field === 0 ?
                    <TextInput
                      ref={ref => this.username = ref}
                      value={text}
                      style={styles.infoInput}
                      onChangeText={(e) => this.setState({ text: e })}
                      onBlur={() => this.exitEdit()}
                      underlineColorAndroid='transparent'
                      autoCapitalize='none'
                    />
                    :
                    <Text style={styles.infoText}>{name}</Text>
                }
                <TouchableOpacity
                  onPress={() => {
                    if (edit && field === 0) {
                      this.exitEdit();
                    } else {
                      this.setState({edit: true, field: 0, text: name});
                      setTimeout(() => {
                        this.username.focus()
                      }, 100)
                    }
                  }}
                >
                  <Text style={styles.editButtonText}>{edit&&field===0 ? 'done' : 'edit'}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.infoView}>
              <Image
                source={images.profileMail}
                style={styles.infoIcon}
                resizeMode='contain'
              />
              <View style={styles.infoBox}>
                {
                  edit && field === 1 ?
                    <TextInput
                      ref={ref => this.email = ref}
                      value={text}
                      style={styles.infoInput}
                      onChangeText={(e) => this.setState({ text: e })}
                      onBlur={() => this.exitEdit()}
                      underlineColorAndroid='transparent'
                      autoCapitalize='none'
                    />
                    :
                    <Text style={styles.infoText}>{email}</Text>
                }
                <TouchableOpacity
                  onPress={() => {
                    if (edit && field === 1) {
                      this.exitEdit();
                    } else {
                      this.setState({edit: true, field: 1, text: email});
                      setTimeout(() => {
                        this.email.focus()
                      }, 100)
                    }
                  }}
                >
                  <Text style={styles.editButtonText}>{edit&&field===1 ? 'done' : 'edit'}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.infoView}>
              <Image
                source={images.profileMap}
                style={styles.infoIcon}
                resizeMode='contain'
              />
              <View style={styles.infoBox}>
                {
                  edit && field === 2 ?
                    <TextInput
                      ref={ref => this.address = ref}
                      value={text}
                      style={styles.infoInput}
                      onChangeText={(e) => this.setState({ text: e })}
                      onBlur={() => this.exitEdit()}
                      underlineColorAndroid='transparent'
                      autoCapitalize='none'
                    />
                    :
                    <Text style={styles.infoText}>{address}</Text>
                }
                <TouchableOpacity
                  onPress={() => {
                    if (edit && field === 2) {
                      this.exitEdit();
                    } else {
                      this.setState({edit: true, field: 2, text: address});
                      setTimeout(() => {
                        this.address.focus()
                      }, 100)
                    }
                  }}
                >
                  <Text style={styles.editButtonText}>{edit&&field===2 ? 'done' : 'edit'}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.infoView}>
              <Image
                source={images.profilePassword}
                style={styles.infoIcon}
                resizeMode='contain'
              />
              <View style={styles.infoBox}>
                {
                  edit && field === 3 ?
                    <TextInput
                      ref={ref => this.password = ref}
                      value={text}
                      style={styles.infoInput}
                      onChangeText={(e) => this.setState({ text: e })}
                      onBlur={() => this.exitEdit()}
                      underlineColorAndroid='transparent'
                      secureTextEntry
                    />
                    :
                    <Text style={styles.infoText}>********</Text>
                }
                <TouchableOpacity
                  onPress={() => {
                    if (edit && field === 3) {
                      this.exitEdit();
                    } else {
                      this.setState({edit: true, field: 3, text: password});
                      setTimeout(() => {
                        this.password.focus()
                      }, 100)
                    }
                  }}
                >
                  <Text style={styles.editButtonText}>{edit&&field===3 ? 'done' : 'Change password'}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.buttonBox}>
              <TouchableOpacity
                style={{marginRight: 15}}
                onPress={this.onSave()}
              >
                <ImageBackground
                  source={images.buttonBG1}
                  style={styles.button}
                  resizeMode='stretch'
                >
                  <Text style={styles.buttonText}>Save</Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={this.onCancel()}
              >
                <ImageBackground
                  source={images.buttonBG1}
                  style={styles.button}
                  resizeMode='stretch'
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </ImageBackground>
              </TouchableOpacity>
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
    flex: 1
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
  headerRightButton: {
    marginLeft: 12,
    marginRight: 12,
  },
  headerRightIcon: {
    width: 25,
    height: 25
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Myriad-Italic',
    flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: '#E1E1E1',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  photoView: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginBottom: 10,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoView: {
    width: '100%',
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoIcon: {
    width: 23,
    height: 23,
    marginRight: 20,
  },
  infoBox: {
    flex: 1,
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#242E36',
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoInput: {
    flex: 1,
    padding: 0,
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
  },
  infoText: {
    flex: 1,
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
  },
  editButtonText: {
    fontSize: 15,
    fontFamily: 'Myriad-Italic',
    color: '#B9B6B1'
  },
  buttonBox: {
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {
    width: 130,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
    backgroundColor: 'transparent'
  }
});

const mapStateToProps = function (state) {
  const { user } = state;
  return {
    user: user.user
  }
};

//make this component available to the app
export default connect(mapStateToProps, { UpdateProfile, UpdatePassword })(ProfileScreen);
