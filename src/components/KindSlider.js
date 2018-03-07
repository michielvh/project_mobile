import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import { Switch } from 'react-native-switch';
import  PushNotification  from 'react-native-push-notification';

 class KindSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
         };
    }

    fixNotifixationKind(val){
      const int=(x) => Number.parseInt(x);
        console.log(val);



          if (val===true){
              console.log('true');
              console.log(this.props.kind);
             // var x=[];
           //   x=this.props.kind.medicaties;
            for(let medicatie of this.props.kind.medicaties){
                console.log('true2');
                console.log(medicatie);

                for(let tijdstip of medicatie.tijdstippen){
                    console.log('true3');
                    console.log(tijdstip);
                  var date3= tijdstip.tijdstip+':00';
                 
                  console.log(date3);
                 
                  //var date=new Date(date3);
                 

                /*   var dag = date3.slice(0, 2);
                  var maand = date3.slice(3, 5);
                   var jaar = date3.slice(6, 10); 
                   var uur = date3.slice(11, 13);
                   var minutes=date3.slice(14,16);
                    var xxx = new Date(Date.UTC(jaar, (maand-1), dag, (hours-1), minutes, 0)); */

                  date3="06/03/2018 23:33";
                    var dag = date3.slice(1, 2);
                    var maand = date3.slice(4, 5);
                     var jaar = date3.slice(7, 10); 
                     var uur = date3.slice(12, 13);
                     var minutes=date3.slice(14,16);
                     var xxx = new Date(Date.UTC(int(jaar), int(maand)-1, int(dag), int(uur)-1, int(minutes), 0));

                    PushNotification.localNotificationSchedule({
                        id: tijdstip.idtijstip,
                        message:this.props.kind.naam + ' heeft ' +  tijdstip.dosis + ' ' + medicatie.naam + ' nodig',
                        date:/*  new Date( tijdstip.tijdstip) */  xxx,
                        soundName: 'pillen.mp3'
                      });
                      console.log(tijdstip.idtijdstip);
                }
           }   }else{
                console.log('false');
        
                for(let medicatie of this.props.kind.medicaties){
                    console.log('false2');
        
                    for(let tijdstip of medicatie.tijdstippen){
                        console.log('false3');
        
                        PushNotification.cancelLocalNotifications({id:  tijdstip.idtijstip});
                    }
              
        
                }
            } 
        }

  render() {
      console.log(this.props);
    
      
    return (
      <View>
 
 <Switch
         value={false}
         onValueChange={(val) => this.fixNotifixationKind(val)}
         disabled={false}
         activeText={'On'}
         inActiveText={'Off'}
         circleSize={30}
         barHeight={25}
         circleBorderWidth={3}
         backgroundActive={'green'}
         backgroundInactive={'gray'}
         circleActiveColor={'#30a566'}
         circleInActiveColor={'#000000'}
       /> 
         
  
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps)(KindSlider);

const styles = StyleSheet.create({

  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#841584',
  },
  titleText: {
    fontSize: 20, 
    fontWeight: 'bold',
  }
  
});