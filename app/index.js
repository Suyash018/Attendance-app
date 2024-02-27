import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginPage from './components/LoginPage'
import SelDate from './components/SelDate'
import UserInfo from './components/UserInfo'
import AddUserLogin from './components/AddUserLogin'


const index = () => {
  return (
    <View style={styles.LoginContainer}>
      <UserInfo/>
    </View>

    

  )
}

export default index

const styles = StyleSheet.create({

  LoginContainer: {
    flex: 1,
    width: '100%',
  },


})