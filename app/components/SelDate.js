import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker as SelectPicker } from "@react-native-picker/picker";

const formatDate = (date) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = days[date.getDay()];
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = months[date.getMonth()];
  const yyyy = date.getFullYear();
  return `${day}, ${dd}, ${mm}, ${yyyy}`;
};

const SelDate = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState(formatDate(date));
  const [selectedValue, setSelectedValue] = useState("Option 1");

  const togglePicker = () => {
    setShow(!show);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type === "set") {
      togglePicker();
      const currentDate = selectedDate || date;
      setDate(currentDate);
      setCheck(formatDate(currentDate));
    } else {
      togglePicker();
    }
  };

  return (
    <SafeAreaView style={styles.container}>


      <Text style={{ paddingTop: 10, fontSize: 30 }}>Select date</Text>
      <TouchableOpacity onPress={togglePicker}>
        <View style={styles.TotTime}>
          <Text style={{ backgroundColor: "white", fontSize: 30 }}>{check}</Text>
        </View>
      </TouchableOpacity>
      {show && <DateTimePicker mode="date" value={date} onChange={onChange} />}



      <Text style={{ paddingTop: 10, fontSize: 30 }}>Total Time</Text>
      <View style={styles.TotTime}>
        <TextInput keyboardType="numeric" placeholder="Enter Total Time" style={{ fontSize: 20 }} />
      </View>


      <Text style={{ paddingTop: 10, fontSize: 30 }}>Morning / Night</Text>
      <View style={styles.pickerContainer}>
        <SelectPicker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <SelectPicker.Item label="Morning" value="Morning" />
          <SelectPicker.Item label="Night" value="Night" />
        </SelectPicker>
      </View>

      <View style={styles.butt}>
        <Button title="Next" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  butt: {
    width: "80%",
    marginHorizontal: 40,
    marginVertical: 20,
    height: 50,
  },
  TotTime: {
    width: "80%",
    marginHorizontal: 40,
    marginVertical: 20,
    padding: 5,
    height: 70,
    borderWidth: 5,
  },
  pickerContainer: {
    width: "80%",
    marginHorizontal: 40,
    marginVertical: 20,
    borderWidth: 5,
  },
  picker: {
    height: 50,
    fontSize: 30,
  },
});

export default SelDate;
