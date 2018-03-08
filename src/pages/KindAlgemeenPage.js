import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';

import { ScrollView, Text, TouchableHighlight, Button } from 'react-native';

class KindAlgemeenPage extends Component {
    
 
   
        constructor(props) {
            super(props);
          
        }
         int=(x) => Number.parseInt(x);

    render() {
      console.log(this.props);
       const { params } = this.props.navigation.state;
       const kind = params ? params.kind : null;
       const dat=this.int(kind.gebdatum);
       const r=dat/1000;
      

       console.log(kind.gebdatum);

       console.log(dat);
       console.log(r);

      // const kind=this.props.kind;
          return (
            <ScrollView>
            <Text>Naam: {kind.naam}</Text>
            <Text>Voornaam: {kind.voornaam}</Text>
            <Text>GeboorteDatum: {kind.gebdatum}
           
             </Text>
            
            
            
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
