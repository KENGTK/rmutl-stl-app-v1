import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class _News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView>
        <View style={{ paddingHorizontal: 15, paddingVertical: 15 }}>
          <TouchableOpacity
            style={styles.gridBox}
            onPress={() => {
              Actions.readnews({newsId: 1})
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'stretch',
                backgroundColor: '#fff'
              }}>
              <View style={{ flex: 4, height: 120, padding: 5}}>
                <Image
                  style={{height: 110, borderTopLeftRadius: 5}}
                  source={{
                    uri: 'https://f.ptcdn.info/572/058/000/pbp62xvscPc6pmO9ASO-o.jpg',
                  }}
                />
              </View>
              <View style={{ flex: 7, height: 120, padding: 5}}>
                <Text style={{ fontSize: 16, }}>เปิดตัวเกมใหม่กลุ่มโจรสลัดหมวกฟาง! One Piece: Bounty Rush</Text>
                <Text style={{ fontSize: 13, color: '#999', marginTop: 5 }}>เมื่อ: 2019-01-19 12:28:55</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  gridBox: {
    marginBottom: 10,
  },
});
