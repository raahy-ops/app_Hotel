/* Função definir fluxo de navegação entre as telas de autenticação:
1 - Login
2 - Registrar
3-ResetPasswor

Sobreposição de tela de telas : Stack Navigator, 3 funções para manipular o 
empilhamento:
push(): empilha a tela atual sobre a anterior
back() remove a tela atual e retorna
replace()
*/


import { Stack } from "expo-router";

const AuthLayout = () => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" options={{ title: "Login" }}/>
        <Stack.Screen name="register" options={{ title: "Cadastro" }}/> 
        <Stack.Screen name="resetPassword" options={{ title: "Esqueci minha senha" }}/> 
        </Stack>
    )
}

export default AuthLayout;