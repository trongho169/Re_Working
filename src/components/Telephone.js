import React, {Fragment, Component} from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class Telephone extends Component {
  handlePress = async () => {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
   Alert.alert("The film at 2nd:  " + responseJson.movies[2].releaseYear);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render(){
  return(
    <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
         <TouchableOpacity onPress={this.handlePress.bind(this)}>
             <Text style={{fontSize: 20, color: '#FF0000'}}> View film at 2nd </Text>
         </TouchableOpacity>
    </View>

  );
}
}