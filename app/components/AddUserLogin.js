import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import { Picker as SelectPicker } from "@react-native-picker/picker";


const AddUserLogin = () => {
  const [selectedValue, setSelectedValue] = useState("");


  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Manager");

  const handleAddUserLogin = () => {
    fetch(`https://script.google.com/macros/s/AKfycbz2ZUbkljOGJhRSbZCUW21fyvb8HV_y5YiLgawFaRDN2TyZAbq72wcyyf2Ygk-_uvaumg/exec?action=addUserLogin&name=${name}&username=${username}&password=${password}&role=${selectedValue}`)
      .then(response => response.text())
      .then(data => {
        Alert.alert(data);
        setName("");
        setUsername("");
        setPassword("");
        setSelectedValue("");
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>User Information</Text>
      </View>


      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Employee Name</Text>
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
          // Add onChangeText handler if needed
        />
      </View>


      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>UserName</Text>
        <TextInput
          placeholder="Enter your User name"
          style={styles.input}
          value={username}
          onChangeText={text => setUsername(text)}
          // Add onChangeText handler if needed
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          placeholder="Enter your Password"
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          // Add onChangeText handler if needed
        />
      </View>


      <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Role</Text>
        <SelectPicker
          selectedValue={selectedValue}
          style={styles.pickerContainer}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          value={selectedValue}
        >
          <SelectPicker.Item label="Select" value="" />
          <SelectPicker.Item label="Manager" value="Manager" />
          <SelectPicker.Item label="Supervisor" value="Supervisor" />
          <SelectPicker.Item label="Admin" value="Admin" />
        </SelectPicker>
      </View>

      <View style={styles.buttonContainer}>
      <Button title="Add User Login" color="#007AFF" onPress={handleAddUserLogin} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },

  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
  pickerContainer: {
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
  },
});
export default AddUserLogin;
