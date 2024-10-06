import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClassExample } from './classes/ClassExample';
import { Doggy } from './classes/DoggyComponent';
import Request from './classes/RequestClass';
import RequestFunction from './classes/RequestFunction';

// NOTE FOR ME
// use the same node version each time (20.16.0)

// first concept to understand 
// component - basic building block of a UI
// all components are made up of simpler components
// the most basic ones are the native components

// this is an example of a component function
// returns a UI object

// you can return an object build up tradionally OR use JSX
// JSX is an html-like syntaxis used to define UI in this context
export default function App() {
   /// hey everyone!
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <ClassExample name="Guillermo" lastName="Rivas" ></ClassExample>
      <Doggy name="Firulais" age={3} />
      <Request url="https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json" /> 
      <RequestFunction url="https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
