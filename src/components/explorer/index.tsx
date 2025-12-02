/*Explorer*/
import { useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import DateSelector from "../ui/DateSelector";
import TextField from "../ui/TextField";
import RoomCard from "../ui/RoomCard";



const RenderExplorer = () => {

    const {width, height } = Dimensions.get("window");
    const[checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [calendar, setCalendar] = useState<"checkin" | "checkout" | null>(null);



    return(
        <AuthContainer>
            { /* children */ }
            <View style={{ display: "flex", justifyContent: "center"}}>
            <View style={{ display: "flex", flexDirection: "column" }}>
                {/*Input de checkin para abrir calendario*/ }
                <TouchableOpacity onPress={() => setCalendar("checkin")}>
                    <View style={{width: width * 0.8}}>
                <TextField
                    
                label = "Check-in"
                icon ={{lib: "FontAwesome5", name: "calendar-alt"}}
                placeholder="Faça seu Check-In"
                value={checkIn}/>
                </View>
                </TouchableOpacity>
                {/* <DateSelector /> */}
                {calendar === "checkin" && (
                    <DateSelector onSelectDate={(date) =>{ 
                    setCheckIn(date); 
                    setCalendar(null);
                }}
                />   
            )}
        </View>

        <View style={{ display: "flex", flexDirection: "column" }}>                                         {/*Criei esta nova View para check-out*/}
        {/* Input de checkIn para abrir calendário*/}
        <TouchableOpacity onPress={() => setCalendar("checkout")}>
            <View style={{width: width * 0.8}}>                                                             {/* Nova view para dar largura ao TextField */}
            <TextField label="Check-out" icon={{ lib: "FontAwesome5", name: "calendar-alt" }} placeholder="Selecione a data" value={checkOut} />
            </View>                                                                                         {/* Fecha aqui */}
        </TouchableOpacity>
          {/* <DateSelector /> */}
        {calendar === "checkout" && (
            <DateSelector onSelectDate={(date) => { 
                setCheckOut(date); 
                setCalendar(null); 
                }} /> 
            )}
        </View>                                                                                             {/*View do check-out que fecha aqui */}
    </View>
    <RoomCard 
        image={require("../../../assets/images/room4.jpg")}
        label="Apartamento"
        icon={{
            lib: "FontAwesome5",
            name:"bed"
        }}
        description={{
            title: " Informações | Quarto",
            text: "1 cama de casal\n1 cama de solteiro",
            price: 180.90
        }}
    />
    </AuthContainer>
    )};

export default RenderExplorer