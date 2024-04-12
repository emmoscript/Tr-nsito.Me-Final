import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TermsOfUseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Términos de uso</Text>
      <Text style={styles.terms}>
        Las presentes Condiciones de Uso regulan el acceso o uso que usted haga, exclusivamente dentro del territorio de la República Dominicana, como persona, de aplicaciones, páginas web, contenido, productos y servicios puestos a disposición por Tránsito.do, una sociedad de responsabilidad situada en República Dominicana.
      </Text>
      <Text style={styles.terms}>
        USTED DEBERÁ LEER DETENIDAMENTE Y ACEPTAR ESTAS CONDICIONES ANTES DE ACCEDER O USAR LOS SERVICIOS.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>He leído y acepto los términos y condiciones</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  terms: {
    fontSize: 16,
    color: '#888', // Light gray color
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'green', // Green color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TermsOfUseScreen;
