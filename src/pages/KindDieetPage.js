import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, Button, Alert } from 'react-native';

class KindDieetPage extends Component {
    dieeten(x){
       
        return Object.keys(x).map(key => x[key]);
      }
   
  
      render() {
          const { params } = this.props.navigation.state;
          const kind = params ? params.kind : null;
        
            return (
              <ScrollView>
                    { kind.dieeten.map((dieet) => {
               
            return (
              <TouchableHighlight  key={dieet.iddieet}  onPress={() => Alert.alert(
                dieet.naam, 'Opmerking: '+dieet.opmerkingen,
                [
                 /*  {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, */
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )} 
             
              >
                <Text  key={dieet.iddieet}> {dieet.naam}</Text>
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
 
export default connect(mapStateToProps)(KindDieetPage);
