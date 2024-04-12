import { View, Text, StyleSheet, Button, Image } from "react-native";
import events from "../Datos/DatosEventos";
import { FlatList, TextInput, GestureHandlerRootView , TouchableWithoutFeedback, navigation} from "react-native-gesture-handler";

const EventItem = ({ title, description, timeAgo, imageUrl, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style = {styles.eventItem}>
            <Image source={{ uri: imageUrl }} style= {styles.eventImage} />
            <View style = {styles.eventText}>
                <Text style={styles.eventTitle}>{title}</Text>
                <Text style={styles.eventTime}>{timeAgo}</Text>
                <Text style={styles.eventDescription}>{description}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
};

const EventosScreen = ({ navigation }) => {

    console.log(events);
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>

            <TouchableWithoutFeedback
                title="Atras"
                onPress = {() => navigation.goBack()}
                style={styles.backButton}
            >
                <Text style={styles.backButtonText}>Atras</Text>
            </TouchableWithoutFeedback>
            <TextInput
                style={styles.searchBar}
                placeholder="Buscar"
                />
            <FlatList
                data={events}
                renderItem={({ item }) => (
                    <EventItem
                    title={item.title}
                    description={item.description}
                    timeAgo={item.timeAgo}
                    imageUrl={item.imageUrl}
                    onPress={() => navigation.navigate('EventosDetails', item)}
                    />
                )}
                keyExtractor={item => item.id}
                />
        </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchBar: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    eventItem: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    eventImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    eventText: {
        flex: 1,
    },
    eventTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        flexShrink: 1,
    },
    eventTime: {
        fontSize: 12,
        color: '#555',
        marginLeft: 8,
    },
    eventDescription: {
        fontSize: 14,
        color: '#333',
    },
    backButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
        backgroundColor: 'transparent',
    },
    backButtonText: {
        fontSize: 16,
        color: '#000'
    },
    headerTitle: {
        fontSize: 16,
        color: '#000',
    }
      // ... more styles
});

export default EventosScreen;