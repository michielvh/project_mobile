
import React, { Component } from 'react';

import { Text, TouchableHighlight, View, StyleSheet, NetInfo, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { addKind } from '../redux/actions/kind';
import { addTakken } from '../redux/actions/tak';
//import { getLijstTakkenFromAPI } from '../methodes/tak';

class NewKind extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            /////////////////////////////////////////////
            //  LOGIN MEEGEVEN IN PROPS!!!!!!!!!!!!!!!!
            ////////////////////////////////////////////
          // data:[],
                         //takken: [],
                      check2: 'test2',
                        // takkenids: [],
                         kinderen:[],
                         kinderenids: []
        }
       // this.getLijstTakkenFromAPI = this.getLijstTakkenFromAPI.bind(this);
        //this.addToList = this.addToList.bind(this);
        //this.getLijstTakkenFromAPI();
    }

  
  
 
        getLijstKinderenFromAPI() {
       
                    fetch('https://medicamp-so.appspot.com/api/tak/'+this.props.idtak+'/kind/', {method: 'GET' })
                    .then((response) => response.json())
                    .then((responseData) => {
                        this.setState({ kinderen: responseData,
                            check2: 'te'
                           
                             });
                    })
                    .done();  
                }
       
        
               
   
  onAddKinderen() {
   
    for (var userObject of this.state.kinderen) {
        console.log(userObject.idkind);
    }
  
   /*    this.props.onAddKind(kind.idkind,kind.naam,kind.voornaam,
        kind.geboortedatum,
        kind.zwemmen,
        kind.sport,
        kind.dafi,
        kind.opmerking,1,1,1,1,1,1
      ); */
        
        // this.addToList(this.state.kinderen,0);

    
  }

    render() {        
        console.log(this.props.idtak);
         if (this.state.check2=='test2'){
            this.getLijstKinderenFromAPI();           
        }; 
            
      
            // this.onAddTak(tak.idtak,tak.naam,tak.omschrijving,this.state.kinderenids);
         // }
            
              
              //this.onAddTak(this.state.takken[0].idtak,this.state.takken[0].naam,this.state.takken[0].omschrijving,this.state.kinderenids);
      
            console.log(this.state.kinderen);
      return(<View>
          <Text>succes</Text>
          <TouchableHighlight onPress={() => this.onAddKinderen()}>
              <Text>Add kindobject</Text>
            </TouchableHighlight>
           
          
          </View> );
    }
}
    const mapStateToProps = (state) => {
        return { 
           // takken: state.tak.takken
        };
    };
    
    const mapDispatchToProps = (dispatch) => {
        return {
            onAddKind: (idkind,naam,voornaam,geboortedatum,zwemmen,sport,dafi,opmerking,meldingen,takken,medicaties,dieeten,ziektes,voogden) => { dispatch(addKind(idkind,naam,voornaam,geboortedatum,zwemmen,sport,dafi,opmerking,meldingen,takken,medicaties,dieeten,ziektes,voogden)); }
//onAddTakken: (takken) => { dispatch(addTakken(takken)); }

        };
      };
    
    export default connect(mapStateToProps, mapDispatchToProps)(NewKind);