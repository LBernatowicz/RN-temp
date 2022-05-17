import React, {useMemo, useState} from 'react';
import {SafeAreaView, View, TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTodo} from '../features/todoSlice';
import TodoList from '../components/TodoList/View/TodoList';

const Todo = () => {
    const [todoString, setTodoString] = useState<string>('')
    const dispatch = useDispatch();

    const memorize = useMemo(() => {
        return (
            <TodoList/>
        )}, [])

    const handleAddTodo = () => {
        dispatch(addTodo({text:todoString, id:99}))
        setTodoString('')
    }
    return (
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'add your todo'}
                        value={todoString}
                        onChangeText={(e:string)=> setTodoString(e)}
                    />
                    <TouchableOpacity
                        onPress={()=> handleAddTodo()}
                        style={styles.button}
                    >
                        <Text style={styles.textButton}>Add</Text>
                    </TouchableOpacity>
                </View>
                {memorize}
            </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        backgroundColor: 'ghostwhite',
        height: '100%'
    },
    inputContainer: {
        backgroundColor: 'transparent',
        width: '100%',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width:'95%',
        borderRadius: 10,
        backgroundColor: 'yellow',
        paddingHorizontal:10,
        height: 40,
    },
    button: {
        width:'95%',
        height: 40,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'red'
    }
})
export default Todo;
