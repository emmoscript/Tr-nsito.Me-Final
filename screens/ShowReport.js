import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ShowReport = ({ route }) => {
  const { inputs } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Reporte</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {inputs.map((value, index) => (
          <View key={index}>
            <View style={styles.inputRow}>
              <Text style={styles.inputLabel}>{inputLabels[index]}</Text>
              <Text style={[styles.inputValue, styles.grayText]}>{value}</Text>
            </View>
            <View style={styles.separator} />
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Listo!')}>
        <Text style={styles.buttonText}>Listo!</Text>
      </TouchableOpacity>
    </View>
  );
};

const inputLabels = ['VIN', 'Vehículo', 'Matrícula', 'Tipo de evento', 'Color', 'Fecha', 'Lugar'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'green',
    paddingVertical: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 16,
    textAlign: 'left',
    flex: 1,
    writingDirection: 'rtl', 
  },
  inputValue: {
    fontSize: 16,
    textAlign: 'right',
    flex: 1,
    writingDirection: 'ltr', 
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  grayText: {
    color: 'gray',
  },
});

export default ShowReport;
