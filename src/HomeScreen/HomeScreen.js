import { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import metadata from './../storage.medata.json';
import { useIsFocused } from "@react-navigation/native";

function HomeScreen({ navigation }) {
    const [name, setName] = useState("");
    // Toda vez que a tela sair ou entrar de foco ela muda
    const focus = useIsFocused();
    useEffect(() => { getUserName() }, [focus]);


    const getUserName = async () => {
        const username = await AsyncStorage.getItem(metadata.USER.USERNAME);
        if(username){
            setName(username)
        }
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            {name && 
                <View>
                    <Text>
                        Olá usuário {name}
                    </Text>
                </View>
            }
            <Button
                title="Go to user data"
                onPress={() => { navigation.navigate("UserData") }} />
        </View>
    );
}

export default HomeScreen;