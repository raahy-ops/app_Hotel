import { PropsWithChildren, useState } from "react";
import { Dimensions, View } from "react-native";
import DatePicker, { getToday } from 'react-native-modern-datepicker';

    
type Props = {
    onSelectDate: (date: string) => void; 
};

const DateSelector = ({onSelectDate} : Props) => {

    const { width, height } = Dimensions.get("window");
    const today = getToday();
    const [selectDate, setSelectDate] = useState("");

    return (
        <View>
            <DatePicker
            mode="calendar"
            options={{
                backgroundColor: '#f1eee5ff',
                textHeaderColor: '#855A2D',
                textDefaultColor: '#4a503d',
                selectedTextColor: '#fff',
                mainColor: '#567C8D',
                textSecondaryColor: '#2F4156',
                borderColor: 'rgba(122, 146, 165, 0.1)',
            }}
            style={{borderRadius: 15, width: width * 0.62, height: "auto" }}
            isGregorian={true}
            minimumDate={today}
            selected={selectDate}
            onSelectedChange={(date) => {
                setSelectDate(date);
                onSelectDate(date);
            }}
    />
        </View>

    );
};

export default DateSelector;