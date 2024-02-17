import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

function CardActividades(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../../assets/images/actividadpasos2.jpg")}
        resizeMode="cover"
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.cardBody}>
        <View style={styles.actionBody}>
          <TouchableOpacity style={styles.actionButton1}
          onPress={() => navigation.navigate('WelcomeScreen')}
          >
            <Text style={styles.elegirMetaSemanal}>ELEGIR META SEMANAL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#181774",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    flex: 1,
    minHeight: 359
  },
  cardBody: {
    position: "absolute",
    bottom: 13,
    backgroundColor: "rgba(0,0,0,0.2)",
    left: 0,
    right: 359,
    height: 56
  },
  actionBody: {
    padding: 8,
    flexDirection: "row"
  },
  actionButton1: {
    padding: 8,
    height: 37,
    width: 344,
    backgroundColor: "rgba(24,23,116,1)",
    alignSelf: "center"
  },
  elegirMetaSemanal: {
    fontSize: 16,
    color: "#FFF",
    opacity: 0.9,
    alignSelf: "center"
  }
});

export default CardActividades;
