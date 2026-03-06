import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { RoomDetailsModal } from "./RoomDetailsModal"; // Certifique-se do caminho correto

const { width, height } = Dimensions.get("window");

const RoomCard = ({ image, label, description, icon }: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  // exemplo de dados do banco
  const roomExtraData = {
    label: label,
    roomNumber: "204-B", // Exemplo
    doubleBeds: 1,
    singleBeds: 2,
    price: description?.price || 0,
    available: true,
    description: "Um quarto aconchegante com vista para o jardim, equipado com ar-condicionado e frigobar silencioso."
  };

  return (
    <View style={styles.card}>
      {!!image && <Image source={image} style={styles.image} />}
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.label}>{label}</Text>
          <MaterialIcons name="king-bed" size={18} color="#030042" style={{ marginLeft: 8 }} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.price}>R${description?.price.toFixed(2)}</Text>
          <TouchableOpacity 
            style={styles.detailsButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.detailsButtonText}>Detalhes</Text>
          </TouchableOpacity>
        </View>
      </View>

      <RoomDetailsModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
        data={roomExtraData}
        image={image}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  header: { 
  flexDirection: 'row', 
  alignItems: 'center', 
  marginBottom: 10 
},

  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  image: { 
    width: '100%', 
    height: 160 
  },
  
  content: { 
    padding: 15 
  },
  
  label: { 
    fontSize: 18, 
    fontWeight: '700' 
  },

  footer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },

  price: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#333' 
  },
  
  detailsButton: {
    backgroundColor: 'rgba(37, 32, 129, 0.1)',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#030042'
  },

  detailsButtonText: { 
    color: '#030042', 
    fontWeight: '600', 
    fontSize: 13 
  }

});

export default RoomCard;