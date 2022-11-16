import { View, Text, StatusBar, Pressable, Image } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { useState, useEffect } from "react";
import Input from "../../components/Input";
import Column from "../../components/Column";
import useInput from "../../hooks/useInput";
import { loginInputs } from "../../data/inputs";
import { loginSchema } from "../../schemas/inputSchemas";
import ActionButton from "../../components/ActionButton";

const Home = ({ navigation }) => {
  const [isDisabled, setIsDisabled] = useState(true);

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
    navigation.navigate("Details", { values: formik.values });
  };

  useEffect(() => {
    if (Object.keys(formik.errors).length === 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formik.errors]);

  return (
    <SafeAreaView className={"flex items-center justify-center"}>
      <StatusBar barStyle="auto" />
      <View
        className={
          "flex items-center justify-center bg-slate-200 w-screen h-screen"
        }
      >
        <Column styles={""}>
          <Image
            source={"../../assets/favicon.png"}
            className={"w-24 h-24 bg-black rounded-full"}
          />
          <Column>
            <Text className={"font-bold text-2xl tracking-wider mb-4"}>
              Login
            </Text>

            {validatedInputs.map((input, index) => {
              return (
                <Input
                  key={index}
                  styles={input.styles}
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
              styles={"rounded-lg w-1/3"}
              onAction={onLogin}
              disabled={isDisabled}
            >
              <Text className={"text-white font-bold text-center"}>Login</Text>
            </ActionButton>
          </Column>
        </Column>
      </View>
    </SafeAreaView>
  );
};

export default Home;
