import AuthContainer from "../ui/Auth.Container";
import { View, Text } from "react-native";



const RenderAccount = () => {
    return(
        <AuthContainer>
            { /* children */ }
            <View>
                <Text>Esta sera a tela de conta</Text>
            </View>

        </AuthContainer>
    );
};

export default RenderAccount