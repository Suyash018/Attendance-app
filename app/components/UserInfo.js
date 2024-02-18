import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image
} from "react-native";
import React, {useState} from "react";
import * as ImagePicker from 'expo-image-picker';


const UserInfo = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={ styles.centered }>
      {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200}} />
        )}
        <Text>                </Text>
        <Button title="Select Image" style={{padding:20}} onPress={pickImage} />
      </View>

      <View style={styles.centered}>
        <Text style={{ fontSize: 30 }}>Name</Text>
        <View style={styles.contai}>
          <TextInput
            placeholder="Username"
            style={{ fontSize: 20 }}
          ></TextInput>
        </View>

        <Text style={{ paddingTop: 10, fontSize: 20 }}>Mobile no.</Text>
        <View style={styles.contai}>
          <TextInput
            keyboardType="numeric"
            placeholder="Mobile no."
            style={{ fontSize: 20 }}
          ></TextInput>
        </View>

        <View style={styles.butt}>
          <Button title="Save" style={{ fontSize: 30 }}></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centered: {
    width: "80%",// Adjust this width as needed
  },
  contai: {
    height: 50,
    borderWidth: 1,
    marginVertical: 10,
    paddingTop: 5,
  },
  butt: {
    marginVertical: 30,
    width: "100%",
    height: 50,
  },
});
