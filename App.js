import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

/** Components */
import Header from './app/components/Header';
import TodoItem from './app/components/TodoItem';
import AddTodo from './app/components/AddTodo';

const App = () => {
    const [todos, setTodos] = useState([
        { text: 'buy coffee', key: '1' },
        { text: 'create an app', key: '2' },
        { text: 'play on the switch', key: '3' },
    ]);

    const pressHandler = (key) => {
        setTodos((prev) => {
            return prev.filter((todo) => todo.key !== key);
        });
    };

    const submitHandler = (text) => {
        if (text.length > 3) {
            setTodos((prev) => {
                return [
                    {
                        text,
                        key: (
                            Math.max.apply(
                                Math,
                                prev.map((item) => item.key),
                            ) + 1
                        ).toString(),
                    },
                    ...prev,
                ];
            });
        } else {
            Alert.alert('Opps!', 'Text must be over 3 chars long', [
                { text: 'Understood', onPress: () => console.log('alert closed') },
            ]);
        }
    };

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
                console.log('aa');
            }}>
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTodo submitHandler={submitHandler} />
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({ item }) => (
                                <TodoItem item={item} pressHandler={pressHandler} />
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,
    },
});

export default App;
