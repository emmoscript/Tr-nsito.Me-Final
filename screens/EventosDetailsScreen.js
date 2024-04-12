import { StyleSheet } from 'react-native';
import { View, Text, Image } from 'react-native-gesture-handler';

const EventosDetailsScreen = ({ route }) => {
    const { eventId, title, description, timeAgo, imageUrl } = route.params;

    return (
        <View style={StyleSheet.container}>
            <Image source={{ uri: imageUrl }} style={styles.eventImage} />
            <Text style={styles.eventTitle}>{title}</Text>
            <Text style={styles.eventTime}>{timeAgo}</Text>
            <Text style={styles.eventDescription}>{description}</Text>
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
    eventImage: {
        width: 300,
        height: 200,
        resizeMode: 'cover',
    },
    eventTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    eventTime: {
        fontSize: 16,
        color: '#555',
        marginTop: 10,
    },
    eventDescription: {
        fontSize: 16,
        color: '#333',
        marginTop: 10,
    },
});

export default EventosDetailsScreen;