import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  primary?: boolean;
};

export default function ActionButton({ label, icon, primary }: Props) {
  return (
    <TouchableOpacity style={[styles.button, primary && styles.primary]}>
      <Ionicons
        name={icon}
        size={28}
        color={primary ? '#fff' : '#3dbf7e'}
      />
      <Text style={[styles.text, primary && { color: 'white' }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 110,
    height: 110,
    backgroundColor: '#f3f3f3',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primary: {
    backgroundColor: '#3dbf7e',
  },
  text: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
  },
});
