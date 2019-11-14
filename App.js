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
  .then(response =>{this.setState({feeds : response.data.feeds})
})
}

render()
{
  console.log(this.state.feeds);
  console.log("finish");

  return (
    <View style ={styles.container}>
      {
        this.state.feeds.map((value) => 
        <Text key = {value.entry_id}>온도 : {value.field1}      습도 : {value.field2}</Text>)
      }
    </View>
  )



}

}
export default App;

const styles = StyleSheet.create({
  container : {
    flex :1,
    backgroundColor : '#fff',
    alignItems : 'center',
    justifyContent : 'center',
  },
});