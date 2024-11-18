import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";
import logos from "../../assets/images/logo/logo";

const Background = ({ children }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#B9E177", "#69C098"]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};

const MainContainer = styled.View`
  display: flex;
  gap: 121;
  marginHorizontal: 14;
  marginVertical: 82;
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

const IntroScreen = ({handleNavigate}) => {
  return (
    <Background>
      <MainContainer>
        <Image source={logos.logo.src} />
        <InfoContainer>
          <TextContainer>
            <Text style={styles.welcomeText}>Bem-Vindo ao AntraVision!</Text>
            <Text style={styles.subtitle}>
              Acompanhe a saúde da sua pupunheira por aqui
            </Text>
          </TextContainer>
          <TouchableOpacity style={styles.button} onPress={() => handleNavigate('signIn')}>
            <Text style={styles.buttonText}>Vamos Lá!</Text>
          </TouchableOpacity>
        </InfoContainer>
      </MainContainer>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 23,
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: "#FDFDFD",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#FDFDFD",
    textAlign: "center",
    paddingHorizontal: 32.6,
  },
  button: {
    backgroundColor: "#FBFDFF",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#6FD476",
  },
});

export default IntroScreen;
