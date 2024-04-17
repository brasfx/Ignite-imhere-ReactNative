import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  envName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  envDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#1F1E25',
    height: 56,
    borderRadius: 5,
    color: '#FDFCFE',
    padding: 16,
    fontSize: 16,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#31cf67',
    borderRadius: 5,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButton: {
    backgroundColor: '#ff0505',
    borderRadius: 5,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    marginTop: 36,
    marginBottom: 42,
    width: '100%',
    flexDirection: 'row',
    gap: 12,
  },
  list: {
    marginTop: 12,
    marginBottom: 12,
    padding: 12,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    gap: 12,
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
