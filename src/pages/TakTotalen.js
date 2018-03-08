import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, TouchableHighlight, Button,StyleSheet } from 'react-native';
import { Switch } from 'react-native-switch';
import  PushNotification  from 'react-native-push-notification';
import KindSlider from '../components/KindSlider'
class TakTotalen extends Component {

vulMap(kinderenids){
    const int=(x) => Number.parseInt(x);
    
    var veggies=0;
    var lijstDieeten=new Map();
    for(let id of kinderenids){
        for(let kind of this.props.kinderen){
            if(kind.idkind===int(id)){
//map van dieeten
for(let dieet of kind.dieeten){
if(lijstDieeten.has(dieet.naam)){
    var x =lijstDieeten.get(dieet.naam);
    var y=x +1;
    lijstDieeten.set(dieet.naam,y);
}else{
    lijstDieeten.set(dieet.naam,1);
}
}

            }
        }
    }
return lijstDieeten;
}
toListt(map){
    var fin=[];
    for (var [key, value] of map) {
      var lll={naam: key,aantal: value};
     
     
      fin.push(lll);
    }
    return fin;
}
    render() {
        const { params } = this.props.navigation.state;
        console.log(params);
        const kinderenids = params ? params.kinderenids : null;
        console.log(this.props.navigation.state);
        var lijst=this.vulMap(kinderenids);

       var lijst2=this.toListt(lijst);



    return(
        <ScrollView>
       <Text style={styles.dinges}>Totaal aantal kinderen in de tak: {kinderenids.length}</Text>
       <Text style={styles.dinges}>lijst dieeten:</Text>
       
        {lijst2.map((x) => {
            return(
            <Text key={x.naam}>{x.naam}  {x.aantal}</Text>
            )
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
 
export default connect(mapStateToProps)(TakTotalen);
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