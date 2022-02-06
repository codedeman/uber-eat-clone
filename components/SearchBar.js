import { View, TouchableOpacity,Text, TextInput} from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import React, { useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons';


export default function SearchBar({foodHandler}) {
    const [text, setText] = useState('');

    return <View style={{marginTop:15,flexDirection:"row" }}>

      <TextInput style={{backgroundColor:"white",
      height:50,
      width:350,
      color: '#333',
        fontSize: 16,
        lineHeight: 23,  
        borderBottomColor: '#333',
        borderBottomWidth: 0.5,
        fontFamily: 'System',
    
    }} 
    autoCorrect={true}
    placeholder="Enter food you want to eat?"
    returnKeyLabel = {"next"}
    onChangeText={newText => setText(newText)}

    > </TextInput>

    <TouchableOpacity onPress={()=>{
      console.log(`hahahahahah${text}`)
      foodHandler(text)
    }}> 
    <View style={{height:40,
          flexDirection:"column",
          borderColor:"white",
          backgroundColor:"black",
          borderWidth:2,
          borderRadius:10,
          width:50

          }}> 
          <Text style={{alignItems:"center",
          color:"white",
          textAlign:"center",
          marginTop:10,
          fontSize:10,
          fontWeight:"500"
          }}>Search</Text>
        </View>
      
    </TouchableOpacity>
     
        {/* <GooglePlacesAutocomplete
        placeholder='Enter food you want to eat?'
        minLength={2}
        autoFocus={false}
        returnKeyType={'default'}
        fetchDetails={true}
        query= {{key:"AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4"}}
        onPress = {(data)=>{
          console.log(data.description);
        }}
        styles={{
            textInputContainer: {
            // backgroundColor: 'grey',
            },
            textInput: {
            color: 'black',
            fontWeight: "700",
            fontSize: 16,
            },
            predefinedPlacesDescription: {
            color: 'black',
            },
        }} renderLeftButton={()=>{
            <View style={{ marginLeft: 10}}>
                <Ionicons name="location-sharp" size={24}  />      
            </View>
        }} renderRightButton ={()=>{
            <View
              style={{
                flexDirection: "row",
                marginRight: 8,
                backgroundColor: "white",
                padding: 9,
                borderRadius: 30,
                alignItems: "center",
              }}
            >
              <Text style={{color:"black"}}>Search</Text>
            </View>
        }}
        /> */}
        
    </View>
}
