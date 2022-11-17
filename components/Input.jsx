import { TextInput, View, Text } from "react-native";

const Input = ({
  inputStyles,
  viewStyles,
  placeholder,
  errorMessage,
  onAction = null,
  blurAction = null,
  focusAction = null,
  keyboardType,
  val,
  title,
  secure = false,
  iconLeft,
  iconRight,
}) => {
  return (
    <View
      className={`flex items-start justify-start w-full h-[80px] ${
        errorMessage && val ? "mb-4" : "mb-0"
      } ${viewStyles}`}
    >
      <Text className={"mb-1 text-white"}>{title}</Text>
      <TextInput
        className={`border border-secondary text-white px-2 py-2 w-full rounded-md h-[40px] ${inputStyles}`}
        placeholder={placeholder}
        autoCorrect={false}
        autoCapitalize={false}
        autoFocus={false}
        autoComplete={false}
        keyboardType={keyboardType}
        onChangeText={(text) => onAction(text)}
        onBlur={blurAction}
        value={val}
        secureTextEntry={secure}
      />
      {val === "" ? (
        <></>
      ) : (
        errorMessage && (
          <Text className={"text-sm text-red-500 underline mt-1"}>
            {errorMessage}
          </Text>
        )
      )}
    </View>
  );
};

export default Input;
