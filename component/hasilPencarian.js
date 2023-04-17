import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import DataPenerbangan from "./data";
import { FontAwesome5 } from '@expo/vector-icons';

const HasilScreen = ({ route, navigation }) => {
  const tampil = DataPenerbangan[2].map((tgl, index) => {
    if (
      route.params.tgl == tgl ||
      route.params.awal == DataPenerbangan[0][index] ||
      route.params.tujuan == DataPenerbangan[1][index]
    ) {
      return (
        <View style={styles.Wrapbox} key={index}>
          <View style={styles.Wrapbox1}>
            <Text style={styles.textWrapbox1}>{DataPenerbangan[0][index]}</Text>
            <View style={styles.iconWrapbox2}>
              <FontAwesome5 name="plane" size={24} color="green" />
              <Text style={styles.areaBold}>{DataPenerbangan[3][index]}</Text>
            </View>
          </View>
          <View style={styles.Wrapbox3}>
            <Text style={styles.textWrapbox1}>-</Text>
          </View>
          <View style={styles.Wrapbox2}>
            <Text style={styles.textWrapbox1}>{DataPenerbangan[1][index]}</Text>
            <Text style={styles.areaBlue}>{DataPenerbangan[2][index]}</Text>
          </View>
        </View>
      );
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon name="arrow-left" size={30} style={{ color: "white" }} />
        </TouchableOpacity>
        <Icon
          name="user"
          size={40}
          style={{ marginLeft: "auto", marginTop: -30, color: "white" }}
        />
        <Text style={styles.topText}>Hiling.id</Text>
        <Text style={styles.topText2}>Hasil Pencarian Penerbangan</Text>
        <Text style={styles.topText2}>({route.params.tgl})</Text>
      </View>
      <View style={styles.boxBottom}>
        <SafeAreaView style={{ height: 530 }}>
          <ScrollView>{tampil}</ScrollView>
        </SafeAreaView>
        <Text style={{ textAlign: "center", paddingTop: 20 }}>
          Copyright Fujita Rahmah | 120140070
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: "green",
    flex: 1,
    padding: 20,
    marginTop:30,
  },
  topText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  topText2: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "400",
  },
  boxBottom: {
    flex: 5,
  },
  Wrapbox: {
    borderWidth: 3,
    borderRadius: 7,
    padding: 17,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    flexDirection: "row",
  },
  Wrapbox1: {
    flexDirection: "column",
    width: 130,
  },
  Wrapbox2: {
    flexDirection: "column",
  },
  Wrapbox3: {
    flexDirection: "column",
    width: 30,
  },
  textWrapbox1: {
    fontSize: 18,
    fontWeight: "600",
  },
  iconWrapbox2: {
    flexDirection: "row",
  },
  areaBold: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 5,
  },
  areaBlue: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
    color: "blue",
  },
});

export default HasilScreen;
