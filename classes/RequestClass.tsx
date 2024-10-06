import { Component } from "react";
import { View, Text } from "react-native";


// https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json
export default class RequestClass extends Component<{url: string}, {model: string}>{

    // JSON - javascript object notation
    // language used to model data
    // popular syntaxis for data exchange on the web

    // XML?

    // JSON STRUCTURE
    // every tuple has 2 parts which are:
    // -key
    // -value
    // "key" : "value"
    // tuples are bundled in objects
    /*
    {
        "name" : "some_name",
        "age" : 25,
        "married" : true
    }
    */

    // we can use arrays in json
    // arrays can contain either primitive types or objects
    /*
    {
        some_array : [2, 5, 6, 10, 23]
    }
    {
        another_array: [
            {"name" : "A", "age" : 20},
            {"name" : "B", "age" : 20},
            {"name" : "C", "age" : 20},
        ]
    }
    
    [
        {"name" : "A", "age" : 20},
        {"name" : "B", "age" : 20},
        {"name" : "C", "age" : 20},
    ]
    */

    // LET'S DO THE REQUEST!
    // first time for use we will be talking about asynchronous code
    
    async request(url : string) {

        // when we use var we are inferring the type of a variable
        // based on the value we are saving on it
        var response = await fetch(url);
        var json = await response.json();

        console.log(json);
        console.log(json[1]);
        this.setState(state => {
            return {model : json[1]['modelo']};
        });
    }

    constructor(props : any) {
        super(props);
        this.state = {model : ""};
        this.request(this.props.url);
    }

    render() {
        return(
            <View>
                <Text>
                    HEY! I'M A {this.state.model}
                </Text>
            </View>
        );
    }
}