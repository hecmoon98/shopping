import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeIconWithBadge(props) {
  return (
    <IconWithBadge {...props} badgeCount={5} />
  );
}


