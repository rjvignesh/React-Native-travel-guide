import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from './src/screens/Welcome';
import {Icon} from "@rneui/themed";
import Tabs from './src/screens/Tabs';
const stack = new createNativeStackNavigator();
import Detail from './src/screens/Detail';
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator 
        initialRouteName="welcome"
        >
        <stack.Screen name="welcome" component={Welcome}
          options={{
            headerShadowVisible: false,
            headerStyle:{backgroundColor:"white",border:"transparent"},
            title:null,
            headerRight: ()=>{ return <Icon name="reorder-three-outline" type='ionicon' color="black" size={40}/>}
          }}          
        /> 
        <stack.Screen name="detail" component={Detail}
          options={({navigation})=>({
            headerShown:false
          })}          
        />         
        <stack.Screen name="home" component={Tabs}
          options={({navigation})=>({
            headerShadowVisible: false,
            headerStyle:{backgroundColor:"white",border:"transparent"},
            title:null,
            headerLeft: ()=>{ return <Icon name="arrow-back-circle-outline" type='ionicon' color="black" size={40} onPress={()=>navigation.navigate("welcome")}/>},
            headerRight: ()=>{ return <Icon name="ellipsis-vertical" type='ionicon' color="black" size={30} onPress={()=>navigation.navigate("welcome")}/>}
          })}
        /> 
      </stack.Navigator>
    </NavigationContainer>
  );
}

