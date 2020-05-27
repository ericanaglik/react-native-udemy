import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput 
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is {name}</Text>
      <Text>Enter Password:</Text>
      <TextInput 
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 5 ? <Text>Password must be 5 characters or longer</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15
  }
})

export default TextScreen;