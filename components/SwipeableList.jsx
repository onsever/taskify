import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Swipeable } from "react-native-gesture-handler";

const SwipeableList = ({
  data,
  addClass,
  children,
  leftSwipeView,
  rightSwipeView,
  leftSwipeAction,
  rightSwipeAction,
}) => {
  return (
    <SafeAreaView className={addClass}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index, separators }) => (
          <Swipeable
            onSwipeableLeftOpen={leftSwipeAction}
            onSwipeableRightOpen={rightSwipeAction}
            renderLeftActions={leftSwipeView}
            renderRightActions={rightSwipeView}
          >
            {children}
          </Swipeable>
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

export default SwipeableList;
