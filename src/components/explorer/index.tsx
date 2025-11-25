/*Explorer*/
import AuthContainer from "../ui/Auth.Container";
import { View } from "react-native";
import DateSelector from "../ui/DateSelector";



const RenderExplorer = () => {
    return(
        <AuthContainer>
            { /* children */ }
            <View>
                <DateSelector />
            </View>

        </AuthContainer>
    );
};

export default RenderExplorer