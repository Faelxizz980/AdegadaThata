
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Entypo, FontAwesome, FontAwesome6 } from '@expo/vector-icons';

export default function TelaContato() {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>Entre em contato conosco para comprar nossos produtos</Text>
            <View style={styles.item}>
                <FontAwesome name="phone" size={50} color='#400303' />
                <Text style={styles.itemtitle}>Telefone:</Text>
                <Text style={styles.itemsubtitle}>+55 15 4002-8922</Text>
            </View>
            <View style={styles.item}>
                <FontAwesome6 name="location-dot" size={50} color='#400303' />
                <Text style={styles.itemtitle}>Endereço:</Text>
                <Text style={styles.itemsubtitle}>Rua Ricieri, 421 - Chavantes-SP</Text>
            </View>
            <View style={styles.item}>
                <FontAwesome name="envelope" size={50} color='#400303' />
                <Text style={styles.itemtitle}>Email:</Text>
                <Text style={styles.itemsubtitle}>thata@adega.com.br</Text>
            </View>
            <View style={styles.item}>
                <Entypo name="instagram" size={50} color='#400303' />
                <Text style={styles.itemtitle}>Instagram:</Text>
                <Text style={styles.itemsubtitle}>@adegadathata</Text>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000ff',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 20,
    },
    item: {
        marginTop: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#cacacaff',
        padding: 30,
        width: '85%',
        borderRadius: 10,
    },
    itemtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#400303',
    },
    itemsubtitle: {
        fontSize: 16,
        color: '#400303',
    },
});