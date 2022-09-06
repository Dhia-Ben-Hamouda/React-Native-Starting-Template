import React from "react";
import { Text , View , StyleSheet } from "react-native";

export default function(){
  return(
    <>
      <View style={styles.container}>
        <Text style={styles.text}>
          you can start working !!!
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    fontSize:24
  }
})