import { Courgette_400Regular, useFonts } from '@expo-google-fonts/courgette';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    Courgette_400Regular,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity style={styles.menuIcon}>
        <Ionicons name="menu" size={24} color="#88c9bf" />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.title}>Olá!</Text>
        <Text style={styles.subtitle}>
          Bem vindo ao Meau! {"\n"}
          Aqui você pode adotar, doar e ajudar{"\n"}cães e gatos com facilidade.{"\n"}
          Qual o seu interesse?
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ADOTAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>AJUDAR</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CADASTRAR ANIMAL</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>login</Text>
        
        <Image 
          source={require("./assets/logo.png")}
          style={styles.logo} 
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  menuIcon: {
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontFamily: 'Courgette_400Regular',
    fontSize: 72,
    color: "#ffd358",
    marginTop: 56,
    marginBottom: 52,
  },
  subtitle: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: "#757575",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 48,
  },
  button: {
    width: 232,
    height: 40,
    backgroundColor: "#ffd358",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderRadius: 2,
  },
  buttonText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    color: "#434343",
  },
  loginText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: "#88c9bf",
    marginTop: 32, 
  },
  logo: {
    width: 122,
    height: 44,
    marginTop: 68,
  },
});

