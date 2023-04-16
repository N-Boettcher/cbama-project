import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Camera() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Camera</Text>
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
            <Button onPress={this._onPressButton} title="Gallery" color="#9400d3"/>
            <Button onPress={this._onPressButton} title="Take Picture" color="#9400d3"/>
            <Button onPress={this._onPressButton} title="Analyze" color="#9400d3" />
      </View>
    </View>
  );
}

function App() {
  const ref = React.useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer ref={ref}>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="Home Screen" component={() => <View></View>} />
          <Stack.Screen name="Home" component={Camera} />
        </Stack.Navigator>
      </NavigationContainer>
      <Button
        onPress={() => ref.current && ref.current.navigate('Home')}
        title="Camera"
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  alternativeLayoutButtonContainer: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}
);