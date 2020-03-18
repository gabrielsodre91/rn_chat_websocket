import React, { useState, useEffect } from 'react';

import {
    Text,
    StyleSheet,
    View
} from 'react-native';

const Message = ({ message }) => {
    console.log(message);

    return (
        <View style={[styles.message, message.type == 'sent' ? styles.sentMessage : styles.receivedMessage]}>
            <Text style={styles.messageAuthor}>{message.author}</Text>
            <Text style={[styles.messageText, message.type == 'sent' ? styles.sentMessageText : styles.receivedMessageText]}>{message.content}</Text>
            <Text style={styles.messageTime}>{message.time}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    messageText: {
        flexDirection: 'row',
        fontSize: 16
    },
    sentMessageText: {
        textAlign: 'right'
    },
    receivedMessageText: {
        textAlign: 'left'
    },
    messageAuthor: {
        color: '#00d'
    },
    messageTime: {
        color: '#999',
        fontSize: 12,
        textAlign: 'right'
    },
    message: {
        marginBottom: 10,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    sentMessage: {
        textAlign: 'right',
        marginLeft: 100,
        backgroundColor: '#0f9',
    },
    receivedMessage: {
        marginRight: 100,
        backgroundColor: '#fff',
    }
});

export default Message;
