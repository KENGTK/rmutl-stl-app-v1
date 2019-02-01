import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Modal,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signInEnP } from '../service/firebase';
import { FontAwesome } from '@expo/vector-icons';

import Logo from '../components/Logo';

export default class __Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      modalVisible: false,
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  login = () => {
    this.setModalVisible(true)
    signInEnP(this.state.email, this.state.password)
      .then(respon => {
        this.setModalVisible(false)
        this.props.setUser(respon);
        Actions.tabbar();
      })
      .catch(error => {
        this.setModalVisible(false)
        Alert.alert(error);
      });
  };
  render() {
    return (
      <KeyboardAwareScrollView>
        <ScrollView>
          <Modal
            animationType="none"
            transparent={true}
            visible={this.state.modalVisible}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <View
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Text>Authen..</Text>
              </View>
            </View>
          </Modal>
          <View
            style={{ marginTop: 20, marginBottom: 40, alignItems: 'center' }}>
            <Logo logoSize="small" logoText="เข้าสู่ระบบ" />
            <Text style={styles.small_text}>
              กองทุนเงินให้กู้ยืมเพื่อการศึกษา มทร.ล้านนา
            </Text>
          </View>
          <View style={{ paddingHorizontal: 50 }}>
            <TextInput
              style={styles.inputBox}
              placeholder="อีเมล์"
              placeholderTextColor="#757575"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <TextInput
              style={styles.inputBox}
              placeholder="รหัสผ่าน"
              secureTextEntry={true}
              placeholderTextColor="#757575"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
            <TouchableOpacity
              style={styles.button_login}
              onPress={() => this.login()}>
              <Text style={{ color: '#fff', fontSize: 18 }}>เข้าสู่ระบบ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_back} onPress={Actions.pop}>
              <Text style={{ color: '#fff', fontSize: 16 }}>กลับ</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button_back: {
    alignItems: 'center',
    backgroundColor: '#6d6e70',
    padding: 7,
    borderRadius: 5,
  },
  button_login: {
    alignItems: 'center',
    backgroundColor: '#3369e7',
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  small_text: {
    fontSize: 12,
    color: '#666',
  },
  inputBox: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    paddingHorizontal: 24,
    color: '#757575',
    marginVertical: 5,
  }
});
