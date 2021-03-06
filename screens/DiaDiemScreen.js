import React from "react";
import { StyleSheet, View, WebView } from 'react-native';

export default class DiaDiemScreen extends React.Component {
    static navigationOptions = {
      title: 'ĐỊA ĐIỂM',
    };
    onNavigationStateChange(navState) {
      this.setState({
        canGoBack: navState.canGoBack
      });
    }
    render() {
      return (
        <View style={styles.container}>
          <WebView
            source={{ uri: 'https://vnexpress.net/' }}
          />
        </View>
        
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    topbar:{
      flex: 1,
      backgroundColor: 'red',
    }
  });