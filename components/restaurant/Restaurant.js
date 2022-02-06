import { View,Image, TouchableOpacity,Text } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { restaurantModel } from ".../model";

export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];

export default function RestaurantItem(props) {
  console.log(`restaurant model --- ${JSON.stringify(props.restaurantData.hints)}`);

    return <TouchableOpacity activeOpacity={1}>

      {props.restaurantData.hints.map((restaurant,index)=> ( 

        <View key={index} style={{marginTop:10}}>
        <RestaurantImage image_url={restaurant.food.image}></RestaurantImage>
        <RestaurantInfor name={restaurant.food.label} description={restaurant.food.foodContentsLabel}></RestaurantInfor>

        </View>
      ))}
    
    </TouchableOpacity>
    
}

const RestaurantImage = (props)=>(
    <>
    <Image source={{uri:props.image_url}}
        style = {{width:"100%",height:180}}
    />

    
    <TouchableOpacity style={{position:"absolute",right:20}}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="white"></MaterialCommunityIcons>
    </TouchableOpacity>
     </>

);

const RestaurantInfor = (props)=> (
    <View style={{
     flexDirection:"row",
     justifyContent:"space-between",
     alignItems:"center",
     marginTop:10,
     }}>
         <View style={{flexDirection:"column"}}> 
            <Text style={{fontSize:15,fontWeight:"bold"}}> {props.name} </Text>
            <Text> {props.description} </Text>
         </View>
         <View style={{alignItems:"center",
                    height:30,
                    borderRadius:15,
                    backgroundColor:"#eee"
                    
                    }}> 
            <Text style={{fontSize:15}}> {props.rating} </Text>
         </View>

    </View>

);