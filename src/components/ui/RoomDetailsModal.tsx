import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, Pressable, ScrollView, Image, ImageSourcePropType } from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

interface DetailsProps {
  visible: boolean;
  onClose: () => void;
  image?: ImageSourcePropType;
  data: {
    label: string;
    roomNumber: string;
    doubleBeds: number;
    singleBeds: number;
    price: number;
    available: boolean;
    description: string;
  } | null;
}

export const RoomDetailsModal = ({ visible, onClose, data, image }: DetailsProps) => {
  if (!data) return null;

  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.modalCard} onPress={(e) => e.stopPropagation()}>
          
          {/* Imagem do Quarto */}
          {!!image && <Image source={image} style={styles.modalImage} />}

          <View style={styles.container}>
            {/* Header com Nome e Status */}
            <View style={styles.header}>
              <View>
                <Text style={styles.title}>{data.label}</Text>
                <Text style={styles.roomNumber}>Quarto nº {data.roomNumber}</Text>
              </View>
              <View style={[styles.statusBadge, { backgroundColor: data.available ? '#DCFCE7' : '#FEE2E2' }]}>
                <Text style={[styles.statusText, { color: data.available ? '#166534' : '#991B1B' }]}>
                  {data.available ? "Disponível" : "Ocupado"}
                </Text>
              </View>
            </View>

            {/* Grid de Camas */}
            <View style={styles.amenitiesRow}>
              <View style={styles.amenityItem}>
                <FontAwesome5 name="bed" size={16} color="#030042" />
                <Text style={styles.amenityText}>{data.doubleBeds} Cama Casal</Text>
              </View>
              <View style={styles.amenityItem}>
                <FontAwesome5 name="bed" size={14} color="#030042" />
                <Text style={styles.amenityText}>{data.singleBeds} Camas Solteiro</Text>
              </View>
            </View>

            <View style={styles.divider} />

            {/* Descrição */}
            <Text style={styles.sectionLabel}>Descrição</Text>
            <ScrollView style={styles.scrollDesc}>
              <Text style={styles.descriptionText}>{data.description}</Text>
            </ScrollView>

            {/* Footer com Preço e Botão */}
            <View style={styles.footer}>
              <View>
                <Text style={styles.priceLabel}>Diária</Text>
                <Text style={styles.priceValue}>R$ {data.price.toFixed(2)}</Text>
              </View>
              <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                <Text style={styles.closeBtnText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  
  overlay: { 
    flex: 1, 
    backgroundColor: "rgba(0,0,0,0.7)", 
    justifyContent: "center", 
    alignItems: "center" 
  },

  modalCard: { 
    width: "88%", 
    backgroundColor: "white", 
    borderRadius: 25, 
    overflow: "hidden", 
    elevation: 15 
  },

  modalImage: { 
    width: "100%", 
    height: 180 },
  
    container: { 
    padding: 20 
  },
  
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'flex-start' 
  },

  title: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: "#030042" 
  },

  roomNumber: { 
    fontSize: 14,
     color: "#666" 
  },

  statusBadge: { 
    paddingHorizontal: 10, 
    paddingVertical: 4, 
    borderRadius: 8 
  },

  statusText: { 
    fontSize: 12, 
    fontWeight: "700" 
  },

  amenitiesRow: { 
    flexDirection: 'row', 
    marginTop: 15, 
    gap: 15 
  },

  amenityItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 6, 
    backgroundColor: '#F3F4F6', 
    padding: 8, 
    borderRadius: 10 
  },
  
  amenityText: { 
    fontSize: 13, 
    color: '#374151', 
    fontWeight: '500' 
  },

  divider: { 
    height: 1, 
    backgroundColor: "#EEE",
     marginVertical: 15 
  },

  sectionLabel: { 
    fontSize: 15, 
    fontWeight: "bold", 
    color: "#030042", 
    marginBottom: 5 
  },

  scrollDesc: { 
    maxHeight: 100 
  },

  descriptionText: { 
    fontSize: 14, 
    color: "#4B5563", 
    lineHeight: 20 
  },

  footer: { 
    marginTop: 20, 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center" 
  },

  priceLabel: { 
    fontSize: 12, 
    color: "#666" 
  },

  priceValue: { 
    fontSize: 20, 
    fontWeight: "bold", 
    color: "#030042" 
  },

  closeBtn: { 
    backgroundColor: "#030042", 
    paddingVertical: 12, 
    paddingHorizontal: 25, 
    borderRadius: 12 
  },
  
  closeBtnText: { color: "white", fontWeight: "600" }
});