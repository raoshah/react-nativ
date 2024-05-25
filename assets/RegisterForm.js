import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles/loginCss'

const RegisterForm = ({ onRegistrationSuccess, onSwitch }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordReenter, setPasswordReenter] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [isRegisterDisabled, setIsRegisterDisabled] = useState(true);

  const emailInputRef = useRef(null);

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  useEffect(() => {
    setIsRegisterDisabled(
      !email ||
      !username ||
      !password ||
      !passwordReenter ||
      password !== passwordReenter ||
      !isValidEmail(email)
    );
  }, [email, username, password, passwordReenter, passwordMatchError]);

  const handleSubmit = async () => {
    try {
      // Check if passwords match
      if (password !== passwordReenter) {
        setPasswordMatchError(true);
        return;
      }

      setPasswordMatchError(false);

      const response = await fetch('https://raoshah.pythonanywhere.com/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      const responseData = await response.json();
      console.log('Registration successful:', responseData);
      onRegistrationSuccess();
    } catch (error) {
      console.error('Error registering:', error.message);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <TextInput
        ref={emailInputRef}
        style={[styles.input, { borderColor: isValidEmail(email) ? '#00c2e6' : '#aaa' }]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={[styles.input, { borderColor: passwordMatchError ? 'red' : '#aaa' }]}
        placeholder="Re-enter Password"
        value={passwordReenter}
        onChangeText={setPasswordReenter}
        secureTextEntry
      />
      {passwordMatchError && <Text style={styles.errorText}>Passwords do not match</Text>}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: isRegisterDisabled ? '#ccc' : '#007bff' }]}
        onPress={handleSubmit}
        disabled={isRegisterDisabled}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.switchButton} onPress={onSwitch}>
        <Text style={styles.switchButtonText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};


export default RegisterForm;
