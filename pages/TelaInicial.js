
import { Text, StyleSheet, ImageBackground } from 'react-native';

const imgBackground = {uri: 'https://www.wine.com.br/winepedia/wp-content/uploads/2021/07/Vinho-seco-Winepedia.jpg'};

export default function TelaInicial() {
    return (
        <ImageBackground source={imgBackground} style={styles.container}>
            <Text style={styles.title}>Adega da Thata</Text>
            <Text style={styles.subtitle}>Aqui você encontra os melhores e mais saborosos vinhos</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#ebeaeaff',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 20,
        color: '#000000ff',
        textAlign: 'center',
    },
});