import React, { useState, useEffect } from 'react';

import {
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Message from './message';

import Icon from 'react-native-vector-icons/FontAwesome';

const Chat = () => {
    let [scrollView, setScrollView] = useState(null);

    const [messages, setMessages] = useState([]);

    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        setMessages([
            {
                type: 'sent',
                author: 'Gabriel',
                content: 'Fale cara. Minha mãe avisou que você queria falar comigo. Que foi que houve. É sobre o q?',
                time: '21:34'
            },
            {
                type: 'received',
                author: 'Miguel',
                content: 'Oi mano. Bom dia. Quero ver contigo como tá a situação da viagem. Se tá tudo certo, se confirmou os assentos e o hotel.',
                time: '21:38'
            }
        ]);

        scrollView.scrollToEnd({ animated: true });
    }, []);

    const sendMessage = () => {
        const newMessageObject = {
            type: 'sent',
            author: 'Eu',
            content: newMessage,
            time: `${(new Date()).getHours()}:${(new Date()).getMinutes()}`
        }

        setMessages([...messages, newMessageObject]);

        scrollView.scrollToEnd({ animated: true });

        //setNewMessage('');
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.messagesContainer} ref={ref => scrollView = ref}>
                {messages.map((message, index) => <Message key={index} message={message} /> )}
            </ScrollView>
            <View style={styles.typingContainer}>
                <TextInput style={styles.inputMessage} value={newMessage} onChange={event => setNewMessage(event.target.value)}></TextInput>
                <TouchableOpacity style={styles.sendMessage} onPress={sendMessage}>
                    <Icon name="rocket" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    messagesContainer: {
        flex: 9,
        backgroundColor: '#9df',
        padding: 5
    },
    typingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    inputMessage: {
        flex: 5,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 25,
        minWidth: 50,
        paddingHorizontal: 20
    },
    sendMessage: {
        marginRight: 10,
        borderRadius: 25,
        backgroundColor: '#0b0',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50
    }
});

export default Chat;
