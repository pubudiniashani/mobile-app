import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const books = [
    {
        id: '1',
        title: 'Sherlock Holmes',
        author: 'James Clear',
        image: require('./assets/img_20220207'), // Image from assets
    },
    {
        id: '2',
        title: 'The Power of Now',
        author: 'Eckhart Tolle',
        image: require('./assets/images/power_of_now.jpg'), // Image from assets
    },

];

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ padding: 10 }}>
            {books.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    onPress={() => navigation.navigate('BookDetails', { book: item })}
                    style={{ marginVertical: 10, backgroundColor: '#fff', borderRadius: 10, padding: 10 }}
                >
                    <Image source={item.image} style={{ width: 100, height: 150, borderRadius: 10 }} />
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                    <Text style={{ fontSize: 14, color: 'gray' }}>{item.author}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default HomeScreen;
