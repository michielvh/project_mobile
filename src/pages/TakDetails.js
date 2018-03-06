import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, TouchableHighlight, Button } from 'react-native';
import { Switch } from 'react-native-switch';
import  PushNotification  from 'react-native-push-notification';
import KindSlider from '../components/KindSlider'
class TakDetails extends Component {
   
    kinderenVanTak(tak) {
        let lijst=[];
        console.log(tak);
        for(var x in this.props.kinderen){
          var kind= this.props.kinderen[x];
          console.log(kind);
            for(let y in tak.kinderenids){
                var kindid=tak.kinderenids[y];
                console.log(kindid);
                if(kindid==kind.idkind){
                    lijst.push(kind);
                    console.log(kind);
                }
            }
        }
        console.log(lijst);
      return lijst;
      }
      kinderen(tak){
          let x=this.kinderenVanTak(tak);
          console.log(x);
        return Object.keys(x).map(key => x[key]);
      }

     

     


    render() {
        console.log(this.props.navigation.state);
        const { params } = this.props.navigation.state;
    const tak = params ? params.tak : null;
    console.log(this.props.kinderen);
    console.log(tak);
    return(
        <ScrollView>
        { this.kinderen(tak).map((kind) => {
             console.log(kind);
          return (<View style={{flex: 1, flexDirection: 'row'}}>
         
            <TouchableHighlight style={{width: 100}}
              onPress={() => this.props.navigation.navigate('KindNavigator', { kind })}
            >
              <Text  key={kind.idkind}> {kind.naam}</Text>
            </TouchableHighlight>
       
            <KindSlider kind={kind}/>
           
       
            </View>
          
         );
        
        })}
        </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        kinderen:state.kind.kinderen[0].kinderen,
    };
};
 
export default connect(mapStateToProps)(TakDetails);
