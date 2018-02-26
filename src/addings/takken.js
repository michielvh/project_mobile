
import React, { Component } from 'react';

import { Text, TouchableHighlight, View, StyleSheet, NetInfo, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { addTak } from '../redux/actions/tak';

class TakkenFillData extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            /////////////////////////////////////////////
            //  LOGIN MEEGEVEN IN PROPS!!!!!!!!!!!!!!!!
            ////////////////////////////////////////////
           
                         takken: [],
                      
                         takkenids: []
        }
        this.getLijstTakkenFromAPI = this.getLijstTakkenFromAPI.bind(this);
        this.addToList = this.addToList.bind(this);
    }

  
  
    getLijstTakkenFromAPI(/*URL KIND/VOOGD/TAK*/) {
        NetInfo.isConnected.fetch().then(isConnected => {
                if (isConnected) {
                    fetch('https://medicamp-so.appspot.com/api/user/'+this.props.login+'/tak', {method: 'GET' })
                    .then((response) => response.json())
                    .then((responseData) => {
                        this.setState({ takken: responseData.takken
                             });
                    })
                   // .done();  
                }
            });
            console.log(this.state.takken);
         //   this.addToList(this.state.takken,3);
            console.log(this.state.takkenids[0]);
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
    render() {        
        console.log(this.props);
        //console.log(this.props.selectCurrency(this.props.base));
        this.getLijstTakkenFromAPI() ;
      return(<View>
          <Text>succes</Text>
         {/*  <Text>{this.state.takkenids[0]}</Text> */}

          </View> );
    }
}
    const mapStateToProps = (state) => {
        return { 
        };
    };
    
    const mapDispatchToProps = (dispatch) => {
        return {
         
        };
      };
    
    export default connect(mapStateToProps, mapDispatchToProps)(TakkenFillData);