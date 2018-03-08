import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import { Switch } from 'react-native-switch';
import  PushNotification  from 'react-native-push-notification';
import { addSliderKind } from '../redux/actions/slider';
 class KindSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false
         };
    }

    fixNotifixationKind(val){
      const int=(x) => Number.parseInt(x);
        console.log(val);
this.props.changeValueStore(val,this.props.kind.idkind);
this.setState({value: val});

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
                 console.log(tijdstip.idtijdstip);

                /*   var dag = date3.slice(0, 2);
                  var maand = date3.slice(3, 5);
                   var jaar = date3.slice(6, 10); 
                   var uur = date3.slice(11, 13);
                   var minutes=date3.slice(14,16);
                    var xxx = new Date(Date.UTC(jaar, (maand-1), dag, (hours-1), minutes, 0)); */

              //    date3="07/03/2018 08:22";
                    var dag = date3.slice(0, 2);
                    var maand = date3.slice(3, 5);
                     var jaar = date3.slice(6, 10); 
                     var uur = date3.slice(11, 13);
                     var minutes=date3.slice(14,16);
                     var xxx = new Date(Date.UTC(int(jaar), int(maand)-1, int(dag), int(uur)-1, int(minutes), 0));

                    PushNotification.localNotificationSchedule({
                        id: tijdstip.idtijdstip,
                        message:this.props.kind.naam + ' heeft ' +  tijdstip.dosis + ' ' + medicatie.naam + ' nodig',
                        date:/*  new Date( tijdstip.tijdstip) */  xxx,
                        soundName: 'pillen.mp3'
                      });
                      console.log(xxx);
                }
           }   }else{
                console.log('false');
        
                for(let medicatie of this.props.kind.medicaties){
                    console.log('false2');
        
                    for(let tijdstip of medicatie.tijdstippen){
                        console.log('false3');
        
                        PushNotification.cancelLocalNotifications({id: tijdstip.idtijdstip});
                    }
              
        
                }
            } 
        }

  render() {
      console.log(this.props.sliderValue)
    var x = this.props.sliderValue[this.props.kind.idkind] ? this.props.sliderValue[this.props.kind.idkind] : false;
    return (
      <View>
 
 <Switch
         value={x}
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
    sliderValue: state.slider.sliders
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeValueStore: (val,idkind) => { dispatch(addSliderKind(val,idkind)); },
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(KindSlider);


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
