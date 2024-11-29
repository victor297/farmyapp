import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Surface, TextInput, Button, Text } from "react-native-paper";
import { useAuth } from "../context/AuthContext";
import { colors } from "../theme/colors";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleLogin = () => {
    setError("");
    const success = login(email, password);
    if (!success) {
      setError("Invalid email or password");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/logo.png")} // Update with your image path
          style={styles.image}
        />
        <View style={styles.form}>
          <Text variant="headlineMedium" style={styles.title}>
            Welcome to FarmerConnect
          </Text>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            mode="outlined"
            style={styles.input}
            secureTextEntry
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.button}
            buttonColor={colors.primary}
          >
            Login
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    width: "80%",
    marginTop: "-25%",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: "contain",
  },
  form: {
    width: "100%",
    padding: 20,
    backgroundColor: colors.surface,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    color: colors.primary,
  },
  input: {
    marginBottom: 16,
    backgroundColor: colors.surface,
  },
  button: {
    marginTop: 8,
  },
  error: {
    color: colors.error,
    marginBottom: 8,
    textAlign: "center",
  },
});
