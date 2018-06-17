import React from "react"
import {View,  
        Button, 
        Platform,
        ScrollView,
        FlatList,
        Text} from "react-native";

function ProductWidget(props) {
    const product = props.product;

    return (
        <View>
            <Text> Name {product.name}</Text>
            <Text> Price {product.price}</Text>
            <Text> Weight {product.weight}</Text>
            <Text> Year {product.year}</Text>
            <Text> brandId {product.brandId}</Text>
        </View>
    )
}


export default class ProductList extends React.Component {
     
    constructor() {
        super()

        this.state = {
            products: []
        }
    }

    static navigationOptions = {
        title: "Product List"
    }


    _renderItem({item}) {
        return (<ProductWidget product={item} 
                                
                  >

                </ProductWidget>
                )
    }

    
    _keyExtractor(item, index) {
        return item.id;
    }


    componentDidMount() {
        //10.0.2.2 for android
        //127.0.0.1

        const ip = Platform.select({
            ios: "localhost",
            android: "10.0.2.2"
        })

        fetch(`http://${ip}:7070/api/products`)
        .then (response => response.json())
        .then (products => {
            this.setState({products})
        })
    }

    render() {
        return (
            <View>
                <Text> Products {this.state.products.length} </Text>
                <Button title="Refresh" onPress={ ()=> this.setState({flag: true})} />
               
                
                <FlatList 
                    data={this.state.products}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    >

                </FlatList>
                {/* <ScrollView>
                    {
                        this.state.products.map (product => (
                            <ProductWidget product={product} key={product.id} />
                        ))
                    }
                
                </ScrollView> */}

            </View>
        )
    }
}