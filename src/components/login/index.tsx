import  AuthContainer  from "../ui/Auth.Container";
import { TextField } from "../ui/TextField";

export function RenderLogin() {
    
    return(
    
        <AuthContainer
            title="Olá, Seja Bem-Vindo!"
            subtitle ="Faça o login para continuar"
            icon="hotel">
        
        
        <TextField
            label= "E-mail"
            icon= "email">
        </TextField>
    </AuthContainer>
    )
}