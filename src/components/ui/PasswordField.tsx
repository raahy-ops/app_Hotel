import React, { useState } from "react";
import TextField from "./TextField";
import { TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { global } from "./styles";



type Props =  React.ComponentProps<typeof TextField>;

const PasswordField = (props: Props) => {
    /*React.useState*/
    const [show, setShow] = useState(false);  // mostrar senha
    
    return (
        <View>
            <TextField
            {...props}
            secureTextEntry={!show}
            autoCorrect={false}
            />

            <TouchableOpacity style={global.eyeIcon} onPress={() => setShow((showTrue) => !showTrue )}>
                <Ionicons name={show ? "eye-off" :  "eye"} size={23} color="#2F4156"/>
            </TouchableOpacity>
        </View>
        
        
    );
};


export default PasswordField;