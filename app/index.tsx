import { useCallback, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";
import {
  IconBus,
  IconClockPause,
  IconFriends,
  IconMapHeart,
  IconMapPin,
  IconPin,
  IconRoute,
  IconTimeline,
  IconTrafficLights,
} from "@tabler/icons-react-native";
import { StepiLogo } from "../components/stepi-logo";
import { Link } from "expo-router";

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function App() {
  const [loaded, error] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.welcome}>
      <View style={styles.column}>
        <View style={styles.row}>
          <IconClockPause
            size={40}
            color="#330072"
            style={{ marginBottom: -10, marginLeft: -10 }}
          />
          <IconTimeline size={40} color="#330072" />
          <IconTrafficLights
            size={40}
            color="#330072"
            style={{ marginBottom: -10, marginRight: -10 }}
          />
        </View>
        <View style={styles.row}>
          <IconFriends size={40} color="#330072" />
          <StepiLogo size={100} />
          <IconRoute size={40} color="#330072" />
        </View>
        <View style={styles.row}>
          <IconMapPin
            size={40}
            color="#330072"
            style={{ marginTop: -10, marginLeft: -10 }}
          />
          <IconMapHeart size={40} color="#330072" />
          <IconPin
            size={40}
            color="#330072"
            style={{ marginTop: -10, marginRight: -10 }}
          />
        </View>
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>STEPI</Text>
        <Text style={styles.subtitle}>
          Tu ciudad, tu ritmo, tu transporte inteligente
        </Text>
      </View>
      <View style={styles.start}>
        <Link href="/signup" asChild>
          <Pressable
            onPress={() => console.log("Pressed")}
            style={{ width: "100%" }}
          >
            {({ pressed }) => (
              <View style={pressed ? styles.buttonPressed : styles.button}>
                <Text style={styles.buttonText}>Comenzar</Text>
              </View>
            )}
          </Pressable>
        </Link>
        <Link href="signin">
          ¿Ya tienes cuenta? <Text style={styles.bold}>Inicia sesión</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  column: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  text: {
    marginTop: 100,
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#330072",
  },
  subtitle: {
    fontSize: 16,
    color: "#330072",
    textAlign: "center",
  },
  start: {
    marginTop: 150,
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 50,
    width: "100%",
  },
  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#330072",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
  },
  buttonPressed: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#330072cc",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
    color: "#330072",
  },
});
