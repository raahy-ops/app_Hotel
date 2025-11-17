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
            title="Seja Bem-Vindo!"
            subtitle ="Faça o login para continuar"
            icon="hotel">
        
        {/* children */}
        <TextField
            label= "E-mail"
            icon= "email"
            placeholder="user@email.com"
            keyboardType="email-address"
        />



        <TouchableOpacity style={[global.primaryButton]}>
            <Text style={global.primaryButtonText}>Entrar</Text>
        </TouchableOpacity>

        


    </AuthContainer>
    )
};

export default RenderResetPassword;