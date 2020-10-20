//import liraries
import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image
} from 'react-native';

import images from '../const/images';

// create a component
class FAQScreen extends Component {
  constructor() {
    super();

    this.state = {
      opened: -1
    }
  }

  renderQA(item, index) {
    const { opened } = this.state;
    const active = opened === index;

    return (
      <View key={index} style={{width: '100%'}}>
        <TouchableOpacity
          style={styles.question}
          onPress={() => {
            if (active) {
              this.setState({opened: -1})
            } else {
              this.setState({opened: index})
            }
          }}
        >
          <Text style={styles.questionText}>{item.Q}</Text>
          {
            !active?
            <Image
              source={images.forward}
              style={styles.arrow}
              resizeMode='contain'
            />
            : null
          }
        </TouchableOpacity>
        {
          active ?
          <View style={styles.answers}>
            {
              item.A.map((answer, idx) => {
                return (
                  <View key={idx} style={styles.answer}>
                    <View style={styles.dot}/>
                    <Text style={styles.answerText}>{answer}</Text>
                  </View>
                )
              })
            }
          </View>
          : <View style={styles.line}/>
        }
      </View>
    )
  }

  render() {
    const testQAs = [{
        Q: 'Why Senzpay?',
        A: ['We keep all your finalcial information securely encrypted an protected with 24/7 anti-fraud monitoring.',
          'We work with local banks so you can use your preferred card/s and continue  earning rewards.',
          "If something goes wrong with your purchase, you're protected by Senzpay's Buyer Protection."]
      }, {
        Q: 'How does Senzpay work?',
        A: ['We keep all your finalcial information securely encrypted an protected with 24/7 anti-fraud monitoring.',
          'We work with local banks so you can use your preferred card/s and continue  earning rewards.',
          "If something goes wrong with your purchase, you're protected by Senzpay's Buyer Protection."]
      }, {
        Q: 'What are the banks linked to Senzpay?',
        A: ['We keep all your finalcial information securely encrypted an protected with 24/7 anti-fraud monitoring.',
          'We work with local banks so you can use your preferred card/s and continue  earning rewards.',
          "If something goes wrong with your purchase, you're protected by Senzpay's Buyer Protection."]
      }]

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

          <Text style={styles.headerText}>Frequently Asked Questions</Text>
        </View>

        <View style={styles.content}>
          {
            testQAs.map((item, index) => {
              return this.renderQA(item, index)
            })
          }
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
    backgroundColor: '#E1E1E1',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 15,
  },
  question: {
    width: '100%',
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  questionText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
  },
  arrow: {
    width: 11,
    height: '100%'
  },
  answers: {
    width: '100%',
    paddingTop: 10,
    paddingRight: 10,
    backgroundColor: '#242E364c'
  },
  answer: {
    width: '100%',
    marginBottom: 15,
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E1E1E1',
    margin: 6
  },
  answerText: {
    flex: 1,
    color: 'black',
    fontSize: 16,
    fontFamily: 'Myriad-Italic',
    textAlign: 'justify'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#242E36'
  }
});

//make this component available to the app
export default FAQScreen;
