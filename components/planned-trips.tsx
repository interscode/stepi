import { StyleSheet, View, Text } from "react-native";

export default function PlannedTrips({name, time}:{name:string, time:string}) {
  return (
    <View style={styles.containerPlanned}>
      <Text style={styles.namePlannedTrips}>{name}</Text>
      <Text style={styles.timePlannedTrips}>{time}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerPlanned: {
    width: "100%",
    height: 54,
    borderWidth: 1,
    borderColor: "#330072",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  namePlannedTrips: {
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    marginLeft: 10,

  },
  timePlannedTrips: {
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    marginRight: 20,
    color: "#6D6D6D",
  
  },
})