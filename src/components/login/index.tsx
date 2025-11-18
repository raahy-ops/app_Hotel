import { Text } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { Dimensions, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/Auth.Container";
import PasswordField from "../ui/PasswordField";
import TextField from "../ui/TextField";
import { global } from "../ui/styles";




const RenderLogin = () => {

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
            icon={{lib: "MaterialIcons", name: "email"}}
            placeholder="user@email.com"
            keyboardType="email-address"
        />

        <PasswordField
            label="Senha"
            icon={{lib: "MaterialIcons", name: "vpn-key"}}
            placeholder="********"
        /> 


        <TouchableOpacity  onPress={() => router.push("../explorer")}style={[global.primaryButton]}>
            <Text style={global.primaryButtonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={{alignItems: "center", marginTop: height * 0.04}}>
            <TouchableOpacity onPress={() => router.push("/(auth)/resetPassword")}>
                <Text style={{color: "#2F4156", fontWeight: 600, fontSize: 17}}>Esqueci Minha Senha</Text>
            </TouchableOpacity>

            <View style={{backgroundColor: "#626770bb", width: width * 0.7, height: height * 0.001, borderRadius: 10, marginTop: height * 0.02}}></View>

            <TouchableOpacity onPress={() => router.push("/(auth)/register")} style={{ marginTop: height * 0.04}}>
                <Text style={{color: "#153947a2", fontWeight: 600, fontSize: 17}}>Não possui uma conta? Cadastre-se
                </Text>
            </TouchableOpacity>
        </View>
        


    </AuthContainer>
    )
};

export default RenderLogin;