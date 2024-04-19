import { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type UserProps = {
  user: string;
  handleRemoveUser: (user: string) => void;
};

export const User: FC<UserProps> = ({ user, handleRemoveUser }) => {
  return (
    <View style={styles.list}>
      <Text style={styles.listItem}>{user}</Text>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => handleRemoveUser(user)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
