import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  removeButton: {
    backgroundColor: '#ff0505',
    borderRadius: 5,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  list: {
    marginTop: 12,
    marginBottom: 12,

    flex: 1,
    width: '100%',
    flexDirection: 'row',
    gap: 4,
  },
  listItem: {
    flex: 1,
    backgroundColor: '#1F1E25',
    height: 56,
    borderRadius: 5,
    color: '#FDFCFE',
    padding: 16,
    fontSize: 16,
  },
});
