import { useState } from "react";
import { View, Text } from "react-native";
import DatePicker, { getFormatedDate, getToday } from 'react-native-modern-datepicker';



type Props = {
    label?: string; 
};

const DateSelector = ({label}: Props) => {
    
    const tomorrow = new Date(getToday() +1);
    const startDate = getFormatedDate(tomorrow, "YYYY/MM/DD h:m")
    
    const [selectDate, setSelectDate] = useState("");
    return (
        <View>
            {!!label && 
            <Text>{label}</Text>}
            <DatePicker
                options={{
                backgroundColor: '#090C08',
                textHeaderColor: '#FFA25B',
                textDefaultColor: '#F6E7C1',
                selectedTextColor: '#fff',
                mainColor: '#F4722B',
                textSecondaryColor: '#D6C7A1',
                borderColor: 'rgba(122, 146, 165, 0.1)',
            }}
            isGregorian={true}
            style={{ borderRadius: 20 }}
            minimumDate={startDate}
            selected={selectDate}
            onSelectedChange={date => setSelectDate(date)}
    />
        </View>

    );
};

export default DateSelector;