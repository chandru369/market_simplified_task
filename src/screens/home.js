import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, AsyncStorage, Alert, BackHandler, Platform,ToastAndroid,Image,ActivityIndicator } from 'react-native';
import { Header, Button, Text } from 'native-base';
import PrimaryApi from '../api/primaryApi'
import ListDisplayComp from '../components/DisplayList'
import RefreshViewComp from '../components/refreshView'
import ActivityIndicatorComp from '../components/activityIndicator'
import { useNetInfo } from "@react-native-community/netinfo";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const HomeScreen = ({ navigation }) => {
  const [prodDataArr, setProdDataArr] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const netInfo = useNetInfo();
  function showAlert() {
    Alert.alert(
      "You can logout or exit the app",
      "",
      [
        {
          text: "Logout",
          onPress: async () => {
            await AsyncStorage.removeItem('token');
            navigation.navigate('LoginScreen')
          },
          style: "cancel"
        },
        {
          text: "Exit", onPress: () => {
            BackHandler.exitApp();
          }
        }
      ],
      { cancelable: false }
    )
  }

  function cleanUp() {
    setDataFetched([]);
  }

  useEffect(() => {
    const backAction = () => {
      showAlert();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "HomeBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const FetchData = async () => {
    const FetchedData = await AsyncStorage.getItem('FetchedData');
    if (FetchedData) {
      const data = JSON.parse(FetchedData);
      setProdDataArr(data)
      setDataFetched(true);
    }
    else {
      if (netInfo.isConnected) {
        try{
        const response = await PrimaryApi.get('/products')
        setProdDataArr(response.data)
        setDataFetched(true);
        AsyncStorage.setItem('FetchedData', JSON.stringify(response.data))
        }
        catch(e){
        setProdDataArr([])
        }
      }
      else{
        ToastAndroid.showWithGravity(
          "No Internet Connection",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
    }
  }

  useEffect(() => {
    if (!dataFetched) {
      FetchData();
    }
    return () => {
      cleanUp();
    };
  }, [])

  if (!dataFetched) {
    return (
      <SafeAreaProvider>
      <ActivityIndicatorComp  />
      </SafeAreaProvider>
    )
  }
  else if(prodDataArr.length == 0)
  {
      return(
        <SafeAreaProvider>
        <RefreshViewComp fetchData={FetchData}  />
        </SafeAreaProvider>
      )
  }
  else {
    return (
      <SafeAreaProvider>
      <ListDisplayComp prodDataArr={prodDataArr} />
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default HomeScreen;
