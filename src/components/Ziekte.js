import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, Button } from 'react-native';
class Ziekte extends Component {
    
 
    constructor(props) {
        super(props);
        this.state = {visible: false};
    }
 
    changeVisible(){
        this.setState(
        previousState => {
            return { visible: !previousState.visible };
          })
    }
  
      render() {
      //  let naam = this.state.visible ? this.props.ziekte.naam : ' ';
        let symptomen = this.state.visible ? this.props.ziekte.symptomen : ' ';
        let behandeling = this.state.visible ? this.props.ziekte.behandeling : ' ';
        

        return (
              <ScrollView>
               
               <TouchableHighlight 
                 onPress={() => this.changeVisible()} 
              //HIER ALERT ONPRESS MET INFO VOOGD
              >
                <Text > {this.props.ziekte.naam}</Text>
               
              </TouchableHighlight>
           
                <Text> {symptomen}</Text>
              
                <Text> {behandeling}</Text>
           
        
            </ScrollView>
         );
        }
}

const mapStateToProps = (state) => {
    return {
     
    };
};
 
export default connect(mapStateToProps)(Ziekte);