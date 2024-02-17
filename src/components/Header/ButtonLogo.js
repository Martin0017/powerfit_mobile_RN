import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

function ButtonLogo(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Image
        source={require("../../assets/images/powerfitLogo3.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 2,
    minWidth: 40,
    minHeight: 40
  },
  image: {
    width: 200,
    height: 100,
    alignSelf: "center"
  }
});

export default ButtonLogo;
