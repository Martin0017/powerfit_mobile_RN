import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CardPremios from "../components/WelcomeScreen/CardPremios";
import CardActividades from "../components/WelcomeScreen/CardActividades";
import TestComponents from "./TestComponets";

function WelcomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
      <TestComponents></TestComponents>
      </View>
      <CardPremios
        style={styles.materialCardWithTextOverImage}
        onPress={() => navigation.navigate('RewardsScreen')}
      ></CardPremios>
      <CardActividades
        style={styles.materialCardWithTextOverImage1}
      ></CardActividades>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    zIndex: 1, 
  },
  container: {
    flex: 1
  },
  materialCardWithTextOverImage: {
    height: 221,
    width: 359,
    marginTop: 394,
    marginLeft: 1
  },
  materialCardWithTextOverImage1: {
    height: 221,
    width: 359,
    marginTop: -490,
    marginLeft: 1
  }
});

export default WelcomeScreen;
