import React from 'react';
import { StyleSheet,Image, ScrollView, Text,View} from 'react-native';
import { Component } from "react/cjs/react.production.min";

const logo = {
  uri: 'https://www.rollingstone.com/wp-content/uploads/2021/07/elton-john-on-dababy.jpg',
  width: 64,
  height: 64
};


export default class UsingScrollView  extends React.Component {

    render () {
        return <ListUser> </ListUser>;
    }
}

// const FlexBasic  = () => {

const ListUser = () => {
  return (  <ScrollView>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <View style={{height:50, backgroundColor: 'blue'}}>
         </View>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <View style={{height:200, backgroundColor: 'blue'}}>
            <View style ={{flexDirection:"row",marginTop:30}}>
                <View style={{backgroundColor:"red",height:50,width:50}}></View>
                <View style={{backgroundColor:"yellow",height:50,width:50}}></View>
                <View style={{backgroundColor:"green",height:50,width:50}}></View>
            </View>

         </View>
        {/* <View style = {{backgroundColor:"red"}}> </View> */}

    </ScrollView>);
}
