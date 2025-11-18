import { Dimensions, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/Auth.Container";
import PasswordField from "../ui/PasswordField";
import TextField from "../ui/TextField";
import { global } from "../ui/styles";
import { Text } from "@react-navigation/elements";
import { useRouter } from "expo-router";




const RenderResetPassword = () => {

    const router = useRouter();

    const {width, height} = Dimensions.get("window");
    return (
        <AuthContainer
            title="Redefinição de senha"
            subtitle ="Digite seu email para redefinir senha"
            icon="user-lock">
        
        {/* children */}
        <TextField
            label= "Seu e-mail"
            icon={{lib: "MaterialIcons", name: "alternate-email"}}
            placeholder="user@email.com"
            keyboardType="email-address"
        />



        <TouchableOpacity style={[global.primaryButton]}>
            <Text style={global.primaryButtonText}>Enviar e-mail</Text>
        </TouchableOpacity>

        


    </AuthContainer>
    )
};

export default RenderResetPassword;