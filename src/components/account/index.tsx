import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import { global } from "../ui/styles";
import TextField from "../ui/TextField";

const RenderAccount = () => {
  // Controle de estados
  const [isEditing, setIsEditing] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  // Dados vindos do banco (exemplo)
  const [userData, setUserData] = useState({
    nome: "Karen ",
    email: "Karen.silva@email.com",
    telefone: "(11) 98888-7777",
    cpf: "123.456.789-00",
  });

  const handleToggleEdit = () => {
    if (isEditing) {
      // Aqui você salvaria no banco de dados
      console.log("Dados salvos:", userData);
    }
    setIsEditing(!isEditing);
  };

  return (
    <AuthContainer
      title="Minha Conta"
      subtitle={
        isEditing ? "Altere os campos abaixo" : "Suas informações pessoais"
      }
      icon="user-large"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={global.content}>
            {/* Campos de Informação */}
            <TextField
              label="Nome Completo"
              icon={{ lib: "MaterialIcons", name: "person" }}
              value={userData.nome}
              onChangeText={(txt) => setUserData({ ...userData, nome: txt })}
              editable={isEditing}
              style={!isEditing && styles.disabledInput}
            />

            <TextField
              label="E-mail"
              icon={{ lib: "MaterialIcons", name: "email" }}
              value={userData.email}
              editable={false} // E-mail geralmente bloqueado
              style={styles.disabledInput}
            />

            <TextField
              label="Telefone"
              icon={{ lib: "MaterialIcons", name: "phone" }}
              value={userData.telefone}
              onChangeText={(txt) =>
                setUserData({ ...userData, telefone: txt })
              }
              keyboardType="phone-pad"
              editable={isEditing}
              style={!isEditing && styles.disabledInput}
            />

            <TextField
              label="CPF"
              icon={{ lib: "MaterialIcons", name: "subtitles" }}
              value={userData.cpf}
              editable={false} // CPF geralmente bloqueado
              style={styles.disabledInput}
            />

            {/* Botões Originais */}
            <View style={styles.actionArea}>
              <TouchableOpacity
                style={isEditing ? styles.saveButton : styles.primaryButton}
                onPress={handleToggleEdit}
              >
                <Text style={styles.buttonText}>
                  {isEditing ? "SALVAR ALTERAÇÕES" : "ALTERAR DADOS"}
                </Text>
              </TouchableOpacity>

              {!isEditing && (
                <TouchableOpacity
                  style={styles.outlineButton}
                  onPress={() => setModalVisible(true)}
                >
                  <Text style={styles.outlineButtonText}>ALTERAR SENHA</Text>
                </TouchableOpacity>
              )}

              {isEditing && (
                <TouchableOpacity
                  onPress={() => setIsEditing(false)}
                  style={{ marginTop: 10 }}
                >
                  <Text style={{ textAlign: "center", color: "#666" }}>
                    Cancelar
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Modal de Redefinir Senha (O antigo que você gostou) */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Redefinir Senha</Text>

            <PasswordField label="Senha Atual" placeholder="Sua senha antiga" />
            <PasswordField
              label="Nova Senha"
              placeholder="Mínimo 6 caracteres"
            />
            <PasswordField
              label="Confirmar Nova Senha"
              placeholder="Repita a nova senha"
            />

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={{ color: "#F44336" }}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                  Salvar Senha
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </AuthContainer>
  );
};

const styles = StyleSheet.create({
  disabledInput: {
    backgroundColor: "#F9F9F9",
    opacity: 0.7,
  },
  actionArea: {
    marginTop: 30,
    gap: 15,
  },
  primaryButton: {
    backgroundColor: "#070235",
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#4CAF50", // Verde quando estiver em modo de salvar
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  outlineButton: {
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  outlineButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  // Estilos do Modal Antigo
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    gap: 10,
  },
  cancelButton: {
    flex: 1,
    padding: 15,
    alignItems: "center",
  },
  confirmButton: {
    flex: 2,
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default RenderAccount;
