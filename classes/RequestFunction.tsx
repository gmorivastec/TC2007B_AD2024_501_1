import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";

// A THING TO REMEMBER - 
// a functional component's body is the render() method 
// in the lifecycle

export default function RequestFunction(props : any ) {

    const[data, setData] = useState([]);

    // define the request function
    async function request() {

        var response = await fetch(props.url);
        var json = await response.json();
        console.log(json);
        setData(json);
    }

    // so far the request is looping which is an unwanted behaviour

    // how to avoid this?
    // LET'S USE ANOTHER HOOK!
    useEffect(() => {
        request();    
    }, []);

    return(
        <View>
            {
                data.length > 0 ?
                    <FlatList
                        data={data} 
                        renderItem={({item}) => {
                            // this is the logic that will be used to render
                            // each individual item in the list
                            return (
                                <View>
                                    <Text>{item['modelo']}</Text>
                                </View>
                            );
                        }}
                    /> 
                :
                    <ActivityIndicator size="large" />
            }
            
        </View>
    );
} 