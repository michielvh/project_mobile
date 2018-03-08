import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, TouchableHighlight, Button } from 'react-native';
import { Switch } from 'react-native-switch';
import  PushNotification  from 'react-native-push-notification';
import KindSlider from '../components/KindSlider'
class TakDetails extends Component {
     kinderenVanTakT(tak) {
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
    kinderenVanTak(kinderenids) {
        let lijst=[];
        
        for(var x in this.props.kinderen){
          var kind= this.props.kinderen[x];
          console.log(kind);
            for(let y in kinderenids){
                var kindid=kinderenids[y];
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
      kinderen(){
        const { params } = this.props.navigation.state;
        const tak = params ? params.tak : null;
        const kinderenids = params ? params.kinderenids : null;
        var l=[];
          if(tak!=null){
            let x=this.kinderenVanTakT(tak);
            l=x;
        }else{
            let y =this.kinderenVanTak(kinderenids);
            l=y;
        }
         
      //  return Object.keys(l).map(key => l[key]);
        return l;
      }

     

     


    render() {
        console.log(this.props.navigation.state);
    /*     const { params } = this.props.navigation.state;
    const tak = params ? params.tak : null;
    const kinderenids = params ? params.kinderenids : null;
    console.log(this.props.kinderen);
    console.log(tak); */
    return(
        <ScrollView>
        { this.kinderen().map((kind) => {
             console.log(kind);
          return (<View key={kind.idkind} style={{flex: 1, flexDirection: 'row'}}>
         
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
