import React from 'react';
import {View, StyleSheet, Text,} from 'react-native';
import {useSelector} from 'react-redux';


const TodoList = () => {
    const todos = useSelector((state: any) => state.todo)
    console.log('1')

    return (
        <View style={styles.mainContainer}>
            <View>
                {
                    todos.map((item:any, index:number) => {
                        return (
                            <View style={{flexDirection: 'row'}}>
                                <Text>{index + 1}. </Text>
                                <Text>{item.text}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        margin: 20,
        flex:1,
        width: '95%',
        backgroundColor: 'lightgrey',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TodoList;
