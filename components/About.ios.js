import React from "react"
import {View,  
        Button, 
        Platform,
        Alert,
        Text} from "react-native";
 


export default class About extends React.Component {
    
    static navigationOptions = {
        title: "About"
    }

    componentDidMount() {
        const address = this.props.navigation.state.params['address']
        Alert.alert(address.city)
    }

    render() {
        return (
            <View>
                <Text> About iOS</Text>
                  
            </View>
        )
    }
}