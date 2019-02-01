import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.logoSize === 'default' ? (
          <Image
            style={{ width: 150, height: 250, marginTop: 30, marginBottom: 10 }}
            source={require('../image/logo.png')}
          />
        ) : (
          <Image
            style={{ width: 100, height: 175, marginTop: 30, marginBottom: 10 }}
            source={require('../image/logo.png')}
          />
        )}
        <Text style={styles.LogoText}>{this.props.logoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 5,
  },
  LogoText: {
    marginVertical: 15,
    fontSize: 24,
    color: '#757575',
  },
});
