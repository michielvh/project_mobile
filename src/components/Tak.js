import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';

 class Tak extends Component {
    constructor(props) {
        super(props);
        this.state = { location: '' };
    }


  render() {
      console.log(this.props);
    
      
    return (
      <View>
 
            <TouchableHighlight 
              onPress={() => this.props.navigation.navigate('TakDetails', this.props.idtak )}
            >
              <Text key={this.props.tak.idtak}> {this.props.tak.naam}</Text>
             
           
            </TouchableHighlight>
         
  
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps)(Tak);

const styles = StyleSheet.create({

  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#841584',
  },
  titleText: {
    fontSize: 20, 
    fontWeight: 'bold',
  }
  
});
