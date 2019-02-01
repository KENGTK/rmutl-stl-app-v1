import * as React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Logo from '../components/Logo';

export default class __Welcome extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={{ marginTop: 60, marginBottom: 55, alignItems: 'center' }}>
          <Logo logoSize="default" logoText="RMUTL Studentloan" />
          <Text style={styles.small_text}>กองทุนเงินให้กู้ยืมเพื่อการศึกษา มทร.ล้านนา</Text>
        </View>
        <View style={{ paddingHorizontal: 50 }}>
          <TouchableOpacity style={styles.button_login} onPress={Actions.login}>
            <Text style={{ color: '#fff', fontSize: 18 }}>เข้าสู่ระบบ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_regis}
            onPress={Actions.register}>
            <Text style={{ color: '#fff', fontSize: 18 }}>สมัครสมาชิก</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button_login: {
    alignItems: 'center',
    backgroundColor: '#3369e7',
    padding: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  button_regis: {
    alignItems: 'center',
    backgroundColor: '#6d6e70',
    padding: 20,
    borderRadius: 5,
  },
  small_text: {
    fontSize: 12,
    color: '#666'
  }
});
