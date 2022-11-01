import { Camera,CameraType, FlashMode } from 'expo-camera'
import React, { useRef, useState } from 'react'
import { Alert, Button, Text, TouchableOpacity, View,StyleSheet, Image } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from 'react-native-safe-area-context';
let camera: Camera;

const MyGarden = () => {

  return (
    <SafeAreaView edges={['top', 'left', 'right','bottom']} style={styles.gardenSafeArea}>
      <Image style={styles.hangingImage}
        source={require('../assets/top-bg.png')}
      />
      <View style={styles.gardenContainer}>
        <Text style={styles.capsHeading}>HAPPY PLANTS</Text>
        <Text style={styles.mainHeading}>My garden</Text>
        <View style={{display:'flex', alignItems:'center',justifyContent:'flex-end',paddingTop:140}}>
          <Image source={require('../assets/no_plant_img.png')} style={styles.noPlantImg}/>
          <Text>There are no plants in garden</Text>
        </View>
        <TouchableOpacity style={styles.cameraButton}>
          <Ionicons name="ios-search" color="red" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  gardenSafeArea:{
    display:'flex',
    position:'relative'
  },
  gardenContainer:{
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight:20
  },
  mainHeading:{
    fontSize: 35,
    fontWeight:'700',
    color:'#163236'
  },
  noPlantImg:{
    width:200,
    height:100
  },
  capsHeading:{
    color:'#163236'
  },
  hangingImage:{
    position:'absolute',
    right:-160,
    width:280,
    height:380,
    top:0
  },
  cameraButton: {
    height: 20,
    width:20,
    backgroundColor:'green',
    position: 'absolute',
    color:'#fff',
    right:30,
    top: 60,
    borderRadius: 20
  }
});


export default MyGarden