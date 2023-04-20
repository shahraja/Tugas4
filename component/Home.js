import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome5 } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [Awal, setAwal] = useState("");
  const [Tujuan, setTujuan] = useState("");
  const [Tgl, setTgl] = useState("18 Januari 2022");

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Icon name="bars" size={30} style={{ color: "#fff", margin: 20 }} />
        <Icon
          name="user"
          size={40}
          style={{
            color: "#fff",
            marginLeft: "auto",
            marginRight: 20,
            marginTop: -53,
          }}
        />
        <Text style={styles.topText}>Hiling.id</Text>
      </View>
      <View style={styles.boxBottom} />
      <View style={styles.areaInput}>
        <SafeAreaView>
          <Text style={styles.textInputarea}>Lokasi Keberangkatan</Text>
          <View style={styles.Wrapbox}>
            <View style={styles.Wrapbox1}>
              <View>
                <FontAwesome5 name="plane-departure" size={24} color="green" />
              </View>
            </View>
            <View style={styles.Wrapbox2}>
            <TextInput
              placeholder="Masukkan Lokasi Keberangkatan"
              style={styles.Fieldinput}
              onChangeText={(val) => setAwal(val)}
            />
            </View>
          </View>
          <Text style={styles.textInputarea}>Lokasi Tujuan</Text>
          <View style={styles.Wrapbox}>
            <View style={styles.Wrapbox1}>
              <View>
                <FontAwesome5 name="plane-arrival" size={24} color="green" />
              </View>
            </View>
            <View style={styles.Wrapbox2}>
            <TextInput
              placeholder="Masukkan Lokasi Tujuan"
              style={styles.Fieldinput}
              onChangeText={(val) => setTujuan(val)}
            />
            </View>
          </View>
          <Text style={styles.textInputarea}>Tanggal Keberangkatan</Text>
          <View style={styles.Wrapbox}>
            <View style={styles.Wrapbox1}>
              <View>
                <FontAwesome5 name="calendar-alt" size={24} color="green" />
              </View>
            </View>
            <View style={styles.Wrapbox2}>
            <TextInput
              placeholder="Masukkan Tanggal Keberangkatan"
              style={styles.Fieldinput}
              onChangeText={(val) => setTgl(val)}
            />
            </View>
          </View>
        </SafeAreaView>
        <Button
          title="Cari"
          color="#FF7F10"
          onPress={() =>
            navigation.navigate("Hasil Pencarian", {
              awal: Awal,
              tujuan: Tujuan,
              tgl: Tgl,
            })
          }
        />
      </View>
      <Text style={{ textAlign: "center", marginBottom:10,}}>
        Copyright Shah Raja Abdullah Al Turtusi - 120140064
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: "green",
    flex: 1.3,
    marginTop: 30,
  },
  topText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 10,
  },
  boxBottom: {
    backgroundColor: "#fff",
    flex: 1,
  },
  areaInput: {
    backgroundColor: "white",
    position: "absolute",
    top: 150,
    left: 50,
    padding: 20,
    width: 300,
    height: "auto",
    borderRadius: 20,
    borderWidth: 1,
  },
  textInputarea: {
    fontWeight: "700",
    fontSize: 14,
  },
  Fieldinput: {
    height: 40,
    borderRadius: 3,
    padding: 3,
  },
  Wrapbox: {
    borderWidth: 1,
    borderRadius: 7,
    marginTop: 20,
    marginBottom:10,
    flexDirection: "row",
  },
  Wrapbox1: {
    flexDirection: "column",
    borderWidth:4,
    borderColor:"transparent",
  },
  Wrapbox2: {
    flexDirection: "column",
    borderWidth:2,
    borderColor:"transparent",
  },
});

export default HomeScreen;
