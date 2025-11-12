import   AuthContainer   from "../ui/Auth.Container";
import  TextField  from "../ui/TextField";

const RenderLogin = () => {
    
    return (
    
        <AuthContainer
            title="Olá, Seja Bem-Vindo!"
            subtitle ="Faça o login para continuar"
            icon="hotel">
        
        {/*children*/}
        <TextField
            label= "E-mail"
            icon= "email">
        </TextField>
    </AuthContainer>
    )
};

export default RenderLogin