import React, { useState } from "react";
import TextField from "./TextField";
import { View } from "react-native";


type Props =  React.ComponentProps<typeof TextField>;

const PasswordField = (props: Props) => {
    /*React.useState*/
    const [show, setShow] = useState(false);  // mostrar senha
    
    return (
        <View>
            <TextField
            {...props}

            icon={props.icon ?? "lock"}
            secureTextEntry={!show}
            autoCapitalize="none"
            autoCorrect={false}
            />
        </View>    
    );
};


export default PasswordField;