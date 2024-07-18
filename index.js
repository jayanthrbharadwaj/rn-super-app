/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import {ScriptManager, Script, Federated} from '@callstack/repack/client';
import {name as appName} from './app.json';
import App from './App';

const resolveURL = Federated.createURLResolver({
  containers: {
    rnminiappone: 'https://github.com/jayanthrbharadwaj/codemagic/releases/download/v0.0.1.2/[name][ext]',
    // rnminiapptwo: 'http://localhost:9003/[name][ext]',
    rnminiapptwo: 'https://github.com/jayanthrbharadwaj/rn-mini-app-two/releases/download/v1.0.0/[name][ext]',
    rnminiappthree: 'https://github.com/jayanthrbharadwaj/codemagic/releases/download/v0.0.1.3/[name][ext]',
    rnminiappfour:'https://github.com/jayanthrbharadwaj/codemagic/releases/download/v0.0.1.4.1/[name][ext]'
  },
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let url;
  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: false, // For development
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent(appName, () => App);
