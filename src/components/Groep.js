import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import { Tak } from './Tak';
 class Groep extends Component {
    constructor(props) {
        super(props);
        this.state = { location: '' };
    }

  groepen() {
      return Object.keys(this.props.groepen).map(key => this.props.groepen[key]);
    }
    takken() {
        return Object.keys(this.props.takken).map(key => this.props.takken[key]);
      }
  render() {
      console.log(this.props);
    
      
    return (
      <View>
       <Text style={styles.titleText} >Groepen: </Text>
        { this.groepen().map((groep) => {
          return (
            <TouchableHighlight 
              onPress={() => this.props.navigation.navigate('GroepDetails', { groep })}
            >
              <Text key={groep.idgroep}> {groep.naam}</Text>
             
              {   this.takken().map((tak) => {
                 var x = [];
                
        //LIJST MET LIJSTITEMS VAN MAKEN, MAKKELIJKER VOOR OPMAAK
                  if( groep.takken.find(tak.idtak)){
                   <Tak tak={tak}/*of tak.idtak*//>}
                   })}
            </TouchableHighlight>
         );
        })}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groepen: state.groepen.groepen,
    takken: state.takken.takken
  };
};

export default connect(mapStateToProps)(Groep);

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
