import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Text
} from 'react-native';
import Message from './message';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Socket } from './services/socket';

const Chat = ({ route }) => {
    let [scrollView, setScrollView] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        scrollView.scrollToEnd({ animated: true });
    }, [messages]);

    useEffect(() => {
        Socket.disconnect();
        Socket.connect(route.params.apelido);

        Socket.subscribeToNewMessage(message => {
            message.type = 'received';

            setMessages(oldMessages => [...oldMessages, message]);
        });
    }, []);

    const sendMessage = () => {
        const newMessageObject = {
            type: 'sent',
            author: route.params.apelido,
            content: newMessage,
            time: `${(new Date()).getHours()}:${(new Date()).getMinutes()}`
        }

        Socket.sendMessage(newMessageObject);

        setMessages(oldMessages => [...oldMessages, newMessageObject]);
        
        setNewMessage('');
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.messagesContainer} ref={ref => scrollView = ref}>
                {messages.map((message, index) => <Message key={index} message={message} />)}
                {messages.length == 0 && <View style={styles.nothingHere}>
                    <Text>Nada por aqui</Text>
                </View>}
            </ScrollView>
            <View style={styles.typingContainer}>
                <TextInput style={styles.inputMessage} value={newMessage} onChangeText={text => setNewMessage(text)}></TextInput>
                <TouchableOpacity style={styles.sendMessage} onPress={() => sendMessage()}>
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
    },
    nothingHere: {
        alignItems: 'center'
    }
});

export default Chat;
