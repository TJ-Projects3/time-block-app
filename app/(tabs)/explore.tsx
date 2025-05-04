import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  View,
} from "react-native";
import CalendarView from "../components/CalendarView";
import DailyTimeline from "../components/DailyTime";
import ToDoList from "../components/ToDoList";

const CalendarScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          <CalendarView />
          <ToDoList />
        </View>
        {/* Right Column */}
        <View style={styles.rightColumn}>
          <DailyTimeline />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#F9FAFB", // Light gray background
  },
  mainContainer: {
    flex: 1,
    flexDirection: "row",
  },
  leftColumn: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },
  rightColumn: {
    flex: 1,
    padding: 10,
  },
});

export default CalendarScreen;
