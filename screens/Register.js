import React, { useState, useContext } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppTextInput from "../components/AppTextInput";
import { AuthContext } from '../context';

const RegisterScreen = ({ navigation }) => {
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
          <Text style={styles.header}>Create account</Text>
          <Text style={styles.subHeader}>Create an account so you can explore all the existing jobs</Text>
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
           <AppTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={onSign} >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.link}>
          <Text style={styles.linkText}>Already have an account</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <Text style={styles.orText}>Or continue with</Text>
          <View style={styles.socialIconsContainer}>
            <TouchableOpacity style={styles.socialIcon}>
              <Ionicons name="logo-google" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Ionicons name="logo-apple" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Ionicons name="logo-facebook" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  center: {
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
    marginBottom: 24,
  },
  subHeader: {
    fontSize: 16,
    maxWidth: "80%",
    textAlign: "center",
  },
  inputContainer: {
    marginVertical: 24,
  },
  button: {
    padding: 16,
    backgroundColor: "blue",
    marginBottom: 24,
    borderRadius: 8,
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  link: {
    padding: 8,
  },
  linkText: {
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    fontSize: 14,
  },
  orContainer: {
    marginVertical: 24,
  },
  orText: {
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
    fontSize: 14,
  },
  socialIconsContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
  socialIcon: {
    padding: 8,
    backgroundColor: "lightgray",
    borderRadius: 16,
    marginHorizontal: 8,
  },
});

export default RegisterScreen;

