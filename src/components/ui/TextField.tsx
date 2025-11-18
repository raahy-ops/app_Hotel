import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./styles";



//Bibliotecas de ícones aceitas

type NameIcon = 
    | {lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
    | {lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };

type Props = TextInputProps & {
    label : string;
    errorText?: string;
    icon?: NameIcon ;
} 

const TextField = ({label, errorText, icon, style, ...restInputPropos } : Props) => {
    
    return (
        <View style={global.inputGroup}>
            <Text style={global.label}>{label}</Text>
            <View style={[global.inputIcon, errorText ? global.inputError : null]}>
                {!! icon && (
                    <View>
                        {icon.lib === "MaterialIcons" && (
                        <MaterialIcons name={icon.name} size={22} color="#2F4156"/> )}
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