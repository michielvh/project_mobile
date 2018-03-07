import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, Button,View, Alert } from 'react-native';
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
                    { this.ziektes(kind.ziektes).map((ziekte) => {
               
            return (
           <TouchableHighlight onPress={() => Alert.alert(
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
          <Text  key={ziekte.idziekte}> {ziekte.naam}</Text>
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
