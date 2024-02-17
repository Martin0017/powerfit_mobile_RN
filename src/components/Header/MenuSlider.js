import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import ButtonTusRegistros from "./ButtonTusRegistros";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import ButtonTusMetas from "./ButtonTusMetas";
import EntypoIcon from "react-native-vector-icons/Entypo";
import ButtonTusPuntos from "./ButtonTusPuntos";
import ButtonCuenta from "./ButtonCuenta";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import ButtonSoporte from "./ButtonSoporte";
import ButtonLogo from "./ButtonLogo";

function MenuSlider(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.rect2}></View>
          <View style={styles.rect3}></View>
        </View>
        <ButtonTusRegistros
          caption="Tus Registros      "
          style={styles.materialButtonWithVioletText}
        ></ButtonTusRegistros>
        <FontAwesomeIcon name="table" style={styles.icon}></FontAwesomeIcon>
        <ButtonTusMetas
          button="Tus Metas            "
          style={styles.materialButtonWithVioletText1}
        ></ButtonTusMetas>
        <EntypoIcon name="back-in-time" style={styles.icon2}></EntypoIcon>
        <ButtonTusPuntos
          button="Tus Puntos           "
          style={styles.materialButtonWithVioletText2}
        ></ButtonTusPuntos>
        <EntypoIcon name="pinterest" style={styles.icon3}></EntypoIcon>
        <Image
          source={require("../../assets/images/line.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Text style={styles.configuracion}>Configuración</Text>
        <ButtonCuenta
          caption="Cuenta                   "
          style={styles.materialButtonWithVioletText3}
        ></ButtonCuenta>
        <MaterialCommunityIconsIcon
          name="account-circle"
          style={styles.icon4}
        ></MaterialCommunityIconsIcon>
        <ButtonSoporte
          button="Soporte                  "
          style={styles.materialButtonWithVioletText4}
        ></ButtonSoporte>
        <EntypoIcon name="help-with-circle" style={styles.icon5}></EntypoIcon>
        <ButtonLogo
          style={styles.materialButtonShare1}
        ></ButtonLogo>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    zIndex: 3, // Asegura que el componente se superponga a todo
  },
  container: {
    flex: 1,
    zIndex: 10,
  },
  rect: {
    top: 0,
    left: 0,
    width: 242,
    height: 724,
    position: "absolute",
    backgroundColor: "rgba(36,129, 129,0.47)"
  },
  rect2: {
    flex: 0.23,
    backgroundColor: "rgba(36,129, 129,0.71)"
  },
  rect3: {
    flex: 0.77,
    backgroundColor: "rgba(41,41,41,1)"
  },
  materialButtonWithVioletText: {
    height: 44,
    width: 242,
    position: "absolute",
    left: 0,
    top: 187
  },
  icon: {
    position: "absolute",
    color: "rgba(242,241,241,1)",
    fontSize: 30,
    left: 25,
    top: 194
  },
  materialButtonWithVioletText1: {
    height: 44,
    width: 242,
    position: "absolute",
    left: 0,
    top: 231
  },
  icon2: {
    top: 236,
    left: 25,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 30
  },
  materialButtonWithVioletText2: {
    height: 44,
    width: 242,
    position: "absolute",
    left: 0,
    top: 275
  },
  icon3: {
    top: 280,
    left: 25,
    position: "absolute",
    color: "rgba(252,250,250,1)",
    fontSize: 30
  },
  image2: {
    top: 483,
    left: 0,
    width: 242,
    height: 22,
    position: "absolute"
  },
  configuracion: {
    top: 503,
    left: 25,
    position: "absolute",
    fontFamily: 'sans-serif',
    color: "rgba(129,126,126,1)",
    fontSize: 13
  },
  materialButtonWithVioletText3: {
    height: 44,
    width: 242,
    position: "absolute",
    left: 0,
    top: 541
  },
  icon4: {
    top: 547,
    left: 20,
    position: "absolute",
    color: "rgba(250,250,250,1)",
    fontSize: 30
  },
  materialButtonWithVioletText4: {
    height: 44,
    width: 242,
    position: "absolute",
    left: 0,
    top: 585
  },
  icon5: {
    top: 591,
    left: 20,
    position: "absolute",
    color: "rgba(250,247,247,1)",
    fontSize: 30
  },
  materialButtonShare1: {
    height: 149,
    width: 242,
    position: "absolute",
    left: 0,
    top: 15,
    backgroundColor: "#459393"
  },
  rectStack: {
    width: 242,
    height: 724,
    marginTop: 0
  }
});

export default MenuSlider;
