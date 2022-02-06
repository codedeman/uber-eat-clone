import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View,Image } from "react-native";
import { Component } from "react/cjs/react.production.min";

export default class  FlexExample extends React.Component {
    render ()  {
      return  <FlexBasic></FlexBasic>
    } 
    
}
const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

const FlexBasic  = () => {

    return (
        // Try setting `flexDirection` to `column`.
        <View style={{flex: 1, flexDirection: 'column-reverse'}}>
         <View style={{flex: 2, backgroundColor: 'powderblue'}}>
            <Image source= {{uri:"https://vcdn-giaitri.vnecdn.net/2019/10/15/Elton-John-press-photo-by-Greg-8288-6746-1571138136.jpg"}} style= {{width:100,height:100,marginTop:15}}> 
            </Image>
            <View style= {{marginHorizontal:100,marginTop:-80,flexDirection:"column"} }> 
             <Text style={{color:"white"}}> Hello dm react native</Text>
             <Text style={{color:"white"}}> Hello dm react native</Text>
            </View> 
         </View>
         <View style={{flex: 2, backgroundColor: 'pink',justifyContent: 'center',
}}>
         <View style= {{flexDirection:"column",backgroundColor:"red",marginHorizontal:30} }>  
            <View style ={{backgroundColor:"white",height:50, width:50,marginTop:10,marginBottom:10}}></View>
            <View style ={{backgroundColor:"brown",height:50, width:50}}></View>
            <View style ={{backgroundColor:"white",height:50, width:50}}></View>

        </View> 
         </View>
         <View style={{flex: 3, backgroundColor: 'blue'}}>
         </View>
         <View style={{flex: 4, backgroundColor: 'yellow'}}>
         </View>
        </View>
      );
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});


