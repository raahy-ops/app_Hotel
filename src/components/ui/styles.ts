import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");


export const global = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    
    keyboardAvoiding: {
        flex: 1
    },
    
    container: {
        paddingHorizontal: width * 0.07,
        paddingTop: height * 0.07
    },
    
    header: {
        alignItems: "center",
        paddingBottom: height * 0.03
    },

    title: {
        fontSize: 25,
        fontWeight: "800",
    },
    
    subtitle: {
        fontSize: 17,
        color: "brown",
        marginTop: height * 0.01
    },

    content: {
        
        backgroundColor : "wheat",
        borderRadius : 10,
        padding: width * 0.02,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2


    },

})