import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

const ProfileScreen = () => {
    const [selectedTab, setSelectedTab] = useState('Datos');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const profile = {
        name: 'Juan Perez',
        iD: 'ID: xxx-xxxxxxx-x',
        multas: 104,
        telefono: '1 + 809 - XXX - XXXX',
        zonaDeTrabajo: 'Distrito Nacional',
        mensaje1: 'Multa a  A437990',
        mensaje2: 'Investigacion de Vehiculo',
        mensaje3: 'Persecucion de Criminal',
        descripcion1: 'Supero limite de velocidad',
        descripcion2: 'Se investigo una camioneta sospechosa',
        descripcion3: 'Hombre sospechoso escapa de autoridades.',
        avatarUrl: 'https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png', // URL to your profile picture
        datos1: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3152707/notepad-clipart-md.png',
        datos2: 'https://th.bing.com/th/id/R.62742970255e01b599712ea11784e8e4?rik=eRGqMiIk%2bn48Tg&riu=http%3a%2f%2fclipartmag.com%2fimages%2fcartoon-pictures-of-cell-phones-33.png&ehk=LmC17zz2b%2bYwywU9%2fO8RH1lnl23qav%2fFKyo8vMo9DxQ%3d&risl=&pid=ImgRaw&r=0',
        datos3: 'https://th.bing.com/th/id/R.0b8245bd91fbeb2e0afc39eaf25f58dd?rik=COW0DJAeiBu8LA&riu=http%3a%2f%2fclipart-library.com%2fimg1%2f1637674.png&ehk=wHj7KcN1VUIVC%2bnDHK9hRXHYUPXpOzLHaZ5HznZx8a0%3d&risl=&pid=ImgRaw&r=0',
        reportes1: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3152707/notepad-clipart-md.png',
        reportes2: 'https://th.bing.com/th/id/R.0562942133777c7e3a44e3c3b195ad77?rik=5cQBtsMOaoQhuw&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2013%2f07%2fcar-icon_76093.png&ehk=7LgPBecc8oqFLO4XjslwHiyK%2bWAmvW7COzL4JxL4dmM%3d&risl=&pid=ImgRaw&r=0',
        reportes3: 'https://th.bing.com/th/id/R.eaa7b294c49e0263e1f5dafc465332c9?rik=a43%2bO8hsWAsiCQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fdi7%2f68p%2fdi768px7T.png&ehk=NT2FkLuEl%2bnBO7VgPfHPJDCSwyKenmTDYUAhiHWGQyE%3d&risl=&pid=ImgRaw&r=0',
    };

    const handleLogout = () => {
        setShowConfirmation(true);
    };

    const confirmLogout = () => {
        Alert.alert('Sesion cerrada.');
        setShowConfirmation(false);
    };

    const cancelLogout = () => {
        setShowConfirmation(false);
    };

    return (
        <View style={styles.container}>
            {}
            {showConfirmation && (
                <View style={styles.confirmationContainer}>
                    <Text style={styles.confirmationText}>Quieres cerrar la sesion?</Text>
                    <TouchableOpacity style={styles.confirmationButton} onPress={confirmLogout}>
                        <Text style={styles.buttonText}>Si</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.confirmationButton} onPress={cancelLogout}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            )}

            {}
            <Text style={styles.cerrarSession} onPress={handleLogout}>Cerrar Sesion</Text>
            <Image source={{ uri: profile.avatarUrl }} style={styles.avatar} />
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.iD}>{profile.iD}</Text>

            {}
            <View style={styles.segmentControl}>
                <TouchableOpacity
                    style={[styles.tabButton, selectedTab === 'Datos' && styles.tabButtonSelected]}
                    onPress={() => setSelectedTab('Datos')}
                >
                    <Text style={[styles.tabText, selectedTab === 'Datos' && styles.tabTextSelected]}>Datos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButton, selectedTab === 'Reportes' && styles.tabButtonSelected]}
                    onPress={() => setSelectedTab('Reportes')}
                >
                    <Text style={[styles.tabText, selectedTab === 'Reportes' && styles.tabTextSelected]}>Reportes</Text>
                </TouchableOpacity>
            </View>

            {selectedTab === 'Datos' && (
                <View style={styles.tabContent}>
                    <Image source={{ uri: profile.datos1 }} style={styles.datos} />
                    <Text style={styles.tabContentText}>Numero de Multas Impuestas</Text>
                    <Text style={styles.tabContentText}>{profile.multas}</Text>
                    <Image source={{ uri: profile.datos2 }} style={styles.datos} />
                    <Text style={styles.tabContentText}>Telefono</Text>
                    <Text style={styles.tabContentText}>{profile.telefono}</Text>
                    <Image source={{ uri: profile.datos3 }} style={styles.datos} />
                    <Text style={styles.tabContentText}>Zona de Trabajo</Text>
                    <Text style={styles.tabContentText}>{profile.zonaDeTrabajo}</Text>
                </View>
            )}

            {selectedTab === 'Reportes' && (
                <View style={styles.tabContent}>
                    <Image source={{ uri: profile.reportes1 }} style={styles.datos} />
                    <Text style={styles.tabContentText}>{profile.mensaje1}</Text>
                    <Text style={styles.tabContentText}>{profile.descripcion1}</Text>
                    <Image source={{ uri: profile.reportes2 }} style={styles.datos} />
                    <Text style={styles.tabContentText}>{profile.mensaje2}</Text>
                    <Text style={styles.tabContentText}>{profile.descripcion2}</Text>
                    <Image source={{ uri: profile.reportes3 }} style={styles.datos} />
                    <Text style={styles.tabContentText}>{profile.mensaje3}</Text>
                    <Text style={styles.tabContentText}>{profile.descripcion3}</Text>
                </View>
            )}

            {}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },

    datos: {
        width: 50,
        height: 50,
    },

    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    iD: {
        fontSize: 18,
        textAlign: 'center',
        color: '#333',
        marginBottom: 20,
    },
    cerrarSession: {
        position: 'absolute',
        top: 20,
        right: 20,
        color: '#f66666',
    },
    segmentControl: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    tabButtonSelected: {
        backgroundColor: '#ccc',
    },
    tabText: {
        fontSize: 16,
        color: '#333',
    },
    tabTextSelected: {
        fontWeight: 'bold',
        color: 'black',
    },
    tabContent: {
        width: '100%',
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    tabContentText: {
        fontSize: 18,
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    buttonGray: {
        backgroundColor: '#999',
    },
    buttonGreen: {
        backgroundColor: 'green',
    },
    confirmationContainer: {
        backgroundColor: 'rgba(0, 150, 0, 0.8)',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        top: '30%',
        left: '44%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
    },
    confirmationText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 50,
        textAlign: 'center',
    },
    confirmationButton: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#333',
    },
});

export default ProfileScreen;
