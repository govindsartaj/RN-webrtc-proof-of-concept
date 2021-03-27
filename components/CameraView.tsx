import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";

export default function CameraView() {
  const [hasPermission, setHasPermission] = useState<boolean>();
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [camera, setCamera] = useState<Camera>();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.fixedRatio}>
        <Camera
          style={styles.camera}
          type={type}
          ref={(ref: any) => setCamera(ref)}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <MaterialIcons
                name="flip-camera-ios"
                size={32}
                color="white"
                style={styles.flipButton}
              />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    marginRight: 60,
    marginTop: 40,
  },
  button: {
    flex: 0.7,
    alignSelf: "flex-start",
    alignItems: "flex-end",
  },
  flipButton: {
    color: "white",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 3 / 4,
  },
});
