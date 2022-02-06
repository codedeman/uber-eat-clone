import React from 'react';
import {SafeAreaView,SectionList, FlatList,StyleSheet,Image, ScrollView, Text,View} from 'react-native';
import { Component } from "react/cjs/react.production.min";
import HeaderTabs from '../components/HeaderTab';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem ,{localRestaurants} from '../components/restaurant/Restaurant';
import React, { useState } from "react";


export default class Home  extends  React.Component {
    render() {
      const [restaurantData, setRestaurantData] = useState(localRestaurants);

        return <SafeAreaView style={{backgroundColor:"#eee",flex:1}}>

          <View style={{backgroundColor:"white",padding:15}}> 
            <HeaderTabs restaurantData={restaurantData}></HeaderTabs>
            <SearchBar></SearchBar>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>

            <Categories></Categories>

          </ScrollView>
        </SafeAreaView>
    }
   
}


export const YourApp = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  

  return <SafeAreaView style={{backgroundColor:"#eee",flex:1}}>

  <View style={{backgroundColor:"white",padding:15}}> 
    <HeaderTabs></HeaderTabs>
    <SearchBar></SearchBar>
  </View>
  <ScrollView showsVerticalScrollIndicator={false}>

    <Categories></Categories>
      <RestaurantItem restaurantData={localRestaurants} ></RestaurantItem>

  </ScrollView>
</SafeAreaView>
}