import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';

 class Tak extends Component {
    constructor(props) {
        super(props);

    }

    takken() {
      return Object.keys(this.props.takken).map(key => this.props.takken[key]);
    }
  render() {
   
    
      
    return (
      <View>
          
          { this.takken().map((tak) => {
            console.log(tak);
          return (
            <TouchableHighlight 
              onPress={() => this.props.navigation.navigate('TakDetails', { tak })}
            >
              <Text key={tak.idtak}> {tak.naam}</Text>
            </TouchableHighlight>
         );
        })}
         
  
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    takken:state.tak.takken[0].takken
  };
};

export default connect(mapStateToProps)(Tak);


