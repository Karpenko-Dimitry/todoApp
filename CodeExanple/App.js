import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';

const App = () => {
    const [name, setName] = useState('Dima');
    const [person, setPerson] = useState([
        { name: 'Artem', id: 1 },
        { name: 'Artem1', id: 2 },
        { name: 'Artem2', id: 3 },
        { name: 'Artem3', id: 4 },
        { name: 'Artem4', id: 5 },
        { name: 'Artem4', id: 6 },
        { name: 'Artem4', id: 7 },
        { name: 'Artem4', id: 8 },
        { name: 'Artem4', id: 9 },
    ]);

    const clickHandler = (id) => {
        setPerson((prev) => {
            return prev.filter(person => person.id != id);
        });
    };

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={person}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => clickHandler(item.id)}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
            {/* <ScrollView>
                {person.map((item) => (
                    <View key={item.key}>
                        <Text style={styles.item}>{item.name}</Text>
                    </View>
                ))}
            </ScrollView> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 8,
        width: 200,
    },
    item: {
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24,
    },
});

export default App;
