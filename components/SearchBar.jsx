import { View, TextInput } from "react-native";
import Colors from "../utils/Colors";

const SearchBar = () => {
    return (
        <View className={"flex-1 bg-secondary rounded-full"}>
            <TextInput
                placeholder={"Search..."}
                placeholderTextColor={Colors.frenchGray}
                className="px-6 py-4 text-frenchGray"
                autoCapitalize={"none"}
                autoCorrect={false}
                autoComplete={"off"}
            />
        </View>
    );
};

export default SearchBar;
