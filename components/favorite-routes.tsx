import { View, Text, StyleSheet } from "react-native";
import { getRouteColor } from "../utils/getRouteColor";

export default function FavoriteRoutes({route, trip}:{route: string, trip: string}) {
  return(
    <View style={styles.containerFavoriteRoutes}>
      <View style={{ ...styles.route, backgroundColor: getRouteColor(route) }}>
        <Text style={styles.nameRoute}>{route}</Text>
      </View>
      <Text style={styles.trip}>{trip}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  containerFavoriteRoutes: {
    width:"100%",
    height: 50,
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15
  },
  route:{
    width:50,
    height:"100%",
    backgroundColor: "#D35400",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  nameRoute:{
    fontSize: 16,
    fontFamily:"Inter_700Bold",
    color: "white",
  },
  trip:{
    fontSize: 16,
    fontFamily:" Inter_500Medium",
    marginLeft: 10,
    marginTop: 15,
  },


})