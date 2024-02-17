import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CardReward from "../components/RewardsScreen/CardReward";
import TestComponents from "./TestComponets";
import { genericGet } from "../services/get";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { genericPut } from "../services/put";

function RewardsScreen({ navigation }) {

  const [ rewards, setRewards ] = useState([]);
  const [ idUser, setIdUser ] = useState("");
  const [ user, setUser ] = useState({});

  const [key, setKey] = useState(0);

const restartScreen = () => {
  setKey(prevKey => prevKey + 1);
};

  useEffect(() => {
    const getRewards = async () => {
      try {
        const { data } = await genericGet('http://147.182.196.110:3001/api_db/reward');
        setRewards(data);
        const value = await AsyncStorage.getItem('@myUserKey');
        setIdUser(value);
        const getUser = await genericGet(`http://147.182.196.110:3001/api_db/user/${idUser}`);
        setUser(getUser.data);
      } catch (error) {
        console.error('Error al obtener los premios:', error);
      }finally{
      }
    };
  
    getRewards();
  }, []);
  
  useEffect(() => {
    const getUser = async () => {
      try {
        const getUser = await genericGet(`http://147.182.196.110:3001/api_db/user/${idUser}`);
        setUser(getUser.data);
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    };
  
    getUser();
  }, [idUser,key]);

  const claimedReward = async (rewardCost) => {
    const newPoints = parseInt(user.puntos) - parseInt(rewardCost);
    if( newPoints < 0){
      alert("Puntos insuficientes");
    }else{
      user.puntos = newPoints;
      const result = await genericPut(`http://147.182.196.110:3001/api_db/user/${idUser}`,user);
      alert("Premio reclamado")
      restartScreen();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <TestComponents></TestComponents>
      </View>
      <View style={styles.rect}>
        <View style={styles.iconRow}>
          <Icon name="trophy" style={styles.icon}></Icon>
          <Text style={styles.loremIpsum}>{user.puntos}</Text>
        </View>
      </View>
      <ScrollView>
      {rewards.map((item, index) => (
        <CardReward style={styles.materialCard12} key={index} data={item} press={claimedReward}></CardReward>
      ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    zIndex: 999,
  },
  container: {
    flex: 1
  },
  rect: {
    width: 129,
    height: 58,
    backgroundColor: "rgba(7,49,97,1)",
    borderRadius: 37,
    flexDirection: "row",
    marginTop: 99,
    marginLeft: 231
  },
  icon: {
    color: "rgba(248,229,10,1)",
    fontSize: 40,
    opacity: 0.62,
    height: 40,
    width: 37
  },
  loremIpsum: {
    fontFamily: 'sans-serif',
    color: "rgba(253,252,252,1)",
    fontSize: 25,
    opacity: 0.82,
    marginLeft: 11,
    marginTop: 6
  },
  iconRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 36,
    marginLeft: 17,
    marginTop: 9
  },
  materialCard12: {
    height: 196,
    width: 359,
    borderRadius: 12,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.31,
    shadowRadius: 0,
    marginTop: 37,
    marginLeft: 1
  }
});

export default RewardsScreen;
