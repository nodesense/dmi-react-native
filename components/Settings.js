import React from "react"
import {View,  
        Button, 
        Platform,
        Text} from "react-native";

export default class Settings extends React.Component {
     

    static navigationOptions = {
        title: "Settings"
    }


    render() {
        return (
            <View>
                <Text> Settings </Text>
                  
            </View>
        )
    }
}