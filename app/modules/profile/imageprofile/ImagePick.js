import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default function ImagePick(props) {
    const [selectedImage, setSelectedImage] = React.useState(null);
  let ImagePick = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Allow to Camera");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
        return;
      }
  
      setSelectedImage({ localUri: pickerResult.uri });

  }
  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.image1}
        />
      </View>
    );
  }

  
  return (
    <View style={styles.container}>
      <Image source={require("../image/chirayu.jpg")} />
      <TouchableOpacity onPress={ImagePick} style={styles.container}>
        <Text style={styles.input}>Select Image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    image1: {
      width: 200,
      height: 200,
      resizeMode: "contain"
    },
  
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      fontSize: 30,
      fontWeight: "bold",
      color: 'black',
      backgroundColor:"green"
    },
    
  });