import { Pressable } from "react-native";

const ActionButton = ({
  styles,
  children,
  onAction,
  disabled = false,
}) => {
  const disabledStyles = () => {
    return disabled ? "opacity-50 bg-gray-500" : "";
  };

  return (
      <Pressable disabled={disabled} style={( { pressed } ) => [ { opacity: pressed ? 0.5 : 1.0 } ]} className={`flex items-center p-4 rounded-full w-1/2 mx-auto bg-bittersweet mt-4 ${styles}`} onPress={onAction}>
        {children}
      </Pressable>
  );
};

export default ActionButton;
