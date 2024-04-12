import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InputBoxes = () => {
  const navigation = useNavigation();
  const [inputs, setInputs] = useState(Array(7).fill(''));
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Función para manejar el cambio en los TextInput
  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  // Función para manejar el evento de crear el reporte
  const handleCreateReport = () => {
    if (!inputs.some(input => input.trim() === '')) {
      navigation.navigate('ShowReport', { inputs });
    }
  };

  // Efecto para habilitar o deshabilitar el botón según el estado de los inputs
  useEffect(() => {
    setIsButtonDisabled(inputs.some(input => input.trim() === ''));
  }, [inputs]);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {/* Encabezado */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>Atras</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Llenar reporte</Text>
          <View style={{ width: 60 }}></View> {/* Espacio en blanco para centrar el texto */}
        </View>
        {/* Inputs */}
        <TextInput
          style={styles.input}
          placeholder="VIN"
          value={inputs[0]}
          onChangeText={(text) => handleInputChange(0, text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Vehículo"
          value={inputs[1]}
          onChangeText={(text) => handleInputChange(1, text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Matrícula"
          value={inputs[2]}
          onChangeText={(text) => handleInputChange(2, text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Tipo de evento"
          value={inputs[3]}
          onChangeText={(text) => handleInputChange(3, text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Color"
          value={inputs[4]}
          onChangeText={(text) => handleInputChange(4, text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha"
          value={inputs[5]}
          onChangeText={(text) => handleInputChange(5, text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Lugar"
          value={inputs[6]}
          onChangeText={(text) => handleInputChange(6, text)}
        />
        {/* Botón "Crear Reporte" */}
        <TouchableOpacity
          style={[styles.createReportButton, isButtonDisabled && styles.disabledButton]}
          onPress={handleCreateReport}
          disabled={isButtonDisabled}
        >
          <Text style={styles.createReportButtonText}>Crear Reporte</Text>
        </TouchableOpacity>
        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.circleButtonContainer}>
            <TouchableOpacity style={[styles.circleButton, styles.marginRight]}></TouchableOpacity>
            <TouchableOpacity style={[styles.circleButton, styles.greenButton, styles.marginRight]}></TouchableOpacity>
            <TouchableOpacity style={[styles.circleButton, styles.marginRight]}></TouchableOpacity>
            <TouchableOpacity style={[styles.circleButton, styles.marginRight]}></TouchableOpacity>
            <TouchableOpacity style={[styles.circleButton, { marginRight: 0 }]}></TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff', // Cambiar el color de fondo según tus preferencias
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: 'green',
    paddingVertical: 3, // Reducir el padding vertical para hacer el botón más pequeño
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  input: {
    width: '100%',
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  createReportButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  createReportButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc', // Cambiar el color del botón deshabilitado según tus preferencias
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#ccc', // Cambiar el color de borde según tus preferencias
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#f0f0f0', // Cambiar el color de fondo del footer según tus preferencias
    alignItems: 'center',
  },
  circleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  circleButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#666', // Cambiar el color del botón circular según tus preferencias
  },
  marginRight: {
    marginRight: 15,
  },
  greenButton: {
    backgroundColor: 'green',
  },
});

export default InputBoxes;
