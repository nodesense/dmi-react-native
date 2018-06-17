import React from "react"
import {View,  
        Button, 
        Platform,
        Text} from "react-native";

export default class Home extends React.Component {
     

    static navigationOptions = {
        title: "Home"
    }

    gotoPage = (pageName) => {
        const address = {city: 'Delhi', state: 'Delhi'}

        this.props.navigation.navigate(pageName, {address})
    }

    render() {
        return (
            <View>
                <Text> Home </Text>
                  
                <Button title="About"
                        onPress={ ()=> this.gotoPage("About")} />

                  <Button title="Like"
                        onPress={ ()=> this.gotoPage("Like")} />

            </View>
        )
    }
}