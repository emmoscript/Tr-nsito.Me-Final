import React from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const History = () => {
  const navigation = useNavigation();

  const registros = [
    { 
      placa: 'A759686', 
      fecha: '1/1/2024', 
      titular: 'Juan Perez', 
      marca: 'Toyota', 
      modelo: 'Corolla', 
      año: '2019', 
      seguroVigente: 'Si',
      imageUrl: 'https://carrosrd-media.s3.amazonaws.com/listings/27473/m_16162506610138273.jpg' ,
    },
    { 
      placa: 'EG67890', 
      fecha: '23/12/2023', 
      titular: 'Armando Domínguez',  
      marca: 'Honda', 
      modelo: 'Civic', 
      año: '2020', 
      seguroVigente: 'No' ,
      imageUrl: 'https://carrosrd-media.s3.amazonaws.com/listings/36746/m_16517770280200632.jpg' ,

    },
    { 
      placa: 'WD456PL', 
      fecha: '18/12/2023', 
      titular: 'Alicia Aquino', 
      marca: 'Ford', 
      modelo: 'Focus', 
      año: '2018', 
      seguroVigente: 'Sí' ,
      imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_953463-MRD74590137954_022024-T.webp' ,

    },
    { 
      placa: 'OI456EU', 
      fecha: '13/12/2023', 
      titular: 'Jorge Coss', 
      marca: 'Chevrolet', 
      modelo: 'Cruze', 
      año: '2017', 
      seguroVigente: 'Sí' ,
      imageUrl: 'https://carrosrd-media.s3.amazonaws.com/listings/31325/m_16337322230341153.jpg',
    },
    { 
      placa: 'OP56789', 
      fecha: '8/12/2023', 
      titular: 'Eduardo Hernández', 
      marca: 'Nissan', 
      modelo: 'Altima', 
      año: '2016', 
      seguroVigente: 'No' ,
      imageUrl: 'https://ainsadominicana.com/wp-content/uploads/thememakers/cardealer/3/991/main/5b5b20a1ec15a.jpg'
    },
    { 
      placa: 'WD123DI', 
      fecha: '6/12/2023', 
      titular: 'Carlos Castro', 
      marca: 'Kia', 
      modelo: 'Soul', 
      año: '2015', 
      seguroVigente: 'Sí' ,
      imageUrl: 'https://carrosrd-media.s3.amazonaws.com/listings/41850/m_16644018080167978.jpg'
    },
    { 
      placa: 'A756843', 
      fecha: '3/12/2023', 
      titular: 'David Raya', 
      marca: 'Hyundai', 
      modelo: 'Elantra', 
      año: '2014', 
      seguroVigente: 'No' ,
      imageUrl: 'https://carrosrd-media.s3.amazonaws.com/listings/20392/m_15835971920254335.jpg'
    },
    { 
      placa: 'L856824', 
      fecha: '29/11/2023', 
      titular: 'Graciela Moreno', 
      marca: 'Subaru', 
      modelo: 'Impreza', 
      año: '2013', 
      seguroVigente: 'Sí' ,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7SVn7y8z6yNpsdvpBzL6Rti_7RsKXNV640phGv03cg&s'
    },
    { 
      placa: 'G924676', 
      fecha: '23/11/2023', 
      titular: 'Francisco Villanueva', 
      marca: 'Mazda', 
      modelo: '3', 
      año: '2012', 
      seguroVigente: 'No' ,
      imageUrl: 'https://carrosrd-media.s3.amazonaws.com/listings/8112/full_15190656260.jpg'
    },
    { 
      placa: 'EG67890', 
      fecha: '17/11/2023', 
      titular: 'Helena Ramírez', 
      marca: 'Volkswagen', 
      modelo: 'Jetta', 
      año: '2011', 
      seguroVigente: 'Sí' ,
      imageUrl: 'https://carrosrd-media.s3.amazonaws.com/listings/38133/m_16551468370169126.jpg'
    },
    { 
      placa: 'OI789WB', 
      fecha: '14/11/2023', 
      titular: 'Juan Osorio', 
      marca: 'BMW', 
      modelo: 'Serie 3', 
      año: '2010', 
      seguroVigente: 'No' ,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3SkfK99CW7cQcK2SqDVQCC-G_tZzWPnkWI7jefGVKiQ&s'
    },
  ];

  const handlePlacaSelection = (registro) => {
    navigation.navigate('Details', registro);
  };

  const handleGoBack = () => {
    navigation.navigate('Profile'); // Navega a la pantalla "Profile"
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Historial</Text>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Text style={styles.backButtonText}>Atras</Text>
        </TouchableOpacity>
        <Text style={styles.scanText}>Escaneo</Text>
        <View style={styles.space} />
        <View style={styles.registrosContainer}>
          {registros.map((registro, index) => (
            <TouchableOpacity key={index} style={styles.registro} onPress={() => handlePlacaSelection(registro)}>
              <Text style={styles.bullet}>⬤</Text>
              <Text style={styles.placaText}>{registro.placa}</Text>
              <Text style={styles.dateText}>{registro.fecha}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    fontFamily: 'Roboto',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 16,
    marginTop: 0,
    fontFamily: 'Roboto',
  },
  backButton: {
    alignItems: 'center',
    marginBottom: 16,
  },
  backButtonText: {
    color: 'green',
    fontSize: 16,
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'transparent',
    marginRight: 'auto',
    marginTop: -24,
    fontFamily: 'Roboto',
  },
  scanText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 16,
    fontFamily: 'Roboto',
  },
  space: {
    marginBottom: 16,
  },
  registrosContainer: {
    backgroundColor: 'white',
  },
  registro: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  bullet: {
    color: 'green',
    marginRight: 8,
    fontSize: 16,
  },
  placaText: {
    fontSize: 16,
    marginBottom: 4,
    fontFamily: 'Roboto',
  },
  dateText: {
    fontSize: 14,
    color: '#888',
    marginLeft: 'auto',
    fontFamily: 'Roboto',
  },
  footer: {
    backgroundColor: '#ddd',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
  },
  dot: {
    backgroundColor: '#666',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 4,
  },
});

export default History;