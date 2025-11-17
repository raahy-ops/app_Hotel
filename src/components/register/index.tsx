import { Dimensions, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/Auth.Container";
import PasswordField from "../ui/PasswordField";
import TextField from "../ui/TextField";
import { global } from "../ui/styles";
import { Text } from "@react-navigation/elements";
import { useRouter } from "expo-router";




const RenderRegister = () => {

    const router = useRouter();

    const {width, height} = Dimensions.get("window");
    return (
        <AuthContainer
            title="Cadastre-se agora!"
            subtitle ="Crie uma nova conta"
            icon="hotel">
        
        {/* children */}
        
        <TextField
            label= "Nome"
            icon= "person-outline"
            placeholder="Digite seu nome"
            keyboardType="email-address"
        />

        <TextField
            label= "CPF"
            icon= "email"
            placeholder="000.000.000-00"
        />

        <TextField
            label= "Telefone"
            icon= "email"
            placeholder="(00) 00000-0000"
        />

        <TextField
            label= "E-mail"
            icon= "email"
            placeholder="user@email.com"
            keyboardType="email-address"
        />

        <PasswordField
            label="Senha"
            icon="vpn-key"
            placeholder="********"
        /> 


        <TouchableOpacity style={[global.primaryButton]}>
            <Text style={global.primaryButtonText}>Criar Conta</Text>
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

export default RenderRegister;