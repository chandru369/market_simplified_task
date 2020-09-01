import React, { useState, useEffect } from 'react';
import {AsyncStorage } from 'react-native';


const LoadingScreen = ({navigation})=>{
const checkUserLoggedIn = async ()=>{
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    if(token) 
    {
        navigation.navigate('HomeScreen');
    }
    else
    {
        navigation.navigate('LoginScreen');
    }
}
useEffect(()=>{
    checkUserLoggedIn();
})
    return(null);
}

export default LoadingScreen;