import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, Button } from 'react-native';
import OuderNavigator from '../navigation/OuderNavigator';

class OuderPage extends Component {
    
 

    render() {
        console.log(this.props.navigation.state);
        const { params } = this.props.navigation.state;
        const kind = params ? params.kind : null;
      
          return (
          
              <OuderNavigator /> 
            
         );
        }
}

const mapStateToProps = (state) => {
    return {
     
    };
};
 
export default connect(mapStateToProps)(OuderPage);
