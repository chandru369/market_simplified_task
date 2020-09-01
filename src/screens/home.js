import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, View,AsyncStorage ,Alert,BackHandler} from 'react-native';
import {Header,Button,Text} from 'native-base';
import PrimaryApi from '../api/primaryApi'
import ListDisplayComp from '../components/DisplayList'


const HomeScreen = ({navigation})=>{
const [prodDataArr,setProdDataArr] = useState([]);
const [dataFetched,setDataFetched] = useState(false);

function showAlert() {
  Alert.alert(
    "You can logout or exit the app",
    "",
    [
      {
        text: "Logout",
        onPress: async() => {
          cleanUp();
          await AsyncStorage.removeItem('token');
          navigation.navigate('LoginScreen')
        },
        style: "cancel"
      },
      { 
        text: "Exit", onPress: () => {
        BackHandler.exitApp();
        cleanUp();
      }}
    ],
    { cancelable: false }
  )
}

function cleanUp (){
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

const FetchData = async()=>{
   const FetchedData = await AsyncStorage.getItem('FetchedData')
   if(FetchedData)
   {
      const data = JSON.parse(FetchedData);
      setProdDataArr(data) 
       setDataFetched(true);
   }
   else{
    const response = await PrimaryApi.get('/products')
    setProdDataArr(response.data) 
    setDataFetched(true); 
    AsyncStorage.setItem('FetchedData',JSON.stringify(response.data))
   }
}

useEffect(()=>{
   if(!dataFetched)
   {
   FetchData();
}
},[prodDataArr])

if(!dataFetched)
{
  return(
    <View>
      <Header style={{backgroundColor:"#3CAC40",alignItems:"center"}}>
          <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Homse</Text>
      </Header>
    </View>
  )
}
else
{
return(
    <ListDisplayComp prodDataArr={prodDataArr}/>
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
