import React from 'react-native';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Details = ({ route }) => {
  const { placa, fecha, titular, marca, modelo, año, seguroVigente, imageUrl } = route.params;
  const navigation = useNavigation();

  const goToHistory = () => {
    navigation.navigate('History');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goToHistory}>
          <Text style={styles.backButton}>Atras</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Detalles</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.carImage} />
      </View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.category}>Placa</Text>
        <Text style={styles.detail}>{placa}</Text>
        <Text style={styles.category}>Fecha</Text>
        <Text style={styles.detail}>{fecha}</Text>
        <Text style={styles.category}>Titular</Text>
        <Text style={styles.detail}>{titular}</Text>
        <Text style={styles.category}>Marca</Text>
        <Text style={styles.detail}>{marca}</Text>
        <Text style={styles.category}>Modelo</Text>
        <Text style={styles.detail}>{modelo}</Text>
        <Text style={styles.category}>Año</Text>
        <Text style={styles.detail}>{año}</Text>
        <Text style={styles.category}>Seguro Vigente</Text>
        <Text style={styles.detail}>{seguroVigente}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 16,
    alignItems: 'center',
    fontFamily: 'Roboto',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  backButton: {
    color: 'green',
    fontSize: 16,
    marginRight: 16,
    fontFamily: 'Roboto',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#ccc',
    marginBottom: 16,
  },
  carImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  categoriesContainer: {
    width: '100%',
  },
  category: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily: 'Roboto',
  },
  detail: {
    fontSize: 16,
    marginBottom: 16,
    fontFamily: 'Roboto',
  },
});

export default Details;
