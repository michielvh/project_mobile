import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, Button } from 'react-native';
import KindNavigator from '../navigation/KindNavigator';

class KindDetails extends Component {
    
 

    render() {
      
      
          return (
              <KindNavigator/>
         );
        }
}

const mapStateToProps = (state) => {
    return {
     
    };
};
 
export default connect(mapStateToProps)(KindDetails);
