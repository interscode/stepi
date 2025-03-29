import { Inter_700Bold } from "@expo-google-fonts/inter";
import { IconArrowNarrowLeftDashed, IconArrowNarrowRight } from "@tabler/icons-react-native";
import { Button, Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import CardUser from "../../components/card-user";
import PlannedTrips from "../../components/planned-trips";
import FavoriteRoutes from "../../components/favorite-routes";

export default function Home() {
  return (
    <View style={styles.containerHome}>
      <Pressable style={styles.iniciarButton}>
        <Text style={styles.iniciarText}>Iniciar Viaje</Text>
        <IconArrowNarrowRight size={30} color="white" strokeWidth={2} style={styles.rightButton} />
      </Pressable>
      <Text style={styles.titleCardHome}> Tarjeta Principal </Text>
      <CardUser name="Jose Manuel Morales Gomez" cardId="092993328378" balance={110.02}/>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.plannedTrips}> Viajes Programados </Text>
        <PlannedTrips name="De mi casa a la uni" time="10:00" />
        <PlannedTrips name="De la uni a mi casa" time="19:00" />
        <Text style={styles.favoritesRutes}> Rutas favoritas </Text>
        <FavoriteRoutes route="T15" trip="T. Balvanera - Huimilpan" />
        <FavoriteRoutes route="C15" trip="T. Balvanera - Huimilpan" />
        <FavoriteRoutes route="L15" trip="T. Balvanera - Huimilpan" />
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f8f8ff",
    paddingHorizontal: 20,
  },
  iniciarButton:{
    width: "100%",
    height: 54,
    backgroundColor: "#330072",
    padding: 10,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
  },
  iniciarText:{
    color: "white",
    fontSize: 16,
    fontFamily:"Inter_700Bold",
    textAlign:"right",
    marginLeft: 10,
  },
  rightButton:{
    marginRight: 10,
  },
  titleCardHome:{
    fontSize: 20,
    fontFamily:"Inter_700Bold",
    marginTop: 30,
    marginLeft: -180
  },
  scrollView:{
    width: "100%",
  },
  plannedTrips:{
    fontSize: 20,
    fontFamily:"Inter_700Bold",
    marginTop: 30,
  },
  favoritesRutes:{
    fontSize: 20,
    fontFamily:"Inter_700Bold",
    marginTop: 30,
  },

})
