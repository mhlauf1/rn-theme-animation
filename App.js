import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useSharedValue } from "react-native-reanimated";

export default function App() {

  const v = useSharedValue(0);

  return (
    <View style={styles.container}>
      <Text>testing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
