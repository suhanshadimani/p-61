import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';

export default class HomeScreen extends React.Component {
  nextScreen = () => {
    this.props.navigation.navigate('GoScreen');
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        
        <Text style={styles.displayText}>
          Debugging is the most importanat part of programming since every
          program will always have bugs. One should stay calm and composed while
          debugging, it will help you to debug better. It is always a good
          practice to print values or statements in console or comment the
          sections of your code to identify and fix possible bugs. There are a
          few bugs in this program..Let's see if you can identify and fix them
          to go to the next screen using the "GO" button...All the best..!!
        </Text>
        

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.nextScreen();
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  displayText: {
    marginTop: 40,
    marginLeft:10,
    marginRight: 10,
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
  },

  button: {
    width: 90,
    height: 90,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 60,
    alignItems: 'center',
    borderWidth: 3,
    borderBottomColor: 'blue',
    borderLeftColor: 'yellow',
    borderTopColor: 'blue',
    borderRightColor: 'yellow',
  },

  buttonText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    alignText: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
});
