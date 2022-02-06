// import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState } from "react";
import  FlexExample from "./TestLayout"
import UsingScrollView from "./UsingScrollView"
import  UsingListView from "./UsingListView"
// import Home ,{YourApp} from "./screens/Home";
import HeaderTabs from './components/HeaderTab';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import RestaurantItem ,{localRestaurants} from './components/restaurant/Restaurant';
import BottomTab from './components/BottomTab'

import {SafeAreaView,Image, ScrollView, Text,View,ActivityIndicator} from 'react-native';
import { restaurantModel } from "./model/RestaurantModel";


const YourApp = () => {
    const [restaurantData, setRestaurantData] = useState(restaurantModel);
    const [foodData, setFoodData] = useState("apple");
    const [activeTab,setActiveTab] = useState("Meal")
    const [isLoading,setIsloading] = useState(true)

    const YELP_API_KEY =
    "4c79c21b03msh9093f66e184d740p1e683cjsn86a4ec9ac1df";
    const FoodHost = "edamam-food-and-grocery-database.p.rapidapi.com"

  const getRestaurantsFromYelp =()=>{
  setIsloading(true);
  const foodURL = `https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${foodData}`;
  const apiOption = {
      headers: {
        'x-rapidapi-host': 'edamam-food-and-grocery-database.p.rapidapi.com',
        'x-rapidapi-key': '4c79c21b03msh9093f66e184d740p1e683cjsn86a4ec9ac1df'
      }

  }
  return  fetch(foodURL,apiOption).
  then((res)=> res.json()).
  then((json)=>setRestaurantData(json));
  isLoading = false
  };

  useEffect(() => {
   getRestaurantsFromYelp();
  //  setIsloading(false)
  }, [foodData])

    return <SafeAreaView style={{backgroundColor:"#eee",flex:1}}>
  
    <View style={{backgroundColor:"white",padding:15}}> 
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} ></HeaderTabs>
      <SearchBar foodHandler={(food)=>{
        setFoodData(food);
        console.log(`food ${food}`)
      }}></SearchBar>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>

      <Categories> 
      <ActivityIndicator animating={isLoading} color="black" />

      </Categories>

        <RestaurantItem restaurantData={restaurantData} ></RestaurantItem>
  
    </ScrollView>
    <BottomTab></BottomTab>
  </SafeAreaView>
}


export default YourApp;

