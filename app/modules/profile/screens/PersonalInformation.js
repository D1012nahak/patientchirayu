import React, { useState } from "react";
import { View, Picker, StyleSheet,Text,TouchableOpacity,TextInput, ScrollView,Image,SafeAreaView} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import ImagePick from "../imageprofile/ImagePick"




const PersonalInformation = (props) => {
  const [text, onChangeText] = React.useState();
  const [text1, onChangeText1] = React.useState();
  const [text2, onChangeText2] = React.useState();
  const [number1, onChangeNumber1] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [text3, onChangeText3] = React.useState();
  


  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        
        <Text style={{fontSize:20,textAlign:"center",backgroundColor:"grey"}}>Your Details</Text>
        
  
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="First name"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        value={text1}
        placeholder="Middle name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        value={text2}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Personal Mobile Number"
        keyboardType="number-pad"
      />
      <Text style={{fontSize:20,textAlign:"center",backgroundColor:"grey"}}>Profile Photo</Text>

      <ImagePick onPress={props.ImagePick}/>

      <Text style={{fontSize:20,textAlign:"center",backgroundColor:"grey"}}>Banner Photo</Text>

      <ImagePick onPress={props.ImagePick} style={styles.input}/>
      
      <TouchableOpacity  style={styles.input}>
        <Text style={styles.titleText}>Save & Update</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex:1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal:10,
    display:"flex",
    borderRadius:10,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: 'green',
    backgroundColor:"white"
  }
  });


export default PersonalInformation;
