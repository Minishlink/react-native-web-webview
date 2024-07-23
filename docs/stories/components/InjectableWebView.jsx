import React, { Component } from 'react';
import { Button, View } from 'react-native-web';
import WebView from 'react-native-webview';

export default class InjectableWebView extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    return (
      <View>
        <WebView ref={this.ref} {...this.props}></WebView>
        <Button title="Inject" onPress={() => this.ref.current.injectJavaScript(this.props.script)} />
      </View>
    );
  }
}
