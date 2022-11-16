import { TouchableOpacity } from "react-native";

const ActionButton = ({
  styles,
  children,
  onAction,
  disabled = false,
  opacity = 0.6,
}) => {
  const disabledStyles = () => {
    return disabled ? "opacity-50 bg-gray-500" : "";
  };

  return (
    <TouchableOpacity
      className={`bg-indigo-500 py-2 px-4 ${styles} ${disabledStyles()}`}
      disabled={disabled}
      activeOpacity={opacity}
      onPress={onAction}
    >
      {children}
    </TouchableOpacity>
  );
};

export default ActionButton;
