import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const App = () => {
    const [name, setName] = useState('Dima');
    const [person, setPerson] = useState([
        { name: 'Artem', key: 1 },
        { name: 'Artem1', key: 2 },
        { name: 'Artem2', key: 3 },
        { name: 'Artem3', key: 4 },
        { name: 'Artem4', key: 5 },
    ]);

    const clickHandler = () => {
        setName(name);
        setPerson({ name, age: 7 });
    };

    return (
        <View style={styles.container}>
            <Text>My name is {name}</Text>
            <Text>
                My son name {person.name}, and he is {person.age} years old
            </Text>
            <View>
                <Text>Enter name</Text>
                <TextInput
                    multiline
                    style={styles.input}
                    placeholder="name"
                    onChangeText={(value) => clickHandler(value)}
                />

                <TextInput
                    multiline
                    keyboardType="numeric"
                    style={styles.input}
                    placeholder="age"
                    onChangeText={(value) => clickHandler(value)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 8,
        width: 200,
    },
});

export default App;
