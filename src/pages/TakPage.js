import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, Button } from 'react-native';
import KindNavigator from '../navigation/KindNavigator';

class TakPage extends Component {
    
 

    render() {
        console.log(this.props.navigation.state);
        const { params } = this.props.navigation.state;
        const kind = params ? params.kind : null;
        const x=this.props.kind;
      console.log(x);
      //HIER NOG TAKINFO UIT KIND HALEN : GROEPINFO, LIJST VAN LEIDING, TAKINFO (INVERSCHILLENDE TABS)
          return (
              <ScrollView></ScrollView>
            //  <KindNavigator kindd={kind}/>
         );
        }
}

const mapStateToProps = (state) => {
    return {
     
    };
};
 
export default connect(mapStateToProps)(TakPage);
