import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity,FlatList } from "react-native";
import { HomeImage,ScrImage1,ScrImage2,ScrImage3,ScrImage4,ScrImage5,ScrImage6 } from "../constants/Images";
import {LinearGradient} from "expo-linear-gradient";
import {Icon} from "@rneui/themed";

const ARTICLES1 = [
    {icon:"airplane",
     color:["#97D4FA","#6891FF"],
     title:"Flight"},
     {icon:"train",
     color:["#FCE19D","#FADA12"],
     title:"Train"},
     {icon:"bus",
     color:["#E175A6","#D45DF0"],
     title:"Bus"},
     {icon:"car",
     color:["#FCCAC4","#FE6ABD"],
     title:"Taxi"}               
]

const ARTICLES2 = [
    {icon:"bed",
     color:["#FBC66A","#FFA062"],
     title:"Hotel"},
     {icon:"restaurant",
     color:["#8AF1F9","#4FC0FF"],
     title:"Eat"},
     {icon:"tennisball",
     color:["#7DEA93","#4DC3A8"],
     title:"Adventure"},
     {icon:"today",
     color:["#F6A89F","#FF7C6D"],
     title:"Event"}               
]

const DATA = [
    {
        id:1,
        img:ScrImage1,
        imgText:"image1"
    },
    {
        id:2,
        img:ScrImage6,
        imgText:"image2"
    },
    {
        id:3,
        img:ScrImage3,
        imgText:"image3"
    },
    {
        id:4,
        img:ScrImage4,
        imgText:"image4"
    },
    {
        id:5,
        img:ScrImage5,
        imgText:"image5"
    },
    {
        id:6,
        img:ScrImage6,
        imgText:"image6"
    },                    
]

const articleDis = ({icon,color,title})=>{
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={{width:50,height:50}}>
                <LinearGradient
                style={{width:50,height:50,justifyContent:"center",alignItems:"center",borderRadius:10}}
                colors={color}
                start={{x:0,y:0}}
                end={{x:0,y:1}}>
                    <Icon 
                    name={icon}
                    type="ionicon"
                    color={"white"}
                    size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            <Text style={{padding:5,fontSize:12}}>{title}</Text>
        </View>
    )
}
const renderData = ({item})=>{
    const {img,imgText} = item;
    return (
    <View style={{width:120,height:"80%",padding:5}}>
        <TouchableOpacity>
        <Image
            source={img}
            resizeMode="cover"
            style={{height:"100%",width:"100%",borderRadius:10,backgroundColor:"gray"}}
        />
        </TouchableOpacity>
        <Text style={{padding:5}}>{imgText}</Text>
    </View> )
}

export default function({navigation}){
    return (
        <SafeAreaView style={styles.container}>
            <View 
            
            style={{flex:1,marginTop:10,paddingHorizontal:20}}>
            <Image 
            source={HomeImage}
            resizeMode="cover"
            style={{width:"100%",height:"100%",borderRadius:15}}
            />
            </View>
            <View style={{flex:0.75,padding:10}}>
                <View style={{flex:1,padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                    {ARTICLES1.map((item)=>{
                        return articleDis(item)
                    })}
                </View>
                <View style={{flex:1,padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                    {ARTICLES2.map((item)=>{
                        return articleDis(item)
                    })}
                </View>
            </View>
            <View style={{flex:1.25,paddingHorizontal:20}}>
                <Text 
                onPress={()=>navigation.navigate("detail")}
                style={{padding:10,fontSize:15}}>Destination</Text>
                <View>
                    <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    keyExtractor={(item)=>item.id}
                    renderItem={(item)=>renderData(item)}
                    />
                </View> 
            </View>        
               
            </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });