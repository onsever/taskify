import { View } from "react-native";

const Row = ({ styles, children, justifyContent, alignItems, gap }) => {
  return (
    <View
      className={`flex flex-row ${
        justifyContent ? justifyContent : "justify-center"
      } ${alignItems ? alignItems : "items-center"} py-2 px-4 w-full ${
        gap ? gap : "gap-1"
      } ${styles}`}
    >
      {children}
    </View>
  );
};

export default Row;
