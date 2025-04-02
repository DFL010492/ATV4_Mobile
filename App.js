import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Animated, TextInput, Switch, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { styles } from './AppStyle';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

const integrantesLiga = [
  { 
    id: '1', 
    nome: 'Superman', 
    imagem1: require('./assets/imagens/superman.png'), 
    imagem2: require('./assets/imagens/superman2.png'), // Adicione essa imagem na pasta
    descricao: 'Superman é um dos heróis mais poderosos da DC Comics.'
  },
  { 
    id: '2', 
    nome: 'Batman', 
    imagem1: require('./assets/imagens/batman.png'), 
    imagem2: require('./assets/imagens/batman2.png'), 
    descricao: 'Batman é um vigilante que protege Gotham City.'
  },
  { 
    id: '3', 
    nome: 'Mulher-Maravilha', 
    imagem1: require('./assets/imagens/ww.png'), 
    imagem2: require('./assets/imagens/ww2.png'), 
    descricao: 'Mulher-Maravilha é uma guerreira amazona.'
  },
  { 
    id: '4', 
    nome: 'Flash', 
    imagem1: require('./assets/imagens/flash.png'), 
    imagem2: require('./assets/imagens/flash2.png'), 
    descricao: 'Flash é o homem mais rápido do mundo.'
  },
  { 
    id: '5', 
    nome: 'Aquaman', 
    imagem1: require('./assets/imagens/aquaman.png'), 
    imagem2: require('./assets/imagens/aquaman2.png'), 
    descricao: 'Aquaman é o rei de Atlântida.'
  },
  { 
    id: '6', 
    nome: 'Ciborgue', 
    imagem1: require('./assets/imagens/ciborgue.png'), 
    imagem2: require('./assets/imagens/ciborgue2.png'), 
    descricao: 'Ciborgue é meio humano e meio máquina.'
  },
];

export default function App() {
  const [fontsLoaded] = useFonts({
    'BlackOpsOne': require('./assets/fonts/BlackOpsOne-Regular.ttf'),
    'Poller': require('./assets/fonts/PollerOne-Regular.ttf'),
  });

  const [selectedHero, setSelectedHero] = useState(integrantesLiga[0]); 
  const [selectedImage, setSelectedImage] = useState('imagem1'); 
  const [message, setMessage] = useState(""); 
  const [opacity, setOpacity] = useState(1); 
  const [showInfo, setShowInfo] = useState(false); 
  const [liked, setLiked] = useState(false);
  const [used, setUsed] = useState(false);
  const [showMessage, setShowMessage] = useState(false); // Estado para exibir a mensagem
  const [imageSize, setImageSize] = useState(200);


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <SafeAreaProvider>
        <SafeAreaView edges={['top']} style={styles.safeArea}>
          <FlatList
            contentContainerStyle={{ paddingBottom: 20 }}
            ListHeaderComponent={
              <>
                <Text style={styles.title}>Liga da Justiça</Text>
                <Image source={require('./assets/imagens/jl.png')} style={styles.logo} />
                <Text style={styles.description}>
                  A Liga da Justiça é uma equipe de super-heróis da DC Comics.
                </Text>
                
                {/* Picker para escolher o herói */}
                <Picker 
                  selectedValue={selectedHero.id} 
                  onValueChange={(itemValue) => {
                    const hero = integrantesLiga.find(h => h.id === itemValue);
                    setSelectedHero(hero);
                    setSelectedImage('imagem1'); 
                  }} 
                  style={styles.picker}
                >
                  {integrantesLiga.map(hero => (
                    <Picker.Item key={hero.id} label={hero.nome} value={hero.id} />
                  ))}
                </Picker>

                {/* Picker para escolher a imagem do herói */}
                <Picker 
                  selectedValue={selectedImage} 
                  onValueChange={setSelectedImage} 
                  style={styles.picker}
                >
                  <Picker.Item label="Imagem 1" value="imagem1" />
                  <Picker.Item label="Imagem 2" value="imagem2" />
                </Picker>

                {/* Exibe a imagem com opacidade controlada pelo slider */}
                <Animated.Image 
                  source={selectedHero[selectedImage]} 
                  style={[styles.heroImage, { opacity, width: imageSize, height: imageSize }]} 
                />

                {/* Input de texto para mensagem ao herói */}
                <TextInput
                  style={styles.input}
                  placeholder="Deixe uma mensagem para o herói..."
                  value={message}
                  onChangeText={setMessage}
                />
                
                {/* Slider para controlar tamanho da imagem */}
                <Text>Tamanho da imagem: {Math.round(imageSize)} px</Text>
                <Slider 
                  style={styles.slider} 
                  minimumValue={100} 
                  maximumValue={300} 
                  step={10}
                  value={imageSize} 
                  onValueChange={setImageSize} 
                />
                
                {/* Slider para controlar opacidade da imagem */}
                <Text>Opacidade: {Math.round(opacity * 100)}%</Text>
                <Slider 
                  style={styles.slider} 
                  minimumValue={0.1} 
                  maximumValue={1} 
                  step={0.1}
                  value={opacity} 
                  onValueChange={setOpacity} 
                />

                {/* Botão para exibir informações */}
                <TouchableOpacity 
                  style={styles.customButton} 
                  onPress={() => setShowInfo(!showInfo)}
                  activeOpacity={0.7}// Efeito de clique
                >
                  <Text style={styles.buttonText}>
                    {showInfo ? "Oculta Informação" : "Mostrar Informação"}
                  </Text>
                </TouchableOpacity>               

                {/* Se "Mostrar informações" for clicado, exibe a descrição */}
                {showInfo && (
                  <View style={styles.infoBox}>
                    <Text style={styles.cardTitle}>{selectedHero.nome}</Text>
                    <Text style={styles.cardDescription}>{selectedHero.descricao}</Text>
                  </View>
                )}
                {/* Botão para exibir/esconder apenas a mensagem */}

                {/* Coloquei outro tipo de botão aqui */}

                <Button 
                  title={showMessage ? "Esconder mensagem" : "Mostrar mensagem"} 
                  onPress={() => setShowMessage(!showMessage)} 
                />

                {/* Se showMessage for true, exibe apenas a mensagem */}
                {showMessage && (
                  <View style={styles.infoBox}>
                    <Text style={styles.cardTitle}>Mensagem para {selectedHero.nome}:</Text>
                    <Text style={styles.cardDescription}>{message || "Nenhuma mensagem ainda."}</Text>
                  </View>
                )}

                {/* Switch para perguntar se gostou */}
                <View style={styles.switchContainer}>
                  <Text style={styles.switchText}>Você gosta deste herói?</Text>

                  <Switch value={liked} onValueChange={setLiked}/>

                  <Text style={styles.switchStatus}>
                    {liked ? "😁 Você gosta!" : "😐 Ainda não decidiu..."}
                  </Text>
                </View>

                {/* Switch para perguntar se usaria o App */}
                <View style={styles.switchContainer}>
                  <Text style={styles.switchText}>Você usaria esse App?</Text>

                  <Switch value={used} onValueChange={setUsed}/>

                  <Text style={styles.switchStatus}>
                    {used ? "😁 Você gosta!" : "😐 Ainda não decidiu..."}
                  </Text>
                </View>
              </>
            }
            
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}