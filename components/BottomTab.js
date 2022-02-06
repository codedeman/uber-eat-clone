import { View,Text } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

export default function BottomTab() {

    return <View style={{height:83,
                        flexDirection:"row",
                        margin:10,
                        marginHorizontal:20,
                        justifyContent:"space-between"
                        }} >

        <Icon icon="home" text="Home"></Icon>
        <Icon icon="search" text="home"></Icon>
        <Icon icon="shopping-bag" text="Grocery"></Icon>
        <Icon icon="user" text="Account"></Icon>



    </View>
}

const Icon =(props)=>(

    <View style={{flexDirection:"column"}}>
    <FontAwesome5Icon name={props.icon} 
                    size={20}
                    style = {{marginBottom:3,
                            alignSelf:"center"
                            }}
                    >
    </FontAwesome5Icon>
    <Text>{props.text}</Text>

    </View>
)