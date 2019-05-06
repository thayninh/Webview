import React from "react";
import { StyleSheet, View, WebView, TouchableOpacity, Text } from 'react-native';

var WEBVIEW_REF = "webview"
export default class TrangChuScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { canGoBack: "", canGoForward:"" };
  }

  static navigationOptions = {
      title: 'TRANG CHỦ',
    };

    onNavigationStateChange(navState) {
      this.setState({
        canGoBack: navState.canGoBack,
        canGoForward: navState.canGoForward
      });
    }
    onBack() {
      this.refs[WEBVIEW_REF].goBack();
    }
    onForward(){
      this.refs[WEBVIEW_REF].goForward();
    }

    render() {
      return (
        <View style={styles.container}>
          <WebView
            ref={WEBVIEW_REF}
            onNavigationStateChange= {this.onNavigationStateChange.bind(this)}
            source={{ uri: 'http://taquangbinh.cargis.org/' }}
          />
          <View>
            <TouchableOpacity
              disabled={!this.state.canGoBack}
              onPress={this.onBack.bind(this)}
              >
              <Text>Go Back</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              disabled={!this.state.canGoForward}
              onPress={this.onForward.bind(this)}
              >
              <Text>Go Forward</Text>
            </TouchableOpacity>
          </View>

        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });