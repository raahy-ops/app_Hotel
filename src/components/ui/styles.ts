import { Label } from "@react-navigation/elements";
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
        color:"#567C8D",
    },
    
    subtitle: {
        fontSize: 17,
        color: "#2F4156",
        marginTop: height * 0.01,
    },

    content: {
        
        backgroundColor : "#C8D9E6",
        borderRadius : 10,
        padding: width * 0.02,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2
    },

    inputGroup: {
        marginBottom: height * 0.02,
    },

    label: {
        fontSize: 16,
        fontWeight: "600",
        color: "#2F4156",
        marginBottom: height * 0.01
    },

    inputIcon: {

        backgroundColor: "#fff",
        paddingLeft: width * 0.02,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#2F4156",
        borderRadius: 10
    },



    inputError: {
        backgroundColor: "#fed5d5ff",
        borderColor: "rgba(139, 0, 0, 1)",
    },

    input: {
        flex: 1,
        fontSize: 17,
        color: "#000",
        fontWeight: "600",
        paddingHorizontal:width * 0.02
    },

    eyeIcon : {
        position: "absolute",
        right: 12,
        top: 42
    },

    errorText: {
        color: "red",
        fontSize: 15,
        fontWeight: "600",
        marginTop: height * 0.01
    },

    primaryButton: {
        backgroundColor: "#567c8dd2",
        borderRadius: 10,
        padding: width * 0.025,
        marginTop: width * 0.02,
        alignItems: "center"

    },

    primaryButtonDisabled: {
        backgroundColor: "#9ca3af",
        borderRadius: 10,
    },

    primaryButtonText: {
        color : "#fff"
    }




})