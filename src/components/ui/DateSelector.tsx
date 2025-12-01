import { Dimensions, View } from "react-native";
import DatePicker, { getToday } from 'react-native-modern-datepicker';

    
type Props = {
    onSelectDate: (date: string) => void; 
};

const DateSelector = ({onSelectDate} : Props) => {

    const { width, height } = Dimensions.get("window"); //Componente para dimensionar largura e altura (responsividade)
    const today = getToday();
    return (
        <View>
            <DatePicker
            mode="calendar"
            options={{
                backgroundColor: '#f1eee5ff', //Fundo (background)
                textHeaderColor: '#855A2D', //Mês
                textDefaultColor: '#4a503d', //Número (data)
                selectedTextColor: '#fff', //Cor do número (data) quando selecionado
                mainColor: '#567C8D', //Setas laterais e seletor
                textSecondaryColor: '#2F4156', //Dia da semana
                borderColor: 'rgba(122, 146, 165, 0.1)', //Borda
                textFontSize: 14, //Tamanho da fonte (dias da semana e número -> data)
                textHeaderFontSize: 15, //Tamanho da fonte (mês)
            }}
            style={{borderRadius: 15, width: width * 0.62, height: "auto" }}
            isGregorian={true}
            minimumDate={today}
            onSelectedChange={(date) => {
                onSelectDate(date);
            }}
    />
        </View>

    );
};

export default DateSelector;