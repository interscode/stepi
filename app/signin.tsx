import { Link } from "expo-router";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { StepiLogo } from "../components/stepi-logo";
import { GoogleLogo } from "../components/google-logo";

export default function Singin() {
  return (
    <View style={styles.container}>
      <StepiLogo size={100} />
      <Text style={styles.title}>Iniciar sesión</Text>
      <View style={styles.form}>
        <Text>Correo electrónico:</Text>
        <TextInput style={styles.input} placeholder="Correo electrónico" />
        <Text>Contraseña:</Text>
        <TextInput style={styles.input} placeholder="Contraseña" />
      </View>
      <View style={styles.start}>
        <Link href="/signup" asChild>
          <Pressable
            onPress={() => console.log("Pressed")}
            style={{ width: "100%" }}
          >
            {({ pressed }) => (
              <View style={pressed ? styles.buttonPressed : styles.button}>
                <Text style={styles.buttonText}>Continuar con correo</Text>
              </View>
            )}
          </Pressable>
        </Link>
      </View>
      <View style={styles.row}>
        <View style={styles.line} />
        <Text>O</Text>
        <View style={styles.line} />
      </View>
      <Pressable style={styles.googleButton}>
        <GoogleLogo size={20} />
        <Text style={styles.googleButtonText}>Continuar con Google</Text>
      </Pressable>
      <Link href="/signup">
        ¿Aun no tienes cuenta? <Text style={styles.bold}>Registrate</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8ff",
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
  },
  form: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#f8f8fb",
  },
  start: {
    marginTop: 10,
    alignItems: "center",
    gap: 10,
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
  googleButton: {
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#dadada",
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  googleButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    width: "100%",
    marginVertical: 20,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "#dadada",
    width: "41%",
  },
});
