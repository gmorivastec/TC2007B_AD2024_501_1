// in this module we will be declaring a component through a function

import { useState } from "react";
import { Text, View, Button, Image, TextInput } from 'react-native';

// IMPORTANT: the component function logic IS the render method
export function Doggy(props: any) {


    // when we declare a variable here it will be re-declared each time 
    // the component is re-rendered

    // a workaround this behaviour are the hooks
    const[isHappy, setIsHappy] = useState(false);
    const[count, setCount] = useState(0);
    const[testInput, setTestInput] = useState("");

    console.log("DOGGY BEING RE-RENDERED!");

    return(
        <View>
            <Text>WOOF. {props.name} {props.age} i'm {isHappy? "HAPPY!" : "SAD :("}</Text>
            <Text>input: {testInput}</Text>
            <Text>today's bark count: {count}</Text>
            <Button 
                title="change happiness"
                onPress={() => {
                    setIsHappy(!isHappy);
                }}
            />
            <Button 
                title="WOOF."
                onPress={() => {
                    setCount(count + 1);
                }}
            />
            <TextInput 
                placeholder="TEXT INPUT TEST"
                onChangeText={text => {
                    setTestInput(text);
                }}
            />
        </View>
    );

}