import React, { useState } from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarView: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const getMarkedDates = () => ({
    [selectedDate]: {
      selected: true,
      selectedColor: isDark ? '#6366F1' : '#7C3AED',
    },
  });

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#111827' : '#F9FAFB' }]}>
      <Calendar
        onDayPress={(day: { dateString: string }) => setSelectedDate(day.dateString)}
        markedDates={getMarkedDates()}
        style={styles.calendar}
        theme={{
          backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
          calendarBackground: isDark ? '#1F2937' : '#FFFFFF',
          selectedDayBackgroundColor: isDark ? '#6366F1' : '#7C3AED',
          selectedDayTextColor: '#FFFFFF',
          todayTextColor: isDark ? '#93C5FD' : '#2563EB',
          dayTextColor: isDark ? '#E5E7EB' : '#111827',
          textDisabledColor: isDark ? '#6B7280' : '#D1D5DB',
          arrowColor: isDark ? '#F9FAFB' : '#4B5563',
          monthTextColor: isDark ? '#F3F4F6' : '#1F2937',
          textMonthFontSize: 20,         // a little smaller
          textDayFontSize: 16,            // a little smaller
          textDayHeaderFontSize: 13,      // a little smaller
          // Stretch calendar rows properly
          'stylesheet.calendar.main': {
            week: {
              marginTop: 1,
              marginBottom: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              height: 50, // 🔥 slightly smaller than before
            }
          },
        }}
        enableSwipeMonths={true}/>
    </View>
  );
};

const getTodayDate = (): string => {
  return new Date().toISOString().split('T')[0];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  calendar: {
    height: 460,
    width: '375%', // take full width of parent
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
});

export default CalendarView;
