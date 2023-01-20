import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WelcomeImage } from "../constants/Images";
import { LinearGradient } from 'expo-linear-gradient';
export default function({navigation}){
    return (
    <SafeAreaView style={styles.container}>
        <View style={{flex:1, justifyContent:"center",alignItems:"center"}
        }>
            <Image source={WelcomeImage}
            resizeMode="cover"
            style={{
                width:"100%",
                height:"100%"
            }}/>
        </View>

        <View style={{flex:1, justifyContent:"space-around",alignItems:"center"}}>
            <Text style={{fontSize:40}}>Digital Ticket</Text>
            <Text style={{width:"80%", textAlign:"center",fontSize:18,fontStyle:"italic"}}>Easy solution to buy tickets for your travel, Business trips, transportation, loading and culinary</Text>

            <TouchableOpacity
            onPress={()=>{console.log("pressed"),console.log(navigation),navigation.navigate("home")}}
            style={{width:"70%",height:"40%",justifyContent:"center",alignItems:"center"}}>    
                <LinearGradient 
                colors={['#46B4FF',"#5B82FF"]} 
                style={{width:"70%",height:"40%",borderRadius:5,justifyContent:"center",alignItems:"center"}}
                start={{x:0,y:0}}
                end={{x:1,y:1}}>
                <Text 
                style={{fontSize:20,textAlign:"center",color:"white"}}>
                    Start!
                </Text>
                </LinearGradient>                    
            </TouchableOpacity>
        </View>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });