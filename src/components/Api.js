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

import React, { Component } from 'react'
import { Text, View ,FlatList,ScrollView} from 'react-native'

export default class Api extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: []
        };
      }
    async componentDidMount(){
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
            this.setState({users: data})
        })
        .catch(console.log(error))
    }
    renderUsers = () =>{
        let users =this.state.users.map((data) =>
            <View key ={data.id}>
                <Text>{data.id}</Text>
                <Text>{data.name}</Text>
                <Text>{data.email}</Text>
                <Text>{data.website}</Text>
            </View>
        )
        return users;
    };
    render() {
        return (
            <View>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={{ backgroundColor: 'pink'}}>
              {this.renderUsers()}
            </ScrollView>
            </View>
        )
    }
}


const request = require('request');
const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=Hanoi'
request(URL,{json:true}, function (error, response, body) {
    if (error) return console.log(error);
    return console.log(body);
});

function getTimeCity(cityName){
    return new Promise((resolve, reject) =>{
        const request = require('request');
        const URL = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`; 
        request(URL,{json:true}, function (error, response, body) {
            if (error) return reject(error);
            if (body.cod === '404') return reject(body.message)
            return resolve(body.main.temp);
        });
    })
     getTimeCity('Hanoi')
     .then (temp => console.log(temp))
     .catch(error => console.log(error))}