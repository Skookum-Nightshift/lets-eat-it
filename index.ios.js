/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;
var Parse = require('parse').Parse;
Parse.initialize("pbfkfDL1xvxhQgH7g5IPTH8WKTyfYzhrIrmHUKCm", "iAHXjjDRfuSLDApqzjJRTs9h2uFrDSnKpSIEhlzW");

var roux = React.createClass({

  getInitialState: function() {
    return {
      scores: []
    };
  },


  componentWillMount: function() {
    var GameScore = Parse.Object.extend("GameScore");
    var query = new Parse.Query(GameScore);
    var self = this;
    query.find( {
      success: function(gameScore) {
        self.setState({
          scores: gameScore
        });
      },
      error: function(object, error) {
        // The object was not retrieved successfully.
        // error is a Parse.Error with an error code and message.
      }
    });
  },


  render: function() {
    // var GameScore = Parse.Object.extend("GameScore");
    // var gameScore = new GameScore();
    //
    // gameScore.set("score", 1337);
    // gameScore.set("playerName", "Sean Plot 2222");
    // gameScore.set("cheatMode", false);
    //
    // gameScore.save(null, {
    //   success: function(gameScore) {
    //     // Execute any logic that should take place after the object is saved.
    //     alert('New object created with objectId: ' + gameScore.id);
    //   },
    //   error: function(gameScore, error) {
    //     // Execute any logic that should take place if the save fails.
    //     // error is a Parse.Error with an error code and message.
    //     alert('Failed to create new object, with error code: ' + error.message);
    //   }
    // });

    console.log(this.state.scores);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
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

AppRegistry.registerComponent('roux', () => roux);
