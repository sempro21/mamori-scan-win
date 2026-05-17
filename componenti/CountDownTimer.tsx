import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import CountDown from 'react-native-countdown-component';

export default function CountdownTimer() {
  const [until, setUntil] = useState(0);

  useEffect(() => {
    fetch('https://mocki.io/v1/431798cb-916c-42e0-ad16-f2b440e8eaa5')
      .then(res => res.json())
      .then(data => {
        const future = new Date(data.date).getTime();
        const now = Date.now();
        setUntil(Math.floor(future - now) / 1000);
      })
      .catch(() => setUntil(86400));
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>
        Next Draw
      </Text>
      { until > 0 ? (
      <CountDown
        until={until}
        size={20}
        timeToShow={['D', 'H', 'M', 'S']}
        timeLabels={{
          d: 'Days',
          h: 'Hours',
          m: 'Minutes',
          s: 'Seconds',
        }}
      />
      ):(
        <Text>Loading Timer...</Text>
      )}
    </View>
  );
}
