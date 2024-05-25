import { View, Text, Pressable, Image, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from './colors';
import Button from './Button';

const { width, height } = Dimensions.get('window');

const Welcome = ({ navigation }) => {
    return (
        <LinearGradient
            style={styles.linearGradient}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={styles.container}>
                <View>
                    <Image
                        source={require("../assets/hero1.jpg")}
                        style={[styles.image, styles.image1]}
                    />

                    <Image
                        source={require("../assets/hero3.jpg")}
                        style={[styles.image, styles.image2]}
                    />

                    <Image
                        source={require("../assets/hero3.jpg")}
                        style={[styles.image, styles.image3]}
                    />

                    <Image
                        source={require("../assets/hero2.jpg")}
                        style={[styles.image, styles.image4]}
                    />
                </View>

                {/* content */}
                <View style={styles.content}>
                    <Text style={styles.title}>Shine Your Study</Text>
                    <Text style={styles.subtitle}>With Narayan Sir</Text>

                    <View style={styles.textBlock}>
                        <Text style={styles.text}>Best Courses from Narayan</Text>
                        <Text style={styles.text}>Connect with each other with chatting</Text>
                    </View>

                    <Button
                        title="Login Now"
                        onPress={() => navigation.navigate("Login")}
                        style={styles.button}
                    />

                    <View style={styles.registerContainer}>
                        <Text style={styles.text}>Already have an account ?</Text>
                        <Pressable onPress={() => navigation.navigate("Register")}>
                            <Text style={styles.registerText}>Register</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    image: {
        height: height * 0.2,
        width: width * 0.4,
        borderRadius: 20,
        position: 'absolute',
    },
    image1: {
        top: 30,
        left: width * 0.1,
        width: width * 0.4,
        height: height * 0.2,
        transform: [{ rotate: '-9deg' }],
    },
    image2: {
        top: height * 0.04,
        left: width * 0.6,
        width: width * 0.2,
        height: height * 0.1,
        transform: [{ rotate: '4deg' }],
    },
    image3: {
        top: height * 0.3,
        left: width * 0.1,
        width: width * 0.2,
        height: height * 0.1,
        transform: [{ rotate: '-20deg' }],
    },
    image4: {
        height: height * 0.2,
        width: width * 0.4,
        top: height * 0.25,
        left: width * 0.4,
        transform: [{ rotate: '-15deg' }],
    },
    content: {
        paddingHorizontal: 22,
        position: 'absolute',
        top: height * 0.5,
        width: '100%',
    },
    title: {
        fontSize: width * 0.1,
        fontWeight: '800',
        color: COLORS.white,
    },
    subtitle: {
        fontSize: width * 0.092,
        fontWeight: '800',
        color: COLORS.white,
    },
    textBlock: {
        marginVertical: 22,
    },
    text: {
        fontSize: width * 0.04,
        color: COLORS.white,
        marginVertical: 4,
    },
    button: {
        marginTop: 22,
        width: '100%',
    },
    registerContainer: {
        flexDirection: 'row',
        marginTop: 12,
        justifyContent: 'center',
    },
    registerText: {
        fontSize: width * 0.04,
        color: COLORS.white,
        fontWeight: 'bold',
        marginLeft: 4,
    },
});

export default Welcome;
