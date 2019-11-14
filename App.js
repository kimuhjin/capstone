import React, {Component} from'react';
import {StyleSheet,Text,View} from 'react-native';
import axios from 'axios';

class App extends Component {


constructor(props){
  super(props);
  this.state = {feeds : [] };
}


componentDidMount()
{
  axios.get('https://api.thingspeak.com/channels/904460/feeds.json?results=1')
  .then(response =>{
    this.setState({feeds : response.data.feeds
    }),
    console.log(this.state);
})
}
render()
{
  return (
    <View style ={styles.container}>
      {
        this.state.feeds.map((value) => 
        <View key = {value.entry_id}>
        <Text style ={styles.temp}>온도 : {value.field1}°</Text> 
        <Text style ={styles.hum}>습도 : {value.field2}%</Text>
        </View>)
        
      }
   </View>
    )
}

}
export default App;

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