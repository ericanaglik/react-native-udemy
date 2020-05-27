import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Go to Text Demo"
        onPress={() => navigation.navigate('Text')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;