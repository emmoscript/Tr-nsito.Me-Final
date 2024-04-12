import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackActions } from '@react-navigation/native';



const DashboardScreen = ({ navigation }) => {
  // Función para navegar a la pantalla de perfil
  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  const handleScanPress = () => {
    navigation.dispatch(StackActions.push('EscanearPlacaScreen'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        {/* Botón de perfil */}
        <TouchableOpacity onPress={goToProfile} style={styles.profileButton}>
          <View style={styles.profileIconContainer}>
            <MaterialCommunityIcons name="account" size={22} color="#ffffff" />
          </View>
        </TouchableOpacity>
      </View>
      {/* Contenido del dashboard */}
      <TouchableOpacity onPress={() => navigation.navigate('Report')} style={styles.largeGridItem}>
        <View style={[styles.gridItem, styles.bigGridItem, styles.redBackground, styles.shadow]}>
          <MaterialCommunityIcons name="file-document-outline" size={50} color="#ffffff" style={styles.icon} />
          <Text style={[styles.gridText, styles.whiteText]}>Llenar un reporte</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Events')} style={styles.smallGridItem}>
          <View style={[styles.gridItem, styles.greenBackground, styles.shadow]}>
            <MaterialCommunityIcons name="calendar-multiple" size={50} color="#ffffff" style={styles.icon} />
            <Text style={[styles.gridText, styles.whiteText]}>Eventos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleScanPress} style={styles.smallGridItem}>
          <View style={[styles.gridItem, styles.blueBackground, styles.shadow]}>
            <MaterialCommunityIcons name="qrcode-scan" size={50} color="#ffffff" style={styles.icon} />
            <Text style={[styles.gridText, styles.whiteText]}>Escáneo</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Statistics')} style={styles.smallGridItem}>
          <View style={[styles.gridItem, styles.orangeBackground, styles.shadow]}>
            <MaterialCommunityIcons name="chart-bar" size={50} color="#ffffff" style={styles.icon} />
            <Text style={[styles.gridText, styles.whiteText]}>Estadisticas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Forum')} style={styles.smallGridItem}>
          <View style={[styles.gridItem, styles.purpleBackground, styles.shadow]}>
            <MaterialCommunityIcons name="comment-multiple" size={50} color="#ffffff" style={styles.icon} />
            <Text style={[styles.gridText, styles.whiteText]}>Foro</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 'auto', // Mueve el título a la izquierda
  },
  profileButton: {
    marginLeft: 10, // Espacio entre el título y el botón de perfil
  },
  profileIconContainer: {
    backgroundColor: '#24CE85', // Color de fondo del círculo verde
    borderRadius: 12, // Radio del círculo verde
    width: 24, // Tamaño del círculo verde
    height: 24, // Tamaño del círculo verde
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Agrega sombra al botón de perfil
    shadowOpacity: 0.2, // Opacidad de la sombra
    marginRight: 10, // Mueve el botón de perfil a la derecha
  },
  largeGridItem: {
    width: '100%',
    marginBottom: 30,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  smallGridItem: {
    width: '48%',
  },
  gridItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 40,
  },
  bigGridItem: {
    padding: 30,
  },
  gridText: {
    marginTop: 10,
    textAlign: 'center',
  },
  icon: {
    marginBottom: 10,
  },
  redBackground: {
    backgroundColor: '#FD7366',
  },
  greenBackground: {
    backgroundColor: '#A160FB',
  },
  blueBackground: {
    backgroundColor: '#5162FA',
  },
  orangeBackground: {
    backgroundColor: '#FFB84E',
  },
  purpleBackground: {
    backgroundColor: '#24CE85',
  },
  whiteText: {
    color: '#ffffff',
  },
  shadow: {
    elevation: 5, // Agrega sombra a los contenedores
    shadowOpacity: 0.2, // Opacidad de la sombra
  },
});

export default DashboardScreen;
