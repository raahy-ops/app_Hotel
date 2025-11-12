import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./styles";

type Props = TextInputProps & {
    label : string;
    errorText?: string;
    icon?: keyof typeof MaterialIcons.glyphMap;
} 

const TextField = ({label, errorText, icon, style, ...restInputPropos } : Props) => {
    
    return (
        <View style={global.inputGroup}>
            <Text style={global.label}>{label}</Text>
            <View style={[global.inputIcon, errorText ? global.inputError : null]}>
                {!! icon && (
                    <View>
                        <MaterialIcons name={icon} size={22} color="#2F4156"/>
                    </View>
                )}
                <TextInput
                    keyboardAppearance="dark"
                    placeholderTextColor= "#9ca3af"
                    style={[global.input, style]}
                    /* Restante de TextInputProps:
                    { 
                        style
                        value
                        onChangeText
                        placeholder
                        autoCapitalize
                        keyaboardType
                    }
                    */
                    {...restInputPropos}
                />
            </View>
            {!! errorText &&
                <Text style={global.errorText}>{errorText}</Text>
            }
        </View>
    )
};

export default TextField;