import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import ButtonLogin from "../components/LoginScreen/ButtonLogin";
import TextInputUser from "../components/LoginScreen/TextInputUser";
import TextInputPassword from "../components/LoginScreen/TextInputPassword";
import { genericPost } from "../services/post";
import { genericGet } from "../services/get";
import AsyncStorage from '@react-native-async-storage/async-storage';
import GoogleFit, { Scopes } from 'react-native-google-fit';

function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (newText) => {
    setEmail(newText);
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  useEffect(() => {
    async function requestFitPermission() {
      GoogleFit.checkIsAuthorized().then(() => {
        console.log(GoogleFit.authorize) 
    })
    }

    requestFitPermission();
  }, []);

  const login = async () => {
    const data = {};
    data.correo_user = email;
    data.contrasena_user = password;
    const result = await genericPost('http://147.182.196.110:3003/loginmobile', data);
    if (result.success) {
      if(result.data){
          
          const user = await genericPost('http://147.182.196.110:3001/api_db/user/search', data);
          await AsyncStorage.setItem('@myUserKey', user.data.id_user.toString());
          navigation.navigate("WelcomeScreen")

      }else{
        alert("Datos de ingreso incorrectos");
      }
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.materialIconTextboxStackStack}>
        <View style={styles.materialIconTextboxStack}>
          <TextInputUser
            style={styles.materialIconTextbox}
            value={email}
            setText={handleEmailChange}
          ></TextInputUser>
          <Image
            source={require("../assets/images/powerfit8.jpeg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
        <Image
          source={require("../assets/images/powerfit7.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <TextInputPassword
        style={styles.materialIconTextbox1}
        value={password}
        setPassword={handlePasswordChange}
      ></TextInputPassword>
      <ButtonLogin
        style={styles.materialButtonShare}
        onClick={login}
      ></ButtonLogin>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialIconTextbox: {
    height: 43,
    width: 328,
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,0.51)",
    borderRadius: 50,
    overflow: "hidden",
    left: 0,
    top: 179
  },
  image2: {
    top: 0,
    left: 64,
    width: 200,
    height: 200,
    position: "absolute"
  },
  materialIconTextboxStack: {
    top: 94,
    left: 0,
    width: 328,
    height: 222,
    position: "absolute"
  },
  image: {
    top: 0,
    left: 91,
    width: 147,
    height: 162,
    position: "absolute"
  },
  materialIconTextboxStackStack: {
    width: 328,
    height: 316,
    marginTop: 76,
    marginLeft: 16
  },
  materialIconTextbox1: {
    height: 43,
    width: 328,
    backgroundColor: "rgba(230, 230, 230,0.51)",
    borderRadius: 50,
    overflow: "hidden",
    marginTop: 25,
    marginLeft: 16
  },
  materialButtonShare: {
    height: 76,
    width: 79,
    borderRadius: 50,
    marginTop: 49,
    marginLeft: 141
  }
});

export default LoginScreen;
