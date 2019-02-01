import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Linking,
  Modal,
  AsyncStorage,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { signOut, getUserId } from '../service/firebase';

export default class _User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      userData: '',
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onLogout = () => {
    this.setModalVisible(true);
    setTimeout(() => {
      signOut()
        .then(() => {
          this.props.setUser(null);
        })
        .catch(err => {
          Alert.alert(err);
        });
      this.setModalVisible(false);
    }, 500);
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
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
              <Text>Logout..</Text>
            </View>
          </View>
        </Modal>
        <View style={{ paddingHorizontal: 20, paddingVertical:20 }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 170,
            }}>
            <Image
              style={{ width: 120, height: 120, borderRadius: 60 }}
              source={{
                uri: 'https://i.imgur.com/rnsm1Ym.png',
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 22, lineHeight: 50 }}>
              นายศักรินทร์ ดาวร้าย
            </Text>
            <Text style={{ fontSize: 13, color: '#999' }}>
              UID: {this.props.userinfo.uid}
            </Text>
          </View>
          <TouchableOpacity style={styles.button_g_f} onPress={()=>{Actions.userinfo({info: this.props.userinfo})}}>
            <Text style={{ color: '#333', fontSize: 18 }}>
              <FontAwesome name="info-circle" size={18} /> ข้อมูลส่วนตัว
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_g_m} onPress={()=>{Linking.openURL('https://google.com')}}>
            <Text style={{ color: '#333', fontSize: 18 }}>
              <FontAwesome name="link" size={18} /> เว็บไซต์
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_g_m} onPress={()=>{Linking.openURL('https://google.com')}}>
            <Text style={{ color: '#333', fontSize: 18 }}>
              <FontAwesome name="facebook" size={18} /> แฟนเพจ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_g_m} onPress={Actions.password}>
            <Text style={{ color: '#333', fontSize: 18 }}>
              <MaterialCommunityIcons name="key-change" size={18} /> เปลี่ยนรหัสผ่าน
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_g_l} onPress={Actions.setting}>
            <Text style={{ color: '#333', fontSize: 18 }}>
              <FontAwesome name="cog" size={18} /> ตั้งค่าแอป
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_logout}
            onPress={this.onLogout}>
            <Text style={{ color: '#fff', fontSize: 18 }}>ออกจากระบบ</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button_g_f: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    borderLeftWidth: 0.5,
    borderTopWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
    marginTop: 20,
  },
  button_g_m: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderLeftWidth: 0.5,
    borderTopWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
  },
  button_g_l: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
  },
  button_logout: {
    alignItems: 'center',
    backgroundColor: '#be0027',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  contentContainer: {
    paddingVertical: 20,
  },
});
