
import React, { Component } from 'react';

import { Text, TouchableHighlight, View, StyleSheet, NetInfo, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { addTak } from '../redux/actions/tak';
import { addTakken } from '../redux/actions/tak';
//import { getLijstTakkenFromAPI } from '../methodes/tak';

class NewTak extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            /////////////////////////////////////////////
            //  LOGIN MEEGEVEN IN PROPS!!!!!!!!!!!!!!!!
            ////////////////////////////////////////////
          // data:[],
                         takken: [],
                      check: 'test',
                         takkenids: [],
                         kinderen:[],
                         kinderenids: []
        }
       // this.getLijstTakkenFromAPI = this.getLijstTakkenFromAPI.bind(this);
        //this.addToList = this.addToList.bind(this);
        //this.getLijstTakkenFromAPI();
    }

  
  
    getLijstTakkenFromAPI() {
        NetInfo.isConnected.fetch().then(isConnected => {
                if (isConnected) {
                    fetch('https://medicamp-so.appspot.com/api/user/'+this.props.login+'/tak/', {method: 'GET' })
                    .then((response) => response.json())
                    .then((responseData) => {
                        this.setState({ takken: responseData,
                            check: 'done'
                             });
                    })
                    .done();  
                }
                
           });

      //      console.log(this.state.takken);
         //   this.addToList(this.state.takken,3);
           // console.log(this.state.takkenids[0]);
       }
       getLijstKinderenFromAPI(id) {
        NetInfo.isConnected.fetch().then(isConnected => {
                if (isConnected) {
                    fetch('https://medicamp-so.appspot.com/api/tak/'+id+'/kind/', {method: 'GET' })
                    .then((response) => response.json())
                    .then((responseData) => {
                        this.setState({ kinderen: responseData
                           
                             });
                    })
                    .done();  
                }
                
           });

      //      console.log(this.state.takken);
         //   this.addToList(this.state.takken,3);
           // console.log(this.state.takkenids[0]);
       }
        
     
    addToList(x,y) {
       const arrayOfEntries = Object.entries(x);
        switch (y) {
            case 0: 
            arrayOfEntries.map((item) =>
            (
                //item[1] == idkind
              this.state.kinderenids.push(item[1]) //CHECKEN OF ROND ITEM GEEN '{}' MOETEN
            ));
            case 1: 
            arrayOfEntries.map((item) =>
            (
                //item[1] == idkind
              this.state.groepenids.push(item[1]) //CHECKEN OF ROND ITEM GEEN '{}' MOETEN
            ));
            case 2: 
            arrayOfEntries.map((item) =>
            (
                //item[1] == idkind
              this.state.voogdenids.push(item[1]) //CHECKEN OF ROND ITEM GEEN '{}' MOETEN
            ));
            case 3: 
            arrayOfEntries.map((item) =>
            (
                //item[1] == idkind
              this.state.takkenids.push(item[1]) //CHECKEN OF ROND ITEM GEEN '{}' MOETEN
            ));
           // console.log(takkenids);
               
            default:
               
        }
        
    }
  onAddTakken2(){
      this.props.onAddTakken(this.state.takken);
  }
    render() {        
        console.log(this.props);
       
        if (this.state.check=='test'){
      this.getLijstTakkenFromAPI() ;
     
      for (let tak of this.state.takken) {


      /*   console.log(tak.idtak);
       this.getLijstKinderenFromAPI(tak.idtak);
      
       this.addToList(this.state.kinderen,0);
       this.onAddTak(tak.idtak,tak.naam,tak.omschrijving,this.state.kinderenids); */



      }  
      

      // this.onAddTak(tak.idtak,tak.naam,tak.omschrijving,this.state.kinderenids);
   // }
        } 
        
        //this.onAddTak(this.state.takken[0].idtak,this.state.takken[0].naam,this.state.takken[0].omschrijving,this.state.kinderenids);
            console.log(this.state.takken);
      return(<View>
          <Text>succes</Text>
          <TouchableHighlight onPress={() => this.onAddTakken2()}>
              <Text>Add expenseobject</Text>
            </TouchableHighlight>
          
          <Text>{ console.log(this.state.takken)}</Text>
          <Text>{ console.log(this.state)}</Text>
          </View> );
    }
}
    const mapStateToProps = (state) => {
        return { 
            takken: state.tak.takken
        };
    };
    
    const mapDispatchToProps = (dispatch) => {
        return {
            onAddTak: (idtak,naam,omschrijving,kinderen) => { dispatch(addTak(idtak,naam,omschrijving,kinderen)); },
            onAddTakken: (takken) => { dispatch(addTakken(takken)); }

        };
      };
    
    export default connect(mapStateToProps, mapDispatchToProps)(NewTak);