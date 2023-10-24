import { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from "./../storage.medata.json";

function UserData({ navigation }) {
    const [name, setName] = useState("");
    useEffect(() => { getUserName() }, []);

    useEffect(() => { saveUserName() }, [name]);

    const getUserName = async () => {
        const username = await AsyncStorage.getItem(metadata.USER.USERNAME);
        if (username) {
            setName(username)
        }
    }

    const saveUserName = async () => {
        const saveName = name || "";
        await AsyncStorage.setItem(metadata.USER.USERNAME, saveName);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>User Data</Text>

            <TextInput placeholder="Nome do Usuário" value={name} onChangeText={setName} />
        </View>
    );
}

export default UserData;