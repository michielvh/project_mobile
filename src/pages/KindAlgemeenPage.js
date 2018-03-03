import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, Button } from 'react-native';

class KindAlgemeenPage extends Component {
    
 
    
    render() {
      
        const { params } = this.props.navigation.state;
        const kind = params ? params.kind : null;
          return (
            <ScrollView>
            <Text>Naam: {kind.naam}</Text>
            <Text>Voornaam: {kind.voornaam}</Text>
            <Text>GeboorteDatum: (nog converten) {kind.naam}</Text>
            <Text>Kan zwemmen?: {kind.zwemmen === 1 ? 'ja' : 'nee' }</Text>
            <Text>Mag sporten?: {kind.sport === 1 ? 'ja' : 'nee'}</Text>
            <Text>Mag volpompen met daffis?: {kind.dafi === 1 ? 'ja' : 'nee'}</Text>
           

            <Text>Meldingen: {kind.opmerking}</Text>
            </ScrollView>
           
         );
        }
}

const mapStateToProps = (state) => {
    return {
     
    };
};
 
export default connect(mapStateToProps)(KindAlgemeenPage);
