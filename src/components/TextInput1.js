/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  Dimentions,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
export default class TextInput1 extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      shouldShowForm: false,
      count:0,
      txtVn: '',
    };
  }
//// change state button
  toggleForm = () => {
    const {txtVn} = this.state;
    if (txtVn.length <= 0) {
      alert('Không có thông tin!');
      return;
    }else{
    this.setState({shouldShowForm: !this.state.shouldShowForm,
    count: this.state.count + 1});
    }};
  toggleFormBack = () => {
    this.setState({shouldShowForm: !this.state.shouldShowForm,
    count: this.state.count - 1});
    this.state.txtVn = '';
    }
  toggleFormBack1 = () => {
    this.setState({shouldShowForm: !this.state.shouldShowForm,
    count: this.state.count - 1});
      }
  toggleFormAward = () => {
    this.setState({shouldShowForm: !this.state.shouldShowForm,
    count: this.state.count + 1});
    }
/////
    renderForm = () => {
      const word = {back: '<Trở về',
                    award: 'Tiếp>'};
      const image1 = { uri: "https://hedieuhanh.com/wp-content/uploads/2019/08/Avatar-dep-nhat-75_112148.jpg" };
      const image2 = { uri: "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-dai-dien-avt-anime-1.jpg" };
      const image3 = { uri: "https://img.thuthuatphanmem.vn/uploads/2018/10/13/anh-dai-dien-dep-de-thuong-nhat_041803834.jpg" };
      if (this.state.count==2) {
        return (
          <View style={{flex: 1,flexDirection:'column'}}>
            <ImageBackground source={image1} style={styles.image}>
              <View style={styles.container4}>
                <View style={styles.containerTouchBack}>
                  <TouchableOpacity
                    onPress={this.toggleFormBack1}
                    style={styles.TouchBack}>
                    <Text style={styles.textStyleBack}>{word.back}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.containerTextTP}>
                    <Text style={styles.textStyleTP}>Thành Phố:</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        );
      }else if (this.state.count==1) {
        return (
          <View style={{flex: 1,flexDirection:'column'}}>
            <ImageBackground source={image2} style={styles.image}>
              <View style={styles.container4}>
                <View style={styles.containerTouchBack}>
                  <TouchableOpacity
                    onPress={this.toggleFormBack}
                    style={styles.TouchBack}>
                    <Text style={styles.textStyleBack}>{word.back}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={this.toggleFormAward}
                    style={styles.TouchAward}>
                    <Text style={styles.textStyleAward}>{word.award}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.containerTextTinh}>
                  <View style={styles.containerTinh}>
                    <Text style={styles.textStyleTinh}>Tỉnh: </Text>
                  </View>
                  <View style={styles.containerTextInput1}>
                    <Text style={styles.textStyleTextInput}>{this.state.txtVn}</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        );
      }else {
        return (
          <View style={{flex: 1,flexDirection:'column'}}>
            <ImageBackground source={image3} style={styles.image}>
              <View style={styles.container2}>
                <View style={styles.containerTextInput}>
                  <TextInput 
  //////change text input
                  ref={(refs) => (this.txtVnRef = refs)}
                  onChangeText={(text) => {
                    this.state.txtVn = text;
                  }}
                  placeholder= "Nhập tên tỉnh" style={styles.textInput} />
                </View>
                <View style={styles.containerTouchSearch}>
                  <TouchableOpacity
                    onPress={this.toggleForm}
                    style={styles.TouchSearch}>
                    <Text style={styles.textStyleSearch}>Tìm</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        );
      }
    };
///// run main
    render() {
      return this.renderForm(); 
    }
};
//// StyleSheet
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    flexDirection: 'column',
    justifyContent: "flex-start"
  },
  //// Screen 2
    container4: {flex: 0.2, flexDirection: 'column'},
  containerTextTinh: {
    flex: 0.7,
    flexDirection: 'row',
  },
  containerTinh: {
    flex: 0.2,
    justifyContent: 'center',
    marginTop: 5,
  },
  textStyleTinh: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 5,
  },
  containerTextInput1: {
    flex: 0.8,
    justifyContent: 'center',
    marginTop: 5,
  },
  textStyleTextInput: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 5,
  },
  containerTextTP: {
    flex: 0.7,
    justifyContent: 'center',
    marginTop: 5,
  },
  textStyleTP: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 5,
  },
  containerTouchBack: {
    flex: 0.3,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  TouchBack: {
    flex: 0.2,
    padding: 2,
    backgroundColor: 'gray',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
    marginTop: 3,
  },
  textStyleBack: {fontSize: 15, fontWeight: '500', color: 'black'},
  TouchAward: {
    flex: 0.2,
    padding: 2,
    backgroundColor: 'gray',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
    marginTop: 3,
  },
  textStyleAward: {fontSize: 15, fontWeight: '500', color: 'black'},
  //// Screen 1
  container: {flex: 1, flexDirection: 'column', backgroundColor: 'pink'},
  container2: {flex: 0.1, flexDirection: 'row', justifyContent: 'center'},
  containerTouchSearch: {
    flex: 0.2,
    alignItems: 'center',
    marginTop: 5,
  },
  containerTextInput: {
    flex : 0.8,
    marginTop: 5,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 5,
    height: 40,
    fontSize: 15,
    paddingHorizontal: 5,
  },
  TouchSearch: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 100,
  },
  textStyleSearch: {fontSize: 15, fontWeight: '500', color: 'black'},
});