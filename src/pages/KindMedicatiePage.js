import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, Button, Alert,StyleSheet } from 'react-native';

class KindMedicatiePage extends Component {
    
 
    medicaties(x){
       
        return Object.keys(x).map(key => x[key]);
      }
   
  
      render() {
          const { params } = this.props.navigation.state;
          const kind = params ? params.kind : null;
        
            return (
              <ScrollView>
                    { kind.medicaties.map((medicatie) => {
               
            return (
              <TouchableHighlight key={medicatie.idmedicatie}
                onPress={() => Alert.alert(
                'Alert Title',
               medicatie.tijdstippen[0].dosis + ' op ' +  medicatie.tijdstippen[0].tijdstip ,
                [
                 /*  {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, */
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )} 
              //HIER ALERT ONPRESS MET INFO VOOGD
              >
                <Text style={styles.dinges}  key={medicatie.idmedicatie}> {medicatie.naam}</Text>
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
const styles = StyleSheet.create({

  dinges: {
      fontSize: 18, 
     // alignItems: 'center',
      fontWeight: 'bold',
      width: 600,
      margin: 3,
     // textDecorationLine: 'underline',
  },
  
})