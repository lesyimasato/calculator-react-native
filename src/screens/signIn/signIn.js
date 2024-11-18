import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";
import logos from "../../assets/images/logo/logo";

const Background = styled.View`
  flex: 1,
  flexDirection: column,
  justifyContent: flex-end,
  alignItems: center,
`;

const MainContainer = styled.View`
  display: flex;
  gap: 121;
  marginhorizontal: 14;
  marginvertical: 82;
`;

const InfoContainer = styled.View`
  display: flex;
  flexdirection: column;
  alignitems: center;
  gap: 45;
`;

const TextContainer = styled.View`
  display: flex;
  flexdirection: column;
  alignitems: center;
  gap: 15;
`;

const SignInScreen = ({ handleNavigate }) => {
  return (
    <View style={styles.container}>
      <MainContainer>
        <Text style={styles.signInText}>Bem-Vindo de Volta!</Text>
        <Text style={styles.signInSubtitle}>Vamos fazer o seu login</Text>
      </MainContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  signInText: {
    fontSize: 23,
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: "#29D890",
    textAlign: "center",
  },
  signInSubtitle: {
    fontSize: 16,
    color: "#495566",
    textAlign: "center",
    paddingHorizontal: 32.6,
  },
});

export default SignInScreen;
