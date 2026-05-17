import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../componenti/Header';
import ActionButton from '../componenti/ActionButton';
import CountdownTimer from '../componenti/CountDownTimer';

export default function ScanWinScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* HEADER */}
      <Header username="Cristiano" scans="7+" />

      {/* 3 BOTTONI */}
      <View style={styles.row}>
        <ActionButton label="Find Products" icon="search" />
        <ActionButton label="Take Photos" icon="camera" primary />
        <ActionButton label="Earn Tickets" icon="ticket" />
      </View>

      {/* TIMER */}
      <View style={{ marginTop: 20 }}>
        <CountdownTimer />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
  },
});
