/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import WebViewAndroid from 'react-native-webview-android';

var SITE_URL = "https://r2rintermodal.com";

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: SITE_URL,
      // OR
      // you can use a source object like React Native Webview.
      // source {uri: string, method: string, headers: object, body: string}, {html: string, baseUrl: string}
      // Loads static html or a uri (with optional headers) in the WebView. <Just like React Native's version>
      // source: {
      //   uri: SITE_URL,
      //   headers: {
      //     ...
      //   },
      // },
      status: 'No Page Loaded',
      backButtonEnabled: false,
      forwardButtonEnabled: false,
      loading: true,
    };
  }
  goBack(){
    this.refs.webViewAndroidSample.goBack(); // you can use this callbacks to control webview
  }
  goForward(){
    this.refs.webViewAndroidSample.goForward();
  }
  reload(){
    this.refs.webViewAndroidSample.reload();
  }
  onNavigationStateChange(event){
    console.log(event);
    this.setState({
      backButtonEnabled: event.canGoBack,
      forwardButtonEnabled: event.canGoForward,
      url: event.url,
      status: event.title,
      loading: event.loading
    });
  }
  render(){
    return (
      <WebViewAndroid
        ref="webViewAndroidSample"
        javaScriptEnabled={true}
        geolocationEnabled={false}
        builtInZoomControls={false}
        onNavigationStateChange={()=>this.onNavigationStateChange}
        url={SITE_URL} // or use the source(object) attribute...
        style={styles.containerWebView} />
    );
    // other attributes: source(object),
    // html(string), htmlCharset(string),
    // baseUrl(string), injectedJavaScript(string),
    // disableCookies(bool), disablePlugins(bool),
    // userAgent(string)
  }
}

const styles = StyleSheet.create({
  containerWebView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
