import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, Platform, Dimensions } from 'react-native';
import CalendarView from '../components/CalendarView';

const { height } = Dimensions.get('window'); // Get device screen height

const CalendarScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <CalendarView />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    alignItems: 'flex-start', // align calendar to top-left
    paddingHorizontal: 10,
    paddingTop: 10,
    height: height * 0.35, // Take around 1/3 of the screen height
  },
});

export default CalendarScreen;
