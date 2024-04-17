import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  GestureResponderEvent,
} from 'react-native';

import { styles } from './styles';
import { useState } from 'react';

export const Home = () => {
  const [userList, setUserList] = useState<string[]>([]);
  const [name, setName] = useState<string>('');

  const handleAddUser = () => {
    if (name !== '' && !userList?.includes(name)) {
      setUserList([...userList, name]);
      setName('');
    }
  };

  const handleRemoveUser = (event: GestureResponderEvent, userName: string) => {
    let removeUser = userList?.filter((user: any) => user !== userName);
    setUserList(removeUser);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.envName}>Nome do evento</Text>
      <Text style={styles.envDate}>Sexta, 4 de novembro de 2024</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          style={styles.textInput}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddUser}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ backgroundColor: '#6b6b6b', borderRadius: 6 }}>
        {userList.map((user: string, index: number) => {
          return (
            <View key={index} style={styles.list}>
              <Text style={styles.listItem}>{user}</Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={(event) => handleRemoveUser(event, user)}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
