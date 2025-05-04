import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const DailyTimeline = () => {
  const [currentTime, setCurrentTime] = useState({
    formattedTime: '',
    topPosition: 0,
  });

  useEffect(() => {
    const scheduleHeight = 600; // Adjust this based on your design
    const pixelsPerMinute = scheduleHeight / (24 * 60);

    function updateCurrentTimeIndicator() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      const topPosition = totalMinutes * pixelsPerMinute;
      const formattedTime = formatTime(now);

      setCurrentTime({ formattedTime, topPosition });
    }

    function formatTime(date: Date) {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const period = hours >= 12 ? 'PM' : 'AM';
      const hour12 = hours % 12 === 0 ? 12 : hours % 12;
      const paddedMinutes = minutes < 10 ? '0' + minutes : minutes;
      return `${hour12}:${paddedMinutes} ${period}`;
    }

    updateCurrentTimeIndicator();
    const interval = setInterval(updateCurrentTimeIndicator, 60000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const renderHourlyLabels = () => {
    const labels = [];
    for (let i = 0; i < 24; i++) {
      labels.push(
        <View key={i} style={styles.hourContainer}>
          <Text style={styles.hourLabel}>
            {`${i % 12 === 0 ? 12 : i % 12} ${i >= 12 ? 'PM' : 'AM'}`}
          </Text>
          <View style={styles.hourLine} />
        </View>
      );
    }
    return labels;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mon, 1</Text>
      <ScrollView contentContainerStyle={styles.scheduleContainer}>
        <View style={styles.timeLabels}>{renderHourlyLabels()}</View>
        <View style={styles.schedule}>
          <View
            style={[
              styles.horizontalLine,
              { top: currentTime.topPosition },
            ]}
          />
          <Text
            style={[
              styles.currentTimeLabel,
              { top: currentTime.topPosition },
            ]}
          >
            {currentTime.formattedTime}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff', // White text
    textAlign: 'center',
  },
  scheduleContainer: {
    flexDirection: 'row',
  },
  timeLabels: {
    width: 60,
    marginRight: 8,
  },
  hourContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 25,
  },
  hourLabel: {
    fontSize: 12,
    color: '#fff', // White text
  },
  hourLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#333', // Dark gray for hour lines
    marginLeft: 8,
  },
  schedule: {
    flex: 1,
    position: 'relative',
  },
  horizontalLine: {
    position: 'absolute',
    height: 2,
    backgroundColor: '#00f', // Blue for the current time line
    width: '100%',
  },
  currentTimeLabel: {
    position: 'absolute',
    fontSize: 12,
    color: '#f00', // Red text for the current time label
    backgroundColor: '#000', // Black background for the label
    paddingHorizontal: 4,
    borderRadius: 4,
    overflow: 'hidden',
  },
});

export default DailyTimeline;