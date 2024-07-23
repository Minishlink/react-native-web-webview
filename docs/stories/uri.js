import React from 'react';
import { WebView } from 'react-native-webview';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import InjectableWebView from './components/InjectableWebView';

export const basic = () => <WebView source={{ uri: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }} />;

export const onMessage = () => (
  <WebView source={{ uri: require('./onMessage.html') }} onMessage={action(text('Text', 'onMessage'))} />
);

const js = `
const button = document.getElementById('button')
button.removeEventListener('click', onClick)
onClick = () => window.alert('Hello from iframe!')
button.addEventListener('click', onClick)
window.alert('click the button')
`;

export const inject = () => (
  <InjectableWebView
    onMessage={action(text('Text', 'onMessage'))}
    source={{ uri: require('./onMessage.html') }}
    title="test"
    script={text('script', js)}
  />
);
