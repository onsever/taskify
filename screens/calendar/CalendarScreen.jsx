import { View, Text, StatusBar } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Agenda } from 'react-native-calendars';
import Colors from "../../utils/Colors";
import { useState } from "react";
import Constants from "../../utils/Constants";
import CalendarItem from "../../components/CalendarItem";

const CalendarScreen = ({ navigation }) => {
    const [items, setItems] = useState(Constants.dummyData);

    const getCurrentDate = () => {
        const date = new Date();
        const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        const month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }

    const mappedItems = () => {
        const emptyObj = {};
        items.forEach(item => {
            if (emptyObj[item.startDate]) {
                emptyObj[item.startDate].push(item);
            } else {
                emptyObj[item.startDate] = [{ ...item }];
            }
        });
        return emptyObj;
    }

    return (
        <SafeAreaView className={"w-screen h-screen bg-primary"}>
            <StatusBar barStyle="light-content" />
            <Agenda
                items={mappedItems()}
                renderItem={item => {
                    return (
                        <CalendarItem {...item} />
                    );
                }}
                selected={getCurrentDate()}
                minDate={getCurrentDate()}
                maxDate={'2023-01-01'}
                hideKnob={false}
                showClosingKnob={true}
                showOnlySelectedDayItems={true}
                disabledByDefault={true}
                refreshing={false}
                refreshControl={null}
                theme={{
                    agendaDayTextColor: Colors.secondary,
                    agendaDayNumColor: Colors.primary,
                    agendaTodayColor: 'red',
                    agendaKnobColor: Colors.anakiwa,
                    calendarBackground: Colors.primary,
                    monthTextColor: Colors.frenchGray,
                }}
            />
        </SafeAreaView>
    );
};

export default CalendarScreen;
