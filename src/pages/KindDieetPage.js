import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, Button } from 'react-native';

class KindDieetPage extends Component {
    
 

    render() {
      
      
          return (
            <ScrollView>
            <TouchableHighlight>
             <Text>ee</Text>
            </TouchableHighlight>
            </ScrollView>
         );
        }
}

const mapStateToProps = (state) => {
    return {
     
    };
};
 
export default connect(mapStateToProps)(KindDieetPage);
