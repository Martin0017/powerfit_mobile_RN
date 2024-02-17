import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

function CardPremios(props) {
  const { onPress } = props;
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../../assets/images/moccachinod.jpg")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.cardBody}>
        <View style={styles.actionBody}>
          <TouchableOpacity style={styles.actionButton1} onPress={ onPress }>
            <Text style={styles.reclamarPremios}>RECLAMAR PREMIOS</Text>
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
    backgroundColor: "#FFF",
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
    bottom: 14,
    left: -1,
    right: 6
  },
  actionBody: {
    padding: 8,
    flexDirection: "row"
  },
  actionButton1: {
    padding: 8,
    height: 36,
    width: 346,
    backgroundColor: "rgba(24,23,116,1)",
    alignSelf: "center"
  },
  reclamarPremios: {
    fontSize: 14,
    color: "#FFF",
    opacity: 0.9,
    alignSelf: "center"
  }
});

export default CardPremios;
