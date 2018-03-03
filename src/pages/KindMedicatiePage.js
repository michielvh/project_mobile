import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, Button } from 'react-native';

class KindMedicatiePage extends Component {
    
 
    medicaties(x){
       
        return Object.keys(x).map(key => x[key]);
      }
   
  
      render() {
          const { params } = this.props.navigation.state;
          const kind = params ? params.kind : null;
        
            return (
              <ScrollView>
                    { this.medicaties(kind.medicaties).map((medicatie) => {
               
            return (
              <TouchableHighlight 
              /*   onPress={() => this.props.navigation.navigate('KindNavigator', { kind })} */
              //HIER ALERT ONPRESS MET INFO VOOGD
              >
                <Text  key={medicatie.idmedicatie}> {medicatie.naam}</Text>
              </TouchableHighlight>
           );
          })}
            </ScrollView>
         );
        }
}

const mapStateToProps = (state) => {
    return {
     
    };
};
 
export default connect(mapStateToProps)(KindMedicatiePage);
