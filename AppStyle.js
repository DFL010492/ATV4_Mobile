import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  safeArea: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: "BlackOpsOne",
    color: "#222",
    textAlign: "center",
    marginBottom: 10,
  },
  logo: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    marginVertical: 10,
    fontFamily: "Poller",
    paddingHorizontal: 16, // Melhor espaçamento lateral
  },
  subTitle: {
    fontSize: 22,
    fontFamily: "BlackOpsOne",
    color: "#222",
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16, // Garante alinhamento com os demais elementos
  },
  picker: {
    height: 50,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  slider: {
    width: "90%", // Evita que encoste nas laterais
    alignSelf: "center",
    marginVertical: 10,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 16,
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5BF3C",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 3,
    marginHorizontal: 16, // Alinhamento correto dos cards
  },
  expandedCard: {
    paddingVertical: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
  cardDescription: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
    fontFamily: "Poller",
  },
  arrowIcon: {
    marginLeft: "auto",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20, // Garante espaço extra no final do scroll
  },
  heroImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    borderRadius: 10,
    marginVertical: 10,
  },
  infoBox: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});
