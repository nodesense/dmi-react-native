import React from "react"
import {View,  
        Button, 
        Platform,
        Text} from "react-native";

export default class ProductList extends React.Component {
     
    static navigationOptions = {
        title: "Product List"
    }

    render() {
        return (
            <View>
                <Text> Products </Text>
                  
            </View>
        )
    }
}