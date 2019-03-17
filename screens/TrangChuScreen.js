import React from "react";
import { StyleSheet, View, WebView } from 'react-native';

export default class TrangChuScreen extends React.Component {
    static navigationOptions = {
      title: 'TRANG CHỦ',
    };
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
    }
  });