import { View, Text, StyleSheet } from 'react-native';
import { StepiLogo } from './stepi-logo';

export default function CardUser({ name, cardId, balance }: { name: string; cardId: string; balance: number }) {
  return (
    <View style={styles.containerCardUser}>
      <View style={styles.dataCardUser}>
        <Text style={styles.nameCard}>{name}</Text>
        <Text style={styles.cardId}>{cardId}</Text>
        <Text style={styles.balanceCard}>$ {balance}</Text>
      </View>
      <View style={styles.logoContainer}>
        <View style={styles.logoClip}>
          <StepiLogo size={230} type='secondary' />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCardUser: {
    borderWidth: 1,
    borderColor: '#330072',
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 3, // Añade un zIndex mayor para mostrar el borde encima
  },
  dataCardUser: {
    flexDirection: 'column',
    marginLeft: 20,
    marginTop: 20,
    justifyContent: 'flex-start',
    zIndex: 2, // dataCardUser tiene un zIndex menor que containerCardUser
  },
  nameCard: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  cardId: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
  },
  balanceCard: {
    fontSize: 36,
    fontFamily: 'Inter_700Bold',
    marginTop: 50,
    marginLeft: 20,
  },
  logoContainer: {
    position: 'absolute',
    top: -2,
    right: 0,
    width: 135,
    height: 184,
    overflow: 'hidden',
    zIndex: 1, // logoContainer tiene el zIndex más bajo

  },
  logoClip: {
    position: 'absolute',
    left: -10,
    height: 200,
  },
});