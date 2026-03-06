import { TouchableOpacity, View, Text, Dimensions } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import TextField from "../ui/TextField";
import { global } from "../ui/styles";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
 
// Regex corrigido para validação de e-mail
function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
 const RenderRegister = () => {
    const router = useRouter();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [cpf, setCPF] = useState("");
    const [telefone, setTelefone] = useState("");
    const [touched, setTouched] = useState<Record<string, boolean>>({});
 
    const handleBlur = (field: string) => {
        setTouched(prev => ({ ...prev, [field]: true }));
    };
 
    const errors = useMemo(() => {
        const error: Record<string, string> = {};
       
        if (touched.email) {
            if (!email) error.email = "E-mail obrigatório";
            else if (!isValidEmail(email)) error.email = "Digite um e-mail válido";
        }
 
        if (touched.password) {
            if (!password) error.password = "Senha obrigatória";
            else if (password.length < 6) error.password = "No mínimo 6 caracteres";
        }
 
        if (touched.passwordConfirm && password !== passwordConfirm) {
            error.passwordConfirm = "As senhas não coincidem";
        }
 
        return error;
    }, [email, password, passwordConfirm, touched]);
 
    const canSubmit = nome && cpf && telefone && email && password &&
                      passwordConfirm === password && Object.keys(errors).length === 0;
 
    const { width, height } = Dimensions.get('window');
 
    return (
        <AuthContainer
            title="Bem-vindo"
            subtitle="Faça seu cadastro para continuar!"
            icon="hotel">
 
            <TextField
                label="Nome:"
                placeholder="Digite Seu Nome:"
                value={nome}
                onChangeText={setNome}
            />
 
            <TextField
                label="CPF:"
                placeholder="999.999.999-9"
                value={cpf}
                onChangeText={setCPF}
                keyboardType="numeric"
            />
 
            <TextField
                label="Telefone:"
                icon={{ lib: "MaterialIcons", name: "call" }}
                placeholder="99 99999-9999"
                autoComplete="tel"
                value={telefone}
                onChangeText={setTelefone}
               
                keyboardType="phone-pad"
            />
 
            <TextField
                label="E-mail"
                icon={{ lib: "MaterialIcons", name: "email" }}
                placeholder="user@email.com"
                value={email}
                onChangeText={setEmail}
                onBlur={() => handleBlur('email')}
            />
 
            <PasswordField
                label="Senha"
                icon={{ lib: "MaterialIcons", name: "password" }}
                placeholder="*********"
                value={password}
                onChangeText={setPassword}
                onBlur={() => handleBlur('password')}
            />
 
            <PasswordField
                label="Confirmar Senha"
                icon={{ lib: "MaterialIcons", name: "password" }}
                placeholder="*********"
                value={passwordConfirm}
                onChangeText={setPasswordConfirm}
                onBlur={() => handleBlur('passwordConfirm')}
               
            />
 
            <TouchableOpacity
                style={[global.primaryButton, !canSubmit && { opacity: 0.5 }]}
                disabled={!canSubmit}
                onPress={() => console.log("Registrar", { nome, email })}
            >
                <Text style={global.primaryButtonText}>Cadastrar</Text>
            </TouchableOpacity>
 
            <View style={{ alignItems: "center", marginTop: height * 0.03 }}>
                <View style={{
                    backgroundColor: "#7c8390ff",
                    width: width * 0.5,
                    height: 1,
                    borderRadius: 10,
                    marginTop: height * 0.03
                }} />
            </View>
        </AuthContainer>
    );
};
export default RenderRegister;