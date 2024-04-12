import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';

const ScannerScreen = () => {
  const camera = useRef(null);
  const navigation = useNavigation();

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [scannedPlate, setScannedPlate] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access camera is required!');
      }
    })();
  }, []);

  const handleScannedPlate = (plate) => {
    console.log('Scanned plate:', plate);
    setScannedPlate(plate);
    setIsAnalyzing(false); // Stop analysis after successful scan
  };

  const handleAnalyze = async () => {
    if (camera.current) {
      setIsAnalyzing(true);
      try {
        const { data } = await camera.current.takePictureAsync();
        // Process the image data using any OCR library to extract the license plate
        // For simplicity, let's assume the license plate is extracted and stored in 'plate'
        const plate = 'ABC123'; // Replace with the extracted plate
        handleScannedPlate(plate);
      } catch (error) {
        console.error('Error analyzing camera frames:', error);
        setIsAnalyzing(false); // Stop analysis on error
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escanear Placa</Text>

      {/* Camera Preview */}
      <Camera
        ref={camera}
        style={styles.camera}
      />

      {/* Analyze Button */}
      <TouchableOpacity style={styles.analyzeButton} onPress={handleAnalyze} disabled={isAnalyzing}>
        <Text style={styles.analyzeButtonText}>Analizar</Text>
      </TouchableOpacity>

      {/* Historial Button */}
      <TouchableOpacity style={styles.historialButton} onPress={() => navigation.navigate('HistoryScreen')}>
        <Text style={styles.historialButtonText}>Historial</Text>
      </TouchableOpacity>

      {/* Display Scanned Plate (optional) */}
      {scannedPlate && (
        <Text style={styles.scannedPlateText}>Placa escaneada: {scannedPlate}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  camera: {
    width: '100%',
    height: '80%',
    aspectRatio: 3 / 4,
  },
  analyzeButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  analyzeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  historialButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  historialButtonText: {
    fontSize: 16,
    color: '#333',
  },
  scannedPlateText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default ScannerScreen;
