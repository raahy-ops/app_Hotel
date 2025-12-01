import { Text } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { Dimensions, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import TextField from "../ui/TextField";
import { global } from "../ui/styles";




const RenderRegister = () => {

    const router = useRouter();

    const {width, height} = Dimensions.get("window");
    return (
        <AuthContainer
            title="Cadastre-se agora!"
            icon="hotel">
        
        {/* children */}
        
        <TextField
            label= "Nome"
            icon={{lib: "MaterialIcons", name: "person-outline"}}
            placeholder="Digite seu nome"
            keyboardType="email-address"
        />

        <TextField
            label= "CPF"
            
            placeholder="000.000.000-00"
        />

        <TextField
            label= "Telefone"
            icon={{lib: "MaterialIcons", name: "phone"}}
            placeholder="(00) 00000-0000"
        />

        <TextField
            label= "E-mail"
            icon={{lib: "MaterialIcons", name: "email"}}
            placeholder="user@email.com"
            keyboardType="email-address"
        />

        <PasswordField
            label="Senha"
            icon={{lib: "MaterialIcons", name: "lock-outline"}}
            placeholder="********"
        /> 


        <PasswordField
            label="Confirme sua senha"
            icon={{lib: "MaterialIcons", name: "lock-outline"}}
            placeholder="********"
        /> 


        <TouchableOpacity style={[global.primaryButton]}>
            <Text style={global.primaryButtonText}>Criar Conta</Text>
        </TouchableOpacity>

        <View style={{alignItems: "center", marginTop: height * 0.04}}>
            <TouchableOpacity onPress={() => router.back()}>
                <Text style={{color: "#2F4156", fontWeight: 600, fontSize: 17}}>Já possui uma conta? <Text style={{ color: "#567c8dd2" }}>Faça Login</Text></Text>
            </TouchableOpacity>
            
        </View>
        


    </AuthContainer>
    )
};

export default RenderRegister;