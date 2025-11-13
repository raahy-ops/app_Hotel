import AuthContainer from "../ui/Auth.Container";
import PasswordField from "../ui/PasswordField";
import TextField from "../ui/TextField";

const RenderLogin = () => {
    
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

        <PasswordField
            label="Senha"
            icon="lock"
            placeholder="********"
        />    
        


    </AuthContainer>
    )
};

export default RenderLogin