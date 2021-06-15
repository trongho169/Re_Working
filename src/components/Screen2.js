import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Screen2 extends Component {
    render() {
        return (
            <View style ={{flex:1, backgroundColor:"yellow"}}>
                <Text style ={{fontSize:100, color:"white"}}>2</Text>
            </View>
        )
    }
}