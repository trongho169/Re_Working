// function getTimeCity(cityName,callback){
//     const request = require('request');
// /// dung dung cap dau ` ` va ${cityName}
//     const URL = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`; 
//     request(URL,{json:true}, function (error, response, body) {
//         if (error) return callback(error);
//         if (body.cod === '404') return callback(body.message)
//         return callback(null,body.main.temp);
// });
// }
// getTimeCity('Hanoi',(error,temp) => {
//     console.log(error || temp);
// })


// function getTimeCity(cityName){
//     return new Promise((resolve, reject) =>{
//         const request = require('request');
//         const URL = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`; 
//         request(URL,{json:true}, function (error, response, body) {
//             if (error) return reject(error);
//             if (body.cod === '404') return reject(body.message)
//             return resolve(body.main.temp);
//         });
//     })
// }
// getTimeCity('Hanoi')
// .then (temp => console.log(temp))
// .catch(error => console.log(error))

//////// bai 1:
// import React, { Component } from 'react'
// import { Text, View ,FlatList,ScrollView} from 'react-native'

// export default class Api extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           users: [],
//         };
//       }
//     async componentDidMount(){
//         await fetch('http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=Hanoi')
//         .then(res => res.json())
//         .then((data) => {
//             this.setState({users: data.weather})
//         })
//         .catch(console.log(error))
//     }
//     renderUsers = () =>{
//         let users =this.state.users.map((data,key) =>
//             <View key ={key}>
//                 <Text>{data.id}</Text>
//                 <Text>{data.main}</Text>
//                 <Text>{data.description}</Text>
//                 <Text>{data.icon}</Text>
//             </View>
//         )
//         return users;
//     };
//     render() {
//         return (
//             <View>
//             <ScrollView
//               contentInsetAdjustmentBehavior="automatic"
//               style={{ backgroundColor: 'pink'}}>
//               {this.renderUsers()}
//             </ScrollView>
//             </View>
//         )
//     }
// }

//////// bai 3:
import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'

export default class Api1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dataSourceArray: [],
          dataSourceObject: {},
          txt: 'Hanoi',
        };
      }
        // componentDidMount(){
        //     return fetch('http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=Hanoi')
        //         .then((response) => response.json())
        //         .then((responseJson) => {
        //             this.setState({
        //                 dataSourceArray: responseJson.weather,
        //                 dataSourceObject: responseJson.main,
        //             })
        //         })
        //         .catch((error) => {console.log(error)})
        // }
 //// compare city to access website get data   
    compareCityName = (cityName) =>{
            // if(cityName==='Hanoi'){
                return fetch(`http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        dataSourceArray: responseJson.weather,
                        dataSourceObject: responseJson.main,
                    })
                })
                .catch((error) => {console.log(error)})
        // }else{
        //         alert ('City is not find!');
        //     }
    }
    render() {
//// compare city to access website get data
        const {txt} = this.state;
        this.compareCityName(txt);
///// get array from api website to react native
            let dataSourceArray = this.state.dataSourceArray.map((data,key) => {
            return <View key= {key} style={{flex:1,justifyContent: 'space-evenly',alignItems: 'center'}}>
                     <Text>ID:  {data.id}</Text>
                     <Text>Main: {data.main}</Text>
                     <Text>Description: {data.description}</Text>
                     <Text>Icon: {data.icon}</Text></View>})
///// get object from api website to react native
            let {dataSourceObject} = this.state;
            return (
                <View style={{flex: 1,flexDirection: 'column'}}>
                    <View style={{flex: 0.5,backgroundColor:'pink',flexDirection:'column'}}>
                        {dataSourceArray}
                    </View>
                    <View style={{flex: 0.5,backgroundColor:'yellow',justifyContent: 'space-evenly',alignItems: 'center'}}>
                        <Text>Temp: {dataSourceObject.temp}</Text>
                        <Text>Pressure: {dataSourceObject.pressure}</Text>
                        <Text>Humidity: {dataSourceObject.humidity}</Text>
                        <Text>Fells_like: {dataSourceObject.feels_like}</Text>
                    </View>
                </View>
            )
    }
}
