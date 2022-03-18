import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-eva-icons';

export default function TodoItem({ item, pressHandler }) {
    return (
        
            <View style={styles.item}>
                <TouchableOpacity>
                <Icon
                    name="close-outline"
                    fill="#bbb"
                    width={20}
                    height={20}
                    style={styles.icon}
                    onPress={() => pressHandler(item.key)}
                />
                 </TouchableOpacity>
                <Text>{item.text}</Text>
            </View>
       
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    icon: {
        marginRight: 10,
    },
});
