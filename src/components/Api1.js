// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
// import axios from 'axios';

// export default class Api1 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           dataSource: '',
//         };
//     }
//     componentDidMount() {
//         axios({
//             method: 'get',
//             url: 'http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=Hanoi',
//             data: null,
//           })
//           .then(res => {
//                 this.setState({
//                  dataSource: res.data   
//                 })
//                 console.log(dataSource);
//             }).catch(error => {
//                 console.log(error);
//                 })
//             }
//     render() {
//         // var {dataSource} = this.state;
//         return (
//             <View style= {{flex:1}}>
//                 <Text>11111</Text>
//             </View>
//         )
//     }
// }

import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'

export default class Api1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          dataSource: null,
        };
      }
    //   .weather
    componentDidMount(){
        return fetch('http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=Hanoi')
         .then((response) => response.json())
         .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson,
            })
          })
        .catch((error) => {
            console.log(error)
        })
    }
    render() {
        if(this.state.isLoading){
            return (
                <View style={{flex:1,backgroundColor:'pink',justifyContent: 'center',alignItems: 'center'}}>
                    <ActivityIndicator />
                </View>
            )
        }else{
            let dataSource = this.state.dataSource.map((val,key) => {
                return <View key= {key} style={{flex:1}}>
                          <Text>{val.main}</Text></View>
            })
            return (
                <View style={{flex: 1,backgroundColor:'pink',justifyContent: 'center',alignItems: 'center'}}>
                    {dataSource}
                </View>
            )
        }
    }
}

