import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, Button,View, Alert,StyleSheet } from 'react-native';
import Ziekte from '../components/Ziekte'
class KindZiektePage extends Component {
    
    constructor(props) {
        super(props);
       
    }

    ziektes(x){
       
        return Object.keys(x).map(key => x[key]);
      }
  
  
      render() {
          const { params } = this.props.navigation.state;
          const kind = params ? params.kind : null;
        
            return (
              <ScrollView>
                    { kind.ziektes.map((ziekte) => {
               
            return (
           <TouchableHighlight key= {ziekte.idziekte} onPress={() => Alert.alert(
            ziekte.naam, 'Symptomen: '+ziekte.symptomen+'\n'+'Behandeling: '+ziekte.behandeling,
            [
             /*  {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, */
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )} 
        //HIER ALERT ONPRESS MET INFO VOOGD
        >
          <Text style={styles.dinges} key={ziekte.idziekte}> {ziekte.naam}</Text>
        </TouchableHighlight>
           
           
           
                /*  <View>

           
               <Ziekte ziekte={ziekte} />
               </View> */
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
 
export default connect(mapStateToProps)(KindZiektePage);
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