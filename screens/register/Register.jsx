import { View, Text, StatusBar, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Column from "../../components/Column";
import Input from "../../components/Input";
import ActionButton from "../../components/ActionButton";
import useInput from "../../hooks/useInput";
import { registerInputs } from "../../data/inputs";
import { registerSchema } from "../../schemas/inputSchemas";

const Register = ( { navigation }) => {
    const { formik, validatedInputs } = useInput(registerInputs, registerSchema, async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(values);
        actions.resetForm();
    });

    const onRegister = () => {

    }

    const onLogin = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView className={"flex items-center justify-center w-screen h-screen bg-primary"}>
            <StatusBar barStyle="light-content" />
            <View
                className={
                    "flex items-center justify-center w-full h-full"
                }
            >
                <Column styles={""}>
                    <Image
                        source={require("../../assets/logo-2.png")}
                        className={"w-full h-32 mb-8"}
                    />
                    <Column>
                        {validatedInputs.map((input, index) => {
                            return (
                                <Input
                                    key={index}
                                    inputStyles={"h-12"}
                                    viewStyles={"h-[90px]"}
                                    placeholder={input.placeholder}
                                    errorMessage={formik.errors[input.name]}
                                    onAction={formik.handleChange(input.name)}
                                    blurAction={formik.handleBlur(input.name)}
                                    keyboardType={input.keyboardType}
                                    title={input.title}
                                    secure={input.secure}
                                    val={formik.values[input.name]}
                                />
                            );
                        })}
                        <ActionButton
                            styles={"rounded-lg w-full"}
                            onAction={onRegister}
                        >
                            <Text className={"text-white font-bold text-xl tracking-wide"}>Register</Text>
                        </ActionButton>
                        <View className={"mt-4 w-screen flex items-center"}>
                            <Text className={"text-white p-2"}>Do you have an account? { <Text className={"text-bittersweet underline"} onPress={onLogin}>Login</Text> }</Text>
                        </View>
                    </Column>
                </Column>
            </View>
        </SafeAreaView>
    );
};

export default Register;
