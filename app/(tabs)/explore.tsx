import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';
import CalendarView from '../components/CalendarView';

const CalendarScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CalendarView />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#F9FAFB', // Light gray background
  },
});

export default CalendarScreen;