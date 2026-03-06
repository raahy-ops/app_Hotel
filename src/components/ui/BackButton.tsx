import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from "expo-router";

interface BackButtonProps {
  title?: string; // Opcional: texto ao lado da seta
  color?: string;
}

// No seu arquivo BackButton.tsx
const BackButton = () => {
  const router = useRouter();
  return (
    <View style={{ width: '100%', marginBottom: 10, minHeight: 40 }}>
       <TouchableOpacity 
         onPress={() => router.back()}
         style={{ padding: 5, width: 50 }} // Área de toque maior
       >
         <Ionicons name="chevron-back" size={30} color="#030042" />
       </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'flex-start', // Garante que ele não estique
    marginBottom: 10,
    marginLeft: -5, // Ajuste opcional para alinhar visualmente com o texto
  }
});

export default BackButton;