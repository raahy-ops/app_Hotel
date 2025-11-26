/*Explorer*/
import AuthContainer from "../ui/Auth.Container";
import { Dimensions, TouchableOpacity, View } from "react-native";
import DateSelector from "../ui/DateSelector";
import TextField from "../ui/TextField";
import { useState } from "react";



const RenderExplorer = () => {

    const {width, height } = Dimensions.get("window");
    const[checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [calendar, setCalendar] = useState<"checkin" | "checkout">();



    return(
        <AuthContainer>
            { /* children */ }
            <View>
                {/*Input de checkin para abrir calendario*/ }

                <TouchableOpacity onPress={() => setCalendar("checkin")}>
                <TextField
                    
                label = "Check-in"
                icon ={{lib: "FontAwesome5", name: "calendar-alt"}}
                placeholder="Faça seu Check-In"
                value={checkIn}
                />
                </TouchableOpacity>
                {/*<DateSelector />*/}
                {calendar === "checkin" && (
                    <DateSelector
                    onSelectDate={(date) =>{ 
                    setCheckIn(date);
                }}
                />   
            )}
                {/*Input de checkout para abrir calendario*/}
            <TouchableOpacity onPress={() => setCalendar("checkout")}>
                <TextField
                label = "Check-out"
                icon ={{lib: "FontAwesome5", name: "calendar-alt"}}
                placeholder="Faça seu Check-Out"
                value={checkOut}
                />
                </TouchableOpacity>
                {/*<DateSelector />*/}
                {calendar === "checkout" && (
                    <DateSelector
                    onSelectDate={(date) =>{ 
                    setCheckOut(date);
                }}
                />   
            )}

            </View>
             {/*<DateSelector />*/}
        </AuthContainer>
    );
};

export default RenderExplorer