import React from 'react';
import {SafeAreaView,SectionList, FlatList,StyleSheet,Image, ScrollView, Text,View} from 'react-native';
import { Component } from "react/cjs/react.production.min";
import fofoodList from "./FoodListObj"

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
export default class UsingListView  extends  React.Component {
    render () {
    
       return <SafeAreaView style={styles.container}>

           <View style = {{flexDirection:"column"}}>
                <FlatList
                data={fofoodList}
                horizontal={true}
                renderItem={({ item }) =>  <StoryItem imageurl ={item.imageUrl} onPress={()=>
                    alert("clicked")
                } ></StoryItem>}
                keyExtractor={item => item.id}
                >
                </FlatList>
            {/* <View style = {{flex:4}}> 
                <FlatList
                data={fofoodList}
                renderItem={({ item }) =>  <NewFeedItem imageurl ={item.imageUrl} onPress={()=>
                    alert("clicked")
                }  ></NewFeedItem>}
                keyExtractor={item => item.id}
                /> */}
            {/* </View> */}
           </View>
      
      
        </SafeAreaView>
   
      { 

      }
    }
    
}

const handleOnPress = () => {
    console.log(`on press -----+++`);
}


// function Item({title}) {
//     return (
//       <View style={styles.item}>
//         <Image style={{height:50,width:50}} source={{uri:'https://source.unsplash.com/random'}} />
//         <Text style={styles.title}>{title}</Text>
//         <Text style={styles.title2}>{title}</Text>
//         <Image style={{height:15,width:15,marginLeft:20}} source={{uri:'https://source.unsplash.com/random'}} />
//       </View>
//     );
//   }
const StoryItem =({imageurl}) => {
    return <View style= {styles.item}>
        <Image style={{height:100,width:100,borderRadius:100/2}} source={{uri: imageurl}} />
    </View>
}
const NewFeedItem =({name,description,imageurl}) => {
        return <View style= {styles.item}>
            <Image style={{height:300,width:300}} source={{uri: imageurl}} />
            {/* <View style={{flexDirection:"column"}}> */}
                <Text> {name}</Text>
                <Text> {description}</Text>
            {/* </View> */}
           
        </View>
}
const CustomListView = () => {
   return <View style = {styles.container}>
        <FlatList data={fofoodList} renderItem={(item,index)=>
            <NewFeedItem item ={item} index= {index} > </NewFeedItem>
            // console.log(`Item = ${JSON.stringify(item)}, index =${index}`);
        }>

        </FlatList>
    </View>
}

const ListView = () => {

    return <View style = {styles.container}>
        <FlatList data={[{key:'Kevin'},{key:'Dan'}]} renderItem={({item})=> <Text style ={styles.item}>{item.key}</Text>}></FlatList>

{/* <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        /> */}


    </View>

}
const FlatListBasics = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
const UsingSectionList = () => {

    return  <View style={styles.container}>
        <SectionList sections={[{title:'D',data:['Devin','Kevin']}]}
         renderItem = {({item})=> <Text style= {styles.item}>{item} </Text>} 
         renderSectionHeader ={({section})=><Text>{section.title}</Text>} />
    </View>
}

// const SectionListBasics = () => {
//     return (
//       <View style={styles.container}>
//         <SectionList
//           sections={[
//             {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
//             {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     );
// }
  

// const styles = StyleSheet.create({
//     // item :{
//     //     padding: 10,
//     //     fontSize: 18,
//     //     height: 44,
//     // },
//     // container: {
//     //     flex: 1,
//     //     paddingTop: 22
//     //    },
// });




  
  function Item({ title }) {
    return (
      <View style={styles.item}>
        <Image style={{height:50,width:50}} source={{uri:'https://source.unsplash.com/random'}} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title2}>{title}</Text>
        <Image style={{height:15,width:15,marginLeft:20}} source={{uri:'https://source.unsplash.com/random'}} />
      </View>
    );
  }
  
//   export default function App() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <FlatList
//           data={DATA}
//           renderItem={({ item }) => <Item title={item.title} />}
//           keyExtractor={item => item.id}
//         />
//       </SafeAreaView>
//     );
//   }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 8,

    },
    item: {
      backgroundColor: "gray",
      padding: 0,
      height:100,
      width:100,
      borderRadius: 100 / 2,

      marginVertical: 5,
      marginHorizontal: 5,
      flexDirection:'row'
    },
    title: {
      fontSize: 10,
      color: "white"
    },
    title2:{
      fontSize:12 , marginLeft:10
    }
  });