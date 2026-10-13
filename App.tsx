import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Alert, TextInput, Button, Switch, ScrollView, Image} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <View style={styles.container}
  >

      <StatusBar style="auto"/>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View>
          <Text 
          style={styles.headerTitle}
          selectable={true}>Devbadge profile</Text>
        </View>

        <View style={styles.textComposition}>
          <Text style={styles.baseText}>Status do Sistema    <Text style={styles.highlightText}>Online</Text></Text>
        </View>

                <Image
          style={styles.logo}
          source={require('./assets/logo.png')}
        />

        <Text   
        style={{color: 'white', marginBottom: 20}}
        onPress={() => console.log('Pressionamento Rapido')}
        onLongPress={() => Alert.alert('Dica','Preencha seus dados.')}
        >(Pressione e segure para dicas)</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome de desenvolvedor..."
          placeholderTextColor="#7d8590"
          value={nome}
          onChangeText={setNome}
        />

        <View style={styles.botao}>
          <Button
            title="REGISTRAR CREDENCIAL"
            color="#58a6ff"
            onPress={() => Alert.alert('Credencial registrada', 'Dev: ' + nome)}
          />
        </View>

        <View style={styles.cardSwitch}>
          <Text style={styles.baseText}>Ativar Modo Admin?</Text>
          <Switch value={isAdmin} onValueChange={setIsAdmin} />
        </View>

        <Text style={styles.badge}>
          {isAdmin ? 'Acesso Total (Admin)' : 'Acesso Básico'}
        </Text>

        <Text
          style={styles.elemento}
          onPress={() => Alert.alert('Elemento 1', 'Toque rápido')}
          onLongPress={() => Alert.alert('Elemento 1', 'Toque longo')}
        >Elemento 1</Text>

        <Text
          style={styles.elemento}
          onPress={() => Alert.alert('Elemento 2', 'Toque rápido')}
          onLongPress={() => Alert.alert('Elemento 2', 'Toque longo')}
        >Elemento 2</Text>

        <Text
          style={styles.elemento}
          onPress={() => Alert.alert('Elemento 3', 'Toque rápido')}
          onLongPress={() => Alert.alert('Elemento 3', 'Toque longo')}
        >Elemento 3</Text>

        <Text
          style={styles.elemento}
          onPress={() => Alert.alert('Elemento 4', 'Toque rápido')}
          onLongPress={() => Alert.alert('Elemento 4', 'Toque longo')}
        >Elemento 4</Text>

        <Text
          style={styles.elemento}
          onPress={() => Alert.alert('Elemento 5', 'Toque rápido')}
          onLongPress={() => Alert.alert('Elemento 5', 'Toque longo')}
        >Elemento 5</Text>
      </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
  scroll: {
    alignItems: 'center',
    paddingTop: 70,
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#58a6ff',
    backgroundColor: '#0d1117',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#3fb950',
  },
  textComposition: {
    marginBottom: 20,
  },
  baseText: {
    color: 'white',
    fontSize: 16,
  },
  highlightText: {
    color: '#3fb950',
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  input: {
    alignSelf: 'stretch',
    backgroundColor: '#161b22',
    borderWidth: 1,
    borderColor: '#58a6ff',
    borderRadius: 8,
    color: 'white',
    padding: 10,
    marginBottom: 12,
  },
  botao: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  cardSwitch: {
    alignSelf: 'stretch',
    backgroundColor: '#161b22',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  badge: {
    color: 'white',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
  elemento: {
    width: 150,
    color: '#58a6ff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#161b22',
    borderWidth: 1,
    borderColor: '#58a6ff',
    borderRadius: 10,
    paddingVertical: 20,
    marginBottom: 14,
  },
});