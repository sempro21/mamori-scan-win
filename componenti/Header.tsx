import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type Props = {
  username: string;
  scans: string;
};

export default function Header({ username, scans }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://avatarfiles.alphacoders.com/377/thumb-1920-377738.jpg' }}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.title}>Hi {username}!</Text>
        <Text style={styles.sub}>{scans} Scans</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  sub: {
    color: 'gray',
    marginTop: 4,
  },
});
