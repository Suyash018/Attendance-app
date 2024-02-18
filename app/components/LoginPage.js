import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centered}>
        <View style={styles.contai}>
          <TextInput placeholder="Username" style={{ fontSize: 30 }}></TextInput>
        </View>
        <View style={styles.contai}>
          <TextInput placeholder="Password" style={{ fontSize: 30 }}></TextInput>
        </View>
        <View style={styles.butt}>
          <Button title="Login" style={{ fontSize: 30 }}></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  centered: {
    width: '80%', // Adjust this width as needed
  },
  butt: {
    marginVertical: 30,
    width: '100%',
    height: 50,
  },
  contai: {
    height: 50,
    borderWidth: 1,
    marginVertical: 10,
    paddingTop: 5,
  },
});

export default LoginPage;
