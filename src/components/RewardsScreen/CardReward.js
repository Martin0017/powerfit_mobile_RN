import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

function CardReward(props) {

  const { data, press } = props;

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}> {data.nombre_pre}</Text>
          <Text style={styles.subtitleStyle}>{data.descripcion_pre}</Text>
          <Text style={styles.pointStyle}>Puntos: {data.puntos_rq_pre}</Text>
        </View>
        <Image
          source={require("../../assets/images/chai.jpg")}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity style={styles.actionButton1} onPress={() => press(data.puntos_rq_pre)}>
          <Text style={styles.reclamar}>RECLAMAR</Text>
        </TouchableOpacity>
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
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  titleStyle: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  pointStyle: {
    fontSize: 20,
    color: "#000",
    paddingBottom: 8
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 120,
    width: 120,
    margin: 16
  },
  actionBody: {
    padding: 8,
    flexDirection: "row"
  },
  actionButton1: {
    padding: 8,
    height: 36,
    width: 87,
    backgroundColor: "rgba(126,211,33,1)"
  },
  reclamar: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  }
});

export default CardReward;
