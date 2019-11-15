import React from'react';
import {StyleSheet,Text,View} from 'react-native';
import axios from 'axios';
import { LinearGradient } from "expo-linear-gradient";

export default class extends React.Component {


constructor(props){
  super(props);
  this.state = {
    feeds : []
  };
  axios.get('https://api.thingspeak.com/channels/904460/feeds.json?results=1')
  .then(response =>{
    this.setState({feeds : response.data.feeds,
    })
  const mappingFunction = p=>p.field3
    const value1=this.state.feeds.map(mappingFunction)
    const value2 = value1[0];
    console.log(value2)
    if (value2 >50){
      a = "움직임이 없습니다.";
    }
    else 
    {
      a = "움직임이 감지 되었습니다.";

    }
    console.log(a);    
})
}


componentDidMount(){
  
}


render(){
  return (

    <View style ={styles.container}>
      {
        this.state.feeds.map((value) => 
        <View key = {value.entry_id}>

        <Text style ={styles.temp}>
          거리 : {value.field3}
          </Text>

        <Text style ={styles.hum}>문 열림 체크 : {value.field4}</Text>
        </View>)
      }
   </View>
  
    )
}

}

const styles = StyleSheet.create({
  container : {
    flex :1,
    justifyContent:"center",
    alignItems : "center"

  },
  temp : {
    fontSize: 20,
    alignItems : "center",
    textAlign : "center",
    color: "black"
  },
  hum : {
    fontSize: 20,
    alignItems : "center",
    textAlign : "center",
    color: "black"
  }
});

