
import React, { Component } from 'react';

import { Text, TouchableHighlight, View, StyleSheet, NetInfo, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { addUser } from '../redux/actions/user';
import { addKind } from '../redux/actions/kind';

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
    getLijstTakkenFromAPI(/*URL KIND/VOOGD/TAK*/) {
        NetInfo.isConnected.fetch().then(isConnected => {
                if (isConnected) {
                    fetch('https://medicamp-so.appspot.com/api/user/'+this.props.login+'/tak', {method: 'GET' })
                    .then((response) => response.json())
                    .then((responseData) => {
                        this.setState({ takken: responseData.takken
                             });
                    })
                    .done();  
                }
            });
            this.addToList(this.state.takken,3);
            this.props.onAddUser(this.props.login,this.state.role,this.state.password,this.state.naam,this.state.voornaam,this.state.tel,this.state.groepenids,this.state.voogdenids,this.state.kinderenids,this.state.takkenids);
            console.log(this.state.takkenids[0]);
        }

       
         /*
    getLijstGroepenFromAPI() {
       // console.log(this.state.takken[0].idgroep);
        NetInfo.isConnected.fetch().then(isConnected => {
                if (isConnected) {
                    fetch('https://medicamp-so.appspot.com/api/groep/'+this.state.takkenids[0].idgroep, {method: 'GET' })
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

    getLijstVoogdenFromAPI() {
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
   
 getLijstKinderenFromAPI() {
    NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {

                // TAK/IDTAK/KIND
                fetch('https://medicamp-so.appspot.com/api/tak/'+this.props.login+'/kind', {method: 'GET' })
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState({ kinderen: responseData.kinderen
                         });
                })
                .done();  
            }
        });
        addToList(this.state.kinderen,0);
        var kindid;
        var naam;
        var voornaam;
        var gebdatum;
        var zwemmen;
        var sport;
        var dafi;
        var opmerking;
        var meldingen;
        const arrayOfEntries = Object.entries(this.state.kinderen);
        arrayOfEntries.map((item) =>
        (
            //LIJSTEN IN onKIND NOG TOEVOEGEN
             kindid=item[1],
             naam=item[3],
             voornaam=item[5],
             gebdatum=item[7],
             zwemmen=item[9],
             sport=item[11],
            dafi=item[13],
             opmerking=item[15],
             meldingen=item[17],
             onAddKind(kindid,naam,voornaam,gebdatum,zwemmen,sport,dafi,opmerking,meldingen),
            //item[1] == idkind
          this.state.kinderenids.push(item[1]) //CHECKEN OF ROND ITEM GEEN '{}' MOETEN
        ));
    }
*/
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
        this.getLogin();
        this.getLijstTakkenFromAPI() ;
      return(<View>
          <Text>succes</Text>
          <Text>{this.state.takkenids[0]}</Text>

          </View> );
    }
}
    const mapStateToProps = (state) => {
        return { 
        };
    };
    
    const mapDispatchToProps = (dispatch) => {
        return {
           onAddUser: (login,role,password,naam,voornaam,tel,groepen,voogden,kinderen,takken) => { dispatch(addUser(login,role,password,naam,voornaam,tel,groepen,voogden,kinderen,takken));},
           onAddKind: (kindid,naam,voornaam,gebdatum,zwemmen,sport,dafi,opmerking,meldingen) => { dispatch(addKind(kindid,naam,voornaam,gebdatum,zwemmen,sport,dafi,opmerking,meldingen)); }

        };
      };
    
    export default connect(mapStateToProps, mapDispatchToProps)(UserFillData);