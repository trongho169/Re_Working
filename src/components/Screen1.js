import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Screen1 extends Component {
    render() {
        return (
            <View style ={{flex:1, backgroundColor:"blue"}}>
                <Text style ={{fontSize:100, color:"white"}}>1</Text>
            </View>
        )
    }
}
