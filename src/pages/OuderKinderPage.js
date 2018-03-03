import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, Button } from 'react-native';

class OuderKinderPage extends Component {
   
   
      kinderen(){
     
        return Object.keys(this.props.kinderen).map(key => this.props.kinderen[key]);
      }

    render() {
 
    console.log(this.props.kinderen);

    return(
        <ScrollView>
        { this.kinderen().map((kind) => {
             console.log(kind);
          return (
            <TouchableHighlight 
              onPress={() => this.props.navigation.navigate('OuderNavigator', { kind })}
             // onPress={() => this.props.navigation.navigate('OuderPage', { kind })}

            >
              <Text  key={kind.idkind}> {kind.naam}</Text>
            </TouchableHighlight>
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
 
export default connect(mapStateToProps)(OuderKinderPage);
