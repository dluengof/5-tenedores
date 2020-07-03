import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import Toast from "react-native-easy-toast";
import * as firebase from "firebase";
import Loading from "../../components/Loading";
//import InfoUser from "../../components/Account/InfoUser";
//import AccountOptions from "../../components/Account/AccountOptions";

export default function UserLogged() {

  return (
    <View>
      <Text>UserLogged...</Text>
      <Button title="Cerrar Sesión" onPress={() => firebase.auth().signOut()} />
    </View>
  );
}

