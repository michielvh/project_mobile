
import React, { Component } from 'react';

import { Text, TouchableHighlight, View, StyleSheet, NetInfo, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { addUser } from '../redux/actions/user';

class UserFillData extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            /////////////////////////////////////////////
            //  LOGIN MEEGEVEN IN PROPS!!!!!!!!!!!!!!!!
            ////////////////////////////////////////////
            naam: "string",
            voornaam: "string",
            tel: "string",
role:"",
password:"",
salt:"",
            kinderen: [],
                        groepen: [], //KAN (NOG) NIET GECALT WORDEN groepen miss uit takken halen
                         voogden: [],
                         takken: [],
                         kinderenids: [],
                        groepenids: [], //KAN (NOG) NIET GECALT WORDEN groepen miss uit takken halen
                         voogdenids: [],
                         takkenids: []
        }
    }

    //KAN (NOG) NIET GECALT WORDEN groepen miss uit takken halen
    getLogin(){
        NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                fetch('https://medicamp-so.appspot.com/api/user/'+this.props.login, {method: 'GET' })
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState({  naam: responseData.naam,
                        voornaam: responseData.voornaam,
                        tel: responseData.tel,
                        password: responseData.password,
                        salt: responseData.salt,
                        role: responseData.role
                         });
                })
                .done();  
            }
        });
    }
    
    getLijstGroepenFromAPI(/*URL KIND/VOOGD/TAK*/) {
        NetInfo.isConnected.fetch().then(isConnected => {
                if (isConnected) {
                    fetch('https://medicamp-so.appspot.com/api/user/'+this.props.login+'groep', {method: 'GET' })
                    .then((response) => response.json())
                    .then((responseData) => {
                        this.setState({  groepen: responseData.groepen
                             });
                    })
                    .done();  
                }
            });
            addToList(this.state.groepen,1);

            
        }
    getLijstVoogdenFromAPI(/*URL KIND/VOOGD/TAK*/) {
        NetInfo.isConnected.fetch().then(isConnected => {
                if (isConnected) {
                    fetch('https://medicamp-so.appspot.com/api/user/'+this.props.login+'voogd', {method: 'GET' })
                    .then((response) => response.json())
                    .then((responseData) => {
                        this.setState({  voogden: responseData.voogden
                             });
                    })
                    .done();  
                }
            });
            addToList(this.state.voogden,2);
            
        }
    getLijstTakkenFromAPI(/*URL KIND/VOOGD/TAK*/) {
        NetInfo.isConnected.fetch().then(isConnected => {
                if (isConnected) {
                    fetch('https://medicamp-so.appspot.com/api/user/'+this.props.login+'tak', {method: 'GET' })
                    .then((response) => response.json())
                    .then((responseData) => {
                        this.setState({ takken: responseData.takken
                             });
                    })
                    .done();  
                }
            });
            addToList(this.state.takken,3);
            
        }
 getLijstKinderenFromAPI(/*URL KIND/VOOGD/TAK*/) {
    NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                fetch('https://medicamp-so.appspot.com/api/user/'+this.props.login+'kind', {method: 'GET' })
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState({ kinderen: responseData.kinderen
                         });
                })
                .done();  
            }
        });
        addToList(this.state.kinderen,0);
        
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
               
            default:
               
        }
        
    }
    render() {        
        console.log(this.props);
        //console.log(this.props.selectCurrency(this.props.base));
      onAddUser(this.state.login,this.state.role,this.state.password,this.state.naam,this.state.voornaam,this.state.tel,this.state.groepenids,this.state.voogdenids,this.state.kinderenids,this.state.takkenids);
    }
}
    const mapStateToProps = (state) => {
        return { 
        };
    };
    
    const mapDispatchToProps = (dispatch) => {
        return {
           onAddUser: (login,role,password,naam,voornaam,tel,groepen,voogden,kinderen,takken) => { dispatch(addUser(login,role,password,naam,voornaam,tel,groepen,voogden,kinderen,takken)); }
        };
      };
    
    export default connect(mapStateToProps, mapDispatchToProps)(UserFillData);