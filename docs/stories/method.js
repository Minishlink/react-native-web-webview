import React from 'react';
import { WebView } from 'react-native-webview';
import { text } from '@storybook/addon-knobs';

import InjectableWebView from './components/InjectableWebView';

export const basic = () => (
  <WebView
    source={{
      uri: text('URI', 'https://react-native-web-community.github.io/react-native-web-webview/'),
      method: text('Method', 'GET'),
    }}
  />
);

export const inject = () => (
  <InjectableWebView
    source={{
      uri: text('URI', 'https://react-native-web-community.github.io/react-native-web-webview/'),
      method: text('Method', 'GET'),
    }}
    title="test"
    script={text('script', 'window.alert("Hello from iframe!")')}
  />
);
