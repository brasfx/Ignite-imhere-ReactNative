import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

import { styles } from './styles';
import { useState } from 'react';
import { User } from '../../components/User';

export const Home = () => {
  const [userList, setUserList] = useState<string[]>([]);
  const [name, setName] = useState<string>('');

  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const currentDate = date.toLocaleDateString('pt-br', options);

  const handleAddUser = () => {
    if (name !== '' && !userList?.includes(name)) {
      setUserList([...userList, name]);
      setName('');
    }
  };

  const handleRemoveUser = (userName: string) => {
    let removeUser = userList?.filter((user: any) => user !== userName);
    setUserList(removeUser);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.envName}>Im Here - Rocketseat Ignite</Text>
      <Text style={styles.envDate}>{currentDate}</Text>
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

      <FlatList
        keyExtractor={(item) => item}
        data={userList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <User key={item} user={item} handleRemoveUser={handleRemoveUser} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.textListEmpty}>
            Nenhum participante ainda foi inserido. Adicione participantes a sua
            lista.
          </Text>
        )}
      />
    </View>
  );
};
