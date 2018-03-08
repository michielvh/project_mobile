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
   
   
    {if(this.props.tak!=null){
      return(<View>
 <TouchableHighlight 
              onPress={() => this.props.navigation.navigate('TakTabs', this.props.tak )}
            >
              <Text style={{fontSize: 18,margin: 5 }} key={this.props.tak.idtak}>- {this.props.tak.naam}</Text>
            </TouchableHighlight>

      </View>);
    }else{ 
    return (
      <View>
          
          { this.props.takken.map((tak) => {
            console.log(tak);
          return (
            <TouchableHighlight key={tak.idtak}
              onPress={() => this.props.navigation.navigate('TakTabs', { tak })}
            >
              <Text key={tak.idtak}> {tak.naam}</Text>
            </TouchableHighlight>
         );
        })}
         
  
      </View>
    );
  }
  }
}}

const mapStateToProps = (state) => {
  return {
    takken:state.tak.takken[0].takken
  };
};

export default connect(mapStateToProps)(Tak);


