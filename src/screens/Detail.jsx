import { Icon } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { detailsImg1, villaImg } from "../constants/Images" 

const startRating = (rate)=>{
    const fullStar = Math.floor(rate);
    const emptyStar = 5 - Math.ceil( rate );
    const halfStar = 5 - fullStar - emptyStar;
    const halfStart = fullStar + halfStar;
    const emptyStart = fullStar + halfStar + 1;
    const ratingArr = [1,2,3,4,5];

    // console.log(fullStar, emptyStart);
    return <View style={{flexDirection:"row"}}>
    {ratingArr.map((item)=>{
        console.log(item,fullStar, emptyStart);
        if (item <= fullStar){
            return <Icon
                    name="star"
                    type="ionicon"
                    color={"#FFC028"}
                    size={15}
                    />
        }
        else if( item >= emptyStart ){
            return <Icon
                    name="star-outline"
                    type="ionicon"
                    color={"#FFC028"}
                    size={15}
                    />            
        }else{
            return <Icon
                    name="star-half"
                    type="ionicon"
                    color={"#FFC028"}
                    size={15}/>                
        }
    })}
    </View>
}

export default function({navigation}){
    return (
        <View style={styles.container}>
            <View style={{flex:1,alignItems:"center"}}>

                <View style={{width:"100%",height:"80%"}}>
                        <Image 
                            source={detailsImg1}
                            resizeMode="stretch"
                            style={{width:"100%",height:"100%"}}/>
                <View style={{position:"absolute",top:40,left:20}}>
                    <TouchableOpacity onPress={()=>navigation.navigate("home")}>                    
                        <Icon
                        name="chevron-back-circle"
                        type="ionicon"
                        color="white"
                        size={40}/>
                    </TouchableOpacity>
                </View>                            
                </View>
                <View style={[styles.shadow,{height:"30%",width:"80%",position:"absolute", padding:10,
                borderRadius:10,bottom:0,backgroundColor:"white"}]}>
                    <View style={{flex:1.2,flexDirection:"row"}}>
                        <View style={{flex:0.2,padding:5}}>
                        <Image
                            source={villaImg}
                            resizeMode={"cover"}
                            style={{height:"100%",width:"100%",borderRadius:10}}
                        />

                        </View>
                        <View style={{flex:0.8,backgroundColor:"white",paddingHorizontal:10}}>
                            <Text>Ski Villa</Text>
                            <Text style={{fontSize:10,color:"gray"}}>France</Text>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <View>
                                    {startRating(1.5)}
                                </View>
                                <Text style={{paddingHorizontal:5}}>4.5</Text>
                            </View>
                        </View>    
                    </View>
                    <View style={{flex:0.8}}>
                        <Text style={{color:"gray",textAlign:"justify",fontSize:12,lineHeight:20}}>Ski Villa offers simple toms with mountain views in front of the ski lift to the Ski Resort</Text>
                    </View>
                </View>
            </View>
            <View style={{flex:1,paddingHorizontal:20}}>
                <View style={{flex:0.25}}>
                    <View style={{flex:1,flexDirection:"row",justifyContent:"space-evenly"}}>
                        <View style={{justifyContent:"center",alignItems:"center"}}>
                            <Icon 
                                name="home"
                                type="ionicon"
                                color="#73A1FC"
                                size={40}
                            />                            
                            <Text> Villa </Text>
                        </View>
                        <View style={{justifyContent:"center",alignItems:"center"}}>
                            <Icon 
                                name="car-sport"
                                type="ionicon"
                                color="#73A1FC"
                                size={40}
                            />                            
                            <Text> Parking </Text>
                        </View>
                        <View style={{justifyContent:"center",alignItems:"center"}}>
                            <Icon 
                                name="cloudy-night"
                                type="ionicon"
                                color="#73A1FC"
                                size={40}
                            />                            
                            <Text> 4˙C </Text>
                        </View>                                                
                    </View>
                </View>
                <View style={{flex:0.50}}>
                    <Text style={{paddingBottom:10,fontSize:20}}>About</Text>
                    <Text style={{color:"gray",height:"80%",textAlign:"justify",lineHeight:30}}>Located in the APls with an altitude of 1,702 meters. This ski area is the largest ski area in the world and is known as the best place to ski. Many other facilities, such as a fitness center, sauna,, stream room to star-rated restaurant</Text>
                </View>
                <View style={{flex:0.25,paddingBottom:20}}>
                        <LinearGradient
                        style={{width:"100%",height:"80%",borderRadius:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}
                        colors={["#F0F2FF","#73A1FC"]}
                        start={{x:0,y:0}}
                        end={{x:1,y:1}}>
                            <Text style={{fontSize:30,padding:10}}>$1000</Text>
                            <TouchableOpacity style={{
                                padding:10,
                                width:"50%",
                                height:"100%"
                            }}>
                                <LinearGradient
                                    style={{borderRadius:10,width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}
                                    colors={["#4AABFE","#5984FF"]}
                                    start={{x:0,y:0}}
                                    end={{x:1,y:1}}                                
                                >
                                    <Text style={{
                                        color:"white",
                                        fontSize:20
                                    }}>BOOKING</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </LinearGradient>
                </View>

            </View>
          
        </View>
    )
}

const styles = StyleSheet.create({
    container:{flex:1,
    backgroundColor:"white"},
    shadow:{
        shadowColor:"gray",
        shadowOffset: {width:0,height:10},
        shadowOpacity:0.2,
        shadowRadius:5,
        elevation:10
    }
})