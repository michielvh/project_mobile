/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';


import Login from './src/components/Login';
import Secured from './src/components/Secured';

import Navigatorr from './src/navigation/Navigator';
import OverviewPage from './src/pages/OverviewPage';
import TakNavigator from './src/navigation/TakNavigator';



class App extends Component{
  render() {
   

 

        if (this.props.isLoggedIn) {
         // return <Secured />;
          return <TakNavigator/>
        } else {
            return <Login />;
        }
    }
}
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}
 
export default connect(mapStateToProps)(App);
      
    
  


const styles = StyleSheet.create({
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
