import React from "react"
import {View,  
        Button, 
        Platform,
        Text} from "react-native";

const Help=Platform.select({
    "android": function() {
        return (
            <Text>Android Help Instruction</Text>
        )
    },
    "ios": function() {
        return (
            <Text>iOS Help Instruction</Text>
        )
    }
})


export default class Like extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            likes: 0
        }
    }

    //ES.NEXT

    incr = () => {
        this.setState({
            likes : this.state.likes + 1
        }, () => {
            console.log("Likes is ", this.state.likes)
        })
    }

    render() {
        return (
            <View>
                <Text> Likes {this.state.likes}</Text>
                <Button title="Incr"
                        onPress={ this.incr} />


                <Help />
                
            </View>
        )
    }
}