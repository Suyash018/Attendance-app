import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    fetch(
      `https://script.google.com/macros/s/AKfycbzmQPVgtNyoVTGSLhs3ITCSfmB9ziCvw9gD4tCdlGSIVqHw9MDkV0wpAHDdx_T0GIxmCg/exec?action=login&username=${username}&password=${password}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.role === "Invalid") {
          Alert.alert("Invalid Username or Password");
        } else {
          Alert.alert(`Logged in as ${data.role}`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Login</Text>
        <TextInput
          placeholder=" Username"
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder=" Password"
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleLogin} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff', // Ensure contrast with text
  },
  innerContainer: {
    width: "80%", // Adjust width of inner container
  },
  input: {
    fontSize: 20, // Increase text input font size
    height: 60, // Increase text input height
    borderWidth: 2, // Increase border size
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginVertical: 20,
    width: "80%", // Adjust width of button container
    borderRadius: 20, // Increase border radius to make the button round
    overflow: "hidden", // Ensure the overflow doesn't affect other components
  },
});

export default LoginPage;
