import { View, TouchableOpacity,Text} from "react-native";
import React, { useState } from "react";


export  default function HeaderTabs(props) {
    // const [activeTab, setActiveTab] = useState("meal");
    return <View style={{flexDirection:"row",alignSelf:"center"}}>
        <HeaderButton 
         text="Meal"
         btnColor= "black" 
         textColor="white" 
         activeTab={props.activeTab}
         setActiveTab={props.setActiveTab}
         ></HeaderButton>

        <HeaderButton 
        text="Food"
        btnColor="white" 
        textColor ="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
        ></HeaderButton>
    </View>
}

const HeaderButton = (props) => (
        <TouchableOpacity style={{
            backgroundColor: props.activeTab === props.text ? "black" : "white",
            paddingHorizontal:16,
            paddingVertical:6,
            borderRadius:16
            
            }}
            onPress = {() => props.setActiveTab(props.text)
                
            }
            >
            {/* <Text style = {{
                color:props.activeTab === props.text ? "white" : "black",frontSize:15,
                frontWeight:900}}>{props.text}</Text> */}

        <Text
            style={{
                color: props.activeTab === props.text ? "white" : "black",
                fontSize: 15,
                fontWeight: "900",
            }}
            >
            {props.text}
        </Text>
        </TouchableOpacity>
);
     
        