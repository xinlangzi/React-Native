/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text, Image, TextInput,
  View, ScrollView, ListView
} from 'react-native';


class GeoLocation extends Component {
  constructor(props) {
    super(props);
    this.state = { position: 'unknown' }
    // setInterval(() => {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => { this.setState({position}) },
    //     (error) => { console.error(error) }
    //   );
    // }, parseInt(this.props.interval));
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => { this.setState({position}) },
      (error) => { console.error(error) }
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.setState({position});
    });
  }
  render() {
    let date = (new Date()).toISOString()
    return (
      <Text>Position: {date} {JSON.stringify(this.state.position)}</Text>
    );
  }
}
class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class AwesomeProject extends Component {
  constructor(props) {
    super(props)
    this._bindFunctions()
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 22 }}>
        <WebViewHook
          onHookMessage={this._onHookMessage}
          source={{uri: 'http://192.168.1.4:3000/'}} />
      </View>
    )
  }

  _bindFunctions() {
    this._onHookMessage = this._onHookMessage.bind(this)
  }

  _onHookMessage(msg) {
    console.log(`msg incoming [${msg.length}] -> ${msg}`)
  }
  // constructor(props) {
  //   super(props);
  //   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //   this.state = {
  //     text: '',
  //     bananas: {
  //       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  //     },
  //     dataSource: ds.cloneWithRows([
  //       'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
  //     ])
  //   };
  // }
  // render() {
  //   return (
  //     <ScrollView>
  //       <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
  //         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
  //         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
  //         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
  //         <View style={{width: '80%', padding: 10}}>
  //           <TextInput
  //             style={{height: 40, borderWidth: 1, padding: 10 }}
  //             placeholder="Type here to translate!"
  //             onChangeText={(text) => this.setState({text})}
  //           />
  //           <Text style={{padding: 10, fontSize: 42}}>
  //             {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
  //           </Text>
  //         </View>
  //       </View>
  //     </ScrollView>
  //     // <View style={{flex: 1}}>
  //     //   <View style={{flex: 8, backgroundColor: 'powderblue'}}>
  //     //     <View style={styles.container}>
  //     //       <Image source={this.state.bananas} style={{width: 193, height: 110}} />
  //     //       <Image source={require('./logo.png')} style={{width: 100, height: 100}} />
  //     //       <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width: 100, height: 100}} />
  //     //       <Text style={styles.welcome}>
  //     //         Welcome to React Native!!!
  //     //       </Text>
  //     //       <GeoLocation interval='10000' />
  //     //       <Text style={styles.instructions}>
  //     //         Press Cmd+R to reload,{'\n'}
  //     //         Cmd+D or shake for dev menu
  //     //       </Text>
  //     //       <Greeting name='心浪子' />
  //     //       <Text style={styles.red}>just red</Text>
  //     //       <Text style={styles.bigblue}>just bigblue</Text>
  //     //       <View style={{width: 50, height: 10, backgroundColor: 'powderblue'}} />
  //     //       <View style={{width: 100, height: 20, backgroundColor: 'skyblue'}} />
  //     //       <View style={{width: 150, height: 30, backgroundColor: 'steelblue'}} />
  //     //     </View>
  //     //   </View>
  //     //   <View style={{flex: 1, backgroundColor: 'skyblue'}} />
  //     //   <View style={{flex: 1, backgroundColor: 'steelblue'}} />
  //     // </View>
  //   );
  // }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
