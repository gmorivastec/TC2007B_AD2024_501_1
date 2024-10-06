import { Component, ErrorInfo } from "react";
import { Text, View, Button } from 'react-native';

// components can be defined through a class or through a function
// a class will help us understand the lifecycle of a component

// export keyword:
// a member that I will make available for anyone that imports my module
// can be used on the definition 
// or later just with the member's name (functions, variables, not classes)


// we can be strict about the definition of props / State or not
// if we are not we might get error / warnings in our IDE
export class ClassExample extends Component<{name : string, lastName: string}, {count : number, nombre: string}> {

    // docs for the lifecycle 
    // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    // 2 sets / types of variables in a component
    // - props : variables received from the outside as arguments
    // - stat variables : inner variables relevant to component only
    // whenever any of those change a redraw CAN be triggered (default - it does)

    // mounting
    constructor(props : any){
        super(props);

        console.log("CONSTRUCTOR BEING INVOKED");

        // i will add stuff here later
        // we will setup stuff here

        // how to declare state
        // this direct declaration must only be done on the constructor
        this.state = {count: 0, nombre: this.props.name};
    }

    // this is the only obligatory method to define in a component class
    render() {
        console.log("RENDERING");
        return(
            <View>
                <Text>Class component {this.state.nombre}</Text>
                <Text>Another prop: {this.props.lastName}</Text>
                <Text>Current count: {this.state.count}</Text>
                <Button 
                    title="INCREMENT COUNT"
                    onPress={() => {

                        // how to update state
                        this.setState(state => {
                            // as a result of this function
                            // we must return an object 
                            // that will be merged with the current state object
                            return {count: state.count + 1};
                        });
                    }}
                />
            </View>
        );
    }

    componentDidMount(): void {
        console.log("IT DID MOUNT!");
    }

    // update / on-screen
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("AN UPDATE HAPPENED!");
    }

    // unmounting
    componentWillUnmount(): void {
        // use this for cleanup
        console.log("COMPONENT WILL UNMOUNT");
    }
}
