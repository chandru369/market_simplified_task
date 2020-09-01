import React from 'react';
import { StyleSheet,Image,TouchableOpacity,View } from 'react-native';
import HeaderCompo from './header'



const HeaderBar = ({fetchData}) => {
    return (
        <View style={{flex:1}}>
        <HeaderCompo headerName = {"DashBoard"} /> 
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity onPress={()=>{
          fetchData();
          }}>
          <Image style={{width:100,height:100}} source={require('../../assets/resources/refresh.png')} />
        </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    basic: {
        backgroundColor: "#ffffff"
      },
    iconColour:{
        color:"black"
    },
})


export default HeaderBar;