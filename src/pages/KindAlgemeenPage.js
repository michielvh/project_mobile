import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';

import { ScrollView, Text, TouchableHighlight, Button,StyleSheet } from 'react-native';

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
            <Text style={styles.dinges}>Naam: </Text><Text style={styles.dinges2}>{kind.naam}</Text>
            <Text style={styles.dinges}>Voornaam:</Text><Text style={styles.dinges2}>{kind.voornaam}</Text>
            <Text style={styles.dinges}>GeboorteDatum:</Text><Text style={styles.dinges2}> {kind.gebdatum}
           
             </Text>
            
            <Text style={styles.dinges}>Kan zwemmen?:</Text><Text style={styles.dinges2}> {kind.zwemmen === 1 ? 'ja' : 'nee' }</Text>
            <Text style={styles.dinges}>Mag sporten?:</Text><Text style={styles.dinges2}>{kind.sport === 1 ? 'ja' : 'nee'}</Text>
            <Text style={styles.dinges}>Mag volpompen met daffis?: </Text><Text style={styles.dinges2}> {kind.dafi === 1 ? 'ja' : 'nee'}</Text>
           

            <Text style={styles.dinges}>Meldingen:</Text><Text style={styles.dinges2}> {kind.opmerking}</Text>
            </ScrollView>
           
         );
        }
}

const mapStateToProps = (state) => {
    return {
     
    };
};
 
export default connect(mapStateToProps)(KindAlgemeenPage);

const styles = StyleSheet.create({

    dinges: {
        fontSize: 18, 
       // alignItems: 'center',
        fontWeight: 'bold',
        width: 600,
        margin: 3,
       // textDecorationLine: 'underline',
    },
    dinges2: {
        fontSize: 15, 
       // alignItems: 'center',
       // fontWeight: 'bold',
        width: 600,
        margin: 10,
       // textDecorationLine: 'underline',
    }
})
