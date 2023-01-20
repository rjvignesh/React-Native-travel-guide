
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Home from "./Home"
import { Text } from "react-native";
import {Icon} from "@rneui/themed";

const tabBot = new createBottomTabNavigator();
export default function(){
    return (
        <tabBot.Navigator
        screenOptions={({route})=>({
            tabBarActiveTintColor:"blue",
            tabBarInactiveTintColor:"gray",
            headerShown:false,
            tabBarShowLabel:false,
            tabBarIcon: ({color})=>{
                switch(route.name){
                    case "Home":{
                        return <Icon 
                                name="home"
                                type="ionicon"
                                size={25}
                                color={color}
                                />
                    }
                    case "Search":{
                        return <Icon 
                                name="search"
                                type="ionicon"
                                color={color}
                                size={25}/>
                    }
                    case "Saved":{
                        return <Icon 
                                name="bookmark"
                                type="ionicon"
                                color={color}
                                size={25}/>
                    }
                    case "Profile":{
                        return <Icon 
                                name="person"
                                type="ionicon"
                                color={color}
                                size={25}/>
                    }                                                            
                }
            }
        })}>
            <tabBot.Screen name="Home" component={Home}/>
            <tabBot.Screen name="Search" component={Home}/>
            <tabBot.Screen name="Saved" component={Home}/>
            <tabBot.Screen name="Profile" component={Home}/>
        </tabBot.Navigator>
    )
}