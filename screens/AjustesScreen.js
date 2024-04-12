import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'; // Import for navigation

const SettingsScreen = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [notificationEnabled, setNotificationEnabled] = useState(true);

  const navigation = useNavigation(); // Get navigation reference

  const toggleDarkMode = () => {
    setDarkModeEnabled((prevState) => !prevState);
  };

  const toggleNotification = () => {
    setNotificationEnabled((prevState) => !prevState);
  };

  const handleEditProfilePress = () => {
    navigation.navigate('EditProfile'); // Navigate to 'EditProfile' screen
  };

  const handleLogoutPress = () => {
    navigation.navigate('Login'); // Navigate to 'Login' screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hecho</Text>

      {/* Appearance Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Apariencia</Text>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Modo oscuro</Text>
          <Switch
            trackColor={'#000'}
            thumbColor={darkModeEnabled ? '#fff' : '#ccc'}
            ios_backgroundColor={'#ccc'}
            onValueChange={toggleDarkMode}
            value={darkModeEnabled}
          />
        </View>
      </View>

      {/* Notifications Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notificaciones</Text>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Habilitar notificaciones</Text>
          <Switch
            trackColor={'#000'}
            thumbColor={notificationEnabled ? '#fff' : '#ccc'}
            ios_backgroundColor={'#ccc'}
            onValueChange={toggleNotification}
            value={notificationEnabled}
          />
        </View>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cuenta</Text>
        <TouchableOpacity onPress={handleEditProfilePress}>
          <View style={styles.settingRow}>
            <MaterialCommunityIcons name="account-edit" size={24} style={styles.icon} />
            <Text style={styles.settingLabel}>Editar perfil</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Logout Section */}
      <View style={styles.section}>
        <TouchableOpacity onPress={handleLogoutPress}>
          <View style={styles.settingRow}>
            <MaterialCommunityIcons name="logout" size={24} style={styles.icon} />
            <Text style={styles.settingLabel}>Cerrar sesión</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  icon: {
    marginRight: 10,
  },
});

export default SettingsScreen;
