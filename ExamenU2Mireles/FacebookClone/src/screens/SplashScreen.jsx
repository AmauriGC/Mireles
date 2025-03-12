import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Feed");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <Image source={require("../../assets/facebook.png")} style={styles.logo} />
        <ActivityIndicator size="large" color="#1877F2" style={styles.loader} />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.text}>Facebook</Text>
        <View style={styles.iconsContainer}>
          <Image source={require("../../assets/facebook (1).png")} style={styles.icons} />
          <Image source={require("../../assets/messenger.png")} style={styles.icons} />
          <Image source={require("../../assets/instagram.png")} style={styles.icons} />
          <Image source={require("../../assets/whatsapp.png")} style={styles.icons} />
          <Image source={require("../../assets/twitter.png")} style={styles.icons} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  centerContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  iconsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  icons: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginHorizontal: 5,
  },
  loader: {
    marginTop: 20,
  },
});

export default SplashScreen;
