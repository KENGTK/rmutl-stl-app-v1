import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signUpEnP } from '../service/firebase';
import Logo from '../components/Logo';

export default class __Regiser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      re_password: '',
      modalVisible: false,
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  register = () => {
    this.setModalVisible(true);

    if (this.state.re_password.length < 8 || this.state.password.length < 8) {
      this.setModalVisible(false);
      Alert.alert('รหัสผ่านต้องมีอย่างน้อย 8 ตัวขึ้นไป');
    }

    if (this.state.re_password.length !== this.state.password.length) {
      this.setModalVisible(false);
      Alert.alert('รหัสผ่านไม่ตรงกัน');
    }

    if (this.state.email.indexOf('@') === -1) {
      this.setModalVisible(false);
      Alert.alert('รูปแบบอีเมล์ไม่ถูกต้อง');
    }

    signUpEnP(this.state.email, this.state.password)
      .then(respon => {
        this.props.setUser(respon);
        this.setModalVisible(false);
        Actions.tabbar();
      })
      .catch(error => {
        this.setModalVisible(false);
        Alert.alert(error);
      });
  };
  render() {
    return (
      <KeyboardAwareScrollView>
        <ScrollView style={styles.container}>
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
            style={{ marginTop: 20, marginBottom: 55, alignItems: 'center' }}>
            <Logo logoSize="small" logoText="สมัครสมาชิก" />
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
            <TextInput
              style={styles.inputBox}
              placeholder="ยืนยันรหัสผ่าน"
              secureTextEntry={true}
              placeholderTextColor="#757575"
              value={this.state.re_password}
              onChangeText={re_password => this.setState({ re_password })}
            />

            <TouchableOpacity
              style={styles.button_login}
              onPress={this.register}>
              <Text style={{ color: '#fff', fontSize: 18 }}>สมัครสมาชิก</Text>
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
  },
  container: {
    marginBottom: 50,
  },
});
