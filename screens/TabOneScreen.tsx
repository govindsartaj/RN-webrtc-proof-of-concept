import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import CameraView from "../components/CameraView";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <CameraView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
