import { View, Text, StatusBar, Pressable, Image } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { useState, useEffect } from "react";
import Input from "../../components/Input";
import Column from "../../components/Column";
import useInput from "../../hooks/useInput";
import { loginInputs } from "../../data/inputs";
import { loginSchema } from "../../schemas/inputSchemas";
import ActionButton from "../../components/ActionButton";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/features/authSlice";

const Login = ({ navigation }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const { formik, validatedInputs } = useInput(
    loginInputs,
    loginSchema,
    async (values, actions) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(values);
      actions.resetForm();
    }
  );

  const onLogin = () => {
    formik.handleSubmit();
    dispatch(login("user"));
    navigation.navigate("Home", { values: formik.values });
  };

  const onRegister = () => {
    navigation.navigate("Register");
  }

  useEffect(() => {
    if (Object.keys(formik.errors).length === 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formik.errors]);

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
              onAction={onLogin}
              disabled={isDisabled}
            >
                <Text className={"text-white font-bold text-xl tracking-wide"}>Login</Text>
            </ActionButton>
             <View className={"mt-4 w-screen flex items-center"}>
                 <Text className={"text-white p-2"}>Don't you have an account? { <Text className={"text-bittersweet underline"} onPress={onRegister}>Register</Text> }</Text>
             </View>
          </Column>
        </Column>
      </View>
    </SafeAreaView>
  );
};

export default Login;
