import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import * as Font from "expo-font";

import MaverickImg from "./assets/maverick.png";
import acuraImg from "./assets/acura.png";

const carros = [
  {
    id: "1",
    nome: "Ford Maverick",
    ano: "1974",
    cor: "Laranja",
    imagem: MaverickImg,
  },
  {
    id: "2",
    nome: "Acura - NSX",
    ano: "1990",
    cor: "Vermelho",
    imagem: acuraImg, 
  },
];

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "BebasNeue-Regular": require("./assets/fonts/BebasNeue-Regular.ttf")
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <Text>Carregando fontes...</Text>;
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Carros</Text>
      <FlatList
        data={carros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagem} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.carName}>{item.nome}</Text>
              <Text style={styles.batata}>Ano: {item.ano}</Text>
              <Text style={styles.batata}>Cor: {item.cor}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 22,
    fontFamily: "BebasNeue-Regular",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  info: {
    padding: 10,
  },
  carName: {
    fontSize: 18,
    fontFamily:"BebasNeue-Regular",
    fontWeight: "bold",
    color: "#333",
  },
  batata: {
    fontSize: 14,
    fontFamily:"BebasNeue-Regular",
    color: "#666",
  },
});
