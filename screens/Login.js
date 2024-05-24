import React, { useState, useContext } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppTextInput from "../components/AppTextInput";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import { AuthContext } from '../context';
import Colors from "../constants/Colors";

const LoginScreen = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const { token, updateToken } = useContext(AuthContext);

  const onSign = () => {
    updateToken(email)

  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.header}>Login here</Text>
          <Text style={styles.subHeader}>Welcome back you've been missed!</Text>
        </View>
        <View style={styles.inputContainer}>
          <AppTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <AppTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <View>
          <Text style={styles.forgotPassword}>Forgot your password ?</Text>
        </View>
        <TouchableOpacity onPress={onSign} style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("Register")} style={styles.link}>
          <Text style={styles.linkText}>Create new account</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <Text style={styles.orText}>Or continue with</Text>
          <View style={styles.socialIconsContainer}>
            <TouchableOpacity style={styles.socialIcon}>
              <Ionicons name="logo-google" size={24} color={Colors.text} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Ionicons name="logo-apple" size={24} color={Colors.text} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Ionicons name="logo-facebook" size={24} color={Colors.text} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Spacing * 2,
  },
  center: {
    alignItems: "center",
  },
  header: {
    fontSize: FontSize.xLarge,
    color: Colors.primary,
    marginVertical: Spacing * 3,
  },
  subHeader: {
    fontSize: FontSize.large,
    maxWidth: "60%",
    textAlign: "center",
  },
  inputContainer: {
    marginVertical: Spacing * 3,
  },
  forgotPassword: {
    fontSize: FontSize.small,
    color: Colors.primary,
    alignSelf: "flex-end",
  },
  button: {
    padding: Spacing * 2,
    backgroundColor: Colors.primary,
    marginVertical: Spacing * 3,
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: Spacing },
    shadowOpacity: 0.3,
    shadowRadius: Spacing,
  },
  buttonText: {
    color: Colors.onPrimary,
    textAlign: "center",
    fontSize: FontSize.large,
  },
  link: {
    padding: Spacing,
  },
  linkText: {
    color: Colors.text,
    textAlign: "center",
    fontSize: FontSize.small,
  },
  orContainer: {
    marginVertical: Spacing * 3,
  },
  orText: {
    color: Colors.primary,
    textAlign: "center",
    fontSize: FontSize.small,
  },
  socialIconsContainer: {
    marginTop: Spacing,
    flexDirection: "row",
    justifyContent: "center",
  },
  socialIcon: {
    padding: Spacing,
    backgroundColor: Colors.gray,
    borderRadius: Spacing / 2,
    marginHorizontal: Spacing,
  },
});

export default LoginScreen;


