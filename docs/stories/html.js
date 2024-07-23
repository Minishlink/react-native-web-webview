import React from 'react';
import { WebView } from 'react-native-webview';
import InjectableWebView from './components/InjectableWebView';
import { text } from '@storybook/addon-knobs';

const html = '<html><body><h1>Hello world!</h1></body></html>';

export const basic = () => <WebView source={{ html }} />;

export const inject = () => (
  <InjectableWebView source={{ html }} script={text('script', 'window.alert("Hello from iframe!")')} />
);
