import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class _ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView>
        <View style={{ paddingHorizontal: 20, paddingVertical:20 }}>
          <Text>ChangePassword</Text>
        </View>
      </ScrollView>
    );
  }
}