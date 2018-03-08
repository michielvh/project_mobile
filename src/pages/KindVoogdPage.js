import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, Button,ListView, FlatList,Alert,StyleSheet } from 'react-native';

class KindVoogdPage extends Component {
voogden(x){
       
    //  return Object.keys(x).map(key => x[key]);
return x;
    }
 

    render() {
        const { params } = this.props.navigation.state;
        const kind = params ? params.kind : null;
      
          return (
            <ScrollView>
                  { kind.voogden.map((voogd) => {
             
          return (
            <TouchableHighlight key={voogd.idvoogd}
               onPress={() => Alert.alert(
                voogd.naam, 'Telefoon:        '+voogd.tel+'\n'+'Woonplaats:  '+voogd.huisnr+ ' '+ voogd.straat+ '\nte:                    '+ 
                voogd.postcode +' ' +voogd.plaats +'\n',
                [
                 /*  {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, */
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )} 
            //HIER ALERT ONPRESS MET INFO VOOGD
            >
              <Text style={styles.dinges} key={voogd.idvoogd}> {voogd.voornaam} {voogd.naam} </Text>
            </TouchableHighlight>
         );
        })}
            {/*   <FlatList
              data={kind.voogden}
              renderItem={(item) => <Text>{item.naam}</Text>}
            /> */}
            </ScrollView>
         );
        }
}

const mapStateToProps = (state) => {
    return {
     
    };
};
 
export default connect(mapStateToProps)(KindVoogdPage);
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
