import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import Tak  from './Tak';
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
    //  console.log(this.props);
    
      
    return (
      <View>
       <Text style={styles.titleText} >Groepen: </Text>
      
        { this.groepen().map((groep) => {
          return (
            <View>
            <TouchableHighlight 
              onPress={() => this.props.navigation.navigate('GroepDetails', { groep })}
            >
              <Text style={styles.titleText} key={groep.idgroep}> {groep.naam}</Text>
              </TouchableHighlight>  
              {   this.takken().map((tak) => {
                 var x = [];
                 const int=(x) => Number.parseInt(x);
        //LIJST MET LIJSTITEMS VAN MAKEN, MAKKELIJKER VOOR OPMAAK
        for(let t of groep.takkenids){
          console.log(int(t));
          console.log(t[0]);
          
          console.log(tak.idtak);
                  if( int(t)===tak.idtak){return(
                   <Tak navigation={this.props.navigation} tak={tak}/*of tak.idtak*//>
                  );
                  }
                }
                   })}
            
            </View>
         );
        })}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groepen: state.groep.groepen[0].groepen,
    takken: state.tak.takken[0].takken
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
