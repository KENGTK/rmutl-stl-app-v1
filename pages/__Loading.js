import * as React from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class __Loading extends React.Component {
   constructor(props){
     super(props)
     this.state = {
       animating: true
     }
   }
   
   closeActivityIndicator = () => setTimeout(() => this.setState({
   animating: false }), 60000)
   
   componentDidMount = () => this.closeActivityIndicator()

   render() {
      return (
         <View style = {styles.container}>
            <ActivityIndicator
               animating = {this.state.animating}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}/>
         </View>
      )
   }
}

const styles = StyleSheet.create ({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
    },
    activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
})