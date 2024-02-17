import React, { Component, useState } from "react";
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from "react-native";
import HeaderControl from "../components/Header/HeaderControl";
import MenuSlider from "../components/Header/MenuSlider";

function TestComponents(props) {

  const [isVisible, setIsVisible] = useState(false);
  const slideAnimation = useState(new Animated.Value(-1000))[0];

  const slideIn = () => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
    setIsVisible(true);
  };

  const slideOut = () => {
    Animated.timing(slideAnimation, {
      toValue: -1000,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsVisible(false));
  };

  const handleOutsidePress = () => {
    if (isVisible) {
      slideOut();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={styles.container}>

        {!isVisible && (
          <HeaderControl style={styles.materialHeader11} OnPress={slideIn}></HeaderControl>
        )}
        {isVisible && (
        <View>
          <HeaderControl style={styles.materialHeader11} OnPress={slideOut}></HeaderControl>
          <Animated.View
            style={{
              transform: [{ translateX: slideAnimation }],
            }}>
              <View style={styles.overlay}><MenuSlider>    </MenuSlider></View>
            
          </Animated.View>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999,
  },
  container: {
    flex: 1
  },
  materialHeader11: {
    height: 56,
    width: 370,
    marginTop: 24
  }
});

export default TestComponents;