import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Column from "../../components/Column";
import Input from "../../components/Input";
import ActionButton from "../../components/ActionButton";
import useInput from "../../hooks/useInput";
import { registerInputs } from "../../data/inputs";
import { registerSchema } from "../../schemas/inputSchemas";
import { usePost } from "../../hooks/usePost";
import { useEffect } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/authSlice";

const Register = ({ navigation }) => {
  const { formik, validatedInputs } = useInput(
    registerInputs,
    registerSchema,
    async (values, actions) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(values);
      actions.resetForm();
    }
  );

  const { post, result, loading, error, loaded } = usePost();
  const dispatch = useDispatch();

  const onRegister = () => {
    post("auth/register", formik.values);
  };

  const onLogin = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (loaded) {
      if (error) {
        Alert.alert("Error", error.data);
      }
      if (result) {
        dispatch(login(result.data));
      }
    }
  }, [loaded]);

  return (
    <SafeAreaView
      className={
        "flex items-center justify-center w-screen h-screen bg-primary"
      }
    >
      <StatusBar barStyle="light-content" />
      <View className={"flex items-center justify-center w-full h-full"}>
        <Image
          source={require("../../assets/logo-2.png")}
          className={"w-52 h-32 mb-1"}
          resizeMode="cover"
        />
        <Column styles={""}>
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
              styles={"rounded-lg w-full flex-row justify-center"}
              onAction={loading ? null : onRegister}
            >
              {loading && <ActivityIndicator color={"white"} />}
              <Text
                className={"text-white font-bold text-xl tracking-wide pl-2"}
              >
                Register
              </Text>
            </ActionButton>
            <View
              className={
                "mt-4 w-screen flex items-center flex-row justify-center"
              }
            >
              <Text className={"text-white p-2"}>Do you have an account?</Text>

              <TouchableOpacity className={"p-1"} onPress={onLogin}>
                <Text className={"text-bittersweet underline"}>Login</Text>
              </TouchableOpacity>
            </View>
          </Column>
        </Column>
      </View>
    </SafeAreaView>
  );
};

export default Register;
